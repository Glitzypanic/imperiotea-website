import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li
            onClick={() => onPageChange(number)}
            key={number}
            className={`${styles.paginationButton} ${
              number === currentPage ? styles.active : ""
            }`}
          >
            <button>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
