import React from "react";
import { motion } from "framer-motion";
const resources = [
  {
    title: "Mann HR Consultancy",
    description: "Quickly hire active jobseekers around your office.",
    points: [
      "Mann HR Verified Candidates",
      "Area-based Search",
      "Bulk WhatsApp Invites: Skip endless calls by sending custom WhatsApp invites and engage high-intent candidates quickly.",
    ],
    image:
      "https://media.licdn.com/dms/image/v2/C5112AQGS2Gst6Auvjw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1523920309454?e=2147483647&v=beta&t=N3vm2PgthlLm6M_u_7lrDijHWZBQqmU1oNO9JsvSjnw",
    link: "https://employer.apna.co/signin/?redirectType=DATABASE&redirectionSource=Homepage-database/",
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full py-16"
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
              <span className="text-blue-400">Resources</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-blue-100 max-w-xl"
            >
              Quickly hire active jobseekers around your office.
            </motion.p>
          </div>
        </div>
      </motion.div>
      <div className="bg-white px-4 md:px-20 py-20 max-w-screen-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-10">
          Resources - Mann HR Consultancy
        </h1>
        {resources.map((res, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center bg-blue-50 shadow-md rounded-2xl p-6 mb-10 transition hover:shadow-xl"
          >
            <img
              src={res.image}
              alt={res.title}
              className="w-full md:w-[550px] md:h-[350px] object-cover rounded-2xl mb-6 md:mb-0"
            />
            <div className="md:ml-10 w-full md:w-1/2">
              <h2 className="text-xl text-blue-600 font-semibold mb-2">
                {res.title}
              </h2>
              <p className="text-2xl font-bold text-gray-800 leading-snug mb-4">
                {res.description}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {res.points.map((point, i) => (
                  <li key={i} className="text-base md:text-lg">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
