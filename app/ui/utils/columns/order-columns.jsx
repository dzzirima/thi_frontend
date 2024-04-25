

export const orderColumns = [
  {
    accessorKey: "orderNumber", //access nested data with dot notation
    header: "Id",
    size: 100,
  },
  {
    accessorKey: "clientName", //normal accessorKey
    header: "clientName",
    size: 150,
  },
  {
    accessorKey: "amount",
    header: "amount",
    size: 50,
  },

  {
    accessorKey: "date",
    header: "Date",
    size: 100,
  },
  {
    accessorKey: "globalStatus",
    header: "Status",
    size: 50,
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment status",
    size: 50,
  },

  // {
  //   accessorKey: "totalOpen",
  //   header: "Open Issues",
  //   size: 150,
  //   muiTableBodyCellProps: ({ cell }) => ({
  //     sx: {
  //       backgroundColor:
  //         cell.getValue() > 9 ? "rgba(22, 184, 44, 0.5)" : undefined,
  //       fontWeight:
  //         cell.column.id === "totalOpen" && cell.getValue() > 9 ? "700" : "400",
  //     },
  //   }),
  // },

 

  
  

  
];
