"use client";

import {
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormState } from "react-dom";
import { createOrder, State } from "@/app/actions/order/order-action";
import HomeIcon from "@mui/icons-material/Home";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

import SubmitButton from "@/app/ui/utils/components/submit-button";
import AddClient from "./client-entry";
import MyDatePicker from "@/app/ui/utils/my-date-picker";
import Link from "next/link";
import { SearchOutlined } from "@mui/icons-material";

export default function AddTimeSeriesForm() {
  const initialState: State = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createOrder, initialState);
  return (
    <form action={dispatch} className="w-full">
      <div className="flex flex-col  w-full">
      <div className=" flex justify-center items-center mt-20">
      <Paper
        variant="outlined"
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 450,
          border: "solid 1px blue",
        }}
      >
        {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Descriptive Delivery  Updates "
          inputProps={{ "aria-label": "Descriptive Delivery  Updates" }}
        />
        {/* <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton> */}
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          {/* <DirectionsIcon /> */}
          {/* <SearchIcon /> */}
          <Button variant="contained" endIcon={<ContentPasteIcon />}>
            Save
          </Button>
        </IconButton>
      </Paper>
    </div>
      </div>
    </form>
  );
}
