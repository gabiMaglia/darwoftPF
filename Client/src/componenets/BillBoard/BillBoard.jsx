import { useState, useEffect } from "react";

import Carusel from "./Carusel.jsx";
import styles from "./billboard.module.css";

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../ui/LoadingSpinner/Spinner.jsx";

const BillBoard = () => {
  let products = useSelector(state => state.products.products)
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation()
  const productsToSlide = products.filter(e => e.isFeatured === true)
  const limit = productsToSlide?.length;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3600);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide !== limit - 1 ? currentSlide + 1 : 0);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide !== 0 ? currentSlide - 1 : limit - 1);
  };
  
  if (location.pathname !='/') {
    return null; 
  }
  if (!productsToSlide) return <Spinner/>
  return (
    <article className={styles.billboard}>
      <div className={styles.buttons}>
        <div className={styles.controls} onClick={prevSlide}>
          <ChevronDoubleLeftIcon />
          Prev
        </div>

        <Carusel data={productsToSlide[currentSlide]} />

        <div className={styles.controls} onClick={nextSlide}>
          <ChevronDoubleRightIcon />
          Next
        </div>
      </div>

      <div className={styles.pagintionDots}>
        {productsToSlide.map((e, i) => (
          <div
            className={i === currentSlide ? styles.active : "none"}
            key={i}
            onClick={() => {
              setCurrentSlide(i);
            }}
          ></div>
        ))}
      </div>
    </article>
  );
};

export default BillBoard;
