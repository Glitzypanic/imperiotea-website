import { useState, useEffect } from "react";
import styles from "./NewsList.module.css";
import NewsCard from "../NewsCard/NewsCard";
import Pagination from "../Pagination/Pagination";

// Importa el archivo JSON
import newsData from "../../data/news.json";

export default function NewsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;

  // Invierte el orden del array
  const reversedNewsData = [...newsData.newsData].reverse();

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = reversedNewsData.slice(indexOfFirstNews, indexOfLastNews);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {currentNews.map((news) => (
          <NewsCard
            key={news.id}
            id={news.id}
            type={news.type}
            title={news.title}
            date={news.date}
            description={news.description}
            content={news.content}
            image={news.image}
            alt={news.alt}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(reversedNewsData.length / newsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
