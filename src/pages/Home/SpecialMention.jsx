"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

/* ---------- Default Items ---------- */
const DEFAULT_ITEMS = [
{
  src: "/assets/nisha.png",
  popupSrc: "/assets/nisha-popup.png",
  alt: "Youngest Seven Summits Climber - Nisha",
  para: "Nisha becomes the youngest climber",
  title: [
  "Nisha becomes the youngest climber. Nisha has successfully summited four peaks in three continents as part of the Seven Summits—the highest mountains on each continent—during the year 2025.",
   "Her achievements include the successful ascents of peak of each of continent:",
    "Mount Elbrus in Russia (Europe) on 19 April 2025",
    "Mount Kilimanjaro in Tanzania (Africa) on 11 June 2025",
    "Mount Kosciuszko (Australia) on 03 October 2025 + Carstensz Pyramid in Papua, Indonesia (Oceania) on 14 October 2025 (these 2 peaks form a part of the Messner version as well as Bass version of seven summits)",
    "With these climbs, Nisha, at the age of 15, has become one of the youngest Indians and among the youngest globally to have summited Carstensz Pyramid, the highest peak in Oceania (and the most technically challenging mountain).",
    "Nisha now has a clear plan to continue her journey:",
    "January 2026: To summit Mount Aconcagua (South America)",
    "April/May 2026: To attempt Mount Everest (Asia) - to be the Youngest female in the world to have summited Mount Everest from Nepal side",
    "Following Everest, she will proceed to summit Denali (North America) and then Vinson Massif (Antarctica) — with the goal of completing all Seven Summits by the end of 2026.",
    "Upon successful completion, she aspires to become the youngest woman in the world to complete the Seven Summits—bringing immense pride to Tamil Nadu and India."
  ]

},


  {
    src: "/assets/mention-1.webp",
    popupSrc: "/assets/special-1.webp",
    alt: "ASIA BOOK OF RECORDS",
    para: "ASIA BOOK OF RECORDS",
    title:
      "U Anirudhan set a world record in February 2024 by completing 10 KM continuous sea swimming in an open sea out of 165 KM swimming rally expeditions by children with autism spectrum. This world record was registered in World Records Union, Asia Book of Records and Indian Book of Records.",
  },
  {
    src: "/assets/mention-2.webp",
    popupSrc: "/assets/special-2.jpg",
    alt: "Speed Power International Open Taekwondo Championship",
    para: "Speed Power International Open Taekwondo Championship",
    title:
      "RAKSHAN MOHANDASS participated in the 11TH Speed Power International Open Taekwondo Championship 2024 and won Gold in the category - speed kick male 9-11 and a bronze in the category - pomsee male 9-11.",
  },
  {
    src: "/assets/mention-3.webp",
    popupSrc: "/assets/special-3.jpg",
    alt: "Queen's Commonwealth Essay Competition 2023",
    para: "Queen's Commonwealth Essay Competition 2023",
    title:
      "Anjali Jayraman participated in the Queen's Commonwealth Essay Competition 2023 held in London, UK and was awarded bronze for her essay submission.",
  },
  {
    src: "/assets/mention-4.webp",
    popupSrc: "/assets/special-4.jpg",
    alt: "ILCA 4 Youths World Championships",
    para: "ILCA 4 Youths World Championships",
    title:
      "Alia Sabreen Faisal participated in the 2024 ILCA 4 Youths World Championships for sailing held at Portugal in June 2024.",
  },
  {
    src: "/assets/mention-5.webp",
    popupSrc: "/assets/special-5.webp",
    alt: "Emergent Ventures",
    para: "Emergent Ventures by Mercatus Centre of George Mason University",
    title:
      "Anjali Jayaraman Grade 10 presented her project Repay Smart in the form of a 1500 word proposal to Emergent Ventures by Mercatus Centre of George Mason University, a fellowship and grant program that supports entrepreneurs and brilliant minds.",
  },
];

