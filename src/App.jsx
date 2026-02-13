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
import Career from "./pages/Career";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WebDevelopment from "./pages/WebDevelopment";
import GraphicDesigning from "./pages/GraphicDesigning";
import UIUX from "./pages/UIUX";
import DigitalMarketing from "./pages/DigitalMarketing";
import SEO from "./pages/SEO";
import AppDevelopment from "./pages/AppDevelopment";
import SMM from "./pages/SMM";
import VideoMaking from "./pages/VideoMaking";
import GMBSetup from "./pages/GMBSetup";

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
        <Route path="/career" element={<Career />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/graphicdesigning" element={<GraphicDesigning />} />
        <Route path="/uiux" element={<UIUX />} />
        <Route path="/appdevelopment" element={<AppDevelopment />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route path="/smm" element={<SMM />} />
        <Route path="/videomaking" element={<VideoMaking />} />
        <Route path="/gmbsetup" element={<GMBSetup />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
