import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { MdDoubleArrow } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";


import StaticBanner from "../../../components/StaticBanner";
import APLVAlue2 from "../others/AplValue2";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";




const slides = [{ desktop: "/banners/apl-educational.jpg", mobile: "/banners/Our-Educational-mob.webp" }];

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

const careerGuidancePoints = [
  "The class sizes are kept small, maintaining a 1-22 teacher-student ratio.",
  "The classrooms include -  children with cultural diversity as well as children requiring economic support.",
  "We offer diverse subject choices through the Cambridge International Curriculum - CIE and National Institute for Open Schooling - NIOS so that our students can pursue their interests unreservedly.",
  "In nurturing a culture of inclusion, we include first generation English speaking learners and differently abled children in a classroom.",
  "We use differentiated teaching methods and technology to suit all learner styles.",
  "We encourage teachers to be innovative and work with children to ensure that we meet their individual needs and feed their interests through our teaching and assessment strategies.",
  "Skilled special educators, mentors, subject experts, and student counsellors work collaboratively with parents to support holistic development of every child.",
  "Teachers are encouraged to commit to personal and professional development.",
];

function OurEducational() {
  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt="Our EDUCATIONAL PHILOSOPHY Banner" />

      {/* Philosophy Section */}
      <section
        className="py-20 px-4 sm:px-6 md:px-12 lg:px-20 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="max-w-6xl mx-auto space-y-14 text-black">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Title Section */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                  OUR EDUCATIONAL PHILOSOPHY
                </h2>
                <p className="font-secondary text-base sm:text-lg leading-relaxed text-black">
                 We believe in preparing learners for life in a world where they will interact with compassion, courage and resilience; a mindset that respects differences. The school will therefore be a community of stakeholders invested in the personal, intellectual, social, physical and spiritual development of every learner. Children are provided with a variety of options and multiple opportunities to learn and succeed. Every child will be nurtured to take an active role in making this planet inclusive and self-sustaining.
                </p>
              </div>

              {/* Student Demographic */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-primary mb-4">
                  Student Demographic
                </h3>
                <p className="font-secondary text-base sm:text-lg leading-relaxed text-black">
                  The class sizes are kept small, maintaining a 1:22
                  teacher-student ratio. The classrooms include: first
                  generation learners; children with disabilities; foreign
                  nationals, and children requiring economic support. The
                  professionals working at APL are encouraged to bring in
                  diversity by being innovative, and constantly challenge
                  themselves and the students.
                </p>
              </div>
            </div>

            {/* Right Sticky Image */}
            <div className="sticky top-24 self-start">
              <img
                src="/assets/apl/Our-Educational.png"
                alt="Educational Philosophy"
                className="w-full max-w-[350px] mx-auto"
              />
            </div>
          </div>

          {/* Philosophy Strategy */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
              How do we work towards achieving our educational philosophy?
            </h2>
            {/* Career Guidance Points */}
            <div className="space-y-6">
              {careerGuidancePoints.map((point, index) => (
                <div
                  key={index}
                  className={`flex items-start ${
                    index % 2 === 0 ? "text-primary" : "text-primary"
                  }`}
                >
                  <MdDoubleArrow className="w-6 h-6 mt-1 mr-2 flex-shrink-0" />
                  <span className="font-primary text-base sm:text-lg md:text-xl">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <APLVAlue2 />
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

export default OurEducational;
