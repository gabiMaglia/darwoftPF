import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import WhatsApp from '../ui/icons/WatsApp.jsx'

import styles from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
       <span className={styles.whatsApp}>
         <WhatsApp number = '3133322233' /> 
       </span>
      <Footer />
    </>
  );
};

export default Layout;
