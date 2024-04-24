"use client"

import { DatePicker, DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";

export default function MyDatePicker({name , label}:{
    name: string , 
    label:string,
}) {
  return (
    <div className="w-full mt-2">
 <input name={name}  id={name} hidden></input>

<div className="w-full mt-2 mb-2">
  <DatePicker
    onChange={(date) => {

      console.log(date)
      //@ts-ignore
      document.getElementById(name)?.setAttribute("value" ,date?.toISOString())
    }}
    block
    format="MM/dd/yyyy hh:mm aa"
    placeholder={label}
    name={name}
    id={name}
  />
</div>
    </div>
  );
}