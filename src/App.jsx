import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Mainpage from "./components/pages/mainpage/Mainpage";
import Aboutpage from "./components/pages/aboutpage/Aboutpage";
import Modelspage from "./components/pages/modelspage/Modelspage";
import Testimonialspage from "./components/pages/testimonialspage/Testimonialspage";
import Teampage from "./components/pages/teampage/Teampage";
import Footer from "./components/footer/Footer";
import Contactpage from "./components/pages/contactpage/Contactpage.jsx";
import ScrollToTop from "./ScrollTotop";
function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/models" element={<Modelspage />} />
        <Route path="/testimonials" element={<Testimonialspage />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
