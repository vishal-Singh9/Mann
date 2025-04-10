import React from "react";
import { motion } from "framer-motion";
import { Users, Building, Award, Briefcase } from "lucide-react";

function Stats() {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: Building, value: "50+", label: "Partner Companies" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Briefcase, value: "1000+", label: "Projects Completed" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center text-white hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-4 rounded-full border border-white/30">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              <motion.h3
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.15 + 0.2 }}
                className="text-4xl font-extrabold mb-1 tracking-tight"
              >
                {stat.value}
              </motion.h3>
              <p className="text-blue-100 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
