import React from "react";
import { FiCheck } from "react-icons/fi";

export default function GraphicPricing() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Graphic Design Pricing
          </h2>
          <p className="text-gray-500">
            Affordable creative design services for your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8 items-stretch">

          <PlanCard title="Logo Design" price="1000/-" subtitle="Starting From" />
          <PlanCard title="Posters & Banners" price="500/-" />
          <PlanCard title="Social Media Creatives" price="200/-" />
          <PlanCard title="Brochures & Flyers" price="1000/-" />
          <PlanCard title="Visiting Card" price="500/-" />
          <PlanCard title="Presentation (PPT) Design" price="1000/-" />
          <PlanCard title="Invitation Card" price="500/-" />
          <PlanCard title="Offer Tag" price="100/-" />
          <PlanCard title="Reels Video" price="500/-" />
          <PlanCard title="Standee" price="300/-" />
          <PlanCard title="Letterhead" price="100/-" />
          <PlanCard title="Documentation" price="100/-" subtitle="Starting From" />

        </div>
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT (UNCHANGED DESIGN) ================= */

const PlanCard = ({
  title,
  price,
  subtitle,
  highlighted,
}) => {
  return (
    <div
      className={`flex flex-col bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 ${
        highlighted ? "border border-gray-300" : ""
      }`}
    >
      {/* Title */}
      <h3 className="text-gray-500 font-semibold mb-4 text-center">
        {title}
      </h3>

      {/* Price */}
      <div className="mb-4 text-center">
        {subtitle && (
          <p className="text-sm text-gray-500">
            {subtitle}
          </p>
        )}
        <span className="text-3xl font-bold text-gray-900">
          {price}
        </span>
      </div>

      <div className="border-t border-gray-200 my-6"></div>

      {/* Spacer to push button down */}
      <div className="flex-1"></div>

      {/* Button */}
      <div className="pt-6">
        <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-black transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};
