import styles from "./NoticeCard.module.css";

function NoticeCard() {
  return (
    <section className={styles.noticeCard}>
      <img src="/public/notice.webp" alt="Imagen de una noticia" width={300} />
      <h3>Hola</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
        ratione, assumenda illum asperiores quasi quam pariatur sapiente! Iusto
        placeat, fugit et dolorem quas nulla iste incidunt reprehenderit culpa
        dolore ex?
      </p>
      <button>Saber mas +</button>
    </section>
  );
}

export default NoticeCard;
