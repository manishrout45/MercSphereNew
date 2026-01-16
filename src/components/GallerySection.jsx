import { useEffect, useRef } from "react";

const GallerySection = ({ className = "" }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    function scrollAmount() {
      if (window.innerWidth >= 1024) return slider.clientWidth / 4;
      if (window.innerWidth >= 640) return slider.clientWidth / 2;
      return slider.clientWidth;
    }

    const interval = setInterval(() => {
      slider.scrollLeft += scrollAmount();

      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-10 bg-blue-800">
      <div className={className}>
        <h2 className="main-heading text-3xl sm:text-4xl font-poppins text-white text-center mb-10">
          Our Services
        </h2>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar 
                     space-x-4 px-4 sm:px-6 lg:px-10"
        >
          {[
            {
              img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
              title: "Web Development",
            },
            {
              img: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
              title: "Mobile App Development",
            },
            {
              img: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81",
              title: "UI / UX Design",
            },
            {
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
              title: "Cloud Solutions",
            },
            {
              img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
              title: "Cyber Security",
            },
            {
              img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
              title: "AI & Machine Learning",
            },
            {
              img: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
              title: "Digital Marketing",
            },
            {
              img: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
              title: "IT Consulting",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative min-w-[90%] sm:min-w-[45%] lg:min-w-[23%]
                         h-[220px] sm:h-[260px] lg:h-[300px]
                         rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={item.img}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={item.title}
              />

              <div
                className="absolute inset-0 bg-gradient-to-t 
                           from-yellow-700/80 to-yellow-400/40
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-500"
              ></div>

              <p className="absolute bottom-4 left-4 text-white text-lg font-semibold tracking-wide">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
