import styles from "./Footer.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="" alt="" />
      <div className={styles.list}>
        <h3 className={styles.title}>Enlaces</h3>
        <ul>
          <li>Inicio</li>
          <li>Quienes somos</li>
          <li>Blog</li>
          <li>Recursos</li>
          <li>Contacto</li>
        </ul>
      </div>

      <div className={styles.list}>
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
            <FaFacebookSquare className={styles.socialIcon} />
          </li>
          <li className={styles.socialItem}>
            <FaXTwitter className={styles.socialIcon} />
          </li>
          <li className={styles.socialItem}>
            <FiInstagram className={styles.socialIcon} />
          </li>
          <li className={styles.socialItem}>
            <FaLinkedin className={styles.socialIcon} />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
