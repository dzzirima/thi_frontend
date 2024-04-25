"use client";
import { customerColumns } from "@/app/ui/utils/columns/customer-columns";
import MyTableTemplate from "@/app/ui/utils/components/my-table-template";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

let customerData = [
  {
    customerNumber: 1,
    clientName: "David",
    email: "test@gmail.com",
    phoneNumber: "+263 789 379 677",
  },
];
export default function Customers() {
  const router = useRouter();
  const handleRowClick = (customerId: number) => {
    console.log("Navigation to something " + customerId)
    router.push(`/dashboard/customers/34/profile`);
  };

  return (
    <div className="flex flex-col   h-full p-2 rounded-md ">
      <div className="flex  flex-row justify-between w-full mb-3">
        Orders
        <div>
          <Button variant="contained" size="small">
            Create
          </Button>
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
