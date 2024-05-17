"use server"

import { BackendInstance } from "@/app/service/axios";

export   async function getDeliveryById(deliveryId: string) {
    try {
      const getDeliveryRes = await BackendInstance.get(`client-order/byId/${deliveryId}`)

  
      let delivery = getDeliveryRes.data.data;

      // console.log(delivery)
      return delivery
      
    } catch (error) {
      console.error('API  Error:', error);
      return []
    }
  }