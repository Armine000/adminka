
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbard from "./component/dashbard/dashbard";
import Orders from "./component/orders/orders";
import Castumers from "./component/castumers/castumers";
import Product from "./component/product/product";
import Home from "./component/report/Home";
import Create from "./component/report/create";
import Update from "./component/report/Update";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbard/>} />
        <Route path="/dashboard" element={<Dashbard/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/costumers" element={<Castumers />} />
        <Route path="/report" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
