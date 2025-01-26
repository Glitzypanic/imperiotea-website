import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoMapSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import styles from "./Footer.module.css";

function Footer() {
  const openGoogleMaps = () => {
    const address = "Pérez Canto #612, La Caleta, Valparaiso";

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;

    window.open(googleMapsUrl, "_blank");
  };

  const contactItems = [
    {
      icon: <FaWhatsapp className={styles.contactIcon} />,
      text: "+569 24934020",
    },
    {
      icon: <MdOutlineMail className={styles.contactIcon} />,
      text: "contacto@imperiotea.com",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookSquare className={styles.socialIcon} />,
      url: "https://web.facebook.com/imperio.tea.54",
    },
    {
      icon: <FiInstagram className={styles.socialIcon} />,
      url: "https://www.instagram.com/imperiotea/",
    },
  ];

  // Componente reutilizable para secciones
  // eslint-disable-next-line react/prop-types
  const Section = ({ title, children, isSocial }) => (
    <div className={styles.sectionContainer}>
      <h3
        className={`${styles.sectionTitle} ${
          isSocial ? styles.socialTitle : ""
        }`}
      >
        {title}
      </h3>
      {children}
    </div>
  );

  return (
    <footer className={styles.footer}>
      <Link to="/">
        <img
          src="/logo-imperio1.png"
          alt="Logo Imperio Tea"
          className={styles.logo}
        />
      </Link>

      <div className={styles.bottom}>
        <div>
          <Section title="Enlaces">
            <ul>
              {["/", "/about", "/news", "/contact"].map((path, index) => (
                <li key={index} className={styles.interactiveItem}>
                  <Link to={path}>
                    {
                      {
                        "/": "Inicio",
                        "/about": "Quiénes somos",
                        "/news": "Blog",
                        "/contact": "Contacto",
                      }[path]
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Contacto">
            <ul>
              {contactItems.map((item, index) => (
                <li key={index} className={styles.sectionItem}>
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <div>
          <Section title="Redes sociales" isSocial>
            <ul className={styles.socialList}>
              {socialLinks.map((link, index) => (
                <li key={index} className={styles.socialItem}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Dirección">
            <ul>
              <li className={styles.sectionItem}>
                <SiGooglemaps />
                Arturo Pérez Canto #612
              </li>
              <li>
                <button
                  onClick={openGoogleMaps}
                  className={`${styles.mapButton} ${styles.interactiveItem}`}
                >
                  <IoMapSharp />
                  Ver en el mapa
                </button>
              </li>
            </ul>
          </Section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
