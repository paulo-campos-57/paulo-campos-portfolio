import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const isProjectPage = location.pathname.includes("/project");

  const navItems = isProjectPage
    ? [
      { name: t.navHome, href: "/" },
      { name: t.navProjects, href: "/#projects" },
      { name: t.navAbout, href: "/#about" },
    ]
    : [
      { name: t.navHome, href: "#home" },
      { name: t.navProjects, href: "#projects" },
      { name: t.navAbout, href: "#about" },
    ];

  return (
    <header className="fixed top-0 z-[100] w-full h-20 bg-black/90 backdrop-blur-sm text-white flex items-center justify-between px-6 md:px-12">
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-10 text-xl lg:text-2xl font-bold">
        {navItems.map((item) => {
          const isAnchor = item.href.startsWith("#");

          return isAnchor ? (
            <a
              key={item.name}
              href={item.href}
              className="relative group transition duration-300"
            >
              <span className="hover:text-gray-300 transition duration-300">
                {item.name}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
          ) : (
            <Link
              key={item.name}
              to={item.href}
              className="relative group transition duration-300"
            >
              <span className="hover:text-gray-300 transition duration-300">
                {item.name}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="relative border-2 border-white rounded-full px-4 py-1 text-sm font-bold overflow-hidden group transition-colors duration-300 hover:border-blue-400"
          title={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="block group-hover:text-blue-400 transition-colors duration-300"
            >
              {language === "en" ? "EN" : "PT"}
            </motion.span>
          </AnimatePresence>
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-center py-8 gap-6 md:hidden border-b border-gray-800"
          >
            {navItems.map((item) => {
              const isAnchor = item.href.startsWith("#");

              return isAnchor ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold hover:text-gray-400 transition"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold hover:text-gray-400 transition"
                >
                  {item.name}
                </Link>
              );
            })}

            <button
              onClick={() => { toggleLanguage(); setIsOpen(false); }}
              className="border-2 border-white rounded-full px-6 py-2 text-base font-bold hover:bg-white hover:text-black transition"
            >
              {language === "en" ? "EN 🇺🇸" : "PT 🇧🇷"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}