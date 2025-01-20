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
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut porro ab, harum a nam voluptas placeat inventore ipsa, blanditiis ratione excepturi soluta aperiam consectetur totam maiores voluptatem quas sapiente assumenda."
          alt="Ilustracion de una mision"
        />
        <InfoCard
          title="Visión"
          image="/vision.svg"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut porro ab, harum a nam voluptas placeat inventore ipsa, blanditiis ratione excepturi soluta aperiam consectetur totam maiores voluptatem quas sapiente assumenda."
          alt="Ilustracion de una vision"
        />
        <InfoCard
          title="Valores"
          image="/valores.svg"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut porro ab, harum a nam voluptas placeat inventore ipsa, blanditiis ratione excepturi soluta aperiam consectetur totam maiores voluptatem quas sapiente assumenda."
          alt="Ilustracion de valores"
        />
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
