import styles from "./ResourcesHero.module.css";

function ResourcesHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImg}></div>
      <div className={styles.heroText}>
        <h1 className={styles.title}>Recursos y Descargas</h1>
        <p className={styles.description}>Material complementario</p>
      </div>
    </div>
  );
}

export default ResourcesHero;
