"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, BookOpen, Users, UtensilsCrossed } from "lucide-react";


import StaticBanner from "../../../components/StaticBanner";
import APLVAlue2 from "../others/AplValue2";

const slides = [{ desktop: "/assets/A-Day-at-school-01.jpg", mobile: "/assets/A-Day-at-school-02.jpg" }];

export default function ADayAtAPL() {
  const daySchedule = [
    {
      title: "Learning in Action",
      description:
        "Students engage in real-time learning with hands-on experiences that promote deep understanding.",
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
    {
      title: "Creative Classrooms at APL",
      description:
        "Innovative teaching methods foster creative thinking and problem-solving skills.",
      icon: <BookOpen className="w-6 h-6 text-secondary" />,
    },
    {
      title: "Hands-On Learning Moments",
      description:
        "Learners actively participate through experiments, group projects, and presentations.",
      icon: <UtensilsCrossed className="w-6 h-6 text-primary" />,
    },
    {
      title: "Exploring Science and Innovation",
      description:
        "Exposure to scientific inquiry helps spark curiosity and future-focused innovation.",
      icon: <Users className="w-6 h-6 text-secondary" />,
    },
  ];

  return (
    <>
      {/* ✅ Banner Section */}
      <StaticBanner slides={slides} alt="Our A Day At APL Banner" />

      <section className="relative w-full py-16 px-4 sm:px-6 md:px-10 overflow-hidden">
        {/* ✅ Header Section */}
        <div className="relative bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl font-primary font-bold text-secondary"
            >
              A Day at APL Global School
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-4 max-w-2xl mx-auto text-white text-lg"
            >
              A sneak peek to experience the spirit of APL Global School. From
              classroom activities to special events, these moments showcase our
              students' creativity, learning, and growth in action.
            </motion.p>
          </div>
        </div>

        {/* ✅ Embedded YouTube Video Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-50% aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.youtube.com/embed/RyrTChbBGuo"
              title="A Day at APL Global School"
              className="w-full h-full rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        {/* ✅ Day Timeline Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-14">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Timeline Items */}
            <div className="space-y-8">
              {daySchedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
                >
                  <div>
                    <h3 className="text-lg font-primary font-semibold text-secondary">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Sticky Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-24 self-start"
            >
              <img
                src="/assets/day-at-school.png"
                alt="A Day at APL School"
                className="w-full max-w-[350px] mx-auto"
              />
            </motion.div>
          </div>
        </div>

        <APLVAlue2 />
      </section>
    </>
  );
}
