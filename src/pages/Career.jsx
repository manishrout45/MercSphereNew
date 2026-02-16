import React, { useState } from "react";
import { FaPlay, FaUsers, FaUserTie, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Lanyard from "../components/Lanyard";

export default function Career() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#1e3c8a] via-[#1d4ed8] to-[#2563eb] text-white overflow-hidden">

        {/* ===== Main Hero Content ===== */}
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-48 flex flex-col lg:flex-row items-center justify-between relative z-10">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 space-y-8">

            <p className="text-sm text-blue-200 font-medium">
              Welcome To Trident
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Connecting <br />
              Talent, Building <br />
              Careers
            </h1>

            <p className="text-blue-100 max-w-md">
              Phasellus luctus, tellus sit amet dignissim tempus, turpis metus
              tempus enim, non tristique risus diam ut arcu. Praesent suscipit
              aliquam mauris.
            </p>

            {/* ===== UPDATED BUTTON SECTION ===== */}
            <div className="flex items-center pt-6">

              {/* Read More */}
              <button
                onMouseEnter={() => setHovered("left")}
                onMouseLeave={() => setHovered(null)}
                className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 
                px-6 py-4 font-semibold 
                rounded-l-full rounded-r-none"
              >
                Read More
              </button>

              {/* Middle Circle */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl -mx-3 z-10 transition-all duration-300">
                <span className="text-black font-bold text-lg transition-all duration-300">
                  {hovered === "left"
                    ? "←"
                    : hovered === "right"
                    ? "→"
                    : "↔"}
                </span>
              </div>

              {/* Explore More */}
              <button
                onMouseEnter={() => setHovered("right")}
                onMouseLeave={() => setHovered(null)}
                className="bg-black hover:bg-gray-800 transition-all duration-300 
                px-6 py-4 font-semibold text-white
                rounded-r-full rounded-l-none"
              >
                Explore More
              </button>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE AREA */}
          <div className="lg:w-1/2 relative flex justify-end mt-16 lg:mt-0">
            <img
              src="https://img.freepik.com/free-photo/smiley-man-work-holding-laptop-posing_23-2148908835.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_wordcount_boost&w=740&q=80"
              alt="Hero"
              className="relative  max-w-md lg:max-w-lg rounded-3xl"
            />

            <div className="absolute z-10 -top-6 left-16 flex -space-x-3">
              <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_wordcount_boost&w=740&q=80" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://img.freepik.com/premium-photo/brunette-young-girl-with-red-jersey_58409-19495.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_wordcount_boost&w=740&q=80" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://img.freepik.com/free-photo/portrait-handsome-attractive-stylish-bearded-man-brown_285396-4617.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_wordcount_boost&w=740&q=80" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://img.freepik.com/free-photo/portrait-pretty-girl-with-bun-denim-jacket-white-t-shirt-with-gentle-smile-pink_176532-13857.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_wordcount_boost&w=740&q=80" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>

            <div className="absolute top-44 right-4 bg-blue-600 p-4 rounded-lg shadow-xl w-44">
              <p className="text-sm font-semibold mb-2">Recruiting</p>
              <div className="h-16 bg-blue-500 rounded-md"></div>
            </div>

            
          </div>
        </div>

        {/* Floating Bottom Cards */}
        <div className="absolute left-0 w-full -mt-32 z-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-6 justify-center">

              <div className="relative bg-yellow-500 text-white p-10 w-full md:w-1/3 rounded-md shadow-2xl text-center">
                <h3 className="text-xl font-semibold mb-3">Expert Agent</h3>
                <p className="text-blue-100 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                  <div className="bg-[#1e3c8a] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    ↓
                  </div>
                </div>
              </div>

              <div className="relative bg-yellow-400 text-white p-10 w-full md:w-1/3 rounded-md shadow-2xl text-center">
                <h3 className="text-xl font-semibold mb-3">Quality Standard</h3>
                <p className="text-blue-100 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                  <div className="bg-[#1e3c8a] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    ↓
                  </div>
                </div>
              </div>

              <div className="relative bg-yellow-500 text-white p-10 w-full md:w-1/3 rounded-md shadow-2xl text-center">
                <h3 className="text-xl font-semibold mb-3">Certified Method</h3>
                <p className="text-blue-100 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                  <div className="bg-[#1e3c8a] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    ↓
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="bg-white h-48"></div>
      </section>


      <section className="bg-[#ffffff] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="relative">
          <div className="relative bg-gray-200 rounded-[40px] overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/man-working-night_1098-12798.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_wordcount_boost&w=740&q=80" // Replace with your image
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 10+ Years Badge */}
          <div className="absolute top-6 right-6 bg-blue-600 text-white px-5 py-2 rounded-md shadow-lg">
            <h3 className="font-bold text-lg">10+ Years</h3>
            <p className="text-sm">Experience</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="text-blue-600 font-semibold mb-2">About Trident</p>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Nurturing Talent, <br /> Fueling Growth
          </h2>

          <p className="text-gray-600 mb-8">
            Nullam facilisis quam ac mi vulputate, ac finibus eros molestie.
            Donec tristique erat et felis cursus, a pretium neque fringilla.
            Integer mi turpis, hendrerit id diam id, consequat mollis erat mauris aliquam libero nulla.
          </p>

          {/* STATS */}
          <div className="flex gap-10 mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaUsers className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">25000+</h4>
                <p className="text-gray-500 text-sm">Has find their jobs</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaUserTie className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">50+</h4>
                <p className="text-gray-500 text-sm">Recruiter</p>
              </div>
            </div>
          </div>

          {/* BUTTON + CALL */}
          <div className="flex items-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
              Read More
            </button>

            <div className="flex items-center gap-3">
              <div className="bg-black text-white p-3 rounded-md">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Call us</p>
                <p className="font-semibold text-gray-900">
                  +91 99388 10752
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="relative w-full h-[350px] md:h-[400px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/assets/images/CareerBg1.jpg" // replace with your image
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-700/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-6 leading-snug">
          Shaping Futures, One <br className="hidden md:block" />
          Placement At A Time
        </h2>

      </div>
    </section>


    {/* ================= WHAT WE SERVE ================= */}
      <section className="bg-[#f3f4f6] py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-blue-600 font-semibold mb-2">
            What We Serve
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-14">
            Tailoring Talent For <br /> Excellence
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* CARD 1 */}
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white p-8 rounded-tl-3xl rounded-br-3xl relative">
              <span className="absolute -top-4 left-6 bg-black text-white text-xs px-4 py-1 rounded-full">
                1 month training
              </span>
              <h3 className="text-xl font-semibold mb-3">
                Develop & Training
              </h3>
              <p className="text-sm text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-gradient-to-br from-[#2563eb] to-[#3b82f6] text-white p-8 rounded-tl-3xl rounded-br-3xl relative">
              <span className="absolute -top-4 left-6 bg-black text-white text-xs px-4 py-1 rounded-full">
                Find Jobs Suit For You
              </span>
              <h3 className="text-xl font-semibold mb-3">
                Job Placement
              </h3>
              <p className="text-sm text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white p-8 rounded-tl-3xl rounded-br-3xl relative">
              <span className="absolute -top-4 left-6 bg-black text-white text-xs px-4 py-1 rounded-full">
                Free Conselling
              </span>
              <h3 className="text-xl font-semibold mb-3">
                Job Conselling
              </h3>
              <p className="text-sm text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white p-8 rounded-tl-3xl rounded-br-3xl relative">
              <span className="absolute -top-4 left-6 bg-black text-white text-xs px-4 py-1 rounded-full">
                Testing By Expert
              </span>
              <h3 className="text-xl font-semibold mb-3">
                Test & Interview
              </h3>
              <p className="text-sm text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= READY JOBS SECTION ================= */}
      <section className="bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] py-20 px-6 lg:px-20 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="text-sm mb-3">Jobs Available</p>

            <h2 className="text-4xl font-bold mb-6">
              Ready Jobs To <br /> Apply On August
            </h2>

            <p className="text-gray-200 mb-8">
              Vestibulum sit amet sapien felis. Suspendisse fermentum
              purus quis quam lacinia, id placerat lacus blandit.
              In hac habitasse platea dictumst.
            </p>

            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              View All →
            </button>
          </div>

          {/* RIGHT SIDE JOB CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">

            {[
              "Net79 Investment",
              "Romethme Studio",
              "Merpati Airlane",
              "Fastnet Provider",
              "Brain Software",
              "Rocket Hostinger",
            ].map((company, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg"
              >
                <h4 className="font-semibold mb-2">{company}</h4>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-blue-600" />
                    Canada
                  </span>
                  <span>• Full Time</span>
                </div>

                <button className="text-blue-600 font-medium text-sm">
                  Job Detail
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />;
    </>
  );
}
