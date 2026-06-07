import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { sectionIds, personalInfo } from "../data/details";

const Navbar = ({ activeSection, scrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    setIsMenuOpen(false);
    scrollTo(id);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f19]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-9 h-9 bg-linear-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center font-bold text-white text-xl">
              AP
            </div>
            <span className="font-bold tracking-tight text-white hidden sm:inline-block">
              Abhijith.dev
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {sectionIds.map((item) => (
              <button
                key={item}
                onClick={() => handleScrollTo(item)}
                className={`capitalize text-sm font-medium transition-colors hover:text-white ${
                  activeSection === item ? "text-blue-400" : "text-slate-400"
                }`}
              >
                {item}
              </button>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-4 py-2 bg-linear-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-blue-500/25"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Nav Burger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-400 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f1626] border-b border-white/5"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {sectionIds.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium capitalize ${
                    activeSection === item
                      ? "bg-blue-600/20 text-blue-400"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                className="block w-full text-center mt-4 px-4 py-2 bg-linear-to-r from-blue-500 to-teal-400 text-white rounded-md"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;