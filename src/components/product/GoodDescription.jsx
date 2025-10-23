import React from "react";
import styles from "@/components/styles/GoodDescription.module.css";

import Prices from "@/components/widely-used-components/Prices";
const GoodDescription = ({ product }) => {
  return (
    <div className={styles.container}>
      <Prices item={product} />
      <button className={styles.cartBtn}>В корзину</button>
      <div className={styles.productInfo}>
        <p>Warranty: {product.warrantyInformation}</p>
        <p>Shipping: {product.shippingInformation}</p>
        <p>Status: {product.availabilityStatus}</p>
      </div>
    </div>
  );
};

export default GoodDescription;
