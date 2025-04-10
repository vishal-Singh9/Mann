import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Gujarat",
    description: "Extensive support in industrial hubs like Ahmedabad & Surat.",
  },
  {
    name: "Delhi (NCR)",
    description: "Pan-NCR presence with corporate & service sector coverage.",
  },
  {
    name: "Rajasthan",
    description:
      "Servicing hospitality and manufacturing sectors across Jaipur.",
  },
  {
    name: "Uttar Pradesh",
    description:
      "Strategic workforce solutions across key cities like Noida & Lucknow.",
  },
  {
    name: "Madhya Pradesh",
    description: "Reliable manpower services in Indore, Bhopal and more.",
  },
  {
    name: "Pune",
    description:
      "Major support for IT, logistics, and startups in Pune region.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const Location = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Where We Provide{" "}
          <span className="text-blue-600">Manpower Services</span>
        </h2>
        <p className="text-gray-600 text-lg">
          We serve key regions across India with customized hiring and workforce
          solutions.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {locations.map((loc, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-md p-6 border border-blue-100 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-7 h-7 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">
                {loc.name}
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {loc.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Location;
