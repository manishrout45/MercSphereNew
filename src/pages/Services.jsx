import React from "react";
import ServicesSection from "../components/ServiceSection";
import FAQSection from "../components/FAQSection";

const Services = () => {
  return (
    <>
    {/* ================= HERO SECTION ================= */}
<section
  className="w-full text-white pt-32 pb-20 bg-cover bg-center relative"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/premium-vector/dots-lines-technology-glowing-abstract-blue-background_936042-592.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
  <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      What We Provide
    </h1>
    <p className="max-w-3xl mx-auto text-lg text-blue-100">
      At Merc Sphere, we deliver comprehensive IT services including custom software development, web and mobile solutions, digital transformation, cloud integration, and technology strategies designed to accelerate business growth and innovation.
    </p>
  </div>
</section>


      {/* Full Width Image Section */}
      <section className="w-full bg-gray-50">
        <div
          className="
            w-full
            h-screen              /* Mobile: full screen height */
            sm:h-[400px]
            md:h-[500px]
            lg:h-[600px]
            bg-contain            /* Mobile: show full image */
            sm:bg-cover           /* Desktop: cover nicely */
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/assets/images/ProcessWeFollow.png')",
          }}
        ></div>
      </section>
      <ServicesSection />
      <FAQSection />
    </>
  );
};

export default Services;
