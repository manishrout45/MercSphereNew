import React from "react";
import { FaCalendarAlt, FaEnvelope, FaUser, FaBuilding } from "react-icons/fa";

export default function Booking() {
  return (
    <section className="w-full bg-[#f7f9fc] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <span className="inline-block text-blue-600 font-semibold tracking-wide uppercase text-sm">
            Book a Consultation
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Let’s Discuss Your <br /> Digital Project
          </h2>

          <p className="text-gray-600 max-w-xl">
            Schedule a free consultation with our experts to discuss your
            business goals, project requirements, and how we can help you
            scale using modern technology.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Free 30-minute strategy session</li>
            <li>✔ No obligation, no hidden costs</li>
            <li>✔ Tailored solutions for your business</li>
          </ul>
        </div>

        {/* BOOKING FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Schedule a Free Call
          </h3>

          <form className="space-y-5">
            {/* NAME */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full pl-11 pr-4 py-3 border rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-11 pr-4 py-3 border rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* COMPANY */}
            <div className="relative">
              <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full pl-11 pr-4 py-3 border rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* DATE */}
            <div className="relative">
              <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                className="w-full pl-11 pr-4 py-3 border rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* MESSAGE */}
            <textarea
              rows="4"
              placeholder="Tell us about your project"
              className="w-full px-4 py-3 border rounded-lg resize-none
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white
                         font-semibold py-3 rounded-lg transition"
            >
              Book Free Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
