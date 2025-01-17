import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const navRef = useRef();

  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={styles.navbar}>
      <nav
        ref={navRef}
        className={`${styles.list} ${isScrolled ? styles.navbarHidden : ""}`}
      >
        <a>
          <Link to="/">Inicio</Link>
        </a>
        <a>
          <Link to="/about">Quienes somos</Link>
        </a>
        <a>
          <Link to="/news">Blog</Link>
        </a>
        <a>
          <Link to="/resources">Recursos</Link>
        </a>
        <a>
          <Link to="/contact">Contacto</Link>
        </a>
        <button
          className={`${styles.navBtn} ${styles.navCloseBtn}`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className={styles.navBtn} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
