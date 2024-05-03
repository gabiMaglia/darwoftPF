import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import WhatsApp from "../ui/icons/WatsApp.jsx";
import ButtonScrollTopComponent from "../ui/ButtonScrollToTop/ButtonScrollToTop.jsx";

import styles from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsApp number="3133322233" />
      <ButtonScrollTopComponent />Butt
    </>
  );
};

export default Layout;
