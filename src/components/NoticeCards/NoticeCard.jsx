import { useState, useEffect } from "react";
import styles from "./NoticeCard.module.css";
import NewsCard from "../NewsCard/NewsCard";

// Importa el archivo JSON
import newsData from "../../data/news.json";

export default function NewsList() {
  const [currentNews, setCurrentNews] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 1400px)").matches);
    };

    // Verificar tamaño inicial y configurar listener
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const itemsToShow = isSmallScreen ? 2 : 3;
    const reversedNewsData = [...newsData].reverse().slice(0, itemsToShow);
    setCurrentNews(reversedNewsData);
  }, [isSmallScreen]); // Ahora depende del estado de isSmallScreen

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
            alt={news.alt}
          />
        ))}
      </div>
    </div>
  );
}
