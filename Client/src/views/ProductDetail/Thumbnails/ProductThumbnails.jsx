import styles from "./productThumbnails.module.css";

const ProductThumbnails = ({ productPhotos }) => {
  console.log(productPhotos);
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.slides}>
          {productPhotos?.map((photo, key, i) => (
            <li key={key} id={key}>
              <img src={photo} alt={i} />
            </li>
          ))}
        </ul>

        <ul className={styles.thumbnails}>
        {productPhotos?.map((photo, key, i) => (
            <li key={key} id={key}>
              <img src={photo} alt={i} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductThumbnails;
