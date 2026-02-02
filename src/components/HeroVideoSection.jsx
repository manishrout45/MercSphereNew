import { useRef } from "react";

export default function HeroVideoSection() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden py-10">
      {/* Image instead of Video */}
      <div className="relative w-full h-[300px] sm:h-[420px] md:h-[550px] bg-black">
        <img
          src="/assets/images/PromoHeroSection3.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Circular Logo */}
      <div className="absolute left-1/2 top-[calc(300px-70px)] sm:top-[calc(420px-80px)] md:top-[calc(550px-100px)] -translate-x-1/2">
        <div className="relative w-44 h-44 md:w-52 md:h-52 flex items-center justify-center">
          <div className="absolute inset-0 animate-spinSlow z-10">
            <img
              src="/assets/images/Bhubaneswar.png"
              alt="Circular Rotating Text"
              className="w-full h-full select-none pointer-events-none"
            />  
          </div>

          <div className="relative w-44 h-44 bg-white rounded-full shadow-xl flex items-center justify-center">
            <img
              src="/assets/images/logo/MercSphereDark.png"
              alt="Logo"
              className="w-20 md:w-24"
            />
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="w-full h-40 bg-white"></div>
    </section>
  );
}
