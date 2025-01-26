import styles from "./ContactCard.module.css";

// eslint-disable-next-line react/prop-types
function ContactCard({ img, title, icon: Icon, contactType, description }) {
  return (
    <section className={styles.contact}>
      <img src={img} className={styles.illustration} alt="" />
      <div className={styles.contactInfo}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <button className={styles.button}>
          <Icon className={styles.icon} />
          {contactType === "whatsapp" ? "Chat en WhatsApp" : "Enviar un correo"}
        </button>
      </div>
    </section>
  );
}

export default ContactCard;
