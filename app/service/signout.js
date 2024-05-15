"use server";


import {signIn , signOut } from "../auth";

export const signOutAction = async () =>{
  await signOut();
}


export const authenticate = async (formData) => {


  // const { username, password } = Object.fromEntries(formData);

  console.log(formData)

  try {
    await signIn("credentials", { userName :formData.userName, password:formData.password });
  } catch (err) {
    console.log(err.toString())
    return "Wrong Credentials!";
  }
};