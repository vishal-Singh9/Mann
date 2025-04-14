import React from "react";
import { motion } from "framer-motion";
import { Users, Building, Award } from "lucide-react";

function Stats() {
  const stats = [
    { icon: Users, value: "50+", label: "Clients Served" },
    { icon: Building, value: "50+", label: "Partner Companies" },
    { icon: Award, value: "600+", label: "Employees Deployed" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center text-white hover:scale-[1.05] hover:shadow-xl hover:bg-white/20 transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white/30 p-4 rounded-full border-4 border-white/20 hover:bg-white/40 transition-all duration-300 transform hover:scale-110">
                  <stat.icon className="h-12 w-12 text-white" />
                </div>
              </div>
              <motion.h3
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.1 }}
                className="text-6xl font-bold mb-4 tracking-tight leading-tight"
              >
                {stat.value}
              </motion.h3>
              <p className="text-blue-100 text-lg font-medium tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
