import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Emry",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    rating: 4,
    review:
      "The team was professional and helpful at every step. Absolutely recommend them!",
  },
  {
    id: 2,
    name: "Williams Edward",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    rating: 4,
    review:
      "Really impressed by the service quality. They went above and beyond for us.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    rating: 5,
    review:
      "Super professional team! We saw a big improvement in our operations.",
  },
];

const renderStars = (rating) =>
  Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-5 h-5 ${
        i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
      }`}
    />
  ));

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800"
        >
          What Our <span className="text-blue-600">Customers Say</span>
        </motion.h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ id, name, image, rating, review }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: id * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center hover:scale-[1.03] hover:bg-blue-50"
            >
              <div className="relative mb-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-md opacity-30 group-hover:opacity-50 transition duration-300"
                ></motion.div>
                <motion.img
                  src={image}
                  alt={`${name}'s photo`}
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="font-semibold text-gray-800 text-lg mb-1"
              >
                {name}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-4"
              >
                {renderStars(rating)}
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-gray-600 text-base leading-relaxed"
              >
                {`“${review}”`}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Optional YouTube Video Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="w-full h-0 pb-[56.25%] relative rounded-xl overflow-hidden shadow-lg">
            <video
              className="absolute top-0 left-0 w-full h-full"
              controls
              loading="lazy"
              title="Gallery Video"
              src="/VID-20250412-WA0000.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
