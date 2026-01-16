import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const path = location.pathname === "/" ? "home" : location.pathname.slice(1);
  const navItems = ["home", "about", "events", "gallery", "contact"];

  /* ===============================
     SCROLL DETECTION
  =============================== */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

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

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed top-0 left-0 w-full z-[9998]
          transition-all duration-300
          ${scrolled ? "bg-[#050B14] backdrop-blur-md" : "bg-transparent"}
        `}
      >
        {/* Top Contact Bar (Desktop only) */}
        <div className="hidden md:flex max-w-7xl mx-auto px-4 pt-2 justify-end items-center space-x-6 text-sm text-white">
          <a href="tel:+919777220660" className="hover:text-yellow-400 flex gap-2">
            <i className="fa-solid fa-phone"></i> +91 9777 220 660
          </a>
          <a
            href="mailto:info@ridleypubbbsr.com"
            className="hover:text-yellow-400 flex gap-2"
          >
            <i className="fa-solid fa-envelope"></i> info@ridleypubbbsr.com
          </a>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src="/assets/images/logo/Ridleypub Logo PNG-02.png"
              alt="Ridley Pub Logo"
              className="h-14 sm:h-20 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const linkPath = item === "home" ? "/" : `/${item}`;
              return (
                <Link
                  key={item}
                  to={linkPath}
                  className={`capitalize transition ${
                    path === item
                      ? "text-yellow-500 font-semibold"
                      : "text-white hover:text-yellow-500"
                  }`}
                >
                  {item}
                </Link>
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
        className={`
          fixed inset-y-0 right-0 w-72
          bg-[#050B14] text-white
          transform transition-transform duration-300
          md:hidden px-6 py-6
          z-[9999]
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold tracking-wide">MENU</h2>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-3xl"
          >
            ×
          </button>
        </div>

        {/* Links */}
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

        {/* Contact */}
        <div className="space-y-3 text-sm">
          <h3 className="font-semibold text-base">Contact Us</h3>
          <p className="flex gap-2">
            <i className="fa-solid fa-phone"></i> +91 9777 220 660
          </p>
          <p className="flex gap-2">
            <i className="fa-solid fa-envelope"></i> info@ridleypubbbsr.com
          </p>
        </div>

        {/* Social */}
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
