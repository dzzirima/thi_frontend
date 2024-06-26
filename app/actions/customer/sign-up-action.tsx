"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { BackendInstance } from "@/app/service/axios";

// zod schema defination
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const FormSchema = z.object({
  name: z.string().min(1, "Customer Name is required"),
  email: z.string().min(1, "Email is required "),
 
  phoneNumber: z.string().min(1, "Phone Number is required "),
  password: z.string().min(1, "Password is required "),
  address: z.string().min(1, "Address is required "),
});

// const CreateAssignOfficer = FormSchema.omit({ id :true});

export type State = {
  errors?: {
    name?: String[];

    email?: String[];
    phoneNumber?: String[];
    password?: String[];
    address?: String[];
  };
  message?: string | null;
};

export async function signUpAction(prevState: State, formData: FormData) {
  const rawDataFromEntries = Object.fromEntries(formData.entries());

  // await delay( 1000)

  const validateFields = FormSchema.safeParse(rawDataFromEntries);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Error will creating a customer  ",
    };
  }

  try {
    let data = validateFields.data;


   console.log(data)

    const createCustomer = await BackendInstance.post("/user/signup", {
      ...data,
      role:"AGENT"

    });
    let createCrmOfficerRes = createCustomer.data.data;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.log(error);
    return {
      message: "API Error: Failed to Save Customer .",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  redirect("/login");
}

// creation of a system user
