import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const QuotesThought = () => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-28 px-6 text-white font-sans"
      style={{
        backgroundImage:
          "url('https://html.creativegigstf.com/charles/images/home/2.jpg')",
      }}
    >
      {/* Brighter overlay */}
      <div className="bg-black/40 absolute inset-0"></div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6 leading-snug tracking-wide drop-shadow-lg"
        >
          We provide{" "}
          <span className="text-blue-400 drop-shadow-md">
            high quality services
          </span>{" "}
          & innovative solutions for <br />
          <span className="text-blue-300">reliable growth</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/quotes">
            <button className="mt-5 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-md shadow-xl transition duration-300 hover:scale-105">
              Get a Quote
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default QuotesThought;
