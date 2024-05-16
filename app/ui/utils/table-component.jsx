"use client"
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Button, Card, Modal, Typography } from "@mui/material";

import BuldOrderEdit from "@/app/ui/orders/bulk-edit-order"

//nested data is ok, see accessorKeys in ColumnDef below

export default function TableComponent({
  data,
  tableColumns,
  handleOnRowClick,
  tableHieght,
}) {

  const columns = useMemo(() => [...tableColumns], []);
  const router = useRouter();
  const handleRowClick = (orderId) => {
    router.push(`/dashboard/orders/${orderId}/edit`);
  };

  const table = useMaterialReactTable({
    columns,
    data,
    
    muiTableBodyCellProps: ({ cell }) => ({
      onDoubleClick: (event) => {
        console.log(cell.row.original.id);
        handleRowClick(  cell.row.original.id);
      },
    }),
    renderTopToolbarCustomActions: ({ table }) => (

      <div>

      <BuldOrderEdit  selectedRows = {table.getSelectedRowModel().rows}/>

      </div>
    ),
    // muiTableBodyRowProps:({row}) =>({
    //   sx: {
    //     backgroundColor: row.getValue('totalOpen') > 5 ? 'rgba(255, 54, 33, 0.18)' : '',
    //     // fontStyle: 'italic'
    //   }
    // }),
    enableRowSelection: true,

  });

  return (
    <Box sx={{ height: tableHieght == null ? 400 : tableHieght }}>
      <MaterialReactTable  table={table} />
    </Box>
  );
}
