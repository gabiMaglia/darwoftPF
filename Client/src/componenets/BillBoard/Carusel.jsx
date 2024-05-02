import Img from "../ui/Img/Img";
import styles from "./carusel.module.css";
import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";
const Carusel = ({ data }) => {
  return (

    <article className={styles.carousel}>
      
      <div className={styles.text}>
        <span>
          <span className={styles.productName}>
            <h3 className={styles.brandName}>{data.productBrand.brandName}</h3>
            <h2 className={styles.productName}>{data.name}</h2>
          </span>
          <h3 className={styles.catName}>{data.productCategory.catName}</h3>
        </span>
        <div>
          <OutlinedButton>Buy it</OutlinedButton>
        </div>
      </div>

      <div className={styles.mainPic}>
        <Img img={data.images[0]} />
      </div>
   
    </article>
  );
};

export default Carusel;
