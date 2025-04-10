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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-14 text-gray-800"
        >
          What Our <span className="text-blue-600">Customers Say</span>
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ id, name, image, rating, review }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:scale-[1.02]"
            >
              <img
                src={image}
                alt={`${name}'s photo`}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-4 shadow-md"
              />
              <p className="font-semibold text-gray-800 text-lg mb-1">{name}</p>
              <div className="flex justify-center mb-4">
                {renderStars(rating)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{`“${review}”`}</p>
            </motion.div>
          ))}
        </div>

        {/* YouTube Video */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="w-full h-0 pb-[56.25%] relative rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              loading="lazy"
              src="https://www.youtube.com/embed/54-NEylEUZE"
              title="Customer Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;
