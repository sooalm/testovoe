import { useState, useRef } from "react";

const useSearch = ({ onSearch, delay = 300 }) => {
  const [query, setQuery] = useState(""); //контролируемый поиск
  const timeoutId = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log("value:", value);
    setQuery(value);

    // Очищаем предыдущий таймаут
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    // Устанавливаем новый таймаут для поиска с задержкой
    const newTimeoutId = setTimeout(() => {
      onSearch(value);
    }, delay);

    timeoutId.current = newTimeoutId;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Очищаем таймаут при отправке формы
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    onSearch("");
  };

  return { query, handleInputChange, handleSubmit, handleClear };
};
export default useSearch;
