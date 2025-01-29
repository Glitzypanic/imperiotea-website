import styles from "./Goals.module.css";
import image1 from "/images/activities/varias/varias7.webp";
import image2 from "/images/activities/anglo-american/anglo1.webp";
import image3 from "/images/activities/charla-cftpucv/cftpucv7.webp";

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
        <div className={styles.leftImages}>
          <img src={image1} alt="" className={styles.leftImage} />
        </div>
        <div className={styles.rightImages}>
          <img src={image2} alt="" className={styles.rightImages1} />
          <img src={image3} alt="" className={styles.rightImages2} />
        </div>
      </div>
    </section>
  );
}

export default Goals;
