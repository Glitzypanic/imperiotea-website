import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoMapSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import logoImporio from "/logo-imperio-1.png";
import styles from "./Footer.module.css";

function Footer() {
  const openGoogleMaps = () => {
    const address = "Pérez Canto #612, La Caleta, Valparaiso";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactItems = [
    {
      icon: <FaWhatsapp className={styles.contactIcon} />,
      text: "+569 67045875",
      url: "https://wa.me/56967045875",
    },
    {
      icon: <MdOutlineMail className={styles.contactIcon} />,
      text: "Presidente.Imperiotea@gmail.com",
      url: "mailto:Presidente.Imperiotea@gmail.com",
    },
    {
      icon: <MdOutlineMail className={styles.contactIcon} />,
      text: "Secretaria.Imperiotea@gmail.com",
      url: "mailto:Secretaria.Imperiotea@gmail.com",
    },
    {
      icon: <MdOutlineMail className={styles.contactIcon} />,
      text: "Tesorera.Imperiotea@gmail.com",
      url: "mailto:Tesorera.Imperiotea@gmail.com",
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
      <Link to="/" onClick={scrollToTop}>
        <img src={logoImporio} alt="Logo Imperio Tea" className={styles.logo} />
      </Link>

      <div className={styles.bottom}>
        <div className={styles.sections}>
          <Section title="Enlaces" className={styles.linksSection}>
            <ul className={styles.interactiveList}>
              {["/", "/about", "/news", "/contact"].map((path, index) => (
                <li key={index} className={styles.interactiveItem}>
                  <Link to={path} onClick={scrollToTop}>
                    {
                      {
                        "/": "Inicio",
                        "/about": "Quiénes somos",
                        "/news": "Blog",
                      }[path]
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Contacto" className={styles.contactSection}>
            <ul className={styles.contactList}>
              {contactItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    rel="noopener noreferrer"
                    className={styles.contactItems}
                  >
                    {item.icon}
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <div className={styles.sections}>
          <Section
            title="Redes sociales"
            isSocial
            className={styles.socialSection}
          >
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

          <Section title="Dirección" className={styles.addressSection}>
            <ul className={styles.addressList}>
              <li className={styles.addressContainer}>
                <SiGooglemaps className={styles.addressIcon} />
                Arturo Pérez Canto #612
              </li>
              <li>
                <button
                  onClick={openGoogleMaps}
                  className={`${styles.mapButton} ${styles.interactiveItem}`}
                >
                  <IoMapSharp className={styles.addressIcon} />
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
