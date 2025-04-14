import React, { useState } from "react";
import {
  Users,
  Briefcase,
  UserCheck,
  ClipboardList,
  Building2,
  UserCog,
  Hammer,
  FileText,
  Monitor,
  TrendingUp,
  UserPlus,
  BookUser,
  Banknote,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TabContent = ({ items }) => (
  <motion.div
    key={items[0].label} // key to ensure re-render on tab switch
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5 }}
    className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10"
  >
    {items.map((item, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.05 }}
        className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
      >
        <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
          <item.icon className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{item.label}</h4>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

const Provides = () => {
  const [activeTab, setActiveTab] = useState("blue");

  const blueCollarItems = [
    { label: "Field Sales Boys", icon: Users },
    { label: "Sales Manager", icon: Briefcase },
    { label: "Ground Sales Manager", icon: UserCheck },
    { label: "Team Leaders", icon: ClipboardList },
    { label: "Factory Worker", icon: Building2 },
    { label: "Industrial Labour", icon: UserCog },
    { label: "Construction Workers", icon: Hammer },
    { label: "Office Boys", icon: Users },
  ];

  const whiteCollarItems = [
    { label: "Administrative Assistant", icon: FileText },
    { label: "Data Entry Clerk", icon: Monitor },
    { label: "Marketing Manager", icon: TrendingUp },
    { label: "HR Manager", icon: BookUser },
    { label: "Operation Executive", icon: UserPlus },
    { label: "Accountant", icon: Banknote },
    { label: "Business Development", icon: Briefcase },
    { label: "Project Manager", icon: ClipboardList },
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
          We Provide
        </h2>

        <div className="flex justify-center mb-10">
          <button
            onClick={() => setActiveTab("blue")}
            className={`px-6 py-3 font-medium rounded-l-full border border-blue-500 text-lg transition-all duration-300 ${
              activeTab === "blue"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-blue-600 hover:bg-blue-100"
            }`}
          >
            Blue Collar
          </button>
          <button
            onClick={() => setActiveTab("white")}
            className={`px-6 py-3 font-medium rounded-r-full border border-blue-500 text-lg transition-all duration-300 ${
              activeTab === "white"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-blue-600 hover:bg-blue-100"
            }`}
          >
            White Collar
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "blue" ? (
            <TabContent key="blue" items={blueCollarItems} />
          ) : (
            <TabContent key="white" items={whiteCollarItems} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Provides;
