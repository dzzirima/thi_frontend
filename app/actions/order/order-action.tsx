"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {BackendInstance} from "@/app/service/axios"

// zod schema defination
function delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const FormSchema = z.object({
  id: z.string(),
  clientName: z.string().min(1 ,"Name cant be empty !!"),
  phoneNumber: z.string().min(1 ,"email cant be empty !!"),
  description: z.string().min(1 ,"description cant be empty !!"),
  deliveryAddress: z.string().min(1, "delivery address cant be empty !!"),
  estimatedDeliveryDate: z.string().datetime(),

});

const CreateClient = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    clientName?: String[];
    phoneNumber?:String[];
    description?:String[];
    deliveryAddress?: String[];
    estimatedDeliveryDate?: String[];
   
  };
  message?: string | null;
};

export async function createOrder(prevState: State, formData: FormData) {
 
  const rawDataFromEntries = Object.fromEntries(formData.entries());

  const validateFields = CreateClient.safeParse(rawDataFromEntries);

  console.log(rawDataFromEntries)

  

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Misssing Fields . Failed to create client ",
    };
  }

  let formDataFields = validateFields.data;
  

  try {
    let clientObject = {

      "clientName": formDataFields.clientName,
    }


  let createClientRes = await BackendInstance.post("/client" , clientObject)


  if(createClientRes.status != 201){
    return {
       errors:{},
      message: 'API Error',
    };
  }
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      errors:{},
      message: 'Database Error: Failed to Delivery.',
    };
  }
    // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/dashboard");
  redirect("/dashboard/query");
  
}