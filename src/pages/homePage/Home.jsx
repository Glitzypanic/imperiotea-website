import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import Description from "../../components/Description/Description";
import InfoCard from "../../components/InfoCards/InfoCard";
import NoticeCard from "../../components/NoticeCards/NoticeCard";
import Goals from "../../components/Goals/Goals";
import ContactCard from "../../components/ContactCard/ContactCard";
import Modal from "../../components/Modal/Modal";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

// Imagenes
import misionIcon from "/icons/mision.svg";
import visionIcon from "/icons/vision.svg";
import valoresIcon from "/icons/valores.svg";
import messageIcon from "/icons/Message.svg";
import questionIcon from "/icons/Question.svg";

import { newsData } from "../../data/newsData.js";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    // Verificar si el usuario marcó "No mostrar de nuevo"
    const dontShowUntil = localStorage.getItem("welcomeModalDontShow");
    if (dontShowUntil) {
      const expiryDate = new Date(dontShowUntil);
      if (new Date() < expiryDate) {
        return; // No mostrar el modal
      } else {
        // La fecha expiró, eliminar la entrada
        localStorage.removeItem("welcomeModalDontShow");
      }
    }

    // Verificar si el modal ya fue mostrado en esta sesión
    const modalShown = sessionStorage.getItem("welcomeModalShown");
    if (!modalShown) {
      setIsModalOpen(true);
    }
  }, []);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Marcar que el modal ya fue mostrado en esta sesión
    sessionStorage.setItem("welcomeModalShown", "true");
  };

  const handleDontShowAgain = () => {
    setIsModalOpen(false);
    // Marcar que el modal no se muestre durante 7 días
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    localStorage.setItem("welcomeModalDontShow", expiryDate.toISOString());
    sessionStorage.setItem("welcomeModalShown", "true");
  };

  return (
    <main className={styles.home}>
      {/* Modal de bienvenida */}{" "}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="🎉 Rifa Anual Imperio TEA 2025"
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#1c5f9c",
              marginBottom: "15px",
            }}
          >
            ¡Ayúdanos a seguir transformando vidas!
          </p>
        </div>

        <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
          Nuestra corporación <strong>Imperio TEA</strong> comienza con la
          recolección de premios para nuestra{" "}
          <strong>rifa anual que se sorteará en el mes de Agosto</strong>.
        </p>

        <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
          Se recolectarán premios que puedan ser donados durante los meses de
          <strong> Junio y parte de Julio</strong>.
        </p>

        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px 0",
            border: "1px solid #e9ecef",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              marginBottom: "15px",
              color: "#333",
            }}
          >
            ¿Quieres donar un premio para la rifa?
          </p>

          <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
            Si eres una persona o institución que quiere donar algún premio, por
            favor contáctanos:
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {" "}
            <a
              href="https://wa.me/56967045875"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#25D366",
                color: "white",
                padding: "12px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s ease",
                fontSize: "1rem",
                fontFamily: "var(--secondary-font)",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#128C7E")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#25D366")}
              aria-label="Contactar por WhatsApp al número +56967045875"
            >
              <span style={{ fontSize: "1.2rem" }}>📱</span>
              <span style={{ fontFamily: "monospace", letterSpacing: "1px" }}>
                WhatsApp: +56 9 6704 5875
              </span>
            </a>
            <a
              href="mailto:Imperioteaoficial@gmail.com?subject=Donación para Rifa Anual Imperio TEA&body=Hola, me interesa donar un premio para la rifa anual de Imperio TEA."
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#1c5f9c",
                color: "white",
                padding: "12px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s ease",
                fontSize: "1rem",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#184e80")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#1c5f9c")}
              aria-label="Enviar email a Imperioteaoficial@gmail.com"
            >
              <span style={{ fontSize: "1.2rem" }}>✉️</span>
              Imperioteaoficial@gmail.com
            </a>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            fontStyle: "italic",
            color: "#1c5f9c",
            fontWeight: "600",
            fontSize: "1.1rem",
            marginTop: "20px",
          }}
        >
          ¡De antemano muchas gracias a todos! 💙
        </p>

        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
            paddingTop: "20px",
            borderTop: "1px solid #eee",
          }}
        >
          <button
            onClick={handleDontShowAgain}
            style={{
              background: "none",
              border: "none",
              color: "#666",
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
            aria-label="No mostrar este mensaje de nuevo por 7 días"
          >
            No mostrar de nuevo por 7 días
          </button>
        </div>
      </Modal>
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
