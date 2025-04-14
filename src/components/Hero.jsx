import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="pt-24 py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-24"
      >
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Transform Your Workforce with Expert HR Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl mb-8"
          >
            Elevate your organization with our comprehensive HR consulting
            services. We help businesses build, manage, and optimize their human
            resources.
          </motion.p>
          {/* <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a> */}
        </div>
      </motion.div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full hidden lg:block">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="HR professionals in meeting"
          className="object-cover h-full w-full"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-800/50 to-transparent"
      />
    </section>
  );
}

export default Hero;
