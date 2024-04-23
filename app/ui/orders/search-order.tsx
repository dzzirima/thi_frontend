import { Box, TextField } from "@mui/material";

export default function SearchOrder() {
  return (
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField  size="small"fullWidth placeholder = "search by customer,product, order number or phone " id="fullWidth" />
      </Box>
    </div>
  );
}
