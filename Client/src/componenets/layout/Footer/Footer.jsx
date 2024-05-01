import styles from "./footer.module.css";
import paymentBannerDesktop from "../../../assets/paymentMethodsBanner/desktop.jpg";
import paymentBannerMobile from "../../../assets/paymentMethodsBanner/mobile.jpg";
import SimpleMap from "../../GoogleMap/GoogleMap";

const storeData = {
  name: "Folk Tecnotienda",
  address: {
    street: "Av. Alberdi 1582",
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
  return (
    <div>
    
    <div className={styles.footer}>
    <SimpleMap />
      <div className={styles.data}>
        <div className={styles.about}>
          <h2>{storeData.name.toUpperCase()}</h2>
          <p>{storeData.address.street}</p>
          <p>{storeData.address.zipCode}{storeData.address.city}</p>
          <p>{storeData.address.state}{storeData.address.country}</p>
        </div>
        <div className={styles.contact}>
          <h2>CONTACTENOS</h2>
          <p>{storeData.contact.mobile}</p>
          <p>{storeData.contact.email}</p>
        </div>
        <div className={styles.socilMedia}>
            <h2>REDES</h2>
            <p>FACEBOOK</p>
            <p>MERCADOLIBRE</p>
            <p>INSTAGRAM</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <picture>
          <source media="(min-width: 768px)" srcSet={paymentBannerDesktop} />
          <source media="(max-width: 768px)" srcSet={paymentBannerMobile} />
          <img src="" alt="metodos de pago" />
        </picture>
        <p>
          Aclaración: Todas las imágenes y descripciones comerciales no son
          contractuales. Las descripciones de todos los productos y condiciones
          se encuentran sujetas a modificaciones sin previo aviso, pueden
          contener errores o pueden no contener todos los datos descriptivos. A
          los fines de obtener un asesoramiento completo e integral deberán
          concurrir al local.
        </p>
        <div className={styles.copyright}>
          <i>&copy; 2023 Gabriel Maglia. Todos los derechos reservados.</i>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
