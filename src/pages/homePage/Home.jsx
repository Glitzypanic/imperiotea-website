import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import Description from "../../components/Description/Description";
import InfoCard from "../../components/InfoCards/InfoCard";
import NoticeCards from "../../components/NoticeCards/NoticeCard";
import Goals from "../../components/Goals/Goals";
import ContactCard from "../../components/ContactCard/ContactCard";

function Home() {
  return (
    <main className={styles.home}>
      {/* Hero de la fundación */}
      <Hero />

      {/* Descripcion de la fundación */}
      <Description />

      {/* Mision, vision, valores */}
      <section className={styles.infoCards}>
        <InfoCard
          title="Misión"
          image="/mision.svg"
          alt="Ilustracion de una mision"
        >
          <p>
            Somos una corporación social sin fines de lucro, dedicada a apoyar y
            agrupar a familias diagnosticadas con TRASTORNO DEL ESPECTRO AUTISTA
            (TEA), facilitando el acceso a diversas terapias y servicios
            especializados para niños, niñas, adolescentes y adultos, desde el
            diagnóstico profesional hasta su integración en la vida diaria. Nos
            comprometemos a proporcionar un entorno inclusivo y de apoyo,
            promoviendo la integración social y defendiendo los derechos de las
            personas con autismo y sus familias, asegurando así un camino hacia
            una mejor calidad de vida.
            {/* Somos una corporación socia sin fines de lucro, que agrupa a
            familias diagnosticadas con{" "}
            <span className={styles.bold}>
              TRASTORNO DEL ESPECTRO AUTISTA (TEA){" "}
            </span>
            , facilitando el acceso a diferentes terapias a bajo costo para los
            niños, niñas, adolescentes y adultos, apoyando profesionalmente a
            las familias que viven este proceso. Favorecemos su integración
            social y defendemos los derechos de las personas con autismo y sus
            familias */}
          </p>
        </InfoCard>
        <InfoCard
          title="Visión"
          image="/vision.svg"
          alt="Ilustracion de una vision"
        >
          <p>
            Ser una corporación reconocida por el impacto positivo de nuestras
            acciones, trabajando codo a codo con centros educacionales,
            consultorios médicos, y municipios, para crear un reconocimiento y
            una inclusión efectiva de las personas con TEA. Nuestra meta es
            expandir nuestro alcance para llegar a más familias en necesidad,
            potenciar nuestra labor creando conciencia sobre el autismo, y
            fomentar una sociedad más inclusiva. Queremos ser líderes en la
            promoción de la sensibilización y en la creación de oportunidades
            para que cada individuo con autismo pueda alcanzar su máximo
            potencial y vivir en una comunidad que los valore y respete.
            {/* Ser una corporación reconocida por el impacto social de nuestras
            actuaciones, trabajando codo a codo con centros educacionales,
            consultorios y municipalidad para el reconocimiento de esta
            agrupación y llegar a mas familias en ayuda. Potenciar nuestra labor
            y crecer hacia otras comunas ya sea inculcando nuestra labor social
            para sensibilizar y crear conciencia de esta condición y conectar a
            las personas con autismo a la sociedad. */}
          </p>
        </InfoCard>
        <InfoCard
          title="Valores"
          image="/valores.svg"
          alt="Ilustracion de valores"
        >
          <p>
            Como agrupación sin fin de lucro nos comprometemos a entregar,
            calidad, respeto, responsabilidad social, honestidad en cada una de
            nuestras sesiones y en el día a día de nuestra corporación. <br />
            <span className={styles.bold}>Compromiso:</span> Entregar calidad a
            nuestros socios para cada una de sus sesiones. <br />{" "}
            <span className={styles.bold}> Innovación y mejora continua:</span>{" "}
            Tener las herramientas adecuadas para optimizar y ser más
            eficientes. <br />{" "}
            <span className={styles.bold}>Participación:</span> Los aportes de
            cada miembro de la agrupación es importante para el desarrollo de
            nuestras acciones. <br />{" "}
            <span className={styles.bold}>Respeto:</span> Respetamos a cada uno
            de los miembros atendidos, a sus familias y nuestros profesionales.
          </p>
        </InfoCard>
      </section>

      {/* Proyectos */}
      <Goals />

      {/* Contacto */}
      <div className={styles.contactContainer}>
        <ContactCard img="/Question.svg" title="Tienes alguna pregunta?" />
        <ContactCard img="/Message.svg" title="Envianos un Email" />
      </div>

      {/* Noticias */}
      <section className={styles.noticeCards}>
        <h2>Ultimas Noticias</h2>
        <div className={styles.cards}>
          <NoticeCards />
          <NoticeCards />
          <NoticeCards />
        </div>
      </section>
    </main>
  );
}

export default Home;
