import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";
import Img from "../ui/Img/Img";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import toast from "react-hot-toast";
import { parseItemForCart } from "../../utils/objects";

import styles from "./carusel.module.css";
const Carusel = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(parseItemForCart(data)));
    toast.success("Producto agregado al carrito");
  };

  return (

    <article className={styles.carousel}>
      
      <div className={styles.text}>
        <span>
          <span className={styles.productName}>
            <h3 className={styles.brandName}>{data.brand.brandName}</h3>
            <h2 className={styles.productName}>{data.name}</h2>
          </span>
          <h3 className={styles.catName}>{data.category.catName}</h3>
        </span>
        
        <div onClick={handleAddToCart} className={styles.buyBtn}>
          <OutlinedButton>Agregar al Carrito</OutlinedButton>
        </div>
      </div> 

      <div className={styles.mainPic}>
        <Img img={data.images[0]} />
      </div>
   
    </article>
  );
};

export default Carusel;
