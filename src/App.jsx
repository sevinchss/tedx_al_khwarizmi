import { Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import "aos/dist/aos.css";
import { useEffect } from "react";

const getTitle = (pathname) => {
  switch (pathname) {
    case "/ ":
      return "Portfolio of Sevinch(sardorovnass).";
   
    case "#about":
      return "Portfolio of Sevinch(sardorovnass).";
 
    default:
      return "Portfolio of Sevinch(sardorovnass).";
  }
};

const getDescription = (pathname) => {
  switch (pathname) {
    case "/":
      return "Welcome to the Portfolio of Sevinch Sayfutdinova.";
  
    case "#about":
      return "Learn more about me and my mission.";
 
    default:
      return "Portfolio of Sevinch(sardorovnass).";
  }
};
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos");
      AOS.init({
        duration: 600,
        once: true,
        disable: function () {
          var maxWidth = 500;
          return window.innerWidth < maxWidth;
        },
      });
    };
    loadAOS();
  }, []);
  return (
    <>
      <Helmet>
        <title>{getTitle(pathname)}</title>
        <meta name="description" content={getDescription(pathname)} />
      </Helmet>


      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
