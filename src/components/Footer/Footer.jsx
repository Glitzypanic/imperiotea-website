import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoMapSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import styles from "./Footer.module.css";

function Footer() {
  const openGoogleMaps = () => {
    // Aquí puedes poner la dirección que deseas mostrar
    const address = "Pérez Canto #612, La Caleta, Valparaiso"; // Ejemplo: Dirección de Googleplex

    // URL base de Google Maps para búsqueda de direcciones
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;

    // Abre la URL en una nueva pestaña
    window.open(googleMapsUrl, "_blank");
  };
  return (
    <footer className={styles.footer}>
      <img src="/logo-imperio1.png" alt="" className={styles.logo} />
      <div className={styles.list}>
        <h3 className={styles.title}>Enlaces</h3>
        <ul>
          <li>Inicio</li>
          <li>Quiénes somos</li>
          <li>Blog</li>
          {/* <li>Recursos</li> */}
          <li>Contacto</li>
        </ul>
      </div>

      <div className={styles.listContact}>
        <h3 className={styles.title}>Contacto</h3>
        <ul>
          <li className={styles.contactItem}>
            <FaWhatsapp className={styles.contactIcon} />
            +569 24934020
          </li>
          <li className={styles.contactItem}>
            <MdOutlineMail className={styles.contactIcon} />
            contacto@imperiotea.com
          </li>
        </ul>
      </div>

      <div className={styles.socialContainer}>
        <h3 className={styles.socialTitle}>Redes sociales</h3>
        <ul className={styles.socialList}>
          <li className={styles.socialItem}>
            <a href="https://web.facebook.com/imperio.tea.54" target="blank">
              <FaFacebookSquare className={styles.socialIcon} />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="https://www.instagram.com/imperiotea/" target="blank">
              <FiInstagram className={styles.socialIcon} />
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.addressContainer}>
        <h3 className={styles.addressTitle}>Dirección</h3>
        <ul>
          <li>
            <SiGooglemaps />
            Arturo Pérez Canto #612
          </li>
          <button onClick={openGoogleMaps} className={styles.mapButton}>
            <IoMapSharp />
            Ver en el mapa
          </button>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
