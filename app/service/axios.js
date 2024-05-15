import axios from "axios";

import  {auth} from "@/app/auth"

const axiosInstance = axios.create({

  baseURL: `${process.env.API_URL}`, 
});
axiosInstance.interceptors.request.use(async (request) => {


  // const session = await auth();

  const session = await  auth()

  // console.log(session)

  // console.log("Testing token")

  if (session) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${session.user.token}`,
    };
  }

  return request;
});

export const BackendInstance = axiosInstance;
