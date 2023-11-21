import { useState } from "react";
import { rowstable } from "../../columns/columnList";
import { Dialog } from "@mui/material";
import Edit from "./edit";
import { SimpleDialogProps } from "../../interface/interfase";

function Dialogss(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, editData } = props;
  const [formData, setFormData] = useState(rowstable[editData]);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    if (
      (name === "phone" || name === "id") &&
      isNaN(value) &&
      value.length &&
      value !== "-"
    ) {
      return;
    }
    setFormData((prev: any) => {
      let balance = 0;
      if (prev.id && prev.phone) {
        balance = +prev.id + +prev.phone;
      }
      if (name === "id" && prev.phone) {
        balance = +value + +prev.phone;
      }
      if (name === "phone" && prev.id) {
        balance = +value + +prev.id;
      }
      return { ...prev, [name]: value, balance };
    });
  };
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <Edit data={formData} handleChange={handleChange} />
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: 485 }}
        >
          <button
            onClick={handleClose}
            style={{
              marginTop: -50,
              width: 100,
              height: 30,
              backgroundColor: "bisque",
              border: "none",
            }}
          >
            Close
          </button>
        </div>
      </Dialog>
    </div>
  );
}

export default Dialogss;
