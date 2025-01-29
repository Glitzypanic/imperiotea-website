import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.navbar}>
        <Link to="/">
          <img src="/logo-imperio1.png" alt="Logo" height={140} width={120} />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                Quiénes somos
              </Link>
            </li>
            <li>
              <Link to="/news" onClick={closeMenu}>
                Noticias
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className={styles.navBtn}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <FaBars />
        </button>
        <motion.div
          className={`${styles.overlay} ${
            isMenuOpen ? styles.showOverlay : ""
          }`}
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        >
          <motion.nav
            className={`${styles.nav} ${
              isMenuOpen ? styles.responsiveNav : ""
            }`}
            style={{ backgroundColor: "#1c5f9c", color: "white" }}
            role="navigation"
            initial={{ x: "100%" }}
            animate={{ x: isMenuOpen ? 0 : "100%" }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link to="/news" onClick={closeMenu}>
                  Noticias
                </Link>
              </li>
            </ul>
            <button
              className={`${styles.navBtn} ${styles.navCloseBtn}`}
              onClick={toggleMenu}
              aria-label="Cerrar menú"
            >
              <FaTimes />
            </button>
          </motion.nav>
        </motion.div>
      </header>
    </>
  );
}

export default Navbar;
