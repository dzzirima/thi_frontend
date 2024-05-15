"use client"
import { useRouter } from "next/navigation";

const router = useRouter();
export default function navigateToClientProfile (customerId: number){
    router.push(`/dashboard/customers/${customerId}/profile`);

}