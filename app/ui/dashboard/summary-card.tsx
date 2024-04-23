import React from "react";

type pros = {
  title: string;
  icon: any;
  value: number;
  success: boolean;
};
const SummaryCard:any = ({ title, icon, value, success }: pros) => {
  return (
    <div className="bg-white flex flex-col justify-between w-60 border p-2 m-2rounded-lg">
      <div className=" flex items-center justify-center">
        <p className="text-grey-600">{title}</p>
      </div>
      <div className="flex flex-row w-full  items-center  justify-between">
        {icon}
        <p className="text-2xl font-bold items-center justify-center">
          {value}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
