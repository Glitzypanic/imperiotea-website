import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoImporio from "/logo-imperio1.png";
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
      {" "}
      <header className={styles.navbar}>
        <Link to="/">
          <img src={logoImporio} alt="Logo" height={140} width={120} />
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
                Blog
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
        {isMenuOpen && (
          <motion.div
            className={`${styles.overlay} ${styles.showOverlay}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <motion.nav
              className={`${styles.nav} ${styles.responsiveNav}`}
              style={{ backgroundColor: "#1c5f9c", color: "white" }}
              role="navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
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
                <div className={styles.socialLinks}>
                  <a
                    href="https://web.facebook.com/imperio.tea.54"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                  <a
                    href="https://www.instagram.com/imperiotea/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiInstagram />
                  </a>
                </div>
              </ul>
              <button
                className={`${styles.navBtn} ${styles.navCloseBtn}`}
                onClick={closeMenu}
                aria-label="Cerrar menú"
              >
                <FaTimes />
              </button>
            </motion.nav>
          </motion.div>
        )}
      </header>
    </>
  );
}

export default Navbar;
