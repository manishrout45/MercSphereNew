import React, { useEffect, useRef } from "react";

const ScrollPromo = () => {
  const videoRef = useRef(null);
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    const section = document.getElementById("scrollSection");
    const textBox = document.getElementById("scrollText");

    const handleScroll = () => {
      if (!section || !textBox) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;

      if (rect.top <= 0 && Math.abs(rect.top) <= sectionHeight) {
        const progress = Math.abs(rect.top) / sectionHeight;
        textBox.style.transform = `translateY(-${progress * 50}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 CONTROL VIDEO VISIBILITY
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current || !videoWrapperRef.current) return;

        if (entry.isIntersecting) {
          videoWrapperRef.current.style.display = "block";
          videoRef.current.play();
        } else {
          videoRef.current.pause();
          videoWrapperRef.current.style.display = "none";
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("scrollSection");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="scrollSection"
      className="relative h-[80vh] overflow-hidden"
    >
      {/* FIXED VIDEO (CONTROLLED) */}
      <div
        ref={videoWrapperRef}
        className="fixed inset-0 -z-10 overflow-hidden"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/assets/videos/promo-video.mp4"
          muted
          loop
          playsInline
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative h-full flex items-center justify-center px-4 text-center">
        <div
          id="scrollText"
          className="space-y-4 sm:space-y-6 transition-transform duration-100"
        >
          <h2 className="text-white text-3xl sm:text-5xl font-bold leading-tight">
  BUILDING <span className="text-yellow-400">DIGITAL</span>
  <span className="block">
    <span className="text-yellow-400">SOLUTIONS</span> THAT SCALE
  </span>
</h2>


          <p className="text-white/90 text-sm sm:text-lg max-w-3xl mx-auto">
            We help startups and enterprises design, develop, and deploy
            high-performance digital products.
          </p>

          <button className="mt-4 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            GET A FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScrollPromo;
