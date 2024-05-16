import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import useSWR from "swr";
import {fetchAllCustomers} from "@/app/actions/customer/fetch_all_customers";


const filter = createFilterOptions<customerOptionType>();

export default function AddClient() {
  const [value, setValue] = React.useState<customerOptionType | null>(null);




  let  customerList:  customerOptionType[] = []
  const { isLoading, error, data } = useSWR("customers", fetchAllCustomers);

  if(data?.length !=undefined){

    

    customerList = data.map((customer:any) =>({
      name:customer.name,
      phoneNumber:customer.phoneNumber

    }))

  }





  if (error) return <div>failed to load {error}</div>;
  if (isLoading) return <div>loading...</div>;



  return (
    <div className="mb-2">
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            name: newValue,

            
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            name: newValue.inputValue,
          });
        } else {
          setValue(newValue);

          // set the value


        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(
          (option) => inputValue === option.name
        );
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            name: `Add "${inputValue}"`,
          });

          filtered.reverse()
        }

        return filtered
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={customerList}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(props, option) => (
        <li {...props}>
          <div>
          <p>{option.name}</p>
          <p>{option.phoneNumber}</p>
          </div>
          
        </li>
      )}
      sx={{ width: "100%" }}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          label="Add client"
          name="clientName"
          size="small"
        />
      )}
    />
    <div> 
      {value?.phoneNumber == null ? <TextField  name = "phoneNumber" variant="outlined" label ="phoneNumber" id="phoneNumber"   className="w-full mt-3" size="small"/>: <TextField   value={value.phoneNumber} className="w-full mt-2" size="small" name="phoneNumber"/>}
    </div>
    </div>
  );
}

// interface customerOptionType {
//   inputValue?: string;
//   title: string;
//   year?: number;
// }

interface customerOptionType {
  inputValue?: string;
  name: string;
  phoneNumber?: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films: readonly customerOptionType[] = [
//   { title: "The Shawshank Redemption", year: 1994 },
//   { title: "The Godfather", year: 1972 },
//   { title: "The Godfather: Part II", year: 1974 },
//   { title: "The Dark Knight", year: 2008 },
//   { title: "12 Angry Men", year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: "Pulp Fiction", year: 1994 },
//   {
//     title: "The Lord of the Rings: The Return of the King",
//     year: 2003,
//   },
//   { title: "The Good, the Bad and the Ugly", year: 1966 },
//   { title: "Fight Club", year: 1999 },
// ]
