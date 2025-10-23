import React from "react";
import styles from "@/components/styles/GoodCard.module.css";
import Link from "next/link";

import StarRating from "@/components/widely-used-components/StarRating";
import Prices from "@/components/widely-used-components/Prices";

const GoodCard = ({ item }) => {
  const handleDiscountPercentage = (price, discountPercentage) => {
    return (price * (1 - discountPercentage / 100) * 100).toFixed(0);
  };

  return (
    <div className={styles.container}>
      <Link href={`/products/${item.id}`}>
        <img src={item.thumbnail} className={styles.goodImage}></img>

        <Prices item={item} />

        <div className={styles.title}> {item.title}</div>
        <StarRating rating={item.rating} />
      </Link>
      <button className={styles.cartBtn}>В корзину</button>
    </div>
  );
};

export default GoodCard;
