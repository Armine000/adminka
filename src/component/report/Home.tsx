import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Select } from "antd";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import "../report/report.css";
import { Option } from "antd/es/mentions";
import { deleteUser, getUser } from "../../api";
import { User } from "../../interface/interfase";
import Header from "../header/header";
import { pagesname } from "../../columns/columns";

const Home = () => {
  const dispatch: any = useDispatch();
  const users = useSelector((state: any) => state.users.users);
  const { t, i18n } = useTranslation();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      dispatch(getUser());
      isMounted.current = false;
    }
  }, [dispatch]);

  const handleProductDelete = async (postId: number) => {
    try {
      await dispatch(deleteUser(postId));
    } catch (error) {
      console.error("Error", error);
    }
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };
  return (
    <div>
      <Header pagesname={pagesname[3]} />
      <div className="container">
        <div className="createer">
          <div className="create">
            <Link to="/create" style={{ textDecoration: "none" }}>
              <Button className="btn-create">{t("create.addUser")}</Button>
            </Link>
            <Select defaultValue={i18n.language} onChange={changeLanguage}>
              <Option value="en">English</Option>
              <Option value="ru">Русский</Option>
            </Select>
          </div>
          <div className="table-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{t("create.nameLabel")}</th>
                  <th>{t("create.emailLabel")}</th>
                  <th>{t("create.phoneLabel")}</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: User, index: number) => (
                  <tr key={index} className="tr">
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link to={`/edit/${user.id}`}>
                        <Button className="edit">{t("home.edit")}</Button>
                      </Link>
                      <Button
                        onClick={() => handleProductDelete(user.id)}
                        className="delete"
                      >
                        {t("home.delete")}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
