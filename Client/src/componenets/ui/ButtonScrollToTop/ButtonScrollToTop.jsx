import { useState, useEffect } from "react";

import OutlinedButton from "../OutlinedButton/OutlinedButton";
import { ArrowUpIcon } from "@heroicons/react/16/solid";

import styles from "./buttonToTop.module.css";

const ButtonScrollTopComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleVisibility = () => {
    const isAvtive = window.scrollY > 400;
    setIsVisible(isAvtive);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      handleVisibility();
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <>
      <div
        onClick={handleScrollToTop}
        className={`${styles.buttonToTop} ${
          isVisible ? styles.isVisible : null
        }`}
      >
        <OutlinedButton style={{backgroundColor: "white"}}>
          <ArrowUpIcon />
        </OutlinedButton>
      </div>
    </>
  );
};

export default ButtonScrollTopComponent;
