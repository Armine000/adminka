import { Button } from "antd";
import { useEffect, useState } from "react";
import ProductEdit from "./ProductEdit";
import Modals from "./Modal";

const ProductModalEdit = ({ product, onEdit }: any) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({
    title: product.title,
    description: product.description,
  });
  const [originalFormData, setOriginalFormData] = useState<any>({});

  const handleSubmit = () => {
    onEdit(product.id, formData);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setFormData({ ...originalFormData });
    setIsModalOpen(false);
  };

  useEffect(() => {
    setOriginalFormData({
      title: product.title,
      description: product.description,
    });
    setFormData({
      title: product.title,
      description: product.description,
    });
  }, [product]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => setIsModalOpen(true)}>Edit</Button>
      </div>

      <Modals
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        modalContent={
          <ProductEdit
            formData={formData}
            setFormData={setFormData}
            originalData={originalFormData}
          />
        }
      />
    </div>
  );
};

export default ProductModalEdit;
