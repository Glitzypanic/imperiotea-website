import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import Description from "../../components/Description/Description";
import InfoCard from "../../components/InfoCards/InfoCard";
import NoticeCard from "../../components/NoticeCards/NoticeCard";
import Goals from "../../components/Goals/Goals";
import ContactCard from "../../components/ContactCard/ContactCard";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

// Imagenes
import misionIcon from "/icons/mision.svg?url";
import visionIcon from "/icons/vision.svg?url";
import valoresIcon from "/icons/valores.svg?url";
import messageIcon from "/icons/Message.svg?url";
import questionIcon from "/icons/Question.svg?url";

import { newsData } from "../../data/newsData.js";

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
          image={misionIcon}
          alt="Ilustración de dos personas uniendo piezas de un rompecabezas, simbolizando la misión de una corporación social sin fines de lucro"
        >
          <p>
            Somos una corporación social sin fines de lucro, dedicada a apoyar y
            agrupar a familias diagnosticadas con{" "}
            <span className={styles.bold}>
              TRASTORNO DEL ESPECTRO AUTISTA (TEA)
            </span>
            , facilitando el acceso a diversas terapias y servicios
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
          image={visionIcon}
          alt="Ilustración de varias manos levantadas con diferentes colores de piel y ropa, representando diversidad y visión"
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
          image={valoresIcon}
          alt="Ilustración de una persona con una bombilla sobre la cabeza, representando los valores de una organización sin fines de lucro"
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
        <ContactCard
          img={questionIcon}
          alt="Ilustración de una persona pensando con un signo de interrogación sobre su cabeza, acompañada del texto ¿Tienes alguna pregunta?"
          title="¿Tienes alguna pregunta?"
          icon={FaWhatsapp}
          contactType="whatsapp"
          description="¿Necesitas apoyo inmediato?
En Imperio TEA, entendemos que a veces necesitas hablar con alguien de inmediato. Si tienes una situación urgente o simplemente quieres una conversación rápida sobre TEA, estamos aquí para ti. ¡Contáctanos por WhatsApp para una respuesta rápida y personalizada!"
        />
        <ContactCard
          img={messageIcon}
          alt="Ilustración de una persona sosteniendo un sobre grande con documentos, acompañada del texto ¿Quieres enviarnos un email?"
          title="¿Quieres enviarnos un email?"
          icon={MdOutlineMail}
          contactType="email"
          description="¿Quieres compartir tu historia o recibir información detallada?
En Imperio TEA, valoramos cada voz y experiencia. Si deseas enviarnos una historia personal, solicitar información detallada sobre nuestros servicios, o participar en nuestras iniciativas, el email es el mejor camino. Envíanos un correo y únete a nuestra red de apoyo, donde podemos explorar juntos el mundo del autismo con tiempo y detalle."
        />
      </div>

      {/* Noticias */}
      <section className={styles.noticeCards}>
        <h2>Ultimas Noticias</h2>
        <div className={styles.cards}>
          {newsData
            .slice()
            .sort((a, b) => b.id - a.id) // Ordenar por ID de mayor a menor
            .slice(0, 3) // Tomar solo las primeras 3 noticias
            .map((news) => (
              <NoticeCard
                key={news.id}
                id={news.id}
                type={news.type}
                title={news.title}
                date={news.date}
                description={news.description}
                content={news.content}
                image={news.image}
                alt={news.alt}
                link={news.link}
              />
            ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
