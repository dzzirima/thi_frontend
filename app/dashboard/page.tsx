"use client"
import { Button, IconButton, Paper, Typography } from "@mui/material";
import MyDatePicker from "@/app/ui/utils/my-date-range-picker";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SummaryCard from "@/app/ui/dashboard/summary-card";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ReorderIcon from "@mui/icons-material/Reorder";
import Divider from "@mui/material/Divider";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import AddIcon from "@mui/icons-material/Add";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import StarsIcon from "@mui/icons-material/Stars";
import Card from "@mui/material/Card";
import Link from "next/link";
import MyMap from "./map/page";

 function DashBoard() {
  return (
    <div className="flex flex-col">
      <div className="font-black">
        {" "}
        <Typography variant="h6"> BlackRock Investiments</Typography>
      </div>
      <div className="flex flex-row">
        <div className=" flex mt-4 left w-3/4  ">
          <div className="flex flex-col">
            <div className="flex  space-x-2">
              <div className="w-2/3">
                <MyDatePicker name="david" />
              </div>
              <div className="">
                <Button endIcon={<ArrowForwardIosIcon />}>
                  Go to Analytics
                </Button>
              </div>
            </div>
            <div className=" flex mt-2 space-x-1">
              <SummaryCard
                icon={<RemoveRedEyeIcon />}
                success={true}
                title=" Views"
                value={100}
              />

              <SummaryCard
                icon={<ReorderIcon color="success" />}
                success={true}
                title=" Deliveries "
                value={200}
              />
              <SummaryCard
                icon={<CurrencyBitcoinIcon color="success" />}
                success={true}
                title=" Sales"
                value={200}
              />
            </div>
            <Divider className="mt-10" />
            <div className="flex w-full   ">
              <div className="flex flex-row w-full justify-between p-10">
                <div className="title flex"> deliveries </div>
                <div className="addicon flex">
                  <Link href="/dashboard/orders/new">
                    <IconButton>
                      <AddIcon color="info" />
                    </IconButton>
                  </Link>
                </div>
              </div>
            </div>

            <Typography> Last 30 days</Typography>

            <div className="flex border rounded-lg space-x-2 p-4 ">
              <div className="icon">
                <StoreIcon />
              </div>
              <div className="content">1 pending orders</div>
            </div>

            <div className="flex border rounded-lg space-x-2 p-4 mt-2">
              <div className="icon">
                <PaymentIcon />
              </div>
              <div className="content">2 Unpaid payments</div>
            </div>

            <div className="mt-2">

            <MyMap/>
            </div>
             
            
          </div>
        </div>
        <div className=" flex w-1/4 flex-col">
          <div className="">
            <Button endIcon={<ArrowForwardIosIcon color="info" />}>
              Your Plan
            </Button>

            {/* <Card className="p-2" variant="outlined"> */}
            <div className="flex  w-full flex-row justify-between align-baseline mt-4">
              <div className="flex flex-row w-full space-x-1 pt-2">
                <div className="">
                  <FlashOnIcon />
                </div>
                <div className="">
                  <Typography> Basic</Typography>
                </div>
              </div>
              <div className="">
                <Button variant="contained"> Upgrade</Button>
              </div>
            </div>

            <div className="flex row justify-between mt-10">
              <div className="flex">
                <div className=" mr-1">
                  <StarsIcon />
                </div>
                <div className=""> Deliveries</div>
              </div>
              <div className=""> Unlimited</div>
            </div>
            <div className="flex row justify-between mt-5">
              <div className="flex">
                <div className="mr-1">
                  <StarsIcon />
                </div>
                <div className=""> Images</div>
              </div>
              <div className=""> Unlimited</div>
            </div>
            <div className="flex row justify-between mt-5">
              <div className="flex">
                <div className="mr-1">
                  <StarsIcon />
                </div>
                <div className=""> Members</div>
              </div>
              <div className=""> 1/4</div>
            </div>
            {/* </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard
