import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

interface MenuItem {
  name: string;
  href: string;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const menuItems: MenuItem[] = [
    { name: "Home", href: "#index" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Tech", href: "#tech" },
    { name: "Contact", href: "#contact" },
  ];

  // ✅ Typed scroll handler
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target instanceof HTMLElement) {
      window.scrollTo({
        top: target.offsetTop - 80, // adjust for navbar height
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  // ✅ Scroll spy to highlight active section
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollY = window.scrollY;

      const offsets = menuItems
        .map((item) => {
          const el = document.querySelector(item.href);
          if (el instanceof HTMLElement) {
            return { name: item.name, top: el.offsetTop - 100 };
          }
          return null;
        })
        .filter(
          (el): el is { name: string; top: number } => el !== null
        );

      const current = offsets
        .reverse()
        .find((section) => scrollY >= section.top);

      if (current) setActive(current.name);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [menuItems]);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 
      z-50 w-[90%] max-w-2xl px-6 py-2 
      flex items-center justify-between
      border border-gray-800 
      bg-primary/40 backdrop-blur-lg text-gray-200 shadow-lg rounded-full"
    >
      {/* === Logo === */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="logo" className="h-8 w-8 object-contain" />
      </div>

      {/* === Desktop Menu === */}
      <div className="hidden md:flex items-center space-x-5 text-sm">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className={`transition-colors duration-300 ${
              active === item.name
                ? "text-white font-semibold"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* === Right Section === */}
      <div className="flex items-center space-x-3">
  

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* === Mobile Dropdown === */}
      {open && (
        <div
          className="absolute top-full right-0 mt-3 w-full
          bg-black/80 backdrop-blur-md border border-gray-800 
          rounded-lg text-center py-4 space-y-3 animate-fadeIn"
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`block transition ${
                active === item.name
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}

          <a
            href="/cv.pdf"
            download
            className="block border border-gray-700 mx-10 rounded-full py-2 hover:bg-gray-800 transition text-sm"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
