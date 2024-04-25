import { Button, Divider, IconButton, InputBase, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
export default function ParcelTracker() {
  return (
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
          placeholder="Enter Your Tracking Number"
          inputProps={{ "aria-label": "Enter Your Tracking" }}
        />
        {/* <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton> */}
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          {/* <DirectionsIcon /> */}
          {/* <SearchIcon /> */}
          <Button variant="contained" endIcon={<SearchIcon />}>
            {" "}
            TRACK{" "}
          </Button>
        </IconButton>
      </Paper>
    </div>
  );
}
