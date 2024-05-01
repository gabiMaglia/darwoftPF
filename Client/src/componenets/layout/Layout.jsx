import styles from "./layout.module.css";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
