import styles from "./ContactCard.module.css";

function ContactCard({ img, title, icon: Icon, contactType, description }) {
  const handleClick = () => {
    if (contactType === "whatsapp") {
      // WhatsApp link with phone number
      window.open("https://wa.me/+56967045875", "_blank");
    } else {
      // Email link
      window.open("mailto:Imperioteaoficial@gmail.com");
    }
  };

  return (
    <section className={styles.contact}>
      <img src={img} className={styles.illustration} alt="" />
      <div className={styles.contactInfo}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <button className={styles.button} onClick={handleClick}>
          <Icon className={styles.icon} />
          {contactType === "whatsapp" ? "Chat en WhatsApp" : "Enviar un correo"}
        </button>
      </div>
    </section>
  );
}

export default ContactCard;
