import { pagesname } from "../../columns/columns";
import Header from "../header/header";
import Todos from "./toDoList";

const Castumers = ()=>{
    return(
        <div>
<Header pagesname={pagesname[2]}/>
<Todos/>
        </div>
    )
}

export default Castumers;