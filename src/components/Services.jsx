import React from "react";
import { Users, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Blue Collar Jobs",
      description:
        "Hands-on roles in sectors like agriculture, construction, manufacturing, and maintenance. These jobs are crucial to the backbone of our economy.",
      link: "/services/blue-collar",
    },
    {
      icon: Briefcase,
      title: "White Collar Jobs",
      description:
        "Professional or office-based roles requiring management, administrative, or tech skills. These positions offer long-term career opportunities.",
      link: "/services/white-collar",
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
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
        >
          Our Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 sm:grid-cols-1 md:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-gray-100 hover:border-blue-200 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-full bg-blue-100 text-blue-600 shadow-md">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                {service.description}
              </p>
              <div>
                <Link
                  to={service.link}
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition"
                >
                  Know More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
