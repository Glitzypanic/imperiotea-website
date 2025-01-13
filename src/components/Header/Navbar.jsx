import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Quienes somos</Link>
        </li>
        <li>
          <Link to="/news">Blog</Link>
        </li>
        <li>
          <Link to="/resources">Recursos</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
