import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaSearch,
  FaMobileAlt,
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesRef = useRef(null);
  const closeTimer = useRef(null);

  const pathname = location.pathname;
  const path = pathname === "/" ? "home" : pathname.slice(1);
  const isServicesActive = pathname.startsWith("/services");

  const navItems = ["home", "about", "Services", "gallery", "contact"];

  const servicesList = [
    { name: "Web Development", icon: <FaLaptopCode />, link: "/services/web" },
    { name: "Graphic Designing", icon: <FaPaintBrush />, link: "/services/design" },
    { name: "Digital Marketing", icon: <FaBullhorn />, link: "/services/marketing" },
    { name: "SEO Optimization", icon: <FaSearch />, link: "/services/seo" },
    { name: "App Development", icon: <FaMobileAlt />, link: "/services/app" },
  ];

  /* ===============================
     SCROLL DETECTION
  =============================== */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===============================
     LOCK BODY SCROLL (MOBILE)
  =============================== */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileOpen]);

  /* ===============================
     CLICK OUTSIDE CLOSE (SERVICES)
  =============================== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ===============================
     HOVER TOLERANCE
  =============================== */
  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
    }, 250);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-[9998] transition-all duration-300 ${
          scrolled ? "bg-[#050B14] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        {/* Top Contact Bar */}
        <div className="hidden md:flex max-w-7xl mx-auto px-4 pt-2 justify-end items-center space-x-6 text-sm text-white">
          <a href="tel:+919938810752" className="hover:text-yellow-400 flex gap-2">
            <i className="fa-solid fa-phone"></i> +91 9938 810 752
          </a>
          <a href="mailto:mercsphere@gmail.com" className="hover:text-yellow-400 flex gap-2">
            <i className="fa-solid fa-envelope"></i> mercsphere@gmail.com
          </a>
        </div>

        <hr className="border-t border-gray-700 opacity-40 my-2" />

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 pb-2 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/images/logo/MercSphere.png"
              alt="Merc Sphere Logo"
              className="h-14 sm:h-20 object-contain -mt-4"
            />
            <span className="text-white font-bold tracking-widest text-lg sm:text-2xl -mt-2">
              MERC <span className="text-yellow-500">SPHERE</span>
            </span>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => {
              if (item !== "Services") {
                const linkPath = item === "home" ? "/" : `/${item}`;
                const isActive = path === item;

                return (
                  <Link
                    key={item}
                    to={linkPath}
                    className={`relative capitalize transition ${
                      isActive
                        ? "text-yellow-500 font-semibold"
                        : "text-white hover:text-yellow-500"
                    }`}
                  >
                    {item}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-yellow-500 rounded-full" />
                    )}
                  </Link>
                );
              }

              return (
                <div
                  key="services"
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen((p) => !p)}
                    className={`relative flex items-center gap-1 transition ${
                      isServicesActive
                        ? "text-yellow-500 font-semibold"
                        : "text-white hover:text-yellow-500"
                    }`}
                  >
                    Services <span className="text-sm">▾</span>

                    {isServicesActive && (
                      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-yellow-500 rounded-full" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full mt-4 w-72 bg-[#0b1324] rounded-xl shadow-xl border border-white/10 p-4 grid gap-3
                    transition-all duration-300 origin-top
                    ${
                      servicesOpen
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                    }
                    right-0 lg:left-0 lg:right-auto`}
                  >
                    {servicesList.map((service) => (
                      <Link
                        key={service.name}
                        to={service.link}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition"
                      >
                        <span className="text-yellow-400 text-xl">
                          {service.icon}
                        </span>
                        <span className="text-white text-sm font-medium">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-3xl text-white"
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE BACKDROP ================= */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/70 z-[9997] md:hidden"
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}
      <nav
        className={`fixed inset-y-0 right-0 w-72 bg-[#050B14] text-white transform transition-transform duration-300 md:hidden px-6 py-6 z-[9999]
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold tracking-wide">MENU</h2>
          <button onClick={() => setMobileOpen(false)} className="text-3xl">
            ×
          </button>
        </div>

        <div className="space-y-5">
          {navItems.map((item) => {
            const linkPath = item === "home" ? "/" : `/${item}`;
            return (
              <Link
                key={item}
                to={linkPath}
                onClick={() => setMobileOpen(false)}
                className={`block text-lg capitalize ${
                  path === item
                    ? "text-yellow-400 font-semibold"
                    : "hover:text-yellow-400"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="space-y-3 text-sm">
          <h3 className="font-semibold text-base">Contact Us</h3>
          <p className="flex gap-2">
            <i className="fa-solid fa-phone"></i> +91 9777 220 660
          </p>
          <p className="flex gap-2">
            <i className="fa-solid fa-envelope"></i> info@ridleypubbbsr.com
          </p>
        </div>

        <div className="flex space-x-5 mt-6 text-lg">
          <i className="fa-brands fa-facebook-f hover:text-yellow-400"></i>
          <i className="fa-brands fa-instagram hover:text-yellow-400"></i>
          <i className="fa-brands fa-twitter hover:text-yellow-400"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
