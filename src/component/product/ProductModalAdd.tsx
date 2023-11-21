import { useState } from "react";
import { postProduct } from "../../api";
import { Button } from "antd";
import ProductAdd from "./ProductAdd";
import Modals from "./Modal";
const ProductModalAdd = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });

  const handleSubmit = async () => {
    try {
      await postProduct(formData);
      setIsModalOpen(false);
      setFormData({
        title: "",
        description: "",
        price: "",
        category: "",
      });
    } catch (error) {
      console.error("Error", error);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={{ marginLeft: -50, marginTop: 10 }}>
      <div>
        <Button onClick={() => setIsModalOpen(true)}> Add </Button>
      </div>
      <Modals
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        modalContent={
          <ProductAdd setFormData={setFormData} formData={formData} />
        }
      />
    </div>
  );
};

export default ProductModalAdd;
