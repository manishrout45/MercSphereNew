import React from "react";
import { FiCheck } from "react-icons/fi";

export default function PricingSection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose a plan that works for you
          </h2>
          <p className="text-gray-500">
            Flexible website solutions tailored to your business needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8 items-stretch">

          <PlanCard
            title="Landing Page Design"
            price="₹4,999"
            features={[
              "1 Page",
              "Without Domain & Hosting",
            ]}
            extraTitle="Portfolio Website"
            extraPrice="₹2,000"
            extraFeatures={[
              "1 Page",
              "On Student ID 50% off",
            ]}
          />

          <PlanCard
            title="Static Website"
            price="₹14,999"
            features={[
              "3–5 Pages",
              "Mobile Responsive",
              "Contact Form",
              "Domain (1yr)",
              "Hosting (1yr)",
            ]}
          />

          <PlanCard
            title="Dynamic Website"
            price="₹19,999"
            features={[
              "7–10 Pages",
              "SEO Friendly",
              "Admin Panel",
              "Domain (1yr)",
              "Hosting (1yr)",
            ]}
            highlighted
          />

          <PlanCard
            title="E-commerce Website"
            price="₹24,999"
            subtitle="Starting"
            features={[
              "Product Management",
              "Payment Gateway",
              "Order Tracking",
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

const PlanCard = ({
  title,
  price,
  subtitle,
  features,
  extraTitle,
  extraPrice,
  extraFeatures,
  highlighted,
}) => {
  return (
    <div
      className={`flex flex-col bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 ${
        highlighted ? "border border-gray-300" : ""
      }`}
    >
      {/* Title */}
      <h3 className="text-gray-500 font-semibold mb-4">
        {title}
      </h3>

      {/* Price */}
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">
          {price}
        </span>
        {subtitle && (
          <span className="text-sm text-gray-500 ml-2">
            ({subtitle})
          </span>
        )}
        <p className="text-sm text-gray-500 mt-1">Per Project</p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* Features */}
      <ul className="space-y-4 flex-1">
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-700 text-sm">
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400 text-black text-xs">
              <FiCheck />
            </div>
            {item}
          </li>
        ))}
      </ul>

      {/* Extra Section */}
      {extraTitle && (
        <div className="border-t border-gray-200 pt-6 mt-6">
          <h4 className="text-gray-600 font-semibold mb-2">
            {extraTitle}
          </h4>
          <div className="font-bold text-xl mb-3">{extraPrice}</div>
          <ul className="space-y-3 mb-4">
            {extraFeatures.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400 text-black text-xs">
                  <FiCheck />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Button Fixed Bottom */}
      <div className="pt-8">
        <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-black transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};
