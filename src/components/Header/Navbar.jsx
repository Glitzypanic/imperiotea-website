import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const navRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle(styles.responsiveNav);
    }
  };

  const isActive = (path) => {
    return location.pathname == path ? styles.active : "";
  };

  return (
    <header className={styles.navbar}>
      <img src="/logo.svg" alt="" height={120} width={120} />
      <nav
        ref={navRef}
        className={`${isScrolled ? styles.navbarHidden : ""}`}
        role="navigation"
      >
        <ul>
          <li>
            <Link to="/" className={isActive("/")}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about")}>
              Quienes somos
            </Link>
          </li>
          <li>
            <Link to="/news" className={isActive("/news")}>
              Noticias
            </Link>
          </li>
          <li>
            <Link to="/resources" className={isActive("/resources")}>
              Recursos
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive("/contact")}>
              Contacto
            </Link>
          </li>
        </ul>
        <button
          className={`${styles.navBtn} ${styles.navCloseBtn}`}
          onClick={showNavbar}
          aria-label="Cerrar menú"
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className={styles.navBtn}
        onClick={showNavbar}
        aria-label="Abrir menú"
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
