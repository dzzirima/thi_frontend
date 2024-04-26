import { Typography } from "@mui/material";
import { Text } from "rsuite";

export default function CenterBlock() {
  return (
    <div className="flex  flex-col justify-center items-center mt-3">
      <Typography variant="h2" gutterBottom>
        Unlock the Power of Your
        
      </Typography>
      <Typography variant="h2" gutterBottom>
        Products
      </Typography>
      <div className="mt-5">
        <Text muted>
        Precision Visibility, Powerful Decisions &  Deliver More .
        </Text>
      </div>
    </div>
  );
}
