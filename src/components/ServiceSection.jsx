export default function ServiceSection() {
  const services = [
    {
      title: "Website Development",
      desc:
        "We deliver scalable website development solutions with robust security measures and ongoing support.",
      img: "https://img.freepik.com/premium-photo/browser-png-illustration-transparent-background_53876-995133.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    },
        {
      title: "Graphic Designing",
      desc:
        "Merc Sphere offers the best SMO strategies that integrate seamlessly to give your brand a competitive edge.",
      img: "https://img.freepik.com/premium-photo/online-business-illustration-png-sticker-transparent-background_53876-1002019.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    },
        {
      title: "UI/UX",
      desc:
        "Our professionals design websites that reflect your brand, increase your credibility, and help you stand out digitally.",
      img: "https://img.freepik.com/premium-photo/social-media-statistics-png-sticker-3d-graphic-transparent-background_53876-976968.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "SEO Services",
      desc:
        "Our team utilizes proven search engine optimization strategies to drive organic traffic and increase conversions.",
      img: "https://img.freepik.com/premium-photo/marketing-png-word-sticker-mixed-media-design-transparent-background_53876-1037013.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    },

    {
      title: "Digital Marketing",
      desc:
        "Supercharge your online advertising and build a robust online presence with Merc Sphere PPC services.",
      img: "https://img.freepik.com/premium-photo/png-startup-business-computer-table-desk_53876-909688.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "SMM Services",
      desc:
        "Our specialists harness the might of social media to promote your business and drive meaningful results.",
      img: "https://img.freepik.com/premium-photo/png-social-network-design-element-transparent-background_53876-943377.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#f1f6f9] to-blue-800 pt-40 pb-24 overflow-hidden">
      {/* ================= WAVE BACKGROUND ================= */}
      <div className="absolute top-0 left-0 w-full leading-none">
        <svg
          className="block w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,165.3C672,171,768,181,864,176C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-blue-500 mb-2 uppercase">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            What We Do For You
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="
                group rounded-xl p-8 text-center shadow-md
                bg-white text-gray-800
                transition-all duration-500 ease-out
                hover:scale-105 hover:text-white
                hover:bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_#1e3a8a_65%,_#0f172a_100%)]
              "
            >
              {/* IMAGE */}
              <img
                src={service.img}
                alt={service.title}
                className="
                  h-28 mx-auto mb-6 transition-all duration-500
                  
                "
              />

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-4">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>

              {/* BUTTON */}
              <button
                className="
                  px-5 py-2 text-sm rounded-full font-medium transition
                  bg-yellow-400 text-white
                  hover:bg-yellow-500
                "
              >
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
