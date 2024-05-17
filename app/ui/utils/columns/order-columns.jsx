

export const orderColumns = [
  {
    accessorKey: "id", //access nested data with dot notation
    header: "Delivery Id",
    size: 100,
  },
  {
    accessorKey: "customerName", //normal accessorKey
    header: "Client Name",
    size: 150,
  },

  {
    accessorKey: "description", //normal accessorKey
    header: "Description",
    size: 150,
  },
  {
    accessorKey: "amount",
    header: "amount",
    size: 50,
  },

  {
    accessorKey: "orderPlacedDate",
    header: "Date Placed",
    size: 100,
  },
  {
    accessorKey: "globalStep",
    header: "Status",
    size: 50,
  },
  {
    accessorKey: "orderPaymentStatus",
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
