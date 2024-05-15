import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./componenets/layout/Layout";

import Home from "./views/Home/Home";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Dashboard from "./views/Dashboard/Dashboard.jsx";
import About from "./views/About/About";
import Error404 from "./views/Error404/Error404";
import ShoppingCart from "./views/ShoppingCart/ShoppingCart.jsx";
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
import Profile from "./views/Dashboard/Profile/Profile.jsx";
import { getProductsAsync } from "./redux/slices/productSlice.js";
import Checkout from "./views/Checkout/Checkout.jsx";

function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const isAuthenticaded = useSelector((state) => state.auth.user?.role.role || state.auth.user?.role);

  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const initialWorks = async () => {
      try {
        await dispatch(getGroupsAsync());
        await dispatch(getCategoriesAsync());
        await dispatch(getAllBrandsAsync());
        await dispatch(getProductsAsync());
        if (!token) {
          setIsLoading(false);
          return;
        }
        await dispatch(checkPersistanceAsync(token));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    initialWorks();
    setIsLoading(false);
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Layout>
        <Routes>
          <Route path={PATH_ROUTES.HOME} element={<Home />} />
          <Route
            path={PATH_ROUTES.CHANGEPASSWORD}
            element={<ChangePassword />}
          />
        <Route path={PATH_ROUTES.SHOPPINGCART} element={<ShoppingCart />} />
          <Route path={PATH_ROUTES.ABOUT} element={<About />} />
          <Route path={PATH_ROUTES.DETAIL} element={<ProductDetail />} />
          <Route element={<ProtectedRoutes isLogged={isLogged} />}>
            <Route path={PATH_ROUTES.CHECKOUT} element={<Checkout />} />
            <Route path={PATH_ROUTES.DASHBOARD} element={<Dashboard isAuthenticaded={isAuthenticaded} />}>
              <Route index element={<Profile />} />
              <Route exact path={PATH_ROUTES.STOCK} element={<Stock />} />
              <Route path={PATH_ROUTES.BRANDSCATEGORY}element={<BrandsCat />}/>
              <Route path={PATH_ROUTES.WISHLIST} element={<WishList />} />
            </Route>
          </Route>
          <Route path={PATH_ROUTES.ERROR404} element={<Error404 />} />
        </Routes>
      </Layout>

      <WhatsApp number="3133322233" />
      <ButtonScrollTopComponent />
      <ToasterProvider />
    </>
  );
}

export default App;
