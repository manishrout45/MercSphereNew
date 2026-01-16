import AboutSection from "../components/AboutSection";
import Booking from "../components/Booking";
import ServiceSection from "../components/ServiceSection"
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import HeroVideoSection from "../components/HeroVideoSection";
import ScrollPromo from "../components/ScrollPromo";
import useScrollFade from "../hooks/useScrollFade";
import CreateYourVision from "../components/CreateYourVision";
import PromoHeroSection from "../components/PromoHeroSection";
import Testimonial from "../components/Testimonial";

const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <ServiceSection className="fade-left" />
      <AboutSection className="fade-right" />
      <ScrollPromo className="zoom-in" />
      <CreateYourVision />
      <PromoHeroSection />
    <GallerySection className="zoom-in" />
    <HeroVideoSection />
      <Testimonial />

<Booking />


    </>
  );
};

export default Home;
