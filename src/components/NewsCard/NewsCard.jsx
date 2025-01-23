import styles from "./NewsCard.module.css";

// eslint-disable-next-line react/prop-types
function NewsCard({ type, title, date, description, link, image }) {
  return (
    <div id="newsCard" className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="" height={200} width={300} />
        <span className={styles.type}>{type}</span>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div>
          <p className={styles.date}>{date}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <button href={link} className={styles.button}>
          Leer más
        </button>
      </div>
    </div>
  );
}

export default NewsCard;
