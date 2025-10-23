import React from "react";
import styles from "@/components/styles/StarRating.module.css";

const StarRating = ({ rating }) => {
  const intRating = Math.floor(rating);
  const halfStar = rating - intRating < 1 ? 1 : 0;
  const greyStarsAmount = 5 - intRating - halfStar;
  return (
    <>
      <div className={styles.starRating}>
        {Array.from({ length: intRating }).map((_, i) => (
          <img key={i} src="/assets/gold-star.svg" className={styles.star} />
        ))}
        {halfStar === 1 && (
          <img src="/assets/half-star.svg" className={styles.star} />
        )}
        {Array.from({ length: greyStarsAmount }).map((_, i) => (
          <img
            key={i + intRating}
            src="/assets/grey-star.svg"
            className={styles.star}
          />
        ))}
      </div>
    </>
  );
};

export default StarRating;
