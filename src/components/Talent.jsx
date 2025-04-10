import React from "react";
import {
  Megaphone,
  Share2,
  Handshake,
  Users,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const strategies = [
  {
    icon: <Megaphone className="w-16 h-16 text-blue-500" />,
    title: "Ground Level Marketing",
  },
  {
    icon: <Share2 className="w-16 h-16 text-green-500" />,
    title: "Word of Mouth",
  },
  {
    icon: <Handshake className="w-16 h-16 text-purple-500" />,
    title: "Govt. Scheme Collaboration",
  },
  {
    icon: <Users className="w-16 h-16 text-yellow-500" />,
    title: "Referrals Program",
  },
  {
    icon: <MessageSquare className="w-16 h-16 text-red-500" />,
    title: "Bulk SMS & WhatsApp Blasts",
  },
  {
    icon: <Sparkles className="w-16 h-16 text-pink-500" />,
    title: "Social Media Influence",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Talent = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-14 text-gray-800"
        >
          How We Attract the Best Talent
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          {strategies.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center"
            >
              {item.icon}
              <h2 className="text-xl font-semibold mt-4 text-gray-700">
                {item.title}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Talent;
