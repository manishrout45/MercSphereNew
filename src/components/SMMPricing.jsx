import React from "react";
import { FiCheck } from "react-icons/fi";

export default function SMMPricing() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Social Media Marketing Packages
          </h2>
          <p className="text-gray-500">
            Choose a plan that works for your business growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          <PlanCard
            title="STARTER PACKAGE"
            price="₹6,999"
            subtitle="/ MONTH"
            features={[
              "Work on 3 platforms: Facebook, Instagram & Google",
              "2 short reels (basic video editing)",
              "8 social media posts (Instagram & Facebook)",
              "Story updates",
              "1 video boost (promotion)",
              "Google My Business setup",
              "5 GMB posts per month",
            ]}
          />

          <PlanCard
            title="GROWTH PACKAGE"
            price="₹11,999"
            subtitle="/ MONTH"
            features={[
              "Work on 3 platforms: Facebook, Instagram & Google",
              "5 promotional videos",
              "12 social media posts + 4 stories",
              "3 campaign planning + ads setup",
              "Story updates",
              "8 GMB posts per month",
              "Monthly performance report",
              "Google My Business setup",
            ]}
            highlighted
          />

          <PlanCard
            title="PREMIUM PACKAGE"
            price="₹17,999"
            subtitle="/ MONTH"
            features={[
              "Work on 3 platforms: Facebook, Instagram & Google",
              "8 professional videos",
              "16 social media posts",
              "Daily story updates",
              "5 ad campaign planning on social media",
              "16 GMB posts per month + full Google My Business handling (posts, reviews)",
              "Detailed monthly report + priority support",
            ]}
          />

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
  features,
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
            {subtitle}
          </span>
        )}
        <p className="text-sm text-gray-500 mt-1">Per Month</p>
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

      {/* Button */}
      <div className="pt-8">
        <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-black transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};
