import styles from "../Layout/Layout.module.css";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
