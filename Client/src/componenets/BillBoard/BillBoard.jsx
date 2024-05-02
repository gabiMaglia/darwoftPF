import { useState, useEffect } from "react";
import Carusel from "./Carusel.jsx";
import styles from "./billboard.module.css";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

const BillBoard = ({ products }) => {
  const limit = products.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3600);
    return () => clearInterval(timer);
  }, [currentSlide, limit]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide !== limit - 1 ? currentSlide + 1 : 0);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide !== 0 ? currentSlide - 1 : limit - 1);
  };
  return (
    <article className={styles.billboard}>
      <div className={styles.buttons}>
        <div className={styles.controls} onClick={prevSlide}>
          <ChevronDoubleLeftIcon />
          Prev    
        </div>
        <Carusel data={products[currentSlide]} />
        <div className={styles.controls} onClick={nextSlide}>
          <ChevronDoubleRightIcon />
          Next
        </div>
      </div>
      <div className={styles.pagintionDots}>
        {products.map((e, i) => {
          return (
            <div
              className={i === currentSlide ? styles.active : "none"}
              key={i}
              onClick={() => {
                setCurrentSlide(i);
              }}
            ></div>
          );
        })}
      </div>
    </article>
  );
};

export default BillBoard;
