import React from "react";
import { Building2, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid gap-12 md:grid-cols-3"
        >
          {/* Brand Info */}
          <motion.div variants={fadeUp} custom={0.2}>
            <div className="flex items-center space-x-3 mb-6">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">Mann HR Consultancy</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Transforming businesses through expert HR solutions that empower
              your workforce and drive growth.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} custom={0.4}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {["services", "about", "contact", "blog", "resources"].map(
                (link, i) => (
                  <a
                    key={i}
                    href={`/${link}`}
                    className="block text-gray-400 hover:text-blue-400 transition duration-200"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                )
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp} custom={0.6}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400 text-sm leading-relaxed">
              <p>922 Satyamev Shivalik, Sardar Patel Ring Rd</p>
              <p>Junction Ambli - Bopal Rd, Ahmedabad, Gujarat 380058</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:Mukulmahor2024@gmail.com"
                  className="hover:text-white"
                >
                  Mukulmahor2024@gmail.com
                </a>
              </p>
              <p>
                Mobile:{" "}
                <a href="tel:+918839164276" className="hover:text-white">
                  +91 8839164276
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.8}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm"
        >
          &copy; {new Date().getFullYear()} Mann HR Consultancy. All rights
          reserved.
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
