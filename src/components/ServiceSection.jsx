import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCode,
  faPalette,
  faPenRuler,
  faMagnifyingGlassChart,
  faBullhorn,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

export default function ServiceSection() {
  const services = [
    {
      title: "Website Development",
      desc:
        "We deliver scalable website development solutions with robust security measures and ongoing support.",
      icon: faCode,
      path: "/webdevelopment",
    },
    {
      title: "Graphic Designing",
      desc:
        "Merc Sphere offers the best SMO strategies that integrate seamlessly to give your brand a competitive edge.",
      icon: faPalette,
      path: "/graphicdesigning",
    },
    {
      title: "UI/UX",
      desc:
        "Our professionals design websites that reflect your brand, increase your credibility, and help you stand out digitally.",
      icon: faPenRuler,
      path: "/uiux",
    },
    {
      title: "SEO Services",
      desc:
        "Our team utilizes proven search engine optimization strategies to drive organic traffic and increase conversions.",
      icon: faMagnifyingGlassChart,
      path: "/seoservices",
    },
    {
      title: "Digital Marketing",
      desc:
        "Supercharge your online advertising and build a robust online presence with Merc Sphere PPC services.",
      icon: faBullhorn,
      path: "/digitalmarketing",
    },
    {
      title: "SMM Services",
      desc:
        "Our specialists harness the might of social media to promote your business and drive meaningful results.",
      icon: faShareNodes,
      path: "/smmservices",
    },
  ];

  return (
    <section className="relative bg-blue-800 pt-40 pb-24 overflow-hidden">
      {/* WAVE */}
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

      <div className="relative max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-blue-200 mb-2 uppercase">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            What We Do For You
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="
                group relative rounded-xl p-8 text-center shadow-lg
                bg-white text-gray-800 overflow-hidden
                transition-all duration-500 ease-out
                hover:scale-105 hover:text-white
                hover:bg-gradient-to-br from-indigo-600 via-blue-700 to-slate-900
              "
            >
              {/* DOT PATTERN */}
              <div
                className="
                absolute inset-0 opacity-0 group-hover:opacity-20
                bg-[radial-gradient(#ffffff_1px,transparent_1px)]
                [background-size:18px_18px] transition duration-500
              "
              ></div>

              {/* ICON */}
              <div className="relative mb-6 text-blue-600 group-hover:text-white transition-all duration-500">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-5xl group-hover:scale-125 transition-all duration-500"
                />
              </div>

              {/* TITLE */}
              <h3 className="relative text-lg font-semibold mb-4">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="relative text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>

              {/* READ MORE */}
              <Link
                to={service.path}
                className="
                  relative inline-block px-5 py-2 text-sm rounded-full font-medium
                  transition bg-yellow-400 text-white hover:bg-yellow-500
                "
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
