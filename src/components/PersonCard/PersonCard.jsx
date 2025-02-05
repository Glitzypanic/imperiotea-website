import styles from "./PersonCard.module.css";
import { useState } from "react";
function PersonCard({ name, profession, img, description, datos }) {
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
        <div className={styles.text}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.profession}>{profession}</span>
        </div>
        <button onClick={openModal}>Más información</button>
      </div>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={img} alt="" />
            <div className={styles.modalResume}>
              <h2>{name}</h2>
              <span>{profession}</span>

              {/* Reemplazar el párrafo simple por lista estructurada */}
              {description && (
                <div className={styles.qualifications}>
                  <h3 className={styles.qualificationsTitle}>{datos}</h3>
                  <ul className={styles.qualificationsList}>
                    {description.split("\n").map((item, index) => (
                      <li key={index} className={styles.qualificationItem}>
                        {item.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
