import { useState } from "react";
import Carusel from "./Carusel.jsx";

import styles from "./billboard.module.css";

const BillBoard = ({ products }) => {
  const limit = products.length;

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide !== limit - 1 ? currentSlide + 1 : 0);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide !== 0 ? currentSlide - 1 : limit - 1);
  };
  return (
    <article className={styles.billboard}>
      <div className={styles.buttons}>
        <button onClick={prevSlide}>Prev</button>
        <Carusel data={products[currentSlide]} />
        <button onClick={nextSlide}>Next</button>
      </div>
      <div className={styles.pagintionDots}>
        {products.map((e, i) => {
          return (
            <div
              className={i === currentSlide ? styles.active : "none"}
              key={i}
            ></div>
          );
        })}
      </div>
    </article>
  );
};

export default BillBoard;
