import { deleteProduct } from "../../api";


const ProductDelete = ({setProduct,product,elem}:any)=>{
    const handleProductDelete = async (postId: number) => {
        try {
          await deleteProduct(postId);
          const updatedProductsDel = product.filter(
            (item: any) => item.id !== postId
          );
          setProduct(updatedProductsDel);
          console.log(`Product ID ${postId} deleted`);
        } catch (error) {
          console.error("Error", error);
        }
      };
    return(
        <div>
              <button
                    style={{
                      width: 120,
                      height: 20,
                      backgroundColor: "red",
                      border: "none",
                      cursor: "pointer",
                      color: "white",
                    }}
                    onClick={() => handleProductDelete(elem.id)}
                  >
                    {" "}
                    Delate Product
                  </button>
        </div>
    )
}

export default ProductDelete;