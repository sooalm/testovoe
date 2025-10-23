import styles from "@/components/styles/Search.module.css";
import useSearch from "../../Hooks/useSearchControl";

const Search = ({ onSearch, placeholder = "Поиск...", delay = 300 }) => {
  const { query, handleInputChange, handleSubmit, handleClear } = useSearch({
    onSearch,
    delay,
  });
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <div className={styles.searchContainer}>
        <div className={styles.searchIcon}>🔍 </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={styles.searchInput}
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearButton}
          >
            ×
          </button>
        )}
      </div>
    </form>
  );
};

export default Search;
