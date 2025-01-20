import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

// eslint-disable-next-line react/prop-types
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
