import SearchOrder from "@/app/ui/orders/search-order";
import { orderColumns } from "@/app/ui/utils/columns/order-columns";
import TableComponent from "@/app/ui/utils/table-component";
import { Button } from "@mui/material";
export default function Orders() {
  return (
    <div className="flex flex-col  ">
      <div className="flex  flex-row justify-between w-full">
        Orders
        <div>
          <Button variant="contained" size="small">
            Create
          </Button>
        </div>
      </div>
      <div className="  flex flex-grow flex-row  justify-between mt-3  ">
        <SearchOrder/>
        <div className=" flex  space-x-2">
        <div >export</div>
        <div >export</div>
        <div >export</div>
        </div>
      </div>

      <div className="table"> 

      <TableComponent data={[]} tableColumns={orderColumns} tableHieght={null} handleOnRowClick={null}/>
      
      </div>
    </div>
  );
}
