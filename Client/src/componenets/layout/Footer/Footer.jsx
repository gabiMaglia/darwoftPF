import SimpleMap from "../../GoogleMap/GoogleMap";
import Img from "../../ui/Img/Img";
// import footerLogo from "../../../assets/logos_png/logos folk-06.png";
import paymentBannerDesktop from "../../../assets/paymentMethodsBanner/desktop.jpg";
import paymentBannerMobile from "../../../assets/paymentMethodsBanner/mobile.jpg";

import styles from "./footer.module.css";
import { useLocation } from "react-router-dom";

const storeData = {
  name: "Fake Tecnotienda",
  address: {
    street: "Av. Los Alamos 1582",
    country: "Argentina",
    state: "Santa Fe",
    city: "Rosario",
    zipCode: 2000,
  },
  contact: { mobile: "341-7868686", email: "dadada@dada.com" },
  socialMedia: {
    facebook: "http://www.commm.com",
    mercadolibre: "http://www.commm.com",
    instagram: "http://www.commm.com",
  },
};

const Footer = () => {
  const {pathname} = useLocation()
  const isHome = pathname === '/'
  return (
    <>
     { isHome &&  <SimpleMap />}
      <div className={styles.footer}>
        <section className={styles.data}>
          <article className={styles.about}>
            <h2>{storeData.name.toUpperCase()}</h2>
            <p>{storeData.address.street}</p>
            <p>
              {storeData.address.zipCode}
              {storeData.address.city}
            </p>
            <p>
              {storeData.address.state}
              {storeData.address.country}
            </p>
          </article>
          <article className={styles.contact}>
            <h2>CONTACTENOS</h2>
            <p>{storeData.contact.mobile}</p>
            <p>{storeData.contact.email}</p>
          </article>
          <article className={styles.socilMedia}>
            <h2>REDES</h2>
            <p>FACEBOOK</p>
            <p>MERCADOLIBRE</p>
            <p>INSTAGRAM</p>
          </article>
          <div className={styles.logo}>
            {/* <Img img={footerLogo} alt="Folk tecnotienda" /> */}
          </div>
        </section>

        <section className={styles.bottom}>
          <picture>
            <source media="(min-width: 768px)" srcSet={paymentBannerDesktop} />
            <source media="(max-width: 768px)" srcSet={paymentBannerMobile} />
            <img alt="metodos de pago" />
          </picture>
          <article>
            <p>
              Aclaración: Todas las imágenes y descripciones comerciales no son
              contractuales. Las descripciones de todos los productos y
              condiciones se encuentran sujetas a modificaciones sin previo aviso,
              pueden contener errores o pueden no contener todos los datos
              descriptivos. A los fines de obtener un asesoramiento completo e
              integral deberán concurrir al local.
            </p>
          </article>
          <article className={styles.copyright}>
            <i>&copy; <strong>2024 Gabriel Maglia</strong> Todos los derechos reservados.</i>
          </article>
        </section>
      </div>
    </>
  );
};

export default Footer;
