import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";




import StaticBanner from "../../../components/StaticBanner";

import APLVAlue5 from "../others/AplValue5";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";

const slides = [{ desktop: "/assets/campus-web.png", mobile: "/assets/campus-mob.png" }];
const customCards = [
   { date: "31st July &1st August 2025", 
    title: "SYNERGY\nBYTES", 
    href: "/assets/pdf/Synergy-Bytes.pdf" ,
    target: "_blank", 
  },
 
  { date: "18th & 19th July, 2025", title: "APL MUN\n2024", href: "/assets/pdf/APL-MUN.pdf",
    target: "_blank",
   },
  { date: "21st July 2023", title: "ENGLISH FESTIVITAS 2023", href: "/assets/pdf/Inglish-festival.pdf", target: "_blank", },
  {
    date: "July 2025",
    title: "APL SnapShot",
    href: "/assets/pdf/SnapShot-1.pdf",
     target: "_blank",
  },
];
function OurCampus() {
  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt="Our Faculty Banner" />

      {/* Content Section */}
      <section className="bg-white py-12 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-primary inline-block border-b-2 border-secondary mb-4">
              Our Campus
            </h2>

            <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
              APL Global School has been modelled structurally and pedagogically
              on the Personalized Learning Platform. The campus is a sprawling{" "}
              <span className="font-extrabold">2,70,099 sq ft</span> which
              includes the Admin and Academic block. The impressive building
              offers state of the art facilities to support a wholesome learning
              environment. Vibrant air-conditioned classrooms, science labs,
              food labs, art rooms, music rooms, recording room, digital art and
              photo studio, OT rooms, a gym, dance rooms, counselling rooms and
              libraries support activity-based and student-centred learning.
            </p>

            <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
              The campus has an auditorium of{" "}
              <span className="font-extrabold">9,825 sq ft</span> to conduct all
              school events, assemblies, and activities. The students enjoy
              their dose of football using the two futsal grounds of{" "}
              <span className="font-extrabold">24,050 sq ft</span>, basketball,
              cricket nets and volleyball in the terrace area of{" "}
              <span className="font-extrabold">10,756 sq ft</span> and a
              multi-sports facility area that includes badminton courts.
            </p>

            <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
              All classrooms from Grades 1-12 are equipped with Smart Boards and
              Projectors to provide students with an enriched learning
              experience. Access to technology helps students research on
              independent projects or use multimedia software to create
              interactive presentations, while our teachers use it for
              differentiated teaching to accommodate different learning styles.
            </p>
          </div>

          {/* Right Side - Sticky Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sticky top-24 self-start"
          >
            <img
              src="/assets/campus-section.png"
              alt="APL Campus"
              className="w-full max-w-[350px] mx-auto shadow"
            />
          </motion.div>
        </div>
      </section>
      <APLVAlue5 />
      {/* CTA Section */}
      <AplEventsShowcase
        bgUrl="/assets/apl-event-bg.png"
        rightImg="/assets/event-boy.png"
        rightImgAlt="APL student"
        cards={customCards} // (optional) pass to override defaultCards
      />
      <CertificatesCarousel />
      
    </>
  );
}

export default OurCampus;
