import styles from "./InfoCard.module.css";

const InfoCard = ({ title, image, children }) => {
  return (
    <section className={styles.infoCard} aria-label={title}>
      <div className={styles.imageContainer}>
        <img src={image} height={300} alt="" />
      </div>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default InfoCard;
