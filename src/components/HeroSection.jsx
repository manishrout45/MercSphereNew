export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#050B14]">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/technology-futuristic-background_52683-36242.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#050B14]/40" />

      {/* SVG GRID */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {[200, 350, 500, 650].map((y, i) => (
          <path key={i} d={`M-200 ${y} H1600`} stroke="rgba(255,255,255,0.08)" />
        ))}
        {[300, 600, 900, 1200].map((x, i) => (
          <path key={i} d={`M${x} -200 V1100`} stroke="rgba(255,255,255,0.08)" />
        ))}
        {[200, 350, 500, 650].map((y, i) => (
          <path key={`hf-${i}`} d={`M-200 ${y} H1600`} className={`line-flow h-flow delay-${i}`} />
        ))}
        {[300, 600, 900, 1200].map((x, i) => (
          <path key={`vf-${i}`} d={`M${x} -200 V1100`} className={`line-flow v-flow delay-${i}`} />
        ))}
      </svg>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between">

        {/* LEFT TEXT */}
        <div className="text-white max-w-xl text-center md:text-right md:ml-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
            SMART <br /> CREATIVE <br /> SOLUTIONS
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-300">
            Turning Ideas into Powerful Digital Experiences
          </p>
        </div>

        {/* RIGHT STAIR BUTTONS */}
        <div className="hidden sm:flex relative flex-col items-end mt-12 md:mt-0 md:mr-20 gap-5">

          <button
            className="
              sm:translate-x-16 md:translate-x-24
              px-5 py-2 text-xs text-white rounded-full
              bg-white/[0.12] backdrop-blur-2xl
              border border-white/30
              shadow-[inset_0_0_18px_rgba(255,255,255,0.25),0_10px_30px_rgba(0,0,0,0.45)]
              hover:bg-white/[0.18]
              hover:shadow-[0_0_35px_rgba(255,255,255,0.35)]
              transition-all duration-300
            "
          >
            Web Development
          </button>

          <button
            className="
              sm:translate-x-8 md:translate-x-12
              px-5 py-2 text-xs text-white rounded-full
              bg-white/[0.12] backdrop-blur-2xl
              border border-white/30
              shadow-[inset_0_0_18px_rgba(255,255,255,0.25),0_10px_30px_rgba(0,0,0,0.45)]
              hover:bg-white/[0.18]
              hover:shadow-[0_0_35px_rgba(255,255,255,0.35)]
              transition-all duration-300
            "
          >
            Graphic Designing
          </button>

          <button
            className="
              translate-x-0
              px-5 py-2 text-xs text-white rounded-full
              bg-white/[0.12] backdrop-blur-2xl
              border border-white/30
              shadow-[inset_0_0_18px_rgba(255,255,255,0.25),0_10px_30px_rgba(0,0,0,0.45)]
              hover:bg-white/[0.18]
              hover:shadow-[0_0_35px_rgba(255,255,255,0.35)]
              transition-all duration-300
            "
          >
            Digital Marketing
          </button>

        </div>

      </div>

    </section>
  );
}
