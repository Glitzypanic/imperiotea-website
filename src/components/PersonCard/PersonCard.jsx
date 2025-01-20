import styles from "./PersonCard.module.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function PersonCard({ name, profession, img }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.personCard}>
      <img src={img} alt="Person" width={300} height={300} />
      <div className={styles.textContainer}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.profession}>{profession}</span>
        {/* <p className={styles.description}>{description}</p> */}
        <button>Más información</button>
      </div>
    </section>
  );
}

export default PersonCard;
