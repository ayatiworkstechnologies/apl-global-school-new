"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Star } from "lucide-react";


const testimonials = [
  {
    name: "Brihadeesh N",
    batch: "Student of (Batch 2016)",
    content:
      "I thank all my teachers who have taught me from Grade 7 to Grade 12. Special thanks to Sangeetha ma’am, Varalakshmi ma’am and the Sports teachers for helping me to improve my fitness.",
    avatar: "/assets/test.svg",
    rating: 5,
  },
  {
    name: "Sakshi",
    batch: "Student of (Batch 2014)",
    content:
      "I would recommend prospective students to undertake the CIE curriculum for the availability and the freedom of choice it offers; no other academic stream offers that absolute liberty to make your own unique set of subjects.",
    avatar: "/assets/test.svg",
    rating: 5,
  },
  {
    name: "Dilan Thakrar",
    batch: "Student of (Batch 2015)",
    content:
      "I think of the CIE A-levels as the benchmark in high-school education standards as it offers a very application-oriented course and is also very well reputed almost all over the world.",
    avatar: "/assets/test.svg",
    rating: 5,
  },
  {
    name: "Sasha",
    batch: "Student of (Batch 2014)",
    content:
      "I like the teaching-learning methodology at APL. The PLPs are very helpful in preparing for our semester exams and it gives us an idea of how well we have understood the lesson.",
    avatar: "/assets/test.svg",
    rating: 5,
  },
  {
    name: "Mrs Latha",
    batch: "Parent of Akshara Ramabadran",
    content:
      "I had never heard of the APL Global School until my daughter, who had done well in her 10th boards at a well-known Chennai school, mentioned that she would like to finish her secondary education here.",
    avatar: "/assets/test.svg",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Autoplay functions
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };

  const resetInterval = () => {
    stopInterval();
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
    resetInterval();
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetInterval();
  };

  return (
    <div className="relative py-16 overflow-hidden z-10 w-full max-w-7xl mx-auto">
      <div className="text-center mt-5 mb-10">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-third mb-8 leading-tight">
          Testimonials
        </h2>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 border border-secondary shadow-xl rounded-full p-2 hover:bg-primary hover:border-none transition"
      >
        <FaArrowLeft className="w-6 h-6 text-secondary" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 border border-secondary shadow-xl rounded-full p-2 hover:bg-primary hover:border-none transition"
      >
        <FaArrowRight className="w-6 h-6 text-secondary" />
      </button>

      {/* Carousel */}
      <div className="relative flex justify-center items-center h-[500px]">
        {testimonials.map((t, i) => {
          const pos = (i - index + testimonials.length) % testimonials.length;
          const isActive = pos === 0;

          const baseOffset = 180;
          let translateX = 0;
          let scale = 0.85;
          let opacity = 0.4;
          let zIndex = 10;
          let color = "text-black";
          let bg = "bg-white";
          let shadow = "shadow-xl";

          if (isActive) {
            scale = 1.05;
            opacity = 1;
            zIndex = 50;
            color = "text-white";
            bg = "bg-primary";
            shadow = "shadow-xl";
          } else if (pos === 1 || pos === testimonials.length - 1) {
            translateX = pos === 1 ? baseOffset : -baseOffset;
            scale = 0.95;
            opacity = 0.9;
            zIndex = 30;
          } else if (pos === 2 || pos === testimonials.length - 2) {
            translateX = pos === 2 ? baseOffset * 1.8 : -baseOffset * 1.8;
            scale = 0.9;
            opacity = 0.8;
            zIndex = 20;
          } else {
            translateX = pos < testimonials.length / 2 ? -400 : 400;
            opacity = 0;
          }

          return (
            <motion.div
              key={i}
              className={`absolute max-w-[70%] sm:w-[280px] h-[420px] p-5 ${bg} ${shadow} rounded-2xl select-none`}
              style={{ zIndex }}
              animate={{ x: translateX, scale, opacity }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onMouseEnter={stopInterval}
              onMouseLeave={startInterval}
              onClick={(e) => e.stopPropagation()} // ✅ prevents any click effect
            >
              <div className="flex justify-center -mt-10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover mb-4 border-2 border-secondary"
                />
              </div>

              <div className="flex justify-center mt-5">
                {Array.from({ length: 5 }).map((_, idx) => {
                  const full = idx < Math.floor(t.rating);
                  const half = t.rating - idx >= 0.5 && t.rating - idx < 1;
                  const fillColor = isActive ? "text-secondary" : "text-secondary/80";

                  return (
                    <Star
                      key={idx}
                      className={`w-5 h-5 ml-1 ${fillColor}`}
                      fill={full || half ? "currentColor" : "none"}
                      stroke="currentColor"
                    />
                  );
                })}
              </div>

              <p className={`text-md mt-4 ${color} font-secondary text-left px-1`}>
                {t.content}
              </p>
              <h4 className={`font-semibold mt-7 font-secondary text-left ${color}`}>
                {t.name}
              </h4>
              <p className={`text-xs ${color} font-secondary text-left`}>
                {t.batch}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* ✅ Read More Button */}
      <div className="flex justify-center mt-12">
        <a
          href="/testimonials"
          className="inline-block bg-primary text-white px-6 py-2 rounded-md text-sm md:text-base font-medium hover:bg-secondary transition"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
