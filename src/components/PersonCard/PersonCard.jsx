import styles from "./PersonCard.module.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function PersonCard({ name, profession, img, description }) {
  // Estado para controlar la visibilidad de la modal
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir la modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Función para cerrar la modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className={styles.personCard}>
      <img src={img} alt="Person" />
      <div className={styles.textContainer}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.profession}>{profession}</span>

        <button onClick={openModal}>Más información</button>
      </div>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/ceci.webp" alt="" />
            <div className={styles.modalResume}>
              <h2>{name}</h2>
              <span>{profession}</span>
              <p className={styles.description}>{description}</p>
              <button onClick={closeModal} className={styles.closeButton}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PersonCard;
