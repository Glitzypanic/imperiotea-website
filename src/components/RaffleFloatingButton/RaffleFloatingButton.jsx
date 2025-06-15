import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import styles from "./RaffleFloatingButton.module.css";

function RaffleFloatingButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasNewInfo, setHasNewInfo] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ha visto la información de la rifa
    const hasSeenRaffle = localStorage.getItem('raffleInfoSeen');
    if (!hasSeenRaffle) {
      setHasNewInfo(true);
    }
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setHasNewInfo(false);
    // Marcar que el usuario ha visto la información
    localStorage.setItem('raffleInfoSeen', 'true');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDontShowAgain = () => {
    setIsModalOpen(false);
    // Marcar que el modal no se muestre durante 7 días
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    localStorage.setItem('welcomeModalDontShow', expiryDate.toISOString());
  };

  return (
    <>      {/* Botón flotante */}
      <button
        className={`${styles.floatingButton} ${hasNewInfo ? styles.hasNewInfo : ''}`}
        onClick={handleOpenModal}
        aria-label="Ver información sobre la Rifa Anual Imperio TEA 2025"
        title="Rifa Anual Imperio TEA 2025"
      >
        {hasNewInfo && <span className={styles.newIndicator}></span>}
        <span className={styles.raffleIcon}>🎉</span>
        <span className={styles.buttonText}>Rifa 2025</span>
      </button>

      {/* Modal de la rifa */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="🎉 Rifa Anual Imperio TEA 2025"
      >
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <p style={{ 
            fontSize: '1.2rem', 
            fontWeight: '600', 
            color: '#1c5f9c', 
            marginBottom: '15px' 
          }}>
            ¡Ayúdanos a seguir transformando vidas!
          </p>
        </div>
        
        <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
          Nuestra corporación <strong>Imperio TEA</strong> comienza con la recolección de premios 
          para nuestra <strong>rifa anual que se sorteará en el mes de Agosto</strong>.
        </p>
        
        <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
          Se recolectarán premios que puedan ser donados durante los meses de 
          <strong> Junio y parte de Julio</strong>.
        </p>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px', 
          margin: '20px 0',
          border: '1px solid #e9ecef'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            fontWeight: '600', 
            marginBottom: '15px',
            color: '#333'
          }}>
            ¿Quieres donar un premio para la rifa?
          </p>
          
          <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
            Si eres una persona o institución que quiere donar algún premio, 
            por favor contáctanos:
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a 
              href="https://wa.me/56967045875"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#25D366',
                color: 'white',
                padding: '12px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                fontSize: '1rem',
                fontFamily: 'var(--secondary-font)'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#128C7E'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#25D366'}
              aria-label="Contactar por WhatsApp al número +56967045875"
            >
              <span style={{ fontSize: '1.2rem' }}>📱</span>
              <span style={{ fontFamily: 'monospace', letterSpacing: '1px' }}>
                WhatsApp: +56 9 6704 5875
              </span>
            </a>
            
            <a 
              href="mailto:Imperioteaoficial@gmail.com?subject=Donación para Rifa Anual Imperio TEA&body=Hola, me interesa donar un premio para la rifa anual de Imperio TEA."
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#1c5f9c',
                color: 'white',
                padding: '12px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                fontSize: '1rem'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#184e80'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#1c5f9c'}
              aria-label="Enviar email a Imperioteaoficial@gmail.com"
            >
              <span style={{ fontSize: '1.2rem' }}>✉️</span>
              Imperioteaoficial@gmail.com
            </a>
          </div>
        </div>
        
        <p style={{ 
          textAlign: 'center', 
          fontStyle: 'italic', 
          color: '#1c5f9c',
          fontWeight: '600',
          fontSize: '1.1rem',
          marginTop: '20px'
        }}>
          ¡De antemano muchas gracias a todos! 💙
        </p>
        
        <div style={{ textAlign: 'center', marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
          <button 
            onClick={handleDontShowAgain}
            style={{
              background: 'none',
              border: 'none',
              color: '#666',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
            aria-label="No mostrar este mensaje de nuevo por 7 días"
          >
            No mostrar de nuevo por 7 días
          </button>
        </div>
      </Modal>
    </>
  );
}

export default RaffleFloatingButton;
