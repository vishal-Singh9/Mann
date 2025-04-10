import React from "react";
import { BadgePercent, CalendarDays, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const charges = [
  {
    icon: <BadgePercent className="w-12 h-12 text-blue-600" />,
    title: "Service Charges",
    description:
      "Manpower costs are subject to change as per the Minimum Wages Act set by the State Government.",
  },
  {
    icon: <CalendarDays className="w-12 h-12 text-green-600" />,
    title: "Annual Charges",
    description:
      "One Month Salary of the employee + GST 18% + PF 12% + 3 Month Replacement.",
  },
  {
    icon: <Wallet className="w-12 h-12 text-purple-600" />,
    title: "Monthly Charges",
    description: "Monthly Salary + 14% Service Charges + GST 18% + PF 12%.",
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Charges = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Charges</h1>
        <p className="text-gray-500 text-lg">
          Transparent and flexible pricing tailored to your needs.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {charges.map((item, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all text-center flex flex-col items-center"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-14 max-w-3xl mx-auto bg-yellow-100 border-l-4 border-yellow-500 p-5 rounded-xl"
      >
        <p className="text-yellow-800 text-md font-medium">
          <strong>Note:</strong> 3-Month Replacement is applicable only under
          <strong> Annual Charges</strong>.
        </p>
      </motion.div>
    </section>
  );
};

export default Charges;
