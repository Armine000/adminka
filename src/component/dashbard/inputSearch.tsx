import { useState } from "react";
import { rowstable } from "../../columns/columnList";
import DashbordMain from "./dashbordmain";

function InputSearch() {
  const [query, setQuery] = useState("");

  function search(data: any) {
    return data.filter((el: any) => {
      for (const elem in el) {
        if (String(el[elem]).toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }

  return (
    <>
      <div style={{ padding: 40 }}>
        <input
          style={{
            width: 250,
            height: 25,
            borderRadius: 10,
            padding: 10,
            border: "1px solid grey",
          }}
          placeholder="Search...."
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <DashbordMain data={search(rowstable)} />
    </>
  );
}

export default InputSearch;
