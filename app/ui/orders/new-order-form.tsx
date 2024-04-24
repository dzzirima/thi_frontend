"use client";

import {
  Card,
  Checkbox,
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

export default function NewOrderForm() {
  const initialState: State = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createOrder, initialState);
  return (
    <form action={dispatch}>
      <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex flex-row  justify-between m-3">
          <div className="">
            <Typography variant="h6"> New Delivery</Typography>
          </div>
          <div className="">
            <IconButton>
              <HomeIcon />
            </IconButton>
          </div>
        </div>
        <Card className="p-4" elevation={1} variant="outlined">
          <AddClient />
        </Card>
        <Card className="p-4 mt-2" elevation={1} variant="outlined">
          <TextField
            name="description"
            multiline
            minRows={2}
            size="small"
            variant="outlined"
            className="mt-2 w-full"
            label="description"
          />
          {state.errors?.description &&
            state.errors.description.map((error: any) => (
              <p className="mt-1 text-sm text-red-500"> {error}</p>
            ))}
        </Card>

        <Card className="p-4 mt-2" elevation={1} variant="outlined">

          <Typography> Delivery Address</Typography>
          <TextField
            name="deliveryAddress"
            size="small"
            variant="outlined"
            className="mt-2 w-full"
            label="deliveryAddress"
          />
          {state.errors?.deliveryAddress &&
            state.errors.deliveryAddress.map((error: any) => (
              <p className="mt-1 text-sm text-red-500"> {error}</p>
            ))}
            <MyDatePicker  label = "Estimated delivery date" name= 'estimatedDeliveryDate'/>
        </Card>


        <SubmitButton label={"Create"} />
      </div>
    </form>
  );
}
