"use client";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import UpdateOrderStatusForm from "./update-order-status-form";
import BulkUpdateOrderStatusForm from "./bulk_update-order-status-form";


export default function BuldOrderEdit({selectedRows}) {

  let selectedIds = selectedRows.map((selectedRow)=>(selectedRow.original.id))

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="mr-1">
      <Button
        // endIcon={<AddIcon />}
        size="small"
        onClick={handleOpen}
        style={{ backgroundColor: "#12824C", color: "#FFFFFF" }}
        variant="outlined"
      >
        Edit-Order {JSON.stringify(selectedIds)}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0 mt-3.5">
          <div className="overflow-auto w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex flex-row justify-between">
                <h1 className="text-xl font-bold leading-tight tracking-tigh">
                  Edit Orders
                </h1>
                <Button
                  type="button"
                  onClick={handleClose}
                  class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-900"
                >
                  close
                </Button>
              </div>
              {/* <AddClientForm /> */}

              <BulkUpdateOrderStatusForm order={JSON.stringify(selectedIds)} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
