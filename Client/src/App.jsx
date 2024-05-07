import Layout from "./componenets/Layout/Layout";
import { Routes, Route } from "react-router-dom";


import Home from "./views/Home/Home";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Profile from "./views/Profile/Profile";
import About from "./views/About/About";
import Error404 from "./views/Error404/Error404";
import ShoppintCart from "./componenets/ShoppingCart/ShoppintCart";
import WishList from "./views/Wishlist/WishList.jsx";
import ChangePassword from "./views/ChangePassword/ChangePassword.jsx";

import { ToasterProvider } from "./providers/toastProvider.jsx";
import WhatsApp from "./componenets/ui/icons/WatsApp.jsx";
import ButtonScrollTopComponent from "./componenets/ui/ButtonScrollToTop/ButtonScrollToTop.jsx";

import "./App.css";

function App() {
  return (
    <>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/changepassword/:token" element={<ChangePassword />} />
          <Route path="/wish" element={<WishList />} />
          <Route path="/cart" element={<ShoppintCart />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Layout>

      <WhatsApp number="3133322233" />
      <ButtonScrollTopComponent />
      <ToasterProvider/>
    </>
  );
}

export default App;
