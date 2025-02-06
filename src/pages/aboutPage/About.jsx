import styles from "./About.module.css";
import PersonCard from "../../components/PersonCard/PersonCard";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImg}></div>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Sobre Nosotros</h1>
          <p className={styles.heroDescription}>
            Conoce nuestra historia, nuestro equipo y nuestra visión
          </p>
        </div>
      </div>
      <div className={styles.historyContainer}>
        <h2 className={styles.historySubtitle}>Historia</h2>

        <h3 className={styles.sectionTitle}>Nuestro Comienzo</h3>
        <p className={styles.sectionText}>
          El 16 de noviembre de 2018, un grupo de 10 familias con hijos
          diagnosticados con Trastorno del Espectro Autista (TEA) de la comuna
          de La Calera y sus alrededores, se unieron con un propósito común:
          mejorar la calidad de vida de sus niños. La necesidad era clara y
          urgente: había una alta demanda de servicios especializados en salud
          para niños autistas, pero el costo de estos servicios profesionales
          era prohibitivamente alto para muchas familias.
        </p>

        <h3 className={styles.sectionTitle}>
          Nuestro Modelo de Financiamiento
        </h3>
        <p className={styles.sectionText}>
          Así nació <strong>IMPERIO TEA</strong>, una corporación sin fines de
          lucro diseñada para brindar apoyo y recursos a estas familias. Desde
          sus inicios, IMPERIO TEA ha operado bajo un modelo de financiamiento
          comunitario. Las familias que forman parte de la corporación han sido
          fundamentales en la recaudación de fondos. Los métodos de recaudación
          incluyen:
        </p>
        <ul className={styles.sectionList}>
          <li className={styles.listItem}>
            <strong>Venta de Platos Únicos:</strong> Deliciosamente preparados y
            vendidos en eventos comunitarios.
          </li>
          <li className={styles.listItem}>
            <strong>Rifas:</strong> Organizadas durante reuniones periódicas.
          </li>
        </ul>
        <p className={styles.sectionText}>
          Estas actividades no solo sirven para financiar las operaciones de la
          corporación sino que también fortalecen el sentido de comunidad y
          apoyo entre las familias.
        </p>

        <h3 className={styles.sectionTitle}>Nuestro Crecimiento</h3>
        <p className={styles.sectionText}>
          A lo largo de los años, <strong>IMPERIO TEA</strong> ha crecido y se
          ha consolidado gracias al esfuerzo de todos. Hoy en día, contamos con
          un equipo de profesionales dedicados que reciben los recursos
          necesarios para llevar a cabo sesiones de terapia de alta calidad.
          Desde terapias ocupacionales hasta sesiones de lenguaje y
          comportamiento, cada niño recibe un tratamiento personalizado según
          sus necesidades específicas.
        </p>
        <p className={styles.sectionText}>
          Hoy en día, IMPERIO TEA no solo ofrece terapias sino que también ha
          mejorado la infraestructura para asegurar que las sesiones se realicen
          en un ambiente adecuado y estimulante. Además, la corporación ha
          podido adquirir herramientas y materiales didácticos que facilitan el
          trabajo de los terapeutas, asegurando que cada sesión no solo sea
          efectiva sino también enriquecedora para los niños.
        </p>

        <h3 className={styles.sectionTitle}>Nuestra Visión</h3>
        <p className={styles.sectionText}>
          La corporación sigue siendo una luz de esperanza y apoyo para muchas
          familias, demostrando que con esfuerzo, solidaridad y una visión
          clara, es posible superar las barreras económicas y de acceso a
          servicios de salud especializados para niños con autismo.{" "}
          <strong>IMPERIO TEA</strong> se ha convertido en un ejemplo de cómo la
          comunidad puede unir fuerzas para hacer una diferencia real en la vida
          de sus miembros más vulnerables.
        </p>
      </div>
      <div className={styles.PersonContainer}>
        <h2 className={styles.personTitle}>Nuestro Equipo</h2>
        <h3 className={styles.proSubtitle}>Profesionales</h3>
        <div className={styles.personCardContainer}>
          <PersonCard
            datos="Formación académica"
            name="Cecilia Díaz Guajardo"
            profession="Terapeuta Ocupacional especializada en infancia"
            img="/images/people/ceci.webp"
            description={
              "Terapeuta Ocupacional - Universidad de Playa Ancha\n" +
              "Diplomado experto en autismo - Hyperpraxis\n" +
              "Diplomado en NANEAS y sus familias - Sociedad Chilena de Pediatría\n" +
              "Diplomado en neurorrehabilitación infantil - Universidad Autónoma de Chile\n" +
              "Curso de teoría de integración sensorial - Corporación Chilena de IS\n" +
              "Curso de selectividad alimentaria - OTEC Movilizate"
            }
          />
          <PersonCard
            datos="Formación académica"
            name="John Iglesias Pérez"
            profession="Fonoaudiólogo"
            img="\images\people\john.webp"
            description={
              "Formación en Condición del Espectro Autista\n" +
              "Formación en Apraxia del Habla Infantil\n" +
              "Formación en Voz y Motricidad Orofacial\n" +
              "Certificado IDTEL\n" +
              "Certificado Internacional en ADOS-2\n" +
              "Certificado en Intervención DTTTC\n" +
              "Otoscopía y Lavado de Oídos"
            }
          />
          <PersonCard
            datos="Formación académica"
            name="Macarena Escobar Coccio"
            profession="Fonoaudióloga"
            img="\images\people\macarena.webp"
            description={
              "Evaluación, diagnóstico e intervención del lenguaje, habla y comunicación.\n" +
              "Enfocada en trastorno del Espectro Autista, inicio tardío y trastornos del lenguaje.\n" +
              "Diplomada en Neurociencia Educativa.\n" +
              "Con Formación en Estrategias de Intervención temprana en Tea.\n" +
              "Con Formación en Intervención Cognitiva y Lingüística en infancia temprana.\n" +
              "Certificada en aplicación de IDTEL (Instrumento de Diagnóstico para los trastornos Específicos del Lenguaje)."
            }
          />
          <PersonCard
            datos="Formación académica"
            name="Ornella Maldonado"
            profession="Psicóloga Clínica"
            img="\images\people\ornella.webp"
            description={
              "Diplomada en psico diagnóstico Infanto-Juvenil\n" +
              "Acreditación Oficial Clínica Internacional ADOS-2\n" +
              "Certificación Avanzada en WISC-V y ADI-R\n"
            }
          />
          <PersonCard
            datos="Formación académica"
            name="Maricela González"
            profession="Educadora Diferencial"
            img="\images\people\maricela.webp"
            description={
              "Psicopedagoga licensiada en eduación\n" +
              "Especialista en:\n" +
              "Dificultades de aprendizaje - TEA - NEE\n" +
              "Adquisición a la lecto escritura y cálculo\n" +
              "Estrategias de comprensión lectora\n" +
              "Atención temprana a niños(as) que presenten alguna NEE desde los 2 años\n"
            }
          />
          <PersonCard
            datos="Formación académica"
            name="Javiera Villarroel López"
            profession="Terapeuta Ocupacional"
            img="\images\people\javiera.webp"
            description={
              "Licenciada en Ocupación Humana\n" +
              "Certificada en:\n" +
              "Transtornos del Neurodesarrollo\n" +
              "Salud mental Infanto-Juvenil\n" +
              "Transtorno del espectro autista\n" +
              "Estrategias de integración sensorial\n"
            }
          />
        </div>
        <h3 className={styles.directiveSubtitle}>Directiva</h3>
        <div className={styles.personCardContainer}>
          <PersonCard
            datos="Información de contacto"
            name="Cesar Antonio Espinoza Gonzalez"
            profession="Presidente"
            img="\images\people\cesar.webp"
            description={
              "+569 67045875\n" + "Presidente.Imperiotea@gmail.com\n"
            }
          />
        </div>
      </div>
    </section>
  );
}
export default About;
