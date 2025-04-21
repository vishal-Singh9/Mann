import React, { useState } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear field-specific error
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>

  
    <section
      id="contact"
      className="py-10 sm:py-14 md:py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex flex-col justify-center"
    >

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
              <span className="text-blue-400">Get In</span> Touch
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-blue-100 max-w-xl"
            >
              Have a question or need assistance? We’d love to hear from you.
            </motion.p>
          </div>
        </div>
      </motion.div>
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 py-10">
            <span className="text-blue-600 ">Get in Touch</span>
          </h2>
        </motion.div>
        {/* Responsive side-by-side map and form */}
<div className="w-full max-w-6xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
  {/* Map on the left */}
  <div className="w-full h-64 md:h-auto aspect-video rounded-xl overflow-hidden shadow-md border border-gray-200 flex items-center justify-center">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.49604223728326!2d72.47593495438272!3d23.026097181074174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9baa656a535d%3A0x42c288f53d932a8!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1744886231970!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      aria-hidden="false"
      tabIndex="0"
      title="Google Map"
      className="w-full h-full min-h-[250px] md:min-h-[350px]"
    />
  </div>

  {/* Contact form on the right */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8 flex flex-col justify-center"
  >
          {submitted && (
            <div className="mb-6 text-green-600 font-medium">
              ✅ Your message has been sent successfully!
            </div>
          )}
          <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
</div>
      </div>
    </section>  </div>
  );
}

export default Contact;
