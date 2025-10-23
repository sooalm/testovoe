"use client";
import { useState } from "react";
import styles from "@/components/styles/Carousel.module.css";
import Share from "@/components/product/Share";
import { CiShare2 } from "react-icons/ci";

const ImageCarousel = ({ product }) => {
  const images = product.images;
  const thumbnail = product.thumbnail;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (!images.length) {
    return <p>No images available</p>;
  }

  return (
    <div className={styles.flexColumn}>
      <div className={styles.flexRowGap}>
        <h1 className={styles.title}>{product.title}</h1>
        <CiShare2 onClick={() => setIsOpen(true)} className={styles.shareBtn} />
        {isOpen && (
          <Share isOpen={isOpen} setIsOpen={setIsOpen} product={product} />
        )}
      </div>
      <div className={styles.carousel}>
        <div className={styles.thumbnails}>
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src={thumbnail}
              alt={`Thumbnail ${i + 1}`}
              className={`${styles.thumbnail} ${
                i === currentIndex ? styles.active : ""
              }`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>

        <div className={styles.mainImage}>
          <img src={images[0]} alt={`Image ${currentIndex + 1}`} />
          {/*если бы был массив,а не 1 элемент в массиве, то currentIndex */}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
