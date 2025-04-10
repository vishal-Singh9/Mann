import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Over 15 years of industry experience",
  "Tailored solutions for your business",
  "Expert team of HR professionals",
  "Proven track record of success",
];

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
              Why Choose <span className="text-blue-600">Us?</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We bring expertise, passion, and a tailored approach to every
              client. Our mission is to empower your business through strategic
              HR solutions.
            </p>
            <div className="space-y-5">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                  <span className="text-gray-700 text-base">{item}</span>
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
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
                alt="Team meeting"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-white/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
