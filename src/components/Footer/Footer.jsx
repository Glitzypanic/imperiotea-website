import styles from "./Footer.module.css";

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
        <h3 className={styles.title}>Redes sociales</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div className={styles.list}>
        <h3 className={styles.title}>Contacto</h3>
        <ul>
          <li>WhatsApp: +569 24934020</li>
          <li>Email: contacto@imperiotea.com</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
