import styles from "./Search.module.scss";
import React from "react";

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.field}>
        <input
          type="search"
          id="site-search"
          placeholder="Адрес, район, название ЖК..."
        />
        <button className={styles.icon}>
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.0377 14.093C4.19416 14.093 0.991211 10.89 0.991211 7.04649C0.991211 3.20295 4.19416 0 8.0377 0C11.8812 0 15.0842 3.20295 15.0842 7.04649C15.0842 10.89 11.8812 14.093 8.0377 14.093ZM8.0377 1.28118C4.83475 1.28118 2.27239 3.84354 2.27239 7.04649C2.27239 10.2494 4.83475 12.8118 8.0377 12.8118C11.2407 12.8118 13.803 10.2494 13.803 7.04649C13.803 3.84354 11.2407 1.28118 8.0377 1.28118Z"
              fill="#707070"
            />
            <path
              d="M13.1617 11.2744L18.7989 16.9116C19.0551 17.1678 19.0551 17.5522 18.7989 17.8084C18.6707 17.9366 18.4145 17.9366 18.2864 17.9366C18.1583 17.9366 17.902 17.9366 17.7739 17.8084L12.1367 12.1712L13.1617 11.2744Z"
              fill="#707070"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
