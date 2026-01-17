export default function ServiceSection() {
  const services = [
    {
      title: "Website Design",
      desc:
        "Our professionals design websites that reflect your brand, increase your credibility, and help you stand out digitally.",
      img: "/assets/services/web-design.png",
      active: false,
    },
    {
      title: "Website Development",
      desc:
        "We deliver scalable website development solutions with robust security measures and ongoing support.",
      img: "/assets/services/web-development.png",
      active: false,
    },
    {
      title: "SEO Services",
      desc:
        "Our team utilizes proven search engine optimization strategies to drive organic traffic and increase conversions.",
      img: "/assets/services/seo.png",
      active: false,
    },
    {
      title: "SMO Services",
      desc:
        "Merc Sphere offers the best SMO strategies that integrate seamlessly to give your brand a competitive edge.",
      img: "/assets/services/smo.png",
      active: false,
    },
    {
      title: "PPC Services",
      desc:
        "Supercharge your online advertising and build a robust online presence with Merc Sphere PPC services.",
      img: "/assets/services/ppc.png",
      active: false,
    },
    {
      title: "SMM Services",
      desc:
        "Our specialists harness the might of social media to promote your business and drive meaningful results.",
      img: "/assets/services/smm.png",
      active: false,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#f1f6f9] to-blue-900 py-24">
      {/* WAVE BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-40 bg-[#ffffff] rounded-b-[60%]" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-500 mb-2">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            What We Do For You
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className={`rounded-xl p-8 text-center shadow-md transition-all duration-300
                ${
                  service.active
                    ? "bg-blue-900 text-white scale-105"
                    : "bg-white text-gray-800"
                }
                hover:bg-blue-900 hover:text-white hover:scale-105`}
            >
              {/* IMAGE */}
              <img
                src={service.img}
                alt={service.title}
                className={`h-28 mx-auto mb-6 transition-all duration-300 ${
                  service.active ? "" : "group-hover:brightness-0 group-hover:invert"
                }`}
              />

              {/* TITLE */}
              <h3
                className={`text-lg font-semibold mb-4 transition-colors duration-300`}
              >
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm mb-6 leading-relaxed transition-colors duration-300">
                {service.desc}
              </p>

              {/* BUTTON */}
              <button
                className={`px-5 py-2 text-sm rounded-md font-medium transition
                  bg-[#1F76B8] text-white hover:bg-[#195f92]`}
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
