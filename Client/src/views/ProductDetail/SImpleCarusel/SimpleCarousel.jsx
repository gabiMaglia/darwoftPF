import { useState } from 'react';
import styles from './simpleCarousel.module.css'; // Asumimos que creas un archivo CSS para los estilos

const SimpleCarousel = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.mainImageContainer}>
        <img src={activeImage} alt="Active" className={styles.mainImage} />
      </div>
      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={styles.thumbnail}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleCarousel;