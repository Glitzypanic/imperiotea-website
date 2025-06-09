import styles from "./NewsCard.module.css";
import { Link } from "react-router-dom";

function NewsCard({ type, title, date, image, alt, id }) {
  return (
    <div id="newsCard" className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt={alt} height={200} width={300} />
        <span className={styles.type}>{type}</span>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div>
          <p className={styles.date}>{date}</p>
        </div>
        <Link to={`/news/${id}`} className={styles.button}>
          Leer más
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
