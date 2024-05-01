import Img from "../ui/Img/Img";
import styles from "./carusel.module.css";
import OutlinedButton from '../ui/OutlinedButton/OutlinedButton'
const Carusel = ({data}) => {

  return (
    <article className={styles.carousel}>
      <section className={styles.info}>
        <h4>With {data.warranty} of warranty !</h4>
        <h2>{data.name}</h2>
      </section>
      <section className={styles.mainPic}>
        <Img img={data.images[0]} />
        <button></button>
      </section>
      <section className={styles.breadcrumb}>
        <p>{data.productDescription.smallDescription}</p>
      <OutlinedButton >Dont miss the offer</OutlinedButton>
      </section>
    </article>
  );
};

export default Carusel;
