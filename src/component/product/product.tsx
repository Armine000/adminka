import { useEffect, useRef, useState } from "react";
import { IProduct, Props } from "../../interface/interfase";
import { pagesname } from "../../columns/columns";
import Header from "../header/header";
import { getProduct } from "../../api";
import ProductModalAdd from "./ProductModalAdd";
import ProductModalEdit from "./ProductModalEdit";
import ProductReadMore from "./ProductRedMore";
import ProductDelete from "./ProductDelet";
import "../product/product.css";
import ProductEdit from "./ProductEdit";
const Product: React.FC<Props> = () => {
  const [product, setProduct] = useState<IProduct[]>([]);
  const isMounted = useRef(true);
  useEffect(() => {
    if (isMounted.current) {
      const fetchData = async () => {
        try {
          const res = await getProduct();
          setProduct(res);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
      isMounted.current = false;
    }
  }, []);
  
  const handleProductEdit = () => {
    <ProductEdit setProduct={setProduct} />;
  };
  return (
    <div>
      <Header pagesname={pagesname[5]} />
      <div className="our-servise-back">
        <ProductModalAdd />
        {product.map((el: IProduct, idx: number) => (
          <div key={idx} className="our-service-box">
            <ProductModalEdit product={el} onEdit={handleProductEdit} />
            <img
              src={el.image}
              alt=""
              style={{
                width: "100%",
                maxWidth: 200,
                textAlign: "center",
                height: 215,
              }}
            />
            <div
              style={{
                overflow: "hidden",
                fontSize: 20,
                color: "black",
                fontWeight: "bold",
              }}
            >
              {el.title}
            </div>
            <ProductReadMore idx={idx} elm={el} />
            <ProductDelete
              product={product}
              setProduct={setProduct}
              elem={el}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
