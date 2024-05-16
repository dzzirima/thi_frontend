"use client"

import { fetchAllDeliveries } from "@/app/actions/order/fetch_all_deliveries";
import { orderColumns } from "../utils/columns/order-columns";
import TableComponent from "../utils/table-component";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import MyTableTemplate from "../utils/components/my-table-template";



// let orderData = [
//   {
//     orderNumber: 23,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 24,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 25,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 23,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 24,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 25,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 23,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 24,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 25,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 23,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 24,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 25,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 23,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 24,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 25,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 23,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 24,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 25,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 25,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 23,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 24,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 25,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 23,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 24,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
//   {
//     orderNumber: 25,
//     clientName: "Kennedy",
//     amount: 300,
//     date: "12 June 2024",
//     globalStatus: "pending",
//     paymentStatus: "Paid",
//   },
// ];
export default function DeliveriesTable(){

        const router = useRouter();
        
        const handleRowClick = (orderId:number) => {
            router.push(`/dashboard/orders/${orderId}/edit`);
          };



        let fetAllDeliveriesAction = async () => {
          return await fetchAllDeliveries();
        };
        const { isLoading, error, data } = useSWR("deliveries", fetAllDeliveriesAction);
        if (error) return <div>failed to load {error}</div>;
        if (isLoading) return <div>loading...</div>;
        return (
          <TableComponent
            data={data}
            tableColumns={orderColumns}
            tableHieght={null}
            handleOnRowClick={handleRowClick}
          />
        
    );
}