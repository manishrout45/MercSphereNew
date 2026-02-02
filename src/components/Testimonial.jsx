import { useState } from "react";

const testimonials = [
  {
    name: "Michael",
    company: "MDS Manufacturing",
    image:
      "https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
  },
  {
    name: "Diane",
    company: "ABC Rentals",
    image:
      "https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
  },
  {
    name: "Allison",
    company: "Grand Party Rental",
    image:
      "https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  return (
    <section className="relative bg-[#0B3A78] pt-28 pb-16 md:pb-20 overflow-hidden">
      
      {/* ✅ WHITE TOP WAVE (VISIBLE) */}
      <div className="absolute top-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,0 C120,40 240,70 360,75 C480,80 600,60 720,55 C840,50 960,70 1080,80 C1200,90 1320,80 1440,70 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white text-center lg:text-left">
          <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0">
            <span className="text-4xl font-bold">“</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Connect with <br className="hidden sm:block" /> other members
          </h2>

          <p className="text-blue-100 max-w-md mx-auto lg:mx-0 mb-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>

          <button className="text-white font-medium flex items-center gap-2 hover:gap-3 transition-all mx-auto lg:mx-0">
            Connect now <span>➜</span>
          </button>
        </div>

        {/* RIGHT TESTIMONIALS */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-lg shadow-lg p-5 w-full max-w-[260px] mx-auto transition-all duration-500 ${
                  i === index
                    ? "opacity-100 scale-105"
                    : "opacity-70 scale-95"
                }`}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-md mb-4 h-40 w-full object-cover"
                  />
                  <span className="absolute -top-3 -left-3 bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-xl">
                    “
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-5 min-h-[72px]">
                  {item.text}
                </p>

                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-400">{item.company}</p>
              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-9 h-9 border border-white text-white flex items-center justify-center rounded hover:bg-white hover:text-[#0B3A78] transition"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="w-9 h-9 border border-white text-white flex items-center justify-center rounded hover:bg-white hover:text-[#0B3A78] transition"
            >
              ›
            </button>

            <div className="flex gap-2 ml-4">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === index ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
