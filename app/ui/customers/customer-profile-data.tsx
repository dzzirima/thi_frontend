"use client";
import React from "react";
import { Typography } from "@mui/material";
import DetailsComponent from "@/app/ui/utils/components/details-component";
import Divider from "@mui/material/Divider";


import { Button } from "@mui/material";

import Link from "next/link";
import TableComponent from "../utils/table-component";
import { orderColumns } from "../utils/columns/order-columns";
let orderData = [
  {
    orderNumber: 23,
    clientName: "Kennedy",
    amount: 300,
    date: "12 June 2024",
    globalStatus: "pending",
    paymentStatus: "Paid",
  },
  {
    orderNumber: 24,
    clientName: "Kennedy",
    amount: 300,
    date: "12 June 2024",
    globalStatus: "pending",
    paymentStatus: "Paid",
  },
  {
    orderNumber: 25,
    clientName: "Kennedy",
    amount: 300,
    date: "12 June 2024",
    globalStatus: "pending",
    paymentStatus: "Paid",
  },
  {
    orderNumber: 23,
    clientName: "Kennedy",
    amount: 300,
    date: "12 June 2024",
    globalStatus: "pending",
    paymentStatus: "Paid",
  },
  {
    orderNumber: 24,
    clientName: "Kennedy",
    amount: 300,
    date: "12 June 2024",
    globalStatus: "pending",
    paymentStatus: "Paid",
  },

];
const CustomerProfileData = () => {
  //fasf23ecc

  return (
    <div className="flex flex-col">
      <div className="flex  ">
        <div className="w-1/2 green-400 ">
          <div>
            <Typography variant="h5">Customer Profile </Typography>
          </div>
          <DetailsComponent
            label={"Client ID"}
            value={"8197a268-c533-4234.."}
          />
          <DetailsComponent label={"Name"} value={"David Zirima"} />
          <DetailsComponent label={"Status"} value={"Active"} />
        </div>

        <div className="flex flex-col w-2/3">
          <Typography variant="h5">Contact Information</Typography>

          <DetailsComponent label={"Balance"} value={"$ 18.50"} />

          <DetailsComponent label={"Phone Number"} value={"0785 395 827"} />
          <DetailsComponent label={"email"} value={"davidtzirima@gmail.com"} />
        </div>
        <div className="flex flex-col w-1/3">

        <Link href={`/dashboard/customers/1/edit`} className="flex items-end justify-end">
          <Button  variant="contained">Edit</Button>
        </Link>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <Divider textAlign="right">
        </Divider>
        <div className="mt-3">
        <TableComponent
          data={orderData}
          tableColumns={orderColumns}
          tableHieght={null}
          handleOnRowClick={null}
        />
        </div>
      </div>
    </div>
  );
};

export default CustomerProfileData;
