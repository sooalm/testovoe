import React from "react";
import { createPortal } from "react-dom";
import styles from "@/components/styles/Share.module.css";
import { FaCopy } from "react-icons/fa";

const Share = ({ product, setIsOpen, isOpen }) => {
  if (!isOpen) return null;

  const handleShare = async () => {
    try {
      if (navigator) {
        await navigator.clipboard.writeText(window.location.href);
        console.log("Ссылка скопирована в буфер обмена!");
      }
    } catch (err) {
      console.error("Не удалось скопировать:", err);
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={(e) => setIsOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <span className={styles.modal__title}> Поделиться</span>
        <button
          className={styles.modal__close}
          onClick={(e) => setIsOpen(false)}
        >
          x
        </button>

        <img className={styles.qrCode} src={product.meta.qrCode}></img>
        <div>
          <div className={styles.shareLink}>
            <p>{window.location.href}</p>
            <FaCopy onClick={handleShare} className={styles.copy} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Share;
