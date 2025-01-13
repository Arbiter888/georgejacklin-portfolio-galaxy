import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "background", label: "Background" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 sm:w-auto"
    >
      <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg mx-auto max-w-md sm:max-w-none">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-full flex items-center justify-between text-slate-300 py-1 px-2"
        >
          <span>{menuItems.find(item => item.id === activeSection)?.label || "Menu"}</span>
          <svg
            className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-slate-800/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden md:hidden"
          >
            <ul className="py-2">
              {menuItems.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      activeSection === id
                        ? "text-blue-400 font-medium bg-slate-700/50"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/30"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm">
          {menuItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`text-sm transition-colors ${
                  activeSection === id
                    ? "text-blue-400 font-medium"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};