import { Form, Input } from "antd";
import { useEffect } from "react";

const ProductEdit = ({ formData, setFormData, originalData }: any) => {
  const { TextArea } = Input;
  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormData({ ...originalData });
  }, [originalData, setFormData]);

  return (
    <div>
      <Form layout="vertical">
        <Form.Item label="Title">
          <Input
            type="text"
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductEdit;
