import { pagesname } from "../../columns/columns";
import Header from "../header/header";
import MemoizedChatPage from "./ChatPage";

const Orders = () => {
  return (
    <div>
      <Header pagesname={pagesname[1]} />
      <MemoizedChatPage />
    </div>
  );
};

export default Orders;
