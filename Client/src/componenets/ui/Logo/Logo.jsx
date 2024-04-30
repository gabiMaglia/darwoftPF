import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import mainLogoBlackAndWhite from "../../../assets/logos_png/logos folk-05.png";
import mainLogoColor from "../../../assets/logos_png/logos folk-02.png";
import styles from './logo.module.css'

const Logo = ({ color }) => {
  const schema = color ? mainLogoColor : mainLogoBlackAndWhite;

  return <LazyLoadImage className={styles.logo} src={schema} alt="Folk Tecnotienda" effect="blur" />;

};

export default Logo;
