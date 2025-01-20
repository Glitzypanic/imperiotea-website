import styles from "./NoticeCard.module.css";
import { FaPlus } from "react-icons/fa6";

function NoticeCard() {
  return (
    <section className={styles.noticeCard}>
      <img src="/notice.webp" alt="Imagen de una noticia" width={300} />
      <h3>Hola</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
        ratione, assumenda illum asperiores quasi quam pariatur sapiente! Iusto
        placeat, fugit et dolorem quas nulla iste incidunt reprehenderit culpa
        dolore ex?
      </p>
      <button aria-labelledby="button">
        Saber mas <FaPlus color={styles.icon} />
      </button>
    </section>
  );
}

export default NoticeCard;
