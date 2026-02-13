import React from "react";
import { FiCheck } from "react-icons/fi";

export default function SEOPricing() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            SEO Packages
          </h2>
          <p className="text-gray-500">
            Choose the right SEO plan to grow your online visibility.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          <PlanCard
            title="Basic SEO Plan"
            price="₹4,999"
            subtitle="/ Month"
            features={[
              "Keyword research (5 keywords)",
              "On-page SEO optimization",
              "Meta tags & description setup",
              "Image alt tags optimization",
              "Google Search Console setup",
              "Monthly basic report",
            ]}
          />

          <PlanCard
            title="Standard SEO Plan"
            price="₹8,999"
            subtitle="/ Month"
            features={[
              "Keyword research (10 keywords)",
              "Complete on-page SEO",
              "Technical SEO (speed, sitemap, indexing)",
              "Basic off-page SEO (profile backlinks)",
              "Content suggestions for ranking",
              "Google Analytics setup",
              "Monthly performance report",
            ]}
            highlighted
          />

          <PlanCard
            title="Premium SEO Plan"
            price="₹14,999"
            subtitle="/ Month"
            features={[
              "Keyword research (15–20 keywords)",
              "Advanced on-page + technical SEO",
              "Strong off-page SEO (high-quality backlinks)",
              "Competitor analysis",
              "Local SEO optimization (Google ranking improvement)",
              "Blog/content optimization support",
              "Detailed monthly ranking report + priority support",
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
      <h3 className="text-gray-500 font-semibold mb-4">
        {title}
      </h3>

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

      <div className="border-t border-gray-200 my-6"></div>

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

      <div className="pt-8">
        <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-black transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};
