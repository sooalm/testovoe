"use client";
import { useRef, useMemo, useEffect } from "react";
import Image from "next/image";
import useDummyJson from "@/Hooks/useDummyJson";

import styles from "@/components/styles/ProductSlider.module.css";
import GoodCard from "@/components/widely-used-components/GoodCard";

export default function ProductSlider() {
  const { isLoading, data } = useDummyJson();

  const checkedProducts = useMemo(() => {
    if (!data || !data.products) return [];
    // console.log(data);
    return data.products.slice(0, 8);
  }, [data]);

  const sliderRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    let rafId;
    let accumulatedScroll = 0;

    const handleWheel = (event) => {
      event.preventDefault();

      accumulatedScroll += event.deltaY;

      // запланирован? исполнять
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        if (sliderElement) {
          sliderElement.scrollLeft += accumulatedScroll;
        }

        accumulatedScroll = 0;
        rafId = null;
      });
    };
    if (sliderElement) {
      sliderElement.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);
  return (
    <div className={styles.container}>
      <div
        ref={sliderRef}
        className={styles.slider}
        style={{ height: "350px" }}
      >
        {isLoading ? (
          <p>⌛Downloading content...</p>
        ) : (
          checkedProducts.map((item) => <GoodCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
}
