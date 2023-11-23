import { LocalGasStation } from "@mui/icons-material";
import { dataList, pagesname } from "../../columns/columns";
import Header from "../header/header";
import Todos from "./toDoList";

const Castumers = () => {
  // 1.
  const filterInner = dataList.filter((el: any) => el.inner);
  console.log("1111111", filterInner);

  // 2.
  const innerAdd = dataList.reduce((acc: any, el: any) => {
    if (el.incDec && el.incDec.inc) {
      const decValue = el.incDec.dec || 0;
      return acc + el.incDec.inc - decValue;
    }
    return acc;
  }, 0);

  console.log("22222222222", innerAdd);
  //3
  const addValu = dataList.map((el: any) => {
    el.newKey = "value";
  });
  console.log("333333333333", dataList);
  //4
  let allTextIds: string = "";

  for (let i = 0; i < dataList.length; i++) {
    allTextIds += dataList[i].id + ",";
  }

  console.log("444444", allTextIds);
  return (
    <div>
      <Header pagesname={pagesname[2]} />
      <Todos />
    </div>
  );
};

export default Castumers;
