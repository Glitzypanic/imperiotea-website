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
            description="Terapeuta Ocupacional especializada en infancia
Egresada de la Universidad de Playa Ancha
Diplomado experto en autismo, Hyperpraxis 
Diplomado en neurorrehabilitación infantil e integración sensorial, Universidad Autónoma de Chile
Diplomado en NANEAS y sus familias, Sociedad Chilena de Pediatría 
Curso de introducción a la teoría de integración sensorial, Corporación Chilena de IS
Curso de TO en rechazo y selectividad alimentaria en niños y niñas, OTEC Movilizate"
          />
          <PersonCard
            name="John Iglesias Pérez"
            profession="Fonoaudiólogo"
            img="/john.webp"
          />
          <PersonCard
            name="Macarena Escobar Coccio"
            profession="Fonoaudióloga"
            img="/macarena.webp"
          />
        </div>
      </div>
    </section>
  );
}
export default About;
