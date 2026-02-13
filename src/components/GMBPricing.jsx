import React from "react";
import { FiCheck } from "react-icons/fi";

export default function GMBPricing() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Google My Business Packages
          </h2>
          <p className="text-gray-500">
            Choose the right plan to grow your local business visibility.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8 items-stretch">

          {/* Google My Business Setup */}
          <PlanCard
            title="Google My Business Setup"
            price="₹2,999"
            features={[
              "Google My Business account creation/setup",
              "Business information update (name, address, phone, timing)",
              "Category selection & optimization",
              "Location map integration",
              "Photos/logo upload",
              "Basic profile optimization for better visibility",
              "Setup for review collection + guidance",
              "Response support for up to 10 customer reviews",
            ]}
          />

          {/* Basic Plan */}
          <PlanCard
            title="Basic Plan"
            price="₹2,999"
            subtitle="/ Month"
            features={[
              "8 GMB posts per month (offers, updates, services)",
              "Photo uploads (4–6 images monthly)",
              "Basic profile maintenance & updates",
              "Reply support for up to 10 reviews",
              "Monthly performance summary",
            ]}
          />

          {/* Standard Plan */}
          <PlanCard
            title="Standard Plan"
            price="₹5,999"
            subtitle="/ Month"
            highlighted
            features={[
              "12–16 GMB posts per month",
              "Product/service posting & updates",
              "Review management (reply to 20+ reviews)",
              "1 GMB ad campaign setup (local reach/visibility)",
              "Regular photo & banner updates",
              "Monthly insights report",
            ]}
          />

          {/* Premium Plan */}
          <PlanCard
            title="Premium Plan"
            price="₹7,999"
            subtitle="/ Month"
            features={[
              "20+ GMB posts per month (offers, events, updates)",
              "Complete profile handling & optimization",
              "Review management + rating improvement strategy",
              "2 GMB ad campaigns (lead & call-focused)",
              "Product catalog setup & updates",
              "Competitor analysis for local ranking",
              "Detailed monthly report + priority support",
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT (UNCHANGED) ================= */

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
      <h3 className="text-gray-500 font-semibold mb-4">
        {title}
      </h3>

      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">
          {price}
        </span>
        {subtitle && (
          <span className="text-sm text-gray-500 ml-2">
            ({subtitle})
          </span>
        )}
        <p className="text-sm text-gray-500 mt-1">
          {subtitle ? "Per Month" : "One Time"}
        </p>
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
