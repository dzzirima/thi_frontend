"use client";

import { Button, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { Dropdown } from "rsuite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import UpdateOrderStatusForm from "@/app/ui/orders/update-order-status-form";
import { Timeline } from "rsuite";
import AddTimeSeriesForm from "@/app/ui/orders/update-order-time-sereis-form";
// export default function UpdateOrderStatusForm() {

export default function EditOrder({ params }: { params: { id: string } }) {
  let clientId = params.id;

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

            <Typography> #402</Typography>
            <Typography variant="h5"> Client Name</Typography>
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
        Order created: 12 April 2024{" "}
      </Typography>

      <div className="flex flex-row mt-3 ">
        <div className=" flex flex-col  w-2/4 ">
          <UpdateOrderStatusForm />
          
        </div>
        <div className=" flex  flex-col  w-2/4">
          <div className="flex items-center justify-center m-3">
            <Typography> TimeLines</Typography>
          </div>

          <div>
            <Timeline align="left">
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
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
}
