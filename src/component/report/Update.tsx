import { Button, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { User } from "../../interface/interfase";
import { patchUser } from "../../api";

const Update = () => {
  const { id }: any = useParams();
  const users = useSelector((state: any) => state.users.users);
  const userId = parseInt(id);
  const existingUser = users.find((user: User) => user.id === userId);
  const { phone, username, email } = existingUser;

  const [formData, setFormData] = useState({
    name: username,
    email: email,
    phone: phone,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleChangUpdate = () => {
    dispatch(
      patchUser({
        id: userId,
        username: formData.name,
        email: formData.email,
        phone: formData.phone,
      })
    );
    navigate("/");
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
          <h2>{t("update.updateUser")}</h2>
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
              type="phone"
              className="form-control"
              value={formData.phone}
              onChange={(e: any) => handleInputChange("phone", e.target.value)}
            />
          </Form.Item>
          <Form.Item style={{ alignSelf: "start", marginLeft: 50 }}>
            <Button className="btn" onClick={handleChangUpdate}>
              {t("update")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Update;

