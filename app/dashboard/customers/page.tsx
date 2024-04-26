"use client";
import { customerColumns } from "@/app/ui/utils/columns/customer-columns";
import MyTableTemplate from "@/app/ui/utils/components/my-table-template";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

let customerData = [
  {
    id: 1,
    clientName: "David",
    email: "test@gmail.com",
    phoneNumber: "+263 789 379 677",
    balance: 10.89,
  },
  {
    id: 2,
    clientName: "David",
    email: "test@gmail.com",
    phoneNumber: "+263 789 379 677",
    balance: 11.2,
  },
  {
    id: 3,
    clientName: "David",
    email: "test@gmail.com",
    phoneNumber: "+263 789 379 677",
    balance: 15.2,
  },
  {
    id: 4,
    clientName: "David",
    email: "test@gmail.com",
    phoneNumber: "+263 789 379 677",
    balance: 0,
  },
];
export default function Customers() {
  const router = useRouter();
  const handleRowClick = (customerId: number) => {
    router.push(`/dashboard/customers/${customerId}/profile`);
  };

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
        <MyTableTemplate
          data={customerData}
          tableColumns={customerColumns}
          tableHieght={null}
          handleOnRowClick={handleRowClick}
        />
      </div>
    </div>
  );
}
