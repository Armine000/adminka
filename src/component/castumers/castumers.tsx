import { LocalGasStation } from "@mui/icons-material";
import { dataList, library, pagesname } from "../../columns/columns";
import Header from "../header/header";
import Todos from "./toDoList";

const Castumers = () => {
 let data = [6,4,0, 3,-2,1];
 console.log(data);
 let newdata =data.sort((a:any, b:any)=> a - b);

console.log(newdata);
  return (
    <div>
      <Header pagesname={pagesname[2]} />
      <Todos />
    </div>
  );
};

export default Castumers;
