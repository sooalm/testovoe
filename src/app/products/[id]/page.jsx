import ImageCarousel from "@/components/product/Carousel";
import GoodDescription from "@/components/product/GoodDescription";
import ProductSlider from "@/components/product/ProductSlider";
import ReviewPanel from "@/components/under-constraction/ReviewPanel";

import { notFound } from "next/navigation";
import styles from "./Product.module.css";

// Функция для получения данных о продукте
async function getProduct(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Product not found");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
export default async function Product({ params }) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) return notFound();

  return (
    <main className={styles.container}>
      <section className={styles.containerCarousel}>
        <ImageCarousel product={product} />
        <GoodDescription product={product} />
      </section>
      <section className={styles.flexColumn}>
        <ProductSlider />
        {/* <ReviewPanel /> */}
      </section>
    </main>
  );
}
