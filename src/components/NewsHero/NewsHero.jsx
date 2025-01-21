import styles from "./NewsHero.module.css";

function NewsHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImg}></div>
      <div className={styles.heroText}>
        <h1 className={styles.title}>Bienvenido a Nuestro Blog</h1>
        <p className={styles.description}>
          Descubre las últimas noticias, actividades y charlas
        </p>
      </div>
    </div>
  );
}

export default NewsHero;
