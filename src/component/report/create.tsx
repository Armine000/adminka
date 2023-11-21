import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createUser } from "../../api";

const Create = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const users = useSelector((state: any) => state.users.users);
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(createUser({ id: newUserId, ...formData }))
      .then(() => navigate("/"))
      .catch((error: Error) => {
        console.error(`Error: ${error.message}`);
      });
  };

  return (
    <div
      style={{
        width: "100%",
        height: 500,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 700,
          height: 300,
          display: "flex",
          flexFlow: "column",
          backgroundColor: "gray",
          alignSelf: "center",
          borderRadius: 5,
        }}
      >
        <Form style={{ marginLeft: 80, display: "flex", flexFlow: "column" }}>
          <h2>{t("create.addUser")}</h2>
          <Form.Item label={t("create.nameLabel")} className="form-items">
            <Input
              name="name"
              type="text"
              className="form-control"
              value={formData.name}
              onChange={(e: any) => handleInputChange("name", e.target.value)}
            />
          </Form.Item>
          <Form.Item label={t("create.emailLabel")} className="form-item">
            <Input
              name="email"
              type="email"
              className="form-control"
              value={formData.email}
              onChange={(e: any) => handleInputChange("email", e.target.value)}
            />
          </Form.Item>
          <Form.Item label={t("create.phoneLabel")} className="form-items">
            <Input
              name="phone"
              type="number"
              className="form-control"
              value={formData.phone}
              onChange={(e: any) => handleInputChange("phone", e.target.value)}
            />
          </Form.Item>
          <Form.Item style={{ alignSelf: "start", marginLeft: 50 }}>
            <Button className="btn" onClick={handleSubmit}>
              {t("create.submit")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Create;
