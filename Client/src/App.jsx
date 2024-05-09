import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./componenets/Layout/Layout";

import Home from "./views/Home/Home";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Dashboard from "./views/Dashboard/Dashboard.jsx";
import About from "./views/About/About";
import Error404 from "./views/Error404/Error404";
import ShoppintCart from "./componenets/ShoppingCart/ShoppintCart";
import WishList from "./views/Wishlist/WishList.jsx";
import ChangePassword from "./views/ChangePassword/ChangePassword.jsx";

import { ToasterProvider } from "./providers/toastProvider.jsx";
import WhatsApp from "./componenets/ui/icons/WatsApp.jsx";
import Spinner from "./componenets/ui/LoadingSpinner/Spinner.jsx";
import ButtonScrollTopComponent from "./componenets/ui/ButtonScrollToTop/ButtonScrollToTop.jsx";
import ProtectedRoutes from "./helpers/ProtectedRoutes.jsx";

import { checkPersistanceAsync } from "./redux/slices/authSlice.js";
import {
  getCategoriesAsync,
  getGroupsAsync,
} from "./redux/slices/categorySlice.js";
import { getAllBrandsAsync } from "./redux/slices/brandSlice.js";

import PATH_ROUTES from "./helpers/routes.helper.js";

import "./App.css";
import Stock from "./views/Dashboard/Stock/Stock.jsx";
import BrandsCat from "./views/Dashboard/BrandsCategories/BrandsCat.jsx";

function App() {
  const isLogged = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const initialWorks = async () => {
      await dispatch(checkPersistanceAsync(token));
      await dispatch(getGroupsAsync());
      await dispatch(getCategoriesAsync());
      await dispatch(getAllBrandsAsync());
      setIsLoading(false);
    };
    initialWorks();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Layout>
            <Routes>
              <Route path={PATH_ROUTES.HOME} element={<Home />} />
              <Route
                path={PATH_ROUTES.CHANGEPASSWORD}
                element={<ChangePassword />}
              />
              <Route path={PATH_ROUTES.ABOUT} element={<About />} />
              <Route path={PATH_ROUTES.DETAIL} element={<ProductDetail />} />
              <Route element={<ProtectedRoutes isLogged={!!isLogged} />}>
                <Route path={PATH_ROUTES.CART} element={<ShoppintCart />} />
                <Route path={PATH_ROUTES.DASHBOARD} element={<Dashboard />}>
                  <Route path="stock" element={<Stock />} />
                  <Route path="brandscat" element={<BrandsCat />} />
                </Route>
                <Route path={PATH_ROUTES.WISHLIST} element={<WishList />} />
              </Route>
              <Route path={PATH_ROUTES.ERROR404} element={<Error404 />} />
            </Routes>
          </Layout>

          <WhatsApp number="3133322233" />
          <ButtonScrollTopComponent />
          <ToasterProvider />
        </>
      )}
    </>
  );
}

export default App;
