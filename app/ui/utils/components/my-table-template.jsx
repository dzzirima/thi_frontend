"use client"
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box } from "@mui/material";


export default function MyTableTemplate({
  data,
  tableColumns,
  handleOnRowClick,
  tableHieght,
}) {

  const columns = useMemo(() => [...tableColumns], []);
  const table = useMaterialReactTable({
    columns,
    data,
    
    muiTableBodyCellProps: ({ cell }) => ({
      onClick: (event) => {
        console.log(cell.row.original.id);
        handleOnRowClick(cell.row.original.id);
      },
    }),
  
  });

  return (
    <Box sx={{ height: tableHieght == null ? 400 : tableHieght }}>
      <MaterialReactTable  table={table} />
    </Box>
  );
}
