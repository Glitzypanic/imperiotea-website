import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { newsData } from "../../data/newsData.js";
import { Link } from "react-router-dom";
import styles from "./NewsDetail.module.css";

function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Función para abrir el popover con la imagen seleccionada
  const openImagePopover = (image, index) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden"; // Prevenir scroll cuando el popover está abierto
  };

  // Función para cerrar el popover
  const closeImagePopover = useCallback(() => {
    setSelectedImage(null);
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto"; // Restaurar scroll
  }, []);

  // Función para navegar a la imagen anterior
  const goToPreviousImage = useCallback(() => {
    if (!news || !news.imageCollage || selectedImageIndex === null) return;
    
    const newIndex = selectedImageIndex === 0 
      ? news.imageCollage.length - 1 
      : selectedImageIndex - 1;
    
    setSelectedImage(news.imageCollage[newIndex]);
    setSelectedImageIndex(newIndex);
  }, [news, selectedImageIndex]);

  // Función para navegar a la imagen siguiente
  const goToNextImage = useCallback(() => {
    if (!news || !news.imageCollage || selectedImageIndex === null) return;
    
    const newIndex = selectedImageIndex === news.imageCollage.length - 1 
      ? 0 
      : selectedImageIndex + 1;
    
    setSelectedImage(news.imageCollage[newIndex]);
    setSelectedImageIndex(newIndex);
  }, [news, selectedImageIndex]);

  // Manejador de eventos de teclado para navegación
  const handleKeyDown = useCallback((event) => {
    if (selectedImage === null) return;
    
    if (event.key === 'ArrowLeft') {
      goToPreviousImage();
    } else if (event.key === 'ArrowRight') {
      goToNextImage();
    } else if (event.key === 'Escape') {
      closeImagePopover();
    }
  }, [selectedImage, goToPreviousImage, goToNextImage, closeImagePopover]);

  // Efecto para añadir/eliminar el event listener de teclado
  useEffect(() => {
    if (selectedImage !== null) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, handleKeyDown]);

  useEffect(() => {
    // Desplazar la vista hacia arriba cuando se carga el componente
    window.scrollTo(0, 0);

    // console.log("ID recibido:", id);
    // console.log("Tipo de ID:", typeof id);
    // console.log("newsData disponible:", newsData);

    const foundNews = newsData.find((item) => {
      // console.log("Comparando con item.id:", item.id, "tipo:", typeof item.id);
      return item.id === parseInt(id);
    });

    // console.log("Noticia encontrada:", foundNews);
    setNews(foundNews);
  }, [id]);

  if (!news) {
    return <div className={styles.notFound}>Noticia no encontrada</div>;
  }

  return (
    <div className={styles.newsDetail}>
      <div className={styles.header}>
        <span className={styles.type}>{news.type}</span>
        <h1 className={styles.title}>{news.title}</h1>
        <p className={styles.date}>{news.date}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={news.image} alt={news.alt} />
      </div>

      <div className={styles.content}>
        <p className={styles.description}>{news.description}</p>
        {news.content && (
          <div className={styles.fullContent}>
            <p>{news.content}</p>
          </div>
        )}
      </div>
      {news.imageCollage && news.imageCollage.length > 0 && (
        <div className={styles.collageContainer}>
          <h2 className={styles.collageTitle}>Galería de imágenes</h2>
          <div className={styles.imageCollage}>
            {news.imageCollage.map((image, index) => (
              <div
                key={index}
                className={styles.collageItem}
                onClick={() => openImagePopover(image, index)}
              >
                <img
                  src={image}
                  alt={`${news.title} - imagen ${index + 1}`}
                  className={styles.collageImage}
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.viewIcon}>+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Popover para ver la imagen en tamaño completo */}
      {selectedImage && (
        <div className={styles.imagePopoverOverlay} onClick={closeImagePopover}>
          <div
            className={styles.imagePopoverContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeImagePopover}>
              &times;
            </button>
            <button 
              className={styles.navButton} 
              onClick={goToPreviousImage}
              style={{ left: '10px' }}
              aria-label="Imagen anterior"
            >
              <span className={styles.navArrow}>&lt;</span>
            </button>
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className={styles.popoverImage}
            />
            <button 
              className={styles.navButton} 
              onClick={goToNextImage}
              style={{ right: '10px' }}
              aria-label="Imagen siguiente"
            >
              <span className={styles.navArrow}>&gt;</span>
            </button>
          </div>
        </div>
      )}
      <div className={styles.buttonContainer}>
        <Link to="/news" className={styles.backButton}>
          Volver
        </Link>
      </div>
    </div>
  );
}

export default NewsDetail;
