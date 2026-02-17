import React, { useState } from "react";
import { FaPlay, FaUsers, FaUserTie, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Lanyard from "../components/Lanyard";

export default function Career() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
     {/* ================= HERO SECTION ================= */}
<section
  className="w-full text-white pt-32 pb-20 bg-cover bg-center relative"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/premium-vector/dots-lines-technology-glowing-abstract-blue-background_936042-592.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>

  <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Build Your Career With Merc Sphere
    </h1>
    <p className="max-w-3xl mx-auto text-lg text-blue-100">
      Join a team of innovators, creators, and problem-solvers passionate about
      building cutting-edge digital solutions. At Merc Sphere, we empower talent,
      encourage creativity, and provide opportunities to grow, learn, and make
      a real impact in the tech industry.
    </p>
  </div>
</section>



  <section className="bg-[#ffffff] py-12 sm:py-16 px-4 sm:px-6 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
    
    {/* ================= LEFT SIDE ================= */}
    <div className="relative">
      <div className="relative bg-gray-200 rounded-3xl sm:rounded-[40px] overflow-hidden">
        <img
          src="https://img.freepik.com/free-photo/man-working-night_1098-12798.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_wordcount_boost&w=740&q=80"
          alt="Career Programme"
          className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover"
        />
      </div>

      {/* Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-md shadow-lg text-center">
        <h3 className="font-bold text-base sm:text-lg">Career Programme</h3>
        <p className="text-xs sm:text-sm">Learn • Grow • Lead</p>
      </div>
    </div>

    {/* ================= RIGHT SIDE ================= */}
    <div className="text-center lg:text-left">
      <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base">
        About Our Career Programme
      </p>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        Start Strong, <br className="hidden sm:block" /> Grow With Us
      </h2>

      <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
        Our Career Programme is designed for passionate individuals who want to grow in the tech industry. 
        We provide a collaborative environment, real-world exposure, and continuous learning to help you 
        build practical skills and professional confidence. Whether you're starting out or enhancing your expertise, 
        we prepare you to succeed in the digital world.
      </p>

      {/* ================= FEATURES ================= */}
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
        
        {/* Feature 1 */}
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 sm:p-4 rounded-full flex-shrink-0">
            <FaUsers className="text-blue-600 text-lg sm:text-xl" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-900">
              Collaborative Culture
            </h4>
            <p className="text-gray-500 text-sm">
              Work in a supportive and innovative team environment
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 sm:p-4 rounded-full flex-shrink-0">
            <FaUserTie className="text-blue-600 text-lg sm:text-xl" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-900">
              Mentorship & Learning
            </h4>
            <p className="text-gray-500 text-sm">
              Continuous skill development and guidance
            </p>
          </div>
        </div>

      </div>

      {/* ================= BUTTON + CALL ================= */}
      <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6">
        
        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
          Explore Opportunities
        </button>

        <div className="flex items-center gap-3">
          <div className="bg-black text-white p-3 rounded-md">
            <FaPhoneAlt />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-gray-500 text-sm">Career Enquiries</p>
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
