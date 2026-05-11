"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

/* ===================== IMAGES ===================== */
const items = [
  { src: "/assets/markai_1.webp", alt: "Back to School" },
  { src: "/assets/markai_2.webp", alt: "Creative Kids" },
  { src: "/assets/markai_3.webp", alt: "Holiday Fun" },
];

/* ===================== ACCORDION DATA ===================== */
const merakiSections = [
  {
    title: "Meraki (Experiential Learning)",
    content: `The Meraki (Experiential Learning) program helps students to explore creation and expression through Art, Music, Movement and Photography... 

The department also stands apart in its consistent efforts to integrate visual arts with other disciplines.

Alumni of the program now find themselves in institutions such as Srishti School of Design.

Award winning projects:
https://artroomhero.com/amruthaanand/`,
  },
  {
    title: "FARMING @ APL",
    content: `This is a movement that was started in 2017... 

We follow regenerative agricultural practices and sustainable learning.`,
  },
  {
    title: "Responsible Citizenship Program",
    content: `The Responsible Citizenship Program helps students develop sustainable habits and civic responsibility.`,
  },
];

/* ===================== COMPONENT ===================== */
export default function MerakiSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="px-4 md:px-16 py-12 bg-white text-primary">

      {/* IMAGE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* TEXT */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-2">
          Meraki
        </h2>

        <p className="italic text-sm text-primary mb-4">
          Creative Expression | Passion Meets Purpose
        </p>

        <h3 className="text-lg md:text-xl font-bold text-black uppercase mb-2">
          Beyond Classroom
        </h3>

        <p className="text-sm md:text-base text-black leading-relaxed mb-6">
          Any education is not complete without taking cognisance of what is the
          need of the hour. Designed to complement the academic curriculum,
          beyond classroom widens horizons and enhances learning.
        </p>

        {/* ACCORDION */}
        <div className="space-y-4">
          {merakiSections.map((item, index) => (
            <div key={index} className="border rounded-md shadow-sm">

              {/* HEADER */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-3 font-medium text-left"
              >
                <div className="flex gap-3 items-center">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white text-xs rounded-full">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>
                  <span>{item.title}</span>
                </div>
              </button>

              {/* CONTENT */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-sm text-black leading-relaxed whitespace-pre-line max-h-[300px] overflow-y-auto"
                  >
                    <p>{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}