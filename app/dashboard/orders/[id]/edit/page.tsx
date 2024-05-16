"use client";

import { Button, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { Dropdown } from "rsuite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import UpdateOrderStatusForm from "@/app/ui/orders/update-order-status-form";
import { Timeline } from "rsuite";
import AddTimeSeriesForm from "@/app/ui/orders/update-order-time-sereis-form";
import useSWR from "swr";
import { getDeliveryById } from "@/app/actions/order/fetch_deliveries_by_Id";
// export default function UpdateOrderStatusForm() {

export default function EditOrder({ params }: { params: { id: string } }) {
  let deliveryId = params.id;

  // getting delivery byId

  let getDeliveryByIdAction = async () => {
    return await getDeliveryById(deliveryId);
  };
  const { isLoading, error, data } = useSWR(
    `delivery_${deliveryId}`,
    getDeliveryByIdAction
  );
  if (error) return <div>failed to load {error}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="flex flex-col  ">
      <div className="flex  flex-row  justify-between w-full">
        <div className="flex space-x-2 items-center justify-center">
          <div className="flex space-x-2 items-center justify-center">
            <Link href="/dashboard">
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
            </Link>

            <Typography> # {data.id}</Typography>
            <Typography variant="h5"> {data.customerName}</Typography>
          </div>
        </div>

        <div className="flex space-x-2 items-center justify-center">
          <Button variant="outlined" size="small">
            WhatsApp
          </Button>
          <Button variant="outlined" size="small">
            Edit
          </Button>
          <Dropdown title="More">
            <Dropdown.Item>Print</Dropdown.Item>
            <Dropdown.Item> Delete</Dropdown.Item>
            <Dropdown.Item>Export PDF</Dropdown.Item>
            <Dropdown.Item>Export HTML</Dropdown.Item>
            <Dropdown.Item>Duplicate</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <Typography className="ml-1" variant="caption">
        {" "}
        Order created: {data.orderPlacedDate}
      </Typography>

      <div className="flex flex-row mt-3 ">
        <div className=" flex flex-col  w-2/4 ">
          <UpdateOrderStatusForm order={data} />
        </div>
        <div className=" flex  flex-col  w-2/4">
          <div className="flex items-center justify-center m-3">
            <Typography> TimeLines</Typography>
          </div>

          <div>
            {/* <Timeline align="left">      
              <Timeline.Item time="24 Apr 2024 15:29">
                Your order starts processing
              </Timeline.Item>
              <Timeline.Item time="24 Apr 2024 15:29">
                Your order to be ready for delivery
              </Timeline.Item>
              <Timeline.Item time="Yesterday 16:28">
                Your Delivery has been out of the library
              </Timeline.Item>
              <Timeline.Item time="Today 02:34">
                Send to Shanghai Hongkou Company
              </Timeline.Item>
              <Timeline.Item time="Today 15:05">
                Sending you a piece
              </Timeline.Item>
            </Timeline> */}

            <Timeline align="left">
          
            <Timeline.Item time="  Latest Know Location " >
              Harare WhareHouse
              </Timeline.Item>
       
            {/* <Timeline.Item time="Time" hidden = {true}>
               TimeLine Action
              </Timeline.Item> */}

              <hr className="mt-2 mb-2 w-50"></hr>

              {data.deliveryTimeLines.length != 0 && (
                <div className="">
                  {data?.deliveryTimeLines.map((timeline: any) => (
                    <Timeline.Item time={timeline.createdAt} key={timeline}>
                      {
                        timeline.deliveryUpDates
                      }
                    </Timeline.Item>
                  ))}
                </div>
              )}

              {/* <Timeline.Item time="24 Apr 2024 15:29">
                Your order to be ready for delivery
              </Timeline.Item>
              <Timeline.Item time="Yesterday 16:28">
                Your Delivery has been out of the library
              </Timeline.Item>
              <Timeline.Item time="Today 02:34">
                Send to Shanghai Hongkou Company
              </Timeline.Item> */}
             
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
}
