import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>Imperio TEA</h1>
        <p>Fundacion sin fines de lucro</p>
        <button>Conocer mas</button>
      </div>
    </div>
  );
}

export default Hero;
