// eslint-disable-next-line no-unused-vars
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./pages/homePage/Home.jsx";
import AboutPage from "./pages/aboutPage/About.jsx";
import NewsPage from "./pages/newsPage/News.jsx";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import ResourcesPage from "./pages/resourcesPage/Resources";
// import ContactPage from "./pages/contactPage/Contact";
import Error404Page from "./pages/errorPage/Error404.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exactly Component={HomePage} />
        <Route path="/about" exactly Component={AboutPage} />
        <Route path="/news" Component={NewsPage} />
        {/* <Route path="/resources" Component={ResourcesPage} /> */}
        {/* <Route path="/contact" Component={ContactPage} /> */}
        <Route path="*" Component={Error404Page} />
      </Routes>
      <SpeedInsights />
    </Layout>
  );
}

export default App;
