import styles from "./ContactCard.module.css";

// eslint-disable-next-line react/prop-types
function ContactCard({ img, title }) {
  return (
    <section className={styles.contact}>
      <img src={img} height={400} alt="" />
      <div className={styles.contactInfo}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>
          ¿Quieres hablar con nosotros? ¡Genial! Estamos aquí para responder tus
          preguntas, recibir tus comentarios y ayudarte en lo que necesites. ¡No
          dudes en contactarnos!
        </p>
        <button className={styles.button}>Chat en WhatsApp</button>
      </div>
    </section>
  );
}

export default ContactCard;
