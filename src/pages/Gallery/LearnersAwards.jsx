import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

// Images
import trophyIcon from "/assets/trophy.png"; // Icon image

import banner1 from "/banners/apl-learner-awards.jpg";
import mobile1 from "/banners/learner-awards-mob.webp";
import StaticBanner from "../../components/StaticBanner";

const slides = [{ desktop: banner1, mobile: mobile1 }];
// ✅ Banner images array


// ✅ Sample Awards Data (replace with real data)
const awardsData = [
  {
    title: "Best Innovator Award",
    description:
      "Awarded for outstanding innovative project in Science & Technology.",
    student: "Aarav Sharma",
    year: "2025",
    image: "/assets/school-girl.webp",
  },
  {
    title: "Sports Excellence Award",
    description: "Recognized for excellence in inter-school athletics.",
    student: "Priya Ramesh",
    year: "2025",
    image: "/assets/tab-1.webp",
  },
  {
    title: "Outstanding Leadership Award",
    description:
      "Awarded for exceptional leadership in student council initiatives.",
    student: "Rahul Mehta",
    year: "2024",
    image: "/assets/tab-2.webp",
  },
];

export default function LearnersAwards() {
  
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <>
    {/* Banner Section */}
          <StaticBanner slides={slides} alt="Our Associates Banner" />
    
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      
      {/* ✅ Title Section */}
      <div className="text-center mb-10">
        <img
          src={trophyIcon}
          alt="Trophy Icon"
          className="mx-auto w-14 h-14 mb-3"
        />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-primary">
          Learners Awards
        </h2>
        <p className="mt-2 text-secondary text-sm sm:text-base font-secondary max-w-2xl mx-auto">
          Celebrating our students' excellence in academics, sports, leadership,
          and innovation.
        </p>
      </div>

      {/* ✅ Awards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {awardsData.map((award, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={award.image}
              alt={award.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-primary font-bold text-primary">
                {award.title}
              </h3>
              <p className="text-sm text-gray-700 font-secondary mt-1">
                {award.description}
              </p>
              <div className="mt-3 text-sm text-secondary font-semibold">
                {award.student} • {award.year}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </>
    
  );
}
