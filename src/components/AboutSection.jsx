export default function AboutSection() {
  return (
    <section className="w-full bg-[#ffffff] pt-16 md:pt-24">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 relative">

        {/* IMAGE SECTION */}
        <div
          className="
            relative 
            lg:absolute lg:left-6 lg:top-1/2 lg:-translate-y-1/2 
            w-full lg:w-[360px] 
            z-10 
            flex justify-center
          "
        >
          <div className="relative">

            {/* VERTICAL LABEL */}
            <div className="absolute top-8 -left-2 z-20 hidden lg:block">
              <span className="bg-yellow-400 text-blue-500 font-extrabold text-[10px] tracking-widest px-4 py-1 rounded-md rotate-[-90deg] block">
                ABOUT US
              </span>
            </div>

            {/* IMAGE CARD */}
            <div className="rounded-xl overflow-hidden shadow-lg lg:-mt-24 lg:ml-10">
              <img
                src="https://img.freepik.com/free-photo/scenes-people-work_23-2151895541.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
                alt="Merc Sphere Team"
                className="w-[260px] sm:w-[300px] lg:w-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* MAIN CARD */}
        <div
          className="
            bg-blue-900 rounded-2xl 
            mt-12 lg:mt-0 
            px-6 sm:px-8 lg:pl-[420px] lg:pr-10 
            py-10 sm:py-12
            relative overflow-hidden
          "
        >
          {/* Faint Logo in Background */}
<img
  src="/assets/images/logo/MercSphereDark.png"
  alt="Background Logo"
  className="
    absolute 
    -top-06 -right-48 
    w-[400px] sm:w-[500px] lg:w-[600px] 
    opacity-20 
    pointer-events-none 
    select-none
  "
/>


          {/* TITLE */}
          <h2 className="text-[22px] sm:text-[26px] font-semibold text-white mb-6 relative z-10">
            Welcome<span className="text-yellow-500">.</span> We are{" "}
            <span className="font-bold">Merc Sphere</span>
          </h2>

          {/* BELIEF */}
          <div className="mb-6 relative z-10">
            <h4 className="font-semibold text-yellow-400 mb-1">
              OUR BELIEF
            </h4>
            <p className="text-sm text-gray-100 leading-relaxed max-w-md">
              At Merc Sphere, we believe in building powerful digital
              solutions that help brands grow, engage audiences, and
              create lasting impact. Innovation, integrity, and creativity
              are at the core of everything we do.
            </p>
          </div>

          {/* PROCESS */}
          <div className="mb-8 relative z-10">
            <h4 className="font-semibold text-yellow-400 mb-1">
              OUR PROCESS
            </h4>
            <p className="text-sm text-gray-100 leading-relaxed max-w-md">
              We start by understanding your vision, analyze market
              opportunities, and craft tailored strategies. Our team then
              executes with precision to deliver measurable and scalable
              results across digital platforms.
            </p>

            <p className="text-sm text-gray-100 mt-2">
              We grow when our clients succeed.
            </p>
          </div>

          {/* SLIDING CTA BUTTON */}
          <div className="group relative h-10 w-[260px] overflow-hidden cursor-pointer relative z-10">
            {/* CIRCLE / SLIDE */}
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white transition-all duration-500 group-hover:w-full">
              <span className="transition-all duration-300 group-hover:opacity-0">
                →
              </span>
            </div>

            {/* BUTTON TEXT */}
            <span className="absolute left-12 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-900 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:left-6">
              START YOUR DIGITAL JOURNEY
            </span>
          </div>
        </div>

        {/* PARTNERS SECTION */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-xs tracking-widest text-blue-500 mb-6 uppercase">
            OUR PARTNERS
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              "https://www.onnroad.com/assets/images/logo/onnroad-new.png",
              "/logos/frame-architecture.svg",
              "/logos/copixel.svg",
              "/logos/reverland.svg",
              "/logos/bavier-fintech.svg",
            ].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Partner Logo"
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
