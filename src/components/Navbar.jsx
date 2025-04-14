import React, { useState } from "react";
import { Building2, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Blue Collar", href: "/services/blue-collar" },
      { label: "White Collar", href: "/services/white-collar" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-md transition-all">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600 animate-pulse" />
            <Link to="/">
              <span className="text-2xl font-bold text-gray-800">
                Mann HR Consultancy
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link, i) => (
              <div key={i} className="relative group">
                {link.children ? (
                  <>
                    <button
                      className="flex items-center text-gray-700 font-medium hover:text-blue-600 transition duration-200"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === i ? null : i)
                      }
                    >
                      {link.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === i && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 mt-3 min-w-[140px] bg-white border border-gray-200 shadow-lg rounded-xl z-50 overflow-hidden"
                        >
                          {link.children.map((sublink, j) => (
                            <a
                              key={j}
                              href={sublink.href}
                              className="block px-5 py-3 text-sm text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-200 ease-in-out"
                            >
                              {sublink.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden mt-4 rounded-lg bg-white shadow-lg overflow-hidden"
            >
              <div className="flex flex-col space-y-1 p-4">
                {navLinks.map((link, i) => (
                  <div key={i} className="w-full">
                    {link.children ? (
                      <div className="mb-2">
                        <p className="text-gray-700 font-semibold mb-1">
                          {link.label}
                        </p>
                        <div className="ml-2">
                          {link.children.map((sublink, j) => (
                            <a
                              key={j}
                              href={sublink.href}
                              className="block px-3 py-1 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 rounded transition"
                            >
                              {sublink.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
                      >
                        {link.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
