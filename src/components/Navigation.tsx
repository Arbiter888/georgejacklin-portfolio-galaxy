import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

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
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-slate-800/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg"
    >
      <ul className="flex space-x-6 text-sm">
        {[
          { id: "home", label: "Home" },
          { id: "experience", label: "Experience" },
          { id: "education", label: "Education" },
          { id: "background", label: "Background" },
          { id: "projects", label: "Projects" },
          { id: "blog", label: "Blog" },
          { id: "contact", label: "Contact" },
        ].map(({ id, label }) => (
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
    </motion.nav>
  );
};