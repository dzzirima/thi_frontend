"use client";

import { Button } from "@mui/material";
import Link from "next/link";

import CustomerTable from "@/app/ui/customers/CustomerTable";

export default function Customers() {
  return (
    <div className="flex flex-col   h-full p-2 rounded-md ">
      <div className="flex  flex-row justify-between w-full mb-3">
        Customers
        <div>
          <Link href="/dashboard/customers/new">
            <Button variant="contained" size="small">
              Create
            </Button>
          </Link>
        </div>
      </div>

      <div className="">
        <CustomerTable />
      </div>
    </div>
  );
}
