import axios from "axios";
import { getSession } from "next-auth/react";
import  {auth} from "@/app/auth"


const axiosInstance = axios.create({

  baseURL: `${process.env.API_URL}`, 
});

axiosInstance.interceptors.request.use(async (request) => {

  

  const session = await auth();

  // console.log("Testing token")
  //  return console.log(session.user.token)

  // Add your desired session value to the request headers
  if (session) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${session.user.token}`,
    };
  }

  return request;
});

export const BackendInstance = axiosInstance;
