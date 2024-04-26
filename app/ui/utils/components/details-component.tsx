

import { Typography } from "@mui/material";
const DetailsComponent = ({label , value}:{
    label:string,
    value:string
}) => {
  return (
    <div className="flex flex-row justify-center" >
      <div className="flex-1 ">
        <Typography variant="subtitle2" gutterBottom>
          {label}
        </Typography>
      </div>
      <div className="flex-1 items-start">
        <Typography variant="subtitle2" gutterBottom>
          {value}
        </Typography>
      </div>
    </div>
  );
};



export default DetailsComponent;