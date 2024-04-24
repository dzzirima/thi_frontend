import { DatePicker, DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";

export default function MyDateRangePicker({name}:{
    name: string
}) {
  return (
    <div className="w-full">
     < DateRangePicker block format="MM/dd/yyyy hh:mm aa"   placeholder="Select Date Range" name="availability" />
    </div>
  );
}