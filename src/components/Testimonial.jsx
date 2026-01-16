import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Michael Jackson",
    role: "CEO of Company",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Parvez Hossein",
    role: "CEO of Company",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Shoikot Hasan",
    role: "CEO of Company",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function Testimonial() {
  return (
    <section className="w-full bg-white pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          User <span className="text-blue-600">Testimonials</span>
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl px-6 pt-16 pb-10 text-center
                         bg-white text-gray-800 shadow-lg
                         transition-all duration-300
                         hover:bg-blue-600 hover:text-white
                         hover:scale-105 hover:shadow-2xl"
            >
              {/* AVATAR */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-white p-1 shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* STARS */}
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-sm text-blue-600 group-hover:text-white transition"
                  />
                ))}
              </div>

              {/* NAME */}
              <h3 className="text-lg font-semibold">{item.name}</h3>

              <p className="text-sm mb-5 text-gray-500 group-hover:text-white/80 transition">
                {item.role}
              </p>

              {/* QUOTE */}
              <FaQuoteLeft className="mx-auto mb-4 text-3xl text-blue-500 group-hover:text-white/70 transition" />

              {/* TEXT */}
              <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white/90 transition">
                Lorem Ipsum is simply dummy text of the Printing industry.
                Lorem Ipsum has been industry's standard.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
