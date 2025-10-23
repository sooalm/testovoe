"use client";

import Catalog from "@/components/home/Catalog";
import styles from "./Page.module.css";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<p>⌛Downloading content...</p>}>
        <Catalog />
      </Suspense>
    </div>
  );
}
