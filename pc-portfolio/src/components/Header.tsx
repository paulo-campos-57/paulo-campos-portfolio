import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "./home", href: "#home" },
    { name: "./projects", href: "#projects" },
    { name: "./about", href: "#about" },
  ];

  return (
    <header className="fixed top-0 z-[100] w-full h-20 bg-black/90 backdrop-blur-sm text-white flex items-center justify-between px-6 md:px-12">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
      </div>

      <nav className="hidden md:flex items-center gap-10 text-xl lg:text-2xl font-bold">
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className="relative group transition duration-300">
            <span className="hover:text-gray-300 transition duration-300">
              {item.name}
            </span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="border-2 border-white rounded-full px-4 py-1 text-sm font-bold hover:bg-white hover:text-black transition">
          EN
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
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold hover:text-gray-400 transition"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}