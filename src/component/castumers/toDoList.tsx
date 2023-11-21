import { useState, useEffect } from "react";
import { colors } from "../../columns/columns";

function Todos() {
  const [num, setNum] = useState<number>(0);
  function minus() {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  function plus() {
    if (num < colors.length) {
      setNum(num + 1);
    }
  }

  useEffect(() => {}, [num]);

  const firstColors = (Math.random() * colors.length).toFixed();
  let secondColors = (Math.random() * colors.length).toFixed();

  do {
    secondColors = (Math.random() * 7).toFixed();
  } while (secondColors === firstColors);
  return (
    <>
      <div
        style={{
          width: 560,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <button style={{ width: 50, height: 50 }} onClick={minus}>
          -
        </button>
        <button style={{ width: 50, height: 50 }} onClick={plus}>
          +
        </button>
      </div>
      <div style={{ display: "flex", margin: 50 }}>
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            border: "1px solid",
            marginRight: 50,
            backgroundColor: colors[firstColors],
          }}
        />
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            border: "1px solid",
            backgroundColor: colors[secondColors],
          }}
        />
      </div>
    </>
  );
}
export default Todos;