export default function CertificatesCarousel({ items = DEFAULT_ITEMS }) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [popupImage, setPopupImage] = useState(null);
  const total = items.length;

  /* ---------- Responsive Visible Count ---------- */
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(3);
      else if (w >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  /* ---------- Carousel Navigation ---------- */
  const next = () => setIndex((v) => (total ? (v + 1) % total : 0));
  const prev = () => setIndex((v) => (total ? (v - 1 + total) % total : 0));

  const visibleItems = () =>
    Array.from(
      { length: Math.min(visibleCount, Math.max(1, total)) },
      (_, k) => items[(index + k) % total]
    );

  const arrowsDisabled = total <= visibleCount;

  /* ---------- Render ---------- */
  return (
    <section className="relative w-full py-12">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-primary font-bold text-secondary text-center mb-10"
      >
        Special Mentions
      </motion.h2>

      <p className="text-primary px-10 mt-2 mb-10 text-center">We take pride in celebrating our students’ grit, focus, and determination reflected in their remarkable achievements. Whether in sports, literary pursuits, or innovative endeavors, we encourage them to follow their passions with zeal and enthusiasm.</p>

      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="h-28 w-[82%] max-w-5xl rounded-full bg-purple-500/10 blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-[48px_1fr_48px] items-center gap-3">
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            disabled={arrowsDisabled}
            className={`grid place-items-center h-10 w-10 rounded-full bg-white ring-1 ring-purple-300 text-purple-700 shadow-md hover:bg-purple-50 active:scale-95 transition ${
              arrowsDisabled ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <FaArrowLeft />
          </button>

          {/* Carousel Track */}
          <div className="flex items-end justify-center gap-5 flex-wrap">
            {visibleItems().map((item, idx) => {
              const globalIndex = (index + idx) % total;
              const isExpanded = expanded === globalIndex;

              return (
                <figure
                  key={`${item.src}-${idx}`}
                  className={`relative flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-black/5 shadow-[0_10px_34px_rgba(0,0,0,0.14)] w-[70vw] sm:w-[320px] md:w-[280px] lg:w-[300px] xl:w-[320px] transition-transform duration-300 ${
                    visibleCount >= 2 && idx === 1
                      ? "scale-105 shadow-[0_16px_44px_rgba(0,0,0,0.18)]"
                      : "opacity-95"
                  }`}
                >
                  <div
                    className="flex-1 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setPopupImage(item.popupSrc || item.src)}
                  >
                    <img
                      src={item.src}
                      alt={item.alt || "Certificate"}
                      className="max-h-full max-w-full object-contain"
                      draggable="false"
                    />
                  </div>

                  <figcaption className="text-center text-sm md:text-base font-medium text-gray-800 bg-purple-50 py-3 px-2 rounded-b-xl">
                    {item.para}
                  </figcaption>

                  {item.title && (
                    <div className="bg-purple-50 px-4 pb-3 text-center">
                      {isExpanded && (
                        <p className="text-xs md:text-sm text-gray-700 mb-2">
                          {item.title}
                        </p>
                      )}
                      <button
                        onClick={() =>
                          setExpanded(isExpanded ? null : globalIndex)
                        }
                        className="text-primary text-sm font-medium"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  )}
                </figure>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next"
            disabled={arrowsDisabled}
            className={`grid place-items-center h-10 w-10 rounded-full bg-white ring-1 ring-purple-300 text-purple-700 shadow-md hover:bg-purple-50 active:scale-95 transition ${
              arrowsDisabled ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* ---------- Popup Modal (Image Centered Only) ---------- */}
      <AnimatePresence>
        {popupImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopupImage(null)}
          >
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setPopupImage(null)}
                className="absolute -top-10 right-0 text-white text-4xl hover:text-gray-300 transition"
              >
                <IoClose />
              </button>

              {/* Centered Image */}
              <img
                src={popupImage}
                alt="Popup"
                className="max-h-[85vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
