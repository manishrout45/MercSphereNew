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
import WebDevPricing from "../components/WebDevPricing";

export default function WebDevelopment() {
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
            Web Development Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            Merc Sphere delivers high-performance, scalable, and visually
            stunning websites tailored to your business goals.
          </p>
        </div>
      </section>
      <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Best Web Design Services
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We specialize in creating stunning websites that captivate your audience
            and drive business growth. Contact us now for a website that reflects
            your brand, increases your credibility, and helps you stand out digitally.
          </p>

          {/* SUB HEADING */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            Choose Us for Countless Benefits That Will Exceed Your Expectations
          </h2>

          {/* BULLET POINTS */}
          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10 mb-12">
            {[
              "User-Friendly UX and UIs",
              "Experts’ Assistance",
              "Pocket-Friendly Services",
              "24×7 Customer Support",
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
            src="https://img.freepik.com/free-vector/web-design-work-process_1284-34411.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_user_personalization&w=740&q=80"  // Replace with your image
            alt="Web Design Services"
            className="w-full max-w-xl object-contain"
          />
        </div>
      </div>
    </section>

      

      {/* ================= PROCESS FLOW SECTION ================= */}
      <section className="py-28 bg-gradient-to-b from-blue-700 to-blue-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-20">
            Our Development Process
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
              <WaveStep number="01" icon={<FiSearch />} title="Requirement Analysis" delay="0s" />
              <WaveStep number="02" icon={<FiPenTool />} title="UI / UX Design" delay="0.2s" />
              <WaveStep number="03" icon={<FiSettings />} title="Development & Testing" delay="0.4s" />
              <WaveStep number="04" icon={<FiSend />} title="Launch & Support" delay="0.6s" />
            </div>
          </div>
        </div>
      </section>

      <WebDevPricing />

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FiLayout />}
              title="Custom Website Development"
              desc="Tailor-made websites designed to match your brand identity and business requirements."
              bgImage="https://images.unsplash.com/photo-1522199710521-72d69614c702"
            />
            <ServiceCard
              icon={<FiCode />}
              title="Frontend & Backend Development"
              desc="Robust frontend and backend solutions using modern frameworks and technologies."
              bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475"
            />
            <ServiceCard
              icon={<FiSmartphone />}
              title="Responsive & Mobile-Friendly"
              desc="Optimized for all devices to ensure seamless user experience across screens."
              bgImage="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
            />
            <ServiceCard
              icon={<FiZap />}
              title="Performance Optimization"
              desc="Fast-loading, SEO-friendly websites built for speed and performance."
              bgImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            />
            <ServiceCard
              icon={<FiShield />}
              title="Security & Maintenance"
              desc="Secure coding practices with ongoing maintenance and support."
              bgImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
            />
            <ServiceCard
              icon={<FiTrendingUp />}
              title="Scalable & Future-Ready Solutions"
              desc="Web solutions built to scale effortlessly as your business grows and evolves."
              bgImage="https://images.unsplash.com/photo-1508780709619-79562169bc64"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-white text-blue-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Let Merc Sphere help you create a powerful online presence that
            drives growth.
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
  <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer">
    
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
