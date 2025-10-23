import React from "react";
import styles from "@/components/styles/Prices.module.css";

const Prices = ({ item }) => {
  const handleDiscountPercentage = (price, discountPercentage) => {
    return (price * (1 - discountPercentage / 100) * 100).toFixed(0);
  };
  return (
    <div className={styles.prices}>
      <div className={styles.flexColumn}>
        <div className={styles.discountPrice}>
          {handleDiscountPercentage(item.price, item.discountPercentage)} руб.
        </div>
        <span className={styles.priceBadge}> Цена по карте </span>
      </div>

      <div className={styles.flexColumn}>
        <div className={styles.price}>{(item.price * 100).toFixed(0)} руб.</div>
        <span className={styles.priceBadge}> Обычная цена </span>
      </div>
    </div>
  );
};

export default Prices;
