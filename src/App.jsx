import "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/homePage/Home";
import AboutPage from "./pages/aboutPage/About";
import NewsPage from "./pages/newsPage/News";
import ResourcesPage from "./pages/resourcesPage/Resources";
import ContactPage from "./pages/contactPage/Contact";
import Error404Page from "./pages/errorPage/Error404";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exactly Component={HomePage} />
        <Route path="/about" exactly Component={AboutPage} />
        <Route path="/news" Component={NewsPage} />
        <Route path="/resources" Component={ResourcesPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="*" Component={Error404Page} />
      </Routes>
    </Layout>
  );
}

export default App;
