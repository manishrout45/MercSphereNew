import React from "react";
import ContactSection from "../components/ContactSection";
const Contact = () => {
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
      Contact Merc Sphere
    </h1>
    <p className="max-w-3xl mx-auto text-lg text-blue-100">
      Have a project in mind or need expert IT solutions? Get in touch with 
      our team today. We’re here to answer your questions, discuss your 
      requirements, and help you build innovative digital solutions for your business.
    </p>
  </div>
</section>
<ContactSection />
    </>
  );
};

export default Contact;
