import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

import styles from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
