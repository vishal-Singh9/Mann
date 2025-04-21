import React from "react";
import { motion } from "framer-motion";

const quotes = [
  {
    quote: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    quote:
      "Leadership is not about being in charge. It’s about taking care of those in your charge.",
    author: "Simon Sinek",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const QuotesPage = () => {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full"
      >
        <div
          className="relative w-full h-[60vh] md:h-[60vh] bg-cover bg-center flex items-center"
          style={{
            backgroundImage: "url('/collor.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />

          <div className="relative z-10 max-w-4xl px-6 md:px-16 lg:px-24">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              <span className="text-blue-400">Inspiring Quotes for Your</span>{" "}
              HR Journey
            </motion.h1>
          </div>
        </div>
      </motion.div>
      <div className="bg-gradient-to-br from-blue-50 via-gray-50 to-white py-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={quote.image}
                    alt={quote.author}
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-200 shadow"
                  />
                  <p className="text-gray-600 italic text-lg text-center px-2">
                    “{quote.quote}”
                  </p>
                  <p className="text-gray-800 font-semibold text-base">
                    — {quote.author}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuotesPage;
