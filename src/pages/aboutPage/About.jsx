import styles from "./About.module.css";
import PersonCard from "../../components/PersonCard/PersonCard";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImg}></div>
        <h1 className={styles.heroTitle}>Sobre Nosotros</h1>
      </div>
      <div className={styles.historyContainer}>
        <h2 className={styles.historySubtitle}>Historia</h2>
        <p className={styles.historyText}>
          Fundada en 2010 en Santiago, Chile, la Fundación TEa nació del
          esfuerzo conjunto de padres, profesionales y educadores para apoyar a
          personas con Trastorno del Espectro Autista (TEa). Inicialmente, se
          centraron en proporcionar apoyo emocional y educativo, creando en 2012
          el primer centro de diagnóstico y terapia especializado en TEa en la
          ciudad. Desde entonces, la fundación ha ampliado su alcance con
          programas de integración escolar, becas para educación especializada,
          y campañas de sensibilización. Eventos como el Día Azul han promovido
          la inclusión. Nuestra visión es seguir expandiendo servicios e
          investigación para un mundo más inclusivo para todos los que viven con
          TEa.
        </p>
      </div>
      <div className={styles.PersonContainer}>
        <h2 className={styles.personTitle}>Nuestro Equipo</h2>
        <div className={styles.personCardContainer}>
          <PersonCard
            name="Cecilia Díaz Guajardo "
            profession="Terapeuta Ocupacional especializada en infancia"
            img="/ceci.webp"
          />
          <PersonCard
            name="Cecilia Díaz Guajardo "
            profession="Terapeuta Ocupacional especializada en infancia"
            img="/ceci.webp"
          />
          <PersonCard
            name="Cecilia Díaz Guajardo "
            profession="Terapeuta Ocupacional especializada en infancia"
            img="/isaac.webp"
          />
          <PersonCard
            name="Cecilia Díaz Guajardo "
            profession="Terapeuta Ocupacional especializada en infancia"
            img="/jose.webp"
          />
          <PersonCard
            name="Cecilia Díaz Guajardo "
            profession="Terapeuta Ocupacional especializada en infancia"
            img="/pete.webp"
          />
          <PersonCard
            name="Cecilia Díaz Guajardo "
            profession="Terapeuta Ocupacional especializada en infancia"
            img="/seba.webp"
          />
          <PersonCard
            name="Cecilia Díaz Guajardo "
            profession="Terapeuta Ocupacional especializada en infancia"
            img="/tami.webp"
          />
        </div>
      </div>
    </section>
  );
}
export default About;
