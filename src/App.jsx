import { Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./pages/shop/Shop";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import SingleProduct from "./components/product/SingleProduct";
import Cart from "./pages/ecom/Cart";
import Checkout from "./pages/ecom/Checkout";
import Dashboard from "./pages/admin/Dashboard";
import Brand from "./pages/admin/Brand";
import Tag from "./pages/admin/Tag";
import Category from "./pages/admin/Category";
import CreateProduct from "./pages/admin/CreateProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/:slug" element={<SingleProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="brand" element={<Brand />} />
          <Route path="tag" element={<Tag />} />
          <Route path="category" element={<Category />} />
          <Route path="createproduct" element={<CreateProduct />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
