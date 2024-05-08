import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./componenets/Layout/Layout";

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

import { useDispatch, useSelector } from "react-redux";
import { checkPersistanceAsync } from "./redux/slices/authSlice.js";
import Spinner from "./componenets/ui/LoadingSpinner/Spinner.jsx";

import PATH_ROUTES from "./helpers/routes.helper.js";
import "./App.css";
import ProtectedRoutes from "./helpers/ProtectedRoutes.jsx";

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
    
    const checkPersistance = async () => {
      await dispatch(checkPersistanceAsync(token));
      setIsLoading(false);
    };
    checkPersistance();
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
                <Route path={PATH_ROUTES.PROFILE} element={<Profile />} />
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
