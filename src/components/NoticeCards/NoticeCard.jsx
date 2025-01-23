import { useState, useEffect } from "react";
import styles from "./NoticeCard.module.css";
import NewsCard from "../NewsCard/NewsCard";

// Importa el archivo JSON
import newsData from "../../data/news.json";

export default function NewsList() {
  const [currentNews, setCurrentNews] = useState([]);

  useEffect(() => {
    // Invierte el orden del array y toma los primeros 4 elementos
    const reversedNewsData = [...newsData].reverse().slice(0, 3);
    setCurrentNews(reversedNewsData);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {currentNews.map((news) => (
          <NewsCard
            key={news.id}
            type={news.type}
            title={news.title}
            date={news.date}
            description={news.description}
            link={news.link}
            image={news.image}
          />
        ))}
      </div>
    </div>
  );
}
