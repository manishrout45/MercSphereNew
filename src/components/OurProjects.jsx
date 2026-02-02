import { useEffect, useRef, useState } from "react";

export default function OurProjects() {
  const projects = [
    { id: 1, name: "Natural Derma Clinic", url: "https://naturaldermaclinic.com", image: "/assets/projects/ndc.jpg" },
    { id: 2, name: "Organic Farm Website", url: "https://organicfarm.com", image: "/assets/projects/organic.jpg" },
    { id: 3, name: "IT Service Portfolio", url: "https://itportfolio.com", image: "/assets/projects/it.jpg" },
    { id: 4, name: "E-Commerce Dashboard", url: "https://ecommerce-demo.com", image: "/assets/projects/ecommerce.jpg" },
  ];

  const slides = [...projects, ...projects];
  const total = projects.length;

  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [enableTransition, setEnableTransition] = useState(true);
  const intervalRef = useRef(null);

  /* RESPONSIVE */
  useEffect(() => {
    const updateView = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  /* AUTO SLIDE */
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  /* SEAMLESS RESET (BOTH DIRECTIONS) */
  useEffect(() => {
    if (current === total) {
      setTimeout(() => {
        setEnableTransition(false);
        setCurrent(0);
      }, 700);
    }

    if (current < 0) {
      setTimeout(() => {
        setEnableTransition(false);
        setCurrent(total - 1);
      }, 700);
    }
  }, [current, total]);

  /* RE-ENABLE TRANSITION */
  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => {
        setEnableTransition(true);
      });
    }
  }, [enableTransition]);

  const next = () => setCurrent((prev) => prev + 1);
  const prev = () => setCurrent((prev) => prev - 1);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-14">
          <span className="text-xs tracking-widest text-blue-500 uppercase">
            Our Work
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Our Projects
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of websites and digital solutions we’ve crafted for our clients.
          </p>
        </div>

        {/* SLIDER */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div
            className={`flex gap-x-4 ${enableTransition ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{
              transform: `translateX(-${(100 / cardsPerView) * current}%)`,
            }}
          >
            {slides.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: `calc(${100 / cardsPerView}% - 1rem)`,
                }}
              >
                <div className="h-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-56 object-cover block hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {project.name}
                    </h3>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-2 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg px-4 py-2 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg px-4 py-2 rounded-full"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
