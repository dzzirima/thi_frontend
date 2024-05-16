"use server"

import { BackendInstance } from "@/app/service/axios";

export   async function fetchAllDeliveries() {
    try {
      const getAllDeliveriesRes = await BackendInstance.get('/client-order')

  
      let deliveries = getAllDeliveriesRes.data.data;
      return deliveries
      
    } catch (error) {
      console.error('API  Error:', error);
      return []
    }
  }