import DeliveriesTable from "@/app/ui/orders/deliveries_table";
import SearchOrder from "@/app/ui/orders/search-order";
import { orderColumns } from "@/app/ui/utils/columns/order-columns";
import TableComponent from "@/app/ui/utils/table-component";
import { Button } from "@mui/material";
import Link from "next/link";


export default function Orders() {
  return (
    <div className="flex flex-col   h-full p-2 rounded-md ">
      <div className="flex  flex-row justify-between w-full mb-3">
        Deliveries
        <div>
          <Link href="/dashboard/orders/new">
            <Button variant="contained" size="small">
              Create
            </Button>
          </Link>
        </div>
      </div>
    
      <div className="">

        <DeliveriesTable/>
        
      </div>
    </div>
  );
}
