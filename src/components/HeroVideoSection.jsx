import { useEffect, useRef, useState } from "react";

export default function HeroVideoSection() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  /* Observe visibility */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // ▶️ Autoplay ONLY when visible
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          // ⏸ Pause when out of view (CRITICAL)
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.35 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden">
      {/* Video */}
      <div className="relative w-full h-[300px] sm:h-[420px] md:h-[550px] bg-black">
        <video
          ref={videoRef}
          className="w-full h-full object-cover will-change-transform"
          src="/assets/videos/Ridley_Video.mp4"
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/images/video-poster.jpg"
        />
      </div>

      {/* Circular Logo */}
      <div className="absolute left-1/2 top-[calc(300px-70px)] sm:top-[calc(420px-80px)] md:top-[calc(550px-100px)] -translate-x-1/2">
        <div className="relative w-44 h-44 md:w-52 md:h-52 flex items-center justify-center">
          <div className="absolute inset-0 animate-spinSlow z-10">
            <img
              src="/assets/images/Ridley Pub & Chimes Lounge.png"
              alt="Circular Rotating Text"
              className="w-full h-full select-none pointer-events-none"
            />
          </div>

          <div className="relative w-44 h-44 bg-white rounded-full shadow-xl flex items-center justify-center">
            <img
              src="/assets/images/logo/Ridleypub Logo PNG-01.png"
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
