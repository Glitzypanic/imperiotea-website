import styles from "./Goals.module.css";

function Goals() {
  return (
    <section className={styles.goals}>
      <div className={styles.text}>
        <h4>Objetivos</h4>
        <h2>Lores Impus 2025</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore at
          esse illo, dignissimos reiciendis aliquam accusantium recusandae ut a
          nihil sunt libero! Eos, quaerat quis adipisci dignissimos magnam
          sequi!
        </p>
        <button role="button">Contactanos</button>
      </div>
      <div className={styles.images}>
        <div>
          <img src="/kids.webp" height={510} alt="" />
        </div>
        <div className={styles.rightImages}>
          <img src="/charla.webp" height={250} alt="" />
          <img
            src="/conferencia.webp"
            alt=""
            height={250}
            className={styles.image3}
          />
        </div>
      </div>
    </section>
  );
}

export default Goals;
