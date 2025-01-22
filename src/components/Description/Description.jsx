import styles from "./Description.module.css";

function Description() {
  return (
    <section className={styles.description} aria-labelledby="description-title">
      <div className={styles.left}>
        <h2 id="description-title">Imperio TEA</h2>
        <p>
          El 16 de noviembre del 2018, un grupo de 10 familias con hijos
          autistas de la comuna de La Calera y alrededores, decidieron crear la
          corporación sin fines de lucro{" "}
          <span className={styles.bold}>IMPERIO TEA</span>, considerando la alta
          demanda de niños que requerían de profesionales de la salud y no
          pueden optar a ellos por su alto costo económico. Nos financiamos
          únicamente con la ayuda de familias de la corporación ya sea con
          platos únicos o rifas que organizamos a través de reuniones. Hoy en
          día, la corporación se ha fortalecido con el esfuerzo de todos los que
          componen esta hermosa agrupación, entregando las terapias que cada
          familia necesita y los implementos a nuestros profesionales para
          realizar sesiones de calidad a cada uno de los socios.
        </p>
      </div>
      <div className={styles.right}></div>
    </section>
  );
}

export default Description;
