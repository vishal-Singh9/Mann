import React from "react";
import { Monitor, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";
const whiteJobs = [
  {
    icon: Monitor,
    title: "IT Professionals",
    description: "Software developers, support engineers, and IT consultants.",
  },
  {
    icon: FileText,
    title: "Administrative Staff",
    description: "Experts in documentation, filing, and office organization.",
  },
  {
    icon: Users,
    title: "HR & Recruitment",
    description: "Specialists in talent acquisition and people management.",
  },
];

const WhiteCollarJobs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 ">
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
              <span className="text-blue-400">White Collar</span> Jobs
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-blue-100 max-w-xl"
            >
              Find your dream job in the blue collar industry. Skilled roles
              that keep the world moving.
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="py-20 px-4 md:px-8">
        <h2 className="text-center text-4xl font-bold text-blue-700 mb-12">
          Available Job Categories
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
          {whiteJobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 p-6"
            >
              <div className="flex items-center justify-start space-x-6 mb-6">
                <div className="bg-blue-600 text-white p-5 rounded-full shadow-lg">
                  <job.icon className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-semibold text-gray-800">
                  {job.title}
                </h4>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {job.description}
              </p>
              <div className="flex justify-end">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-200">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhiteCollarJobs;
