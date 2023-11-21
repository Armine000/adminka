import * as React from "react";
import FormControl from "@mui/material/FormControl";
import { columns } from "../../columns/columnList";
import TextField from "@mui/material/TextField";
function Edit({ data, handleChange }: any) {
  return (
    <div
      style={{
        display: "flex",
        width: 500,
        height: 450,
        flexFlow: "column",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1> Edit</h1>
      </div>
      <div style={{ display: "flex" }}>
        {" "}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {columns
            .filter((el: any) => {
              return el.edit;
            })
            .map((elm: any) => (
              <FormControl sx={{ m: 1, width: 230 }} key={elm.key}>
                <TextField
                  label={elm["name"]}
                  value={data[elm.key]}
                  name={elm.key}
                  onChange={handleChange}
                ></TextField>
              </FormControl>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Edit;
