import styles from "./ContactHero.module.css";

function ContactHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImg}></div>
      <div className={styles.heroText}>
        <h1 className={styles.title}>Habla con nosotros</h1>
        <p className={styles.description}></p>
      </div>
    </div>
  );
}

export default ContactHero;
