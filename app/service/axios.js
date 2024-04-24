import axios from "axios";
// import { getSession } from "next-auth/react";
// import  {auth} from "@/app/auth"


const axiosInstance = axios.create({

  baseURL: `${process.env.API_URL}`, 
});

axiosInstance.interceptors.request.use(async (request) => {

  

//   const session = await auth();
//   //  return console.log(session.user.access_token)

//   // Add your desired session value to the request headers
//   if (session) {
//     request.headers = {
//       ...request.headers,
//       Authorization: `Bearer ${session.user.access_token}`,
//     };
//   }

  return request;
});

export const BackendInstance = axiosInstance;
