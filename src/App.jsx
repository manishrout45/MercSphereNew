import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Page imports



import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Component imports (for internal use in pages)
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ScrollPromo from "./components/ScrollPromo";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensures page scroll resets on route change */}
      <Navbar />

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
