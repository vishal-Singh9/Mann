import React from "react";
import { Building2 } from "lucide-react";
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
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} custom={0.2}>
            <div className="flex items-center space-x-3 mb-6">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">
                Mann HR Consultancy
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through expert HR solutions that empower
              your workforce and drive growth.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} custom={0.4}>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <div className="space-y-2">
              {["home", "services", "about", "contact"].map((link, i) => (
                <a
                  key={i}
                  href={`#${link}`}
                  className="block text-gray-400 hover:text-blue-400 transition duration-200"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp} custom={0.6}>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h3>
            <div className="space-y-2 text-gray-400 text-sm leading-relaxed">
              <p>123 Business Avenue</p>
              <p>New York, NY 10001</p>
              <p>contact@hrpro.com</p>
              <p>(555) 123-4567</p>
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
