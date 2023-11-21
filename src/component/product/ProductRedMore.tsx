import { useState } from "react";

const ProductReadMore = ({ idx, elm }: any) => {
  const [open, setOpen] = useState<any>({});
  return (
    <div>
      <div>
        <span
          style={{
            fontSize: 12,
            fontWeight: "normal",
            color: "black",
          }}
        >
          {open[idx] && elm.description}
        </span>
      </div>

      <div
        onClick={() =>
          setOpen((prev: any) => ({
            ...prev,
            [idx]: prev[idx] ? !prev[idx] : true,
          }))
        }
      >
        <p
          style={{
            cursor: "pointer",
            fontSize: 13,
            width: 400,
            height: 50,
          }}
        >
          {open[idx] ? "Read Less" : "Read More"}
        </p>
      </div>
    </div>
  );
};

export default ProductReadMore;
