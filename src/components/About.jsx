import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Tailored solutions for your business",
  "Expert team of HR professionals",
  "Proven track record of success",
  "Strategic planning & workforce optimization",
  "Scalable services for all business sizes",
];

function About() {
  return (
    <div>
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-blue-600 font-semibold uppercase mb-2 tracking-wider">
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white leading-tight">
                Why Choose <span className="text-blue-600">Us?</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                We bring expertise, passion, and a tailored approach to every
                client. Our mission is to empower your business through
                strategic HR solutions and operational excellence.
              </p>
              <div className="space-y-5">
                {benefits.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                    <span className="text-gray-700 dark:text-gray-200 text-base">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden group shadow-xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden">
                  <img
                    src="https://meddochealth.com/wp-content/uploads/2018/07/Business-Hand-Shake.jpg"
                    alt="Team meeting"
                    className="w-full h-full object-cover transform  duration-500  rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-sm opacity-0  transition duration-300 rounded-2xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
