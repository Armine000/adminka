import { Form, Input } from "antd";
const ProductAdd = ({ setFormData, formData }: any) => {
  const { TextArea } = Input;
  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <Form>
        <Form.Item label="title" name="title">
          <Input
            type="text"
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Price" name="price">
          <Input
            type="text"
            value={formData.price}
            onChange={(e) => handleInputChange("price", e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Category" name="category">
          <Input
            type="text"
            value={formData.category}
            onChange={(e) => handleInputChange("category", e.target.value)}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductAdd;
