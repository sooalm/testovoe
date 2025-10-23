import React from "react";
import styles from "@/components/styles/Catalog.module.css";
import useDummyJson from "../../Hooks/useDummyJson";
import { useState, useMemo } from "react"; // Добавляем useMemo

import Search from "./Search";
import GoodCard from "../widely-used-components/GoodCard";
const Catalog = () => {
  const { isLoading, data } = useDummyJson();

  const [searchValue, setSearchValue] = useState("");
  // Функция для обработки поиска
  const handleSearch = (value) => {
    setSearchValue(value);
  };

  // Вычисляем отфильтрованные продукты с useMemo
  const filteredProducts = useMemo(() => {
    if (!data || !data.products) return [];
    if (!searchValue.trim()) return data.products;
    return data.products.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [data, searchValue]);

  return (
    <>
      <Search onSearch={handleSearch} />
      <h1>Каталог товаров </h1>
      <div className={styles.catalog}>
        {isLoading ? (
          <p>⌛Downloading content...</p>
        ) : (
          filteredProducts.map((item) => <GoodCard key={item.id} item={item} />)
        )}
      </div>
    </>
  );
};

export default Catalog;
