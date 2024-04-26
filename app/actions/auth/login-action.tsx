"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import { signIn } from "@/app/auth";
// import { authenticate } from "@/app/service/signout";

// zod schema defination
function delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const FormSchema = z.object({
  id: z.string(),
  email: z.string().min(1 ,"email cant be empty !!"),
  password: z.string().min(1 ,"password  cant be empty !!"),
  
});

const ValidateLoginObject = FormSchema.omit({ id: true});

export type State = {
  errors?: {
    password?: String[];
    email?:String[];
 
  };
  message?: string | null;
};

export async function loginAction(prevState: State, formData: FormData) {


  const rawDataFromEntries = Object.fromEntries(formData.entries());


  const validateFields = ValidateLoginObject.safeParse(rawDataFromEntries);

  

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Misssing Fields . Failed to create Invoice",
    };
  }
  // prepare data to send to api
  const data = validateFields.data;

  

  try {
    // posting to api

    // let authenticateRes = await authenticate({
    //   "userName":data.email,
    //   "password":data.password
    // })
    
   
   

  } catch (error) {
    console.log(error)


    return {
      message: 'Failed to login Wrong Credentials! ',
    };
  }

    // Revalidate the cache for the invoices page and redirect the user.
   revalidatePath("/dashboard");
   redirect("/dashboard");
}