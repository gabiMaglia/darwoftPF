import styles from "./productThumbnails.module.css";

const ProductThumbnails = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.slides}>
        <li id="slide1">
          <img
            src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg"
            alt=""
          />
        </li>
        <li id="slide2">
          <img
            src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg"
            alt=""
          />
        </li>
        <li id="slide3">
          <img
            src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg"
            alt=""
          />
        </li>
      </ul>

      <ul className={styles.thumbnails}>
        <li>
          <a href="#slide1">
            <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg" />
          </a>
        </li>
        <li>
          <a href="#slide2">
            <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg" />
          </a>
        </li>
        <li>
          <a href="#slide3">
            <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProductThumbnails;
