import {
  FaPenNib,
  FaMobileAlt,
  FaGlobe,
  FaPalette,
  FaProjectDiagram,
  FaSitemap,
  FaBullhorn,
  FaPaintBrush,
  FaLayerGroup,
} from "react-icons/fa";

const services = [
  { title: "UI/UX Design", icon: <FaPenNib /> },
  { title: "Application Design", icon: <FaMobileAlt /> },
  { title: "Website Design", icon: <FaGlobe /> },
  { title: "UI Design", icon: <FaPalette /> },
  { title: "Design System", icon: <FaProjectDiagram /> },
  { title: "Wireframing", icon: <FaSitemap /> },
  { title: "Brand Identity", icon: <FaBullhorn /> },
  { title: "Illustration", icon: <FaPaintBrush /> },
  { title: "Web App Design", icon: <FaLayerGroup /> },
];

export default function ServiceSection() {
  return (
    <section className="bg-white pt-20 overflow-hidden">

      {/* ================= SERVICES GRID ================= */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm text-gray-400 mb-2">Our Specialization</p>
          <h2 className="text-4xl font-bold">
            Services <span className="text-blue-500">We Provide</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="
                relative
                bg-gray-50
                rounded-2xl
                p-7
                border
                border-transparent
                transition-all
                duration-300
                hover:shadow-xl
                hover:border-blue-500
                hover:-translate-y-1
              "
            >
              <span className="absolute left-0 top-6 h-12 w-1 bg-blue-500 rounded-full" />

              <div className="w-12 h-12 bg-white shadow rounded-xl flex items-center justify-center text-blue-500 text-xl mb-5 transition-transform duration-300 hover:scale-110">
                {s.icon}
              </div>

              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <span className="text-sm font-medium text-green-500 hover:underline cursor-pointer">
                Learn more →
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 relative z-20">
          <h3 className="text-3xl font-bold mb-6">
            Let’s Create an{" "}
            <span className="text-blue-500">Amazing Project Together!</span>
          </h3>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* ================= BOTTOM FLOATING TAGS ================= */}
      <div className="relative h-[260px]">

        <div className="absolute bottom-0 w-full h-28" />

        {/* ROW 1 */}
        <span style={{ backgroundColor: "#2196F3" }} className="absolute bottom-24 left-[6%] rotate-[-6deg] pill">Design System</span>
        <span className="absolute bottom-24 left-[20%] rotate-[4deg] pill">Prototype</span>
        <span className="absolute bottom-24 left-[35%] rotate-[-3deg] pill">Mobile App Design</span>
        <span style={{ backgroundColor: "#2196F3" }} className="absolute bottom-24 left-[55%] rotate-[5deg] pill">Website Design</span>
        <span className="absolute bottom-24 left-[72%] rotate-[-4deg] pill">Illustration</span>

        {/* ROW 2 */}
        <span className="absolute bottom-12 left-[12%] rotate-[5deg] pill">Wireframe Design</span>
        <span style={{ backgroundColor: "#2196F3" }} className="absolute bottom-12 left-[30%] rotate-[-5deg] pill">UI/UX Design</span>
        <span style={{ backgroundColor: "#2196F3" }} className="absolute bottom-12 left-[48%] rotate-[4deg] pill">Landing Page</span>
        <span className="absolute bottom-12 left-[65%] rotate-[-6deg] pill">Product Design</span>
        <span style={{ backgroundColor: "#2196F3" }} className="absolute bottom-12 left-[82%] rotate-[3deg] pill">Brand Identity</span>
      </div>

      {/* ================= UTIL CLASSES ================= */}
      <style>
        {`
          .pill {
            background: white;
            padding: 6px 16px;
            border-radius: 9999px;
            font-size: 13px;
            font-weight: 500;
            box-shadow: 0 6px 20px rgba(0,0,0,0.12);
            white-space: nowrap;
          }
        `}
      </style>

    </section>
  );
}
