import React from "react";
import { Users, Briefcase, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Blue Collar Jobs",
      description:
        "Hands-on roles in sectors like agriculture, construction, manufacturing, and maintenance. These jobs are crucial to the backbone of our economy.",
    },
    {
      icon: Briefcase,
      title: "White Collar Jobs",
      description:
        "Professional or office-based roles requiring management, administrative, or tech skills. These positions offer long-term career opportunities.",
    },
    {
      icon: ShieldCheck,
      title: "Security Services",
      description:
        "Trained personnel for industrial, residential, and commercial security needs. We ensure trust, discipline, and safety.",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-14 text-gray-800"
        >
          Our Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100 hover:border-blue-300 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-full bg-blue-100 text-blue-600 shadow-md">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {service.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800 transition-all duration-300"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
