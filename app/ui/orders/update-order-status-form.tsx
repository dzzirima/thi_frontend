"use client";

import {
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useFormState } from "react-dom";
import { createOrder, State } from "@/app/actions/order/order-action";
import HomeIcon from "@mui/icons-material/Home";

import SubmitButton from "@/app/ui/utils/components/submit-button";
import AddClient from "./client-entry";
import MyDatePicker from "@/app/ui/utils/my-date-picker";
import Link from "next/link";
import AddTimeSeriesForm from "./update-order-time-sereis-form";

export default function UpdateOrderStatusForm() {
  const initialState: State = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createOrder, initialState);
  return (
    <form action={dispatch} className="w-full">
      <div className="flex flex-col  w-full">
        <Card
          className="p-4 w-full flex  flex-col "
          elevation={1}
          variant="outlined"
        >
          <div className="flex space-x-2">
            <div className="text-left w-full">
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium "
              >
                status
              </label>
              <select
                id="status"
                name="status"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                defaultValue={""}
              >
                <option value="PENDING">Pending</option>
                <option value="CORNFIRMED">Cornfirmed</option>
                <option value="PICKED">Picked</option>
                <option value="IN TRANSIT">IN TRANSIT</option>
                <option value="DELIVERED">Delivered</option>
                <option value="CANCELLED">Cancelled </option>
              </select>
            </div>

            <div className="text-left w-full">
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium "
              >
                Payment Status
              </label>
              <select
                id="status"
                name="status"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                defaultValue={""}
              >
                <option value="UNPAID">Unpaid</option>
                <option value="CONFIRMING_PAYMENT">Confirm Payment</option>
                <option value="PARTIALLY_PAID">Partially Paid</option>
                <option value="PAID">Paid </option>
                <option value="REFUNDED">Refunded </option>
              </select>
            </div>
          </div>
          <Divider className="m-3" />
          <label htmlFor="status" className="block mb-2 text-sm font-medium ">
            Description
          </label>
          <TextField
            name="deliveryDescriptive"
            className="mt-2"
            size="small"
            fullWidth
            placeholder=" 2 Boxes of 2 x 6 wood blocks "
            id="fullWidth"
          />
          <Divider className="m-3" />
          <label htmlFor="status" className="block mb-2 text-sm font-medium ">
            Delivery Updates
          </label>
          <TextField
            name="deliveryUpDates"
            className="mt-4"
            size="small"
            multiline
            minRows={2}
            fullWidth
            placeholder=" Notify your customers about their delivery "
            id="fullWidth"
          />
          <SubmitButton label="save" />
        </Card>
      </div>
    </form>
  );
}
