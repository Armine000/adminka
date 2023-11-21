import { pagesname } from "../../columns/columns";
import Header from "../header/header";
import InputSearch from "./inputSearch";

const Dashbard = () => {
  return (
    <div>
      <Header pagesname={pagesname[0]} />
      <InputSearch />
    </div>
  );
};

export default Dashbard;
