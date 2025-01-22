import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImg}></div>
      <div className={styles.heroText}>
        <h1 className={styles.title}>
          Corporación Imperio Trastorno Espectro Autista
        </h1>
        <p className={styles.description}>
          !No es un mundo aparte sino parte de este mundo!
        </p>
      </div>
    </div>
  );
}

export default Hero;
