import SearchOrder from "@/app/ui/orders/search-order";
import { orderColumns } from "@/app/ui/utils/columns/order-columns";
import TableComponent from "@/app/ui/utils/table-component";
import { Button } from "@mui/material";


let  orderData = [
  {
    orderNumber:23,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:24,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:25,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:23,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:24,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:25,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:23,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:24,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:25,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:23,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:24,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:25,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:23,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:24,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:25,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:23,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:24,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:25,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:25,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:23,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:24,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:25,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:23,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:24,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  },
  {
    orderNumber:25,
    clientName:"Kennedy",
    amount:300,
    date:"12 June 2024",
    globalStatus :"pending",
    paymentStatus:"Paid"

  }

]
export default function Orders() {
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
      {/* <div className="  flex flex-grow flex-row  justify-between mt-3  ">
        <SearchOrder/>
        <div className=" flex  space-x-2">
        <div >export</div>
        <div >export</div>
        <div >export</div>
        </div>
      </div> */}

      <div className=""> 

      <TableComponent  data={orderData} tableColumns={orderColumns} tableHieght={null} handleOnRowClick={null}/>
      
      </div>
    </div>
  );
}
