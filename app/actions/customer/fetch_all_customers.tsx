"use server"

import { BackendInstance } from "@/app/service/axios";

export   async function fetchAllCustomers() {
    try {
      const getAllCustomersRes = await BackendInstance.get('/user')

  
      let customers = getAllCustomersRes.data.data;
      return customers
      
    } catch (error) {
      console.error('API  Error:', error);
      return []
    }
  }