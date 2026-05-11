import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Lightbulb, Users, BookOpen, Sparkles } from "lucide-react";


import StaticBanner from "../../../components/StaticBanner";
import APLVAlue2 from "../others/AplValue2";
const slides = [{ desktop: "/banners/vasta-web.jpg", mobile: "/banners/vasta-mob.jpg" }];

export default function VatsaPage() {
  const highlights = [
    {
      title: "Personalized Learning",
      description:
        "Vatsa focuses on customized learning methods tailored to the strengths, pace, and interests of every student.",
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
    },
    {
      title: "Holistic Development",
      description:
        "Students engage in activities that balance academics, creativity, and emotional well-being.",
      icon: <Sparkles className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Inclusive Learning",
      description:
        "A nurturing and inclusive space where diversity is celebrated, and every learner thrives.",
      icon: <Users className="w-8 h-8 text-primary" />,
    },
    {
      title: "Innovative Pedagogy",
      description:
        "Teachers at Vatsa adopt flexible, research-based teaching strategies for effective engagement.",
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
    },
  ];

  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt="Our Vatsa Banner" />

      <section className="w-full bg-gray-50 text-gray-800 font-secondary">
        <div className="relative bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl md:text-5xl font-primary font-bold text-secondary">
                Vatsa @ APL School
              </h1>
           
              <p className="mt-4 text-base md:text-lg text-white leading-relaxed">
                Searching for a caring after-school environment that feels like
                a second home- safe, supportive and enriching for your child?
              </p>
              <p className="mt-4 text-base md:text-lg text-white leading-relaxed">
                After a busy day at school, you would want your child to be in a
                safe, happy and caring environment. At APL Global, we create a
                nurturing space for children to relax, play and flourish under
                the care of dedicated and caring teachers.
              </p>
              <p className="mt-4 text-base md:text-lg text-white leading-relaxed">
                Rooted in holistic education philosophies like Montessori,
                Reggio Emilia, Waldorf, and Forest School, our after-school
                programme offers a warm, inspiring space to help kids wind down
                after school.
              </p>
              <p className="mt-4 text-base md:text-lg text-white leading-relaxed">
                Each day blends imaginative play, nature exploration, art,
                storytelling, and mindfulness activities—balanced with rest and
                reflection.
              </p>
              <p className="mt-4 text-base md:text-lg text-white leading-relaxed">
                Call us or whatsapp us at 73387 44475 to know more details.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative  overflow-hidden "
            >
              <img
                src={"/assets/vatsa-2.png"}
                alt="Vatsa Program at APL"
                className=""
              />
              <div className="absolute inset-0 " />
            </motion.div>
          </div>
        </div>

        {/* ✅ Highlights Section */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-14">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-primary font-bold text-primary mb-10 text-center md:text-left"
          >
            Why Vatsa?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-primary font-semibold text-secondary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="hidden md:block sticky top-28 self-start">
              <img
                src={vatsa}
                alt="Why Vatsa"
                className="w-full h-auto max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div> */}

        {/* ✅ About Vatsa Philosophy */}
        {/* <div className="bg-white py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-primary font-bold text-primary"
            >
              Our Philosophy
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed"
            >
              Vatsa believes every child is unique and deserves a flexible and
              customized educational pathway. Our approach encourages curiosity,
              creativity, and compassion while preparing students for future
              academic and personal challenges.
            </motion.p>
          </div>
        </div> */}
        <APLVAlue2 />
      </section>
    </>
  );
}
