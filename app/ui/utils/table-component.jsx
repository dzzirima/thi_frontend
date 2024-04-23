"use client"
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Card, Modal, Typography } from "@mui/material";

//nested data is ok, see accessorKeys in ColumnDef below

export default function TableComponent({
  data,
  tableColumns,
  handleOnRowClick,
  tableHieght,
}) {
  //should be memoized or stable
  const columns = useMemo(() => [...tableColumns], []);
  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    muiTableBodyCellProps: ({ cell }) => ({
      onDoubleClick: (event) => {
        console.log(cell.row.original.id);
        handleOnRowClick( JSON.stringify( cell.row.original),cell.row.original.id);
      },

      
    }),
    muiTableBodyRowProps:({row}) =>({
      sx: {
        backgroundColor: row.getValue('totalOpen') > 5 ? 'rgba(255, 54, 33, 0.18)' : '',
        // fontStyle: 'italic'
      }
    })
  });

  return (
    <Box sx={{ height: tableHieght == null ? 400 : tableHieght }}>
      <MaterialReactTable  table={table} />
    </Box>
  );
}
