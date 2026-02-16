import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FiCode,
  FiLayout,
  FiSmartphone,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiSearch,
  FiPenTool,
  FiSettings,
  FiSend,
} from "react-icons/fi";
import GraphicPricing from "../components/GraphicPricing";

export default function GraphicDesigning() {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
<section
  className="w-full text-white pt-32 pb-20 bg-cover bg-center relative"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/premium-vector/dots-lines-technology-glowing-abstract-blue-background_936042-592.jpg')",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>

  <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Creative Graphic Designing
    </h1>
    <p className="max-w-3xl mx-auto text-lg text-blue-100">
      Merc Sphere delivers innovative, eye-catching graphic designs that effectively communicate your brand message and engage your audience.
    </p>
  </div>
</section>


      <section className="relative bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
    
    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
        Professional Graphic Designing Services
      </h1>

      <p className="text-gray-600 text-lg leading-relaxed mb-10">
        We craft visually striking designs that communicate your brand’s message effectively. 
        From logos to marketing materials, our creative solutions help your business stand out.
      </p>

      {/* SUB HEADING */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
        Why Choose Our Graphic Design Services
      </h2>

      {/* BULLET POINTS */}
      <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10 mb-12">
        {[
          "Custom Logo & Branding",
          "Creative Marketing Materials",
          "High-Quality Visual Content",
          "Quick Turnaround & Support",
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            <p className="text-gray-600 text-lg">{item}</p>
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-6">
        <Link
          to="/contact"
          className="px-8 py-4 rounded-full bg-black text-white font-semibold tracking-wide hover:bg-gray-800 transition"
        >
          ENQUIRY
        </Link>

        <Link
          to="/pricing"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold tracking-wide hover:opacity-90 transition"
        >
          PRICING PLANS
        </Link>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center">
      <img
        src="https://img.freepik.com/free-vector/creative-design-illustration_53876-113628.jpg?w=740&t=st=1696114456~exp=1696115056~hmac=0f8fa26ee297bd022efc5d9d4b857c317d5198a12a5149a1e242f7eeb6c5b9d6"
        alt="Graphic Designing Services"
        className="w-full max-w-xl object-contain"
      />
    </div>
  </div>
</section>


      {/* ================= PROCESS FLOW SECTION ================= */}
<section className="py-28 bg-gradient-to-b from-blue-700 to-blue-900 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-20">
      Our Graphic Design Process
    </h2>

    <div className="relative">
      <svg
        className="hidden md:block absolute top-24 left-0 w-full"
        viewBox="0 0 1200 200"
        fill="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1200" y2="0">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>

        <path
          d="M0,100 C200,0 400,200 600,100 C800,0 1000,200 1200,100"
          stroke="url(#waveGradient)"
          strokeWidth="4"
          fill="transparent"
          className="wave-line"
        />
      </svg>

      <div className="grid md:grid-cols-4 gap-12 relative z-10">
        <WaveStep
          number="01"
          icon={<FiSearch />}
          title="Concept & Research"
          delay="0s"
        />
        <WaveStep
          number="02"
          icon={<FiPenTool />}
          title="Wireframing & Sketches"
          delay="0.2s"
        />
        <WaveStep
          number="03"
          icon={<FiSettings />}
          title="Design & Illustration"
          delay="0.4s"
        />
        <WaveStep
          number="04"
          icon={<FiSend />}
          title="Delivery & Revisions"
          delay="0.6s"
        />
      </div>
    </div>
  </div>
</section>


      <GraphicPricing />

            {/* ================= SERVICES SECTION ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">
      Our Graphic Design Services
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <ServiceCard
        icon={<FiLayout />}
        title="Logo & Branding Design"
        desc="Create unique logos and complete branding materials that represent your business identity."
        bgImage="https://img.freepik.com/free-vector/creative-logo-design-concept_23-2148390372.jpg?w=740&t=st=1696116247~exp=1696116847~hmac=1bb16b12e4f34ee4f57b7cdbd7e39efdbcc91d40ad0bbf0b3ee5f77e9d8f3ee0"
      />
      <ServiceCard
        icon={<FiCode />}
        title="Marketing & Print Design"
        desc="Designs for brochures, flyers, posters, and other promotional materials to engage your audience."
        bgImage="https://img.freepik.com/free-vector/modern-poster-design-template_52683-29035.jpg?w=740&t=st=1696116312~exp=1696116912~hmac=74fef2c6d4739ecaf92e5b58e15f3f0410f9c33d595f5032a95d90c55673d1f5"
      />
      <ServiceCard
        icon={<FiSmartphone />}
        title="Social Media Graphics"
        desc="Custom graphics tailored for social media platforms to boost engagement and brand visibility."
        bgImage="https://img.freepik.com/free-vector/social-media-banner-design-template_53876-137612.jpg?w=740&t=st=1696116365~exp=1696116965~hmac=15c57e50efc73f02ab4f4c756bfc27ef2e18c3057e7d5032fdaac7e7b4930c55"
      />
      <ServiceCard
        icon={<FiZap />}
        title="Infographic & Data Visualization"
        desc="Transform complex data into visually appealing and easy-to-understand infographics."
        bgImage="https://img.freepik.com/free-vector/infographic-template-with-step-options_23-2148893407.jpg?w=740&t=st=1696116412~exp=1696117012~hmac=6a1f9ee02f4b5ebf97c6ed45e7a91bc6fbc7f273f5f9b1b51f23a1b82c36ab6f"
      />
      <ServiceCard
        icon={<FiShield />}
        title="UI & UX Design"
        desc="User-centered designs for websites and apps that are both intuitive and visually appealing."
        bgImage="https://img.freepik.com/free-vector/ui-ux-design-concept-illustration_114360-6521.jpg?w=740&t=st=1696116471~exp=1696117071~hmac=342a0e2eb43c1de9a72da9d3dfb64d2b9e650dfb8496f0a5d1d52efef25a3e42"
      />
      <ServiceCard
        icon={<FiTrendingUp />}
        title="Packaging & Product Design"
        desc="Innovative product packaging and labels that attract customers and strengthen brand image."
        bgImage="https://img.freepik.com/free-vector/product-packaging-design-template_53876-137442.jpg?w=740&t=st=1696116518~exp=1696117118~hmac=faef1f4a6d2f5bc6aa9c3c37b1c08f5b038e24c7e6d9a37235f0eb48f1927f5b"
      />
    </div>
  </div>
</section>

      {/* ================= CTA ================= */}
<section className="py-20 bg-white text-blue-700">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Ready to Elevate Your Brand Visually?
    </h2>
    <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
      Let Merc Sphere help you craft stunning graphics and visual designs that
      captivate your audience and strengthen your brand identity.
    </p>
    <button className="bg-blue-700 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition">
      Get Started
    </button>
  </div>
</section>


      {/* ================= ANIMATIONS ================= */}
      <style>{`
        .wave-step {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .wave-step.show-wave {
          opacity: 1;
          transform: translateY(0);
        }

        .wave-icon {
          background: #facc15;
          backdrop-filter: blur(10px);
          color: #1976D2;
          box-shadow: 0 0 25px rgba(250,204,21,0.6);
          animation: floatIcon 3s ease-in-out infinite;
          transition: all 0.4s ease;
        }

        .wave-icon:hover {
          transform: scale(1.15);
          box-shadow: 0 0 40px rgba(250,204,21,0.9);
        }

        @keyframes floatIcon {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        .wave-line {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: drawWave 3s ease forwards;
        }

        @keyframes drawWave {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const ServiceCard = ({ icon, title, desc, bgImage }) => (
  <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
    
    <div
      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
      style={{ backgroundImage: `url(${bgImage})` }}
    />

    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-transparent"></div>

    <div className="absolute bottom-0 left-0 w-full p-6 text-white overflow-hidden">
      <div className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-in-out">

        <div className="text-yellow-400 text-3xl mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {icon}
        </div>

        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm text-blue-100 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {desc}
        </p>

      </div>
    </div>
  </div>
);

const WaveStep = ({ number, icon, title, delay }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show-wave");
        }
      },
      { threshold: 0.3 }
    );

    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className="wave-step flex flex-col items-center text-center"
      style={{ transitionDelay: delay }}
    >
      <div className="wave-icon w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4">
        {icon}
      </div>

      <span className="text-yellow-400 font-bold text-lg">{number}</span>
      <h4 className="text-white font-semibold mt-1">{title}</h4>
    </div>
  );
};
