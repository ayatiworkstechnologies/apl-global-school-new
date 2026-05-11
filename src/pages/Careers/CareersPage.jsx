import React, { useState, useEffect } from "react";
import AcademicForm from "./Academic";
import NonAcademicForm from "./Non-Academic";
import { AnimatePresence, motion } from "framer-motion";

const tabs = [
  { id: "academic", label: "Academic" },
  { id: "non-academic", label: "Non - Academic" },
];

const CareersPages = () => {
  const [activeTab, setActiveTab] = useState("academic");
   

  return (
    <>
    
          <div className="max-w-4xl mx-auto p-4">
      {/* Title */}
      <div className="text-center p-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary inline-block border-b-2 border-secondary mb-6">
          Careers
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md font-medium transition ${
              activeTab === tab.id
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Form Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "academic" ? <AcademicForm /> : <NonAcademicForm />}
        </motion.div>
      </AnimatePresence>
    </div>
    </>
    
  );
};

export default CareersPages;
