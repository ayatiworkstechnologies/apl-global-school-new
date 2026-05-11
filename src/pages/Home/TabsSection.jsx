"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ FIX
import { tabContent, tabs } from "../../../data/Home_Data";

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [imageIndex, setImageIndex] = useState(0);

  const router = useRouter(); // ✅ FIX

  const content = useMemo(() => tabContent[activeTab], [activeTab]);
  const images = content?.images || [];
  const { big, small } = images[imageIndex] || {};
  const highlights = content?.highlights || [];

  /* ✅ Auto image slider */
  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <section
      className="w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/assets/home-graph.webp)` }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10">

        {/* ✅ Tabs */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-10 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setImageIndex(0);
              }}
              className={`w-28 sm:w-50 md:w-60 px-4 py-3 text-sm sm:text-base md:text-lg font-semibold border-2 rounded-lg text-center transition-all duration-300 uppercase font-primary
                ${
                  activeTab === tab
                    ? "bg-primary text-secondary border-primary"
                    : "text-primary border-primary hover:bg-primary hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ✅ Content */}
        <div className="flex flex-col lg:flex-row gap-10 mb-20">

          {/* LEFT */}
          <div className="lg:w-1/2 flex flex-col gap-6 sticky lg:top-24 px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-third leading-tight">
              <span className="border-b-2 border-secondary">
                {content?.title}
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-secondary text-primary whitespace-pre-line">
              {content?.sub}
            </p>

            {/* IMAGES */}
            {images.length > 0 && (
              <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">

                <AnimatePresence mode="wait">
                  <motion.img
                    key={`big-${imageIndex}`}
                    src={big}
                    alt="Main visual"
                    className="w-2/3 sm:w-[220px] md:w-[300px] object-cover rounded"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  />
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={`small-${imageIndex}`}
                    src={small}
                    alt="Side visual"
                    className="w-1/3 sm:w-[140px] md:w-[180px] object-cover rounded"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </AnimatePresence>

              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-third mb-6">
                  {content?.heading}
                </h2>

                <p className="text-gray-800 whitespace-pre-line font-secondary text-sm sm:text-base">
                  {content?.description}
                </p>

                {/* HIGHLIGHTS */}
                {highlights.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                    {highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-3 border-2 border-secondary rounded-lg shadow-sm hover:shadow-md transition"
                      >
                        {typeof item === "string" ? (
                          <span className="text-black font-semibold text-sm">
                            {item}
                          </span>
                        ) : (
                          <>
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-5 h-5 object-contain"
                            />
                            <span className="text-black font-semibold text-sm">
                              {item.label}
                            </span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* ✅ BUTTON FIXED */}
                <div className="mt-6">
                  <button
                    onClick={() =>
                      router.push(
                        `/${activeTab.toLowerCase().replace(/\s+/g, "-")}`
                      )
                    }
                    className="px-6 py-2 bg-secondary text-white uppercase font-primary font-semibold rounded hover:bg-opacity-90 transition"
                  >
                    Learn More
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}