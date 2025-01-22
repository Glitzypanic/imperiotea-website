import NewsHero from "../../components/NewsHero/NewsHero";
import NewsList from "../../components/NewsList/NewsList";
import styles from "./News.module.css";

function News() {
  return (
    <div className={styles.news}>
      <NewsHero />
      <NewsList />
    </div>
  );
}

export default News;
