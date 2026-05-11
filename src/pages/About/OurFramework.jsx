"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ FIX





// Components
import TestimonialCarousel from "./TestimonialCarousel";
import APLVAlue1 from "../others/AplValue1";
import StaticBanner from "../../../components/StaticBanner";


const slides = [{ desktop:"/assets/apl-framework.jpg", mobile: "/assets/apl-framework-mob.jpg" }];

/* ------------ content ------------ */
const cardData = [
  {
    title: "Our Vision",
    icon: "/assets/icon/2.png",
    desc:
      "To be a school that nurtures an inclusive, compassionate environment where every learner feels inspired to realize and celebrate their unique potential.",
  },
  {
    title: "Our Mission",
    icon: "/assets/icon/1.png",
    desc: [
      "To provide personalised learning environments that are self-paced and goal oriented",
      "To provide learner-centric classrooms with an optimum student-teacher ratio",
      "To provide a mindful, mentoring space that enables self-management",
      "To provide life-enriching skills that empower learners to become responsible global citizens",
      "To develop learners who are creative, self-aware, confident, responsible and participate constructively in society",
    ],
  },
  {
    title: "Our Motto",
    icon: "/assets/icon/3.png",
    desc: "Realizing My Unique and Infinite Potential",
  },
  {
    title: "Our Symbol",
    icon: "/assets/icon/4.png",
    desc: [
      "Realizing My Unique and Infinite Potential The geometric shapes are stylized symbols that depict APL. It represents our progressive approach to pedagogy. The symbol embodies the circle, triangle, square, representing wholeness, dynamism and stability respectively.",
      "The lively lime green color represents freshness and unconditional acceptance, and the rich lavender, tranquility. The combination symbolizes compassion and spiritual healing.",
    ],
  },
];

/* ------------ helpers ------------ */
function Description({ desc }) {
  if (Array.isArray(desc)) {
    return (
      <ul className="list-disc list-inside space-y-2">
        {desc.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    );
  }
  return <p>{desc}</p>;
}

/* ------------ animation ------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ------------ Component ------------ */
export default function OurFramework() {
  const router = useRouter();
  const handleClick = () => router.push("/video-gallery");

  return (
    <>
      {/* Banner */}
      <StaticBanner slides={slides} alt="Our Framework Banner" />

      {/* Section with background image */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 md:px-8 overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${"/assets/bg-graph.webp"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center overflow-hidden">
          <p className="text-primary max-w-4xl mx-auto mb-10 sm:mb-12 font-secondary leading-relaxed text-sm sm:text-base">
            Our teaching pedagogy is designed to establish APL Global as a space
            for learners to realize their potential and flourish. Objectives are
            derived from the respective curricula, either Cambridge International
            or the NIOS, keeping holistic development in mind. Teachers use
            diverse strategies to differentiate learning and assessment,
            ensuring engagement and growth.
          </p>

          {/* Cards - 2 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left mt-10 overflow-hidden">
            {cardData.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="
                  group relative rounded-2xl bg-primary text-white shadow-xl overflow-hidden
                  flex flex-col justify-between
                  min-h-[300px] sm:min-h-[350px] md:min-h-[380px]
                  transition-all duration-300
                "
              >
                {/* faint corner icon */}
                <img
                  src={card.icon}
                  alt=""
                  className="absolute top-5 right-5 w-10 h-10 sm:w-12 sm:h-12 opacity-20 pointer-events-none select-none"
                  loading="lazy"
                />

                {/* --- MOBILE VIEW (No hover required) --- */}
                <div className="block md:hidden p-6 text-white font-secondary">
                  <h3 className="text-xl sm:text-2xl font-semibold font-primary mb-2">
                    {card.title}
                  </h3>
                  <div className="text-sm sm:text-base leading-relaxed opacity-95 space-y-2">
                    <Description desc={card.desc} />
                  </div>
                </div>

                {/* --- DESKTOP VIEW (Hover Reveal) --- */}
                <div className="hidden md:block">
                  {/* Collapsed title pinned at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <h3
                      className="
                        text-2xl font-semibold font-primary
                        md:opacity-100 md:translate-y-0
                        md:group-hover:opacity-0 md:group-hover:translate-y-2
                        transition-all duration-300
                      "
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Expanded content (hover reveal) */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <div
                      className="
                        translate-y-full opacity-0
                        md:group-hover:translate-y-0 md:group-hover:opacity-100
                        transition-transform duration-500 ease-out
                      "
                    >
                      <h3 className="text-2xl font-semibold font-primary mb-2">
                        {card.title}
                      </h3>
                      <div className="relative text-sm md:text-base font-secondary leading-relaxed opacity-95 text-white/95 space-y-2 overflow-hidden">
                        <Description desc={card.desc} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* subtle glaze */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-primary px-4 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <h2 className="text-secondary text-lg sm:text-xl md:text-2xl font-primary">
            Click here to know what our APL community has to say
          </h2>
          <button
            onClick={handleClick}
            className="px-6 py-2 bg-secondary text-white uppercase font-primary font-semibold rounded hover:bg-opacity-90 transition"
          >
            Click Here
          </button>
        </div>
      </div>

      <APLVAlue1 />
      <TestimonialCarousel />
    </>
  );
}
