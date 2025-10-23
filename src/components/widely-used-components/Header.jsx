import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Link href="/" className={styles.logo}>
          Магазин
        </Link>
        <button className={styles.catalogBtn}>Каталог</button>
      </div>

      <div className={styles.centerSection}></div>

      <div className={styles.rightSection}>
        <Link href="/favorites" className={styles.navLink}>
          Избранное
        </Link>
        <Link href="/orders" className={styles.navLink}>
          Заказы
        </Link>
        <Link href="/cart" className={styles.navLink}>
          Корзина
        </Link>
        <div className={styles.profile}>
          <Image
            src="/assets/avatar-placeholder.png"
            alt="avatar"
            width={32}
            height={32}
            className={styles.avatar}
          />
          <span>Иван</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
