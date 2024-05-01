import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import styles from "./img.module.css";

const Img = ({ img, alt }) => {
  return (
    <LazyLoadImage className={styles.img} src={img} alt={alt} effect="blur" />
  );
};

export default Img;
