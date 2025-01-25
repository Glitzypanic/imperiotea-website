import styles from "./Goals.module.css";

function Goals() {
  return (
    <section className={styles.goals}>
      <div className={styles.text}>
        <h4>Imperio TEA</h4>
        <h2>Nuestro Objetivo</h2>
        <p>
          Entregar las herramientas necesarias a nuestros profesionales para un
          trabajo de calidad. Tener un lugar propio, donde la comunidad nos
          pueda identificar. Contar con mayor cantidad de especialistas para
          entregar mas sesiones a las personas que la necesiten. Crear un cambio
          social, apoyando la inclusión de esta condición. Contar con apoyo de
          privados para entregar mas beneficios a nuestros socios.
        </p>
      </div>
      <div className={styles.images}>
        <div>
          <img
            src="src/assets/images/activities/varias/varias7.webp"
            height={510}
            alt=""
          />
        </div>
        <div className={styles.rightImages}>
          <img
            src="src/assets/images/activities/anglo-american/anglo1.webp"
            height={250}
            alt=""
          />
          <img
            src="src/assets/images/activities/charla-cftpucv/cftpucv7.webp"
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
