import { useEffect, useCallback, useRef } from "react";
import styles from "./Modal.module.css";

function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Función para cerrar el modal
  const closeModal = useCallback(() => {
    onClose();
    document.body.style.overflow = "auto"; // Restaurar scroll
  }, [onClose]);

  // Manejador de eventos de teclado para cerrar con Escape
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );
  // Efecto para manejar el scroll del body, event listeners y focus
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevenir scroll cuando el modal está abierto
      window.addEventListener("keydown", handleKeyDown);

      // Enfocar el botón de cerrar cuando se abre el modal
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;
  return (
    <div
      className={styles.modalOverlay}
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
      aria-describedby="modal-content"
      ref={modalRef}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={closeModal}
          aria-label="Cerrar modal"
          type="button"
          ref={closeButtonRef}
        >
          &times;
        </button>
        {title && (
          <h2 id="modal-title" className={styles.modalTitle}>
            {title}
          </h2>
        )}
        <div id="modal-content" className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
