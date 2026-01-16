export default function AboutSection() {
  return (
    <section className="w-full bg-[#EDEDED] py-16 md:py-24">
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
              <span className="bg-yellow-600 text-white text-[10px] tracking-widest px-4 py-1 rounded-md rotate-[-90deg] block">
                ABOUT US
              </span>
            </div>

            {/* IMAGE CARD */}
            <div className="rounded-xl overflow-hidden shadow-lg lg:-mt-24 lg:ml-10">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80"
                alt="Solveig Pink"
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
          "
        >
          {/* TITLE */}
          <h2 className="text-[22px] sm:text-[26px] font-semibold text-white mb-6">
            Hi<span className="text-yellow-500">...</span> I’m{" "}
            <span className="font-bold">Solveig Pink!</span>
          </h2>

          {/* BELIEF */}
          <div className="mb-6">
            <h4 className="font-semibold text-yellow-400 mb-1">
              My Belief
            </h4>
            <p className="text-sm text-gray-100 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit quis
              nostrud rem aperiam. Ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>

          {/* PROCESS */}
          <div className="mb-8">
            <h4 className="font-semibold text-yellow-400 mb-1">
              My Process
            </h4>
            <p className="text-sm text-gray-100 leading-relaxed max-w-md">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
              dolorem magnam aliquam quaerat voluptatem enim ad minima veniam.
            </p>

            <p className="text-sm text-gray-100 mt-2">
              To me, it’s what living is about.
            </p>
          </div>

          {/* CTA */}
          <button className="flex items-center gap-3 text-sm font-medium text-gray-900">
            <span className="w-9 h-9 rounded-full bg-yellow-500 flex items-center justify-center text-white">
              →
            </span>
            SCHEDULE A SESSION NOW
          </button>
        </div>

        {/* PARTNERS SECTION */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-sm text-blue-700 mb-6">
            Our Partners
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
