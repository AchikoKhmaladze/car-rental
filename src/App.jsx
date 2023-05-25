import { Routes, Route } from "react-router-dom";
import Mainpage from "./components/pages/mainpage/Mainpage";
import Aboutpage from "./components/pages/aboutpage/Aboutpage";
import Modelspage from "./components/pages/modelspage/Modelspage";
import Testimonialspage from "./components/pages/testimonialspage/Testimonialspage";
import Teampage from "./components/pages/teampage/Teampage";
import Contactpage from "./components/pages/contactpage/Contactpage.jsx";
import ScrollToTop from "./ScrollTotop";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/car-rental" element={<Mainpage />} />
        <Route path="/car-rental/about" element={<Aboutpage />} />
        <Route path="/car-rental/models" element={<Modelspage />} />
        <Route path="/car-rental/testimonials" element={<Testimonialspage />} />
        <Route path="/car-rental/team" element={<Teampage />} />
        <Route path="/car-rental/contact" element={<Contactpage />} />
      </Routes>
    </>
  );
}

export default App;
