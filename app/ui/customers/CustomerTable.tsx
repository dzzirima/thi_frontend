"use client";

import { useRouter } from "next/navigation";
import useSWR from "swr";
import React from "react";
import { customerColumns } from "@/app/ui/utils/columns/customer-columns";
import MyTableTemplate from "@/app/ui/utils/components/my-table-template";
import {fetchAllCustomers} from "@/app/actions/customer/fetch_all_customers";

export default function CustomerTable() {
  const router = useRouter();
  const handleRowClick = (customerId: number) => {
    router.push(`/dashboard/customers/${customerId}/profile`);
  };
  let fetAllCustomersAction = async () => {
    return await fetchAllCustomers();
  };
  const { isLoading, error, data } = useSWR("customers", fetAllCustomersAction);
  if (error) return <div>failed to load {error}</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <MyTableTemplate
      data={data}
      tableColumns={customerColumns}
      tableHieght={null}
      handleOnRowClick={handleRowClick}
    />
  );
}
