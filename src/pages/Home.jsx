import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ServiceSection from "../components/ServiceSection"
import HeroSection from "../components/HeroSection";
import HeroVideoSection from "../components/HeroVideoSection";
import ScrollPromo from "../components/ScrollPromo";
import useScrollFade from "../hooks/useScrollFade";
import CreateYourVision from "../components/CreateYourVision";
import Testimonial from "../components/Testimonial";

const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <AboutSection className="fade-right" />
      <ServiceSection className="fade-left" />
      <ScrollPromo className="zoom-in" />
      <CreateYourVision />
      <HeroVideoSection />
      <Testimonial />

<ContactSection />


    </>
  );
};

export default Home;
