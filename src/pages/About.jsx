import React from "react";
import { FiSearch, FiActivity, FiLayers, FiMessageSquare } from "react-icons/fi";

export default function About() {
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
      About Merc Sphere
    </h1>
    <p className="max-w-3xl mx-auto text-lg text-blue-100">
      Merc Sphere is a forward-thinking IT solutions company delivering
      innovative software, web, and digital transformation services that
      empower businesses to scale faster, operate smarter, and stay ahead
      in the digital era.
    </p>
  </div>
</section>


      {/* ================= SOLUTION SECTION ================= */}
<section className="w-full bg-[#f7f7f7] py-20 relative overflow-hidden">

  {/* Decorative Dots */}
  <div className="absolute top-10 left-10 w-3 h-3 bg-blue-300 rounded-full opacity-60"></div>
  <div className="absolute bottom-20 left-32 w-2 h-2 bg-blue-200 rounded-full"></div>
  <div className="absolute top-24 right-40 w-2 h-2 bg-blue-300 rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
        We create <span className="text-blue-500">solutions</span> for your business
      </h2>

      <p className="text-gray-600 mb-8 max-w-lg">
        Our team keeps a strong eye on emerging trends and technologies to ensure
        your marketing campaigns remain cutting-edge and effective.
      </p>

      <div className="flex items-center gap-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow">
          Get Started
        </button>

        <span className="text-gray-500 text-sm cursor-pointer hover:text-blue-500">
          Explore now
        </span>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center">
      <img
        src="https://img.freepik.com/free-photo/entrepreneur-businessman-showing-company-strategy-using-tablet-corporate-presentation_482257-10543.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_wordcount_boost&w=740&q=80"
        alt="Solutions Illustration"
        className="w-full max-w-lg"
      />
    </div>

  </div>
</section>


{/* ================= SERVICES SECTION ================= */}
<section className="w-full bg-blue-800 py-20">
  <div className="max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        We Provide The Best <span className="text-yellow-500">Services</span>
      </h2>
      <p className="text-gray-400 text-sm mt-3">
        Get unmatched solutions for your business with high-performance strategies
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Card 1 */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-500 text-yellow-400 hover:bg-yellow-400 hover:text-blue-500 mb-4">
          <FiSearch size={20} />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Seo/SEM</h3>
        <p className="text-gray-400 text-sm">
          Improve search rankings and visibility using advanced optimization techniques.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-500 text-yellow-400 hover:bg-yellow-400 hover:text-blue-500 mb-4">
          <FiActivity size={20} />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Marketing</h3>
        <p className="text-gray-400 text-sm">
          Data-driven marketing strategies that maximize growth and conversions.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-500 text-yellow-400 hover:bg-yellow-400 hover:text-blue-500 mb-4">
          <FiLayers size={20} />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Viral Campaign</h3>
        <p className="text-gray-400 text-sm">
          Creative campaigns designed to increase reach and brand engagement.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-500 text-yellow-400 hover:bg-yellow-400 hover:text-blue-500 mb-4">
          <FiMessageSquare size={20} />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Others</h3>
        <p className="text-gray-400 text-sm">
          Additional consulting, automation, and custom technology services.
        </p>
      </div>

    </div>
  </div>
</section>

{/* ================= SIMPLE SOLUTIONS SECTION ================= */}
<section className="w-full bg-[#eff0f5] py-20 relative overflow-hidden">

  {/* Decorative dots */}
  <div className="absolute right-20 bottom-10 w-2 h-2 bg-blue-300 rounded-full"></div>
  <div className="absolute right-10 bottom-20 w-3 h-3 bg-blue -200 rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

    {/* Left Image */}
    <div className="flex justify-center">
      <img
        src="https://img.freepik.com/free-vector/connect-jigsaw-pieces-into-shape-light-bulb_1150-35036.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_wordcount_boost&w=740&q=80"
        alt="Simple Solutions"
        className="w-full max-w-md"
      />
    </div>

    {/* Right Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
        Simple <span className="text-blue-500">Solutions!</span>
      </h2>

      <p className="text-gray-500 mb-6 max-w-lg">
        We understand the needs of businesses we serve. That’s why we take
        time to understand your requirements and deliver effective solutions.
      </p>

      {/* Steps */}
      <div className="space-y-4">

        {/* Step 1 */}
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold">1</div>
          <div>
            <h4 className="font-semibold text-gray-800">Contact us</h4>
            <p className="text-gray-400 text-sm">Reach out to discuss your business needs.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold">2</div>
          <div>
            <h4 className="font-semibold text-gray-800">Consult</h4>
            <p className="text-gray-400 text-sm">We analyze and plan your project execution.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold">3</div>
          <div>
            <h4 className="font-semibold text-gray-800">Place order</h4>
            <p className="text-gray-400 text-sm">Finalize scope and initiate the process.</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold">4</div>
          <div>
            <h4 className="font-semibold text-gray-800">Payment</h4>
            <p className="text-gray-400 text-sm">Secure and transparent billing process.</p>
          </div>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
          Get Started
        </button>
        <button className="border border-blue-400 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-50">
          Read more
        </button>
      </div>

    </div>

  </div>
</section>
{/* ================= OUR AGENCY SECTION ================= */}
<section className="w-full bg-[#ffffff] py-20 relative overflow-hidden">

  {/* Decorative dots */}
  <div className="absolute right-16 bottom-12 w-3 h-3 bg-blue-200 rounded-full"></div>
  <div className="absolute right-8 bottom-20 w-2 h-2 bg-blue-300 rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Our <span className="text-blue-500">Agency</span>
      </h2>

      <p className="text-gray-500 mb-6 max-w-lg">
        We believe in the power of data. Our analytics-driven approach allows
        us to make informed decisions and optimize your marketing efforts for
        maximum ROI. Let us turn your data into actionable insights tailored
        solutions for your business growth.
      </p>

      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow">
        Read more
      </button>
    </div>

    {/* Right Image */}
    <div className="flex justify-center">
      <img
        src="https://img.freepik.com/free-photo/creative-designers-team-working-project_114579-2815.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_wordcount_boost&w=740&q=80"
        alt="Our Agency"
        className="w-full max-w-md"
      />
    </div>

  </div>
</section>


    </>
  );
}
