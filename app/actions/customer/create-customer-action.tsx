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

  customerName: z.string().min(1 ,"Customer Name is required"),
  email: z.string().min(1 ,"Email is required "),
  phoneNumber: z.string().min(1 ,"Phone Number is required "),
  address: z.string().min(1 ,"Address is required "),
 
});

// const CreateAssignOfficer = FormSchema.omit({ id :true});

export type State = {
  errors?: {
    customerName?: String[];
    email?: String[];
    phoneNumber?: String[];
    address?: String[];  
  };
  message?: string | null;
};

export async function addCustomerAction(prevState: State, formData: FormData) {
  
  const rawDataFromEntries = Object.fromEntries(formData.entries());

  // await delay( 1000)

  const validateFields = FormSchema.safeParse(rawDataFromEntries);

console.log(validateFields)

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Error will creating a customer  ",
    };
  }

  // check if the password are the same



  

 
  try {

    let data = validateFields.data;

    let crmOfficerObject = {
    
      "phoneNumber":data.phoneNumber
    }


    const createCrmOfficer  = await BackendInstance.post(
      "/auth/register",
      crmOfficerObject
    );
    let createCrmOfficerRes= createCrmOfficer.data.data


   
  
    
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.log(error)
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

    // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}


// creation of a system user 


