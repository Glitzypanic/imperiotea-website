import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
