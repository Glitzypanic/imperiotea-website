/* eslint-disable react/prop-types */
import styles from "./InfoCard.module.css";

function InfoCard({ title, image, description }) {
  return (
    <section className={styles.infoCard} aria-label={title}>
      <div className={styles.imageContainer}>
        <img src={image} height={300} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}

export default InfoCard;
