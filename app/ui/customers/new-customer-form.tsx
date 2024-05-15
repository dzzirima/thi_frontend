"use client";

import SubmitButton from "@/app/ui/utils/components/submit-button";
import {
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useFormState } from "react-dom";
import {
  addCustomerAction,
  State,
} from "@/app/actions/customer/create-customer-action";
export default function NewCustomerForm() {
  const initialState: State = { message: "", errors: {} };

  const [state, dispatch] = useFormState(addCustomerAction, initialState);

  return (
    <form action={dispatch}>
        <Card
          className="p-4 w-full flex  flex-col sm:mx-auto sm:w-full sm:max-w-md"
          elevation={1}
          variant="outlined"
        >
      <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-md">
        <Typography variant="h6"> Add Customer </Typography>

        {state?.message && (
          <p className="mt-2 text-sm text-red-500"> {state.message}</p>
        )}
      </div>

      <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-md">
        <TextField
          name="name"
          size="small"
          variant="outlined"
          label="First Name"
          className="mb-2"
        />
        {state.errors?.name &&
          state.errors.name.map((error: any) => (
            <p className="mt-2 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="email"
          size="small"
          variant="outlined"
          className="mt-2"
          label="email"
        />
        {state.errors?.email &&
          state.errors.email.map((error: any) => (
            <p className="mt-2 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="phoneNumber"
          size="small"
          variant="outlined"
          className="mt-2"
          label="phoneNumber"
        />
        {state.errors?.phoneNumber &&
          state.errors.phoneNumber.map((error) => (
            <p className="mt-2 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="address"
          multiline
          minRows={2}
          size="small"
          variant="outlined"
          className="mt-2"
          label="address"
        />
        {state.errors?.address &&
          state.errors.address.map((error) => (
            <p className="mt-2 text-sm text-red-500"> {error}</p>
          ))}

        <SubmitButton label={"Create"} />
      </div>
      </Card>
    </form>
  );
}
