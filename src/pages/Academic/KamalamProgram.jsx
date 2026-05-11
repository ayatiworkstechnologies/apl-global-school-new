import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutGraph from "/assets/about-graph.svg";
import Essential from "/assets/EssentialSupport.webp";
import SynergySection from "../About/SynergySection";
import CertificatesCarousel from "../Home/CertificatesCarousel";
import AplEventsShowcase from "../Home/AplEventsShowcase";
const customCards = [
  { date: "3rd & 4th August 2023", title: "SYNERGY\nBYTES", href: "#" },
  { date: "19th & 20th July 2024", title: "APL MUN\n2024", href: "#" },
  {
    date: "19th & 20th July 2024",
    title: "ENGLISH\nFESTIVITAS 2023",
    href: "#",
  },
];
const images = ["/assets/Kamalam.webp", "/assets/Kamalam.webp"];
const imagesMobile = ["/assets/Kamalam-mob.webp", "/assets/Kamalam-mob.webp"];
function KamalamProgram() {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Mobile */}
          <motion.img
            key={`mobile-${imageIndex}`}
            src={imagesMobile[imageIndex]}
            alt="Mobile Banner"
            className="absolute w-full max-w-[420px] h-[600px] object-cover block sm:hidden mx-auto left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Desktop */}
          <motion.img
            key={`desktop-${imageIndex}`}
            src={images[imageIndex]}
            alt="Desktop Banner"
            className="absolute w-full max-w-[1440px] h-[600px] object-cover hidden sm:block mx-auto left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </section>

      {/* Kamalam Content Section */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="py-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Content */}
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                Kamalam Program
              </h2>

              {[
                "There has been much debate over “what meets the requirement of children with greater needs”? The Kamalam program is the answer to that question. Your child can have the benefits of a tailor-made environment and curriculum, while having opportunities to learn in a larger pool with a diverse group of students.",
                "The Kamalam program is a student-centered program, designed for students who require a customised curriculum and for those who work better in controlled environments and cater to their particular needs.",
                "We provide the right kind of environment and instructional support required for students working on this curriculum. We facilitate this in areas of functional literacy, functional numeracy, functional science and ICT skills, including other skill areas like community living, Activities of Daily Living, home living and culinary Skills. Designated spaces with minimal distractions have been earmarked for optimal support.",
                "Students will receive occupational therapy and pre-vocational training services based on their strengths, interests and needs. The objective would be for students to be able to communicate effectively, be independent and self-sufficient. The student’s schedule is optimally designed to give him/her an equal mix of academic learning, skill development and socio-emotional learning opportunities.",
                "Functional Curriculum includes individualised attention and intervention strategies for developing specific skills and helping him/her achieve and generalise the learned skills. Students under the functional curriculum work in small groups focussing on skills of interest in music, dance & Meraki-art, paving opportunities for increased participation and interaction. This allows for more opportunities to participate and interact within the small group which would further help to build expressive language and communication skills. The same is practiced in larger groups with the support of a Special Educator, thus working towards achieving social skills, play skills, emotional skills, and self-regulation skills.",
                "As students progress on the functional curriculum, we are able to suggest options for their later stages of learning and engagement towards deciding on taking up Board examinations like the NIOS and/or looking for vocational program options based on the interests, strengths and abilities of the individual.",
              ].map((text, idx) => (
                <p
                  key={idx}
                  className="text-black font-secondary text-base leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Right Image */}
            <div className="hidden md:flex justify-end sticky top-24 h-fit">
              <img
                src={Essential}
                alt="APL Vision"
                className="w-full max-w-[350px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

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

export default KamalamProgram;
