import { IProduct } from "../../interface/interfase";

 export  const ProductEdit =async(productId: number, updatedData: Partial<IProduct> ,{setProduct}:any)=>{
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
          method: "PATCH",
          body: JSON.stringify({
            title: "test product",
            price: 13.5,
            description: "lorem ipsum set",
            image: "https://i.pravatar.cc",
            category: "electronic",
            ...updatedData,
          }),
        });
    
        if (!response.ok) {
          throw new Error(`Error updating product: ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log("Product updated successfully:", data);
    
        setProduct((prev: IProduct[]) =>
          prev.map((item: IProduct) =>
            item.id === productId
              ? {
                  ...item,
                  title: updatedData.title || item.title,
                  description: updatedData.description || item.description,
                }
              : item
          )
        );
      } catch (error) {
        console.error("Error updating product:", error);
      }
}