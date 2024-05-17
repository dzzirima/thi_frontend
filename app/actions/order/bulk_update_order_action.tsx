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
  deliveryCost: z.string().min(1, "delivery address cant be empty !!"),
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
    deliveryCost?: String[];
   
  };
  message?: string | null;
};

export async function bulkUpdateOrder(prevState: State, formData: FormData) {
 
  const rawDataFromEntries = Object.fromEntries(formData.entries());
  
  try {

    //return console.log(rawDataFromEntries)
    
  let createDeliveryRes = await BackendInstance.patch("/client-order/bulkUpdate" , rawDataFromEntries)

  if(createDeliveryRes.status != 201){
    return {
       errors:{},
      message: 'API Error',
    };
  }
  } catch (error) {
   console.log(error)
    return {
      errors:{},
      message: 'Database Error: Failed to  Save Delivery.',
    };
  }
    // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath(`/dashboard/orders/`);
  redirect(`/dashboard/orders/`);
  
}