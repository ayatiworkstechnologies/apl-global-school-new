import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

import AboutGraph from "/assets/graph2.webp";
import Alumni from "/assets/Alumni.webp";
import PaperBg from "/assets/paper-bg.webp";

const images = ["/assets/Our-Alumni.webp", "/assets/Our-Alumni.webp"];
const imagesMobile = [
  "/assets/Our-Alumni-mob.webp",
  "/assets/Our-Alumni-mob.webp",
];

import SynergySection from "./SynergySection";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";

const customCards = [
  { date: "3rd & 4th August 2023", title: "SYNERGY\nBYTES", href: "#" },
  { date: "19th & 20th July 2024", title: "APL MUN\n2024", href: "#" },
  {
    date: "19th & 20th July 2024",
    title: "ENGLISH\nFESTIVITAS 2023",
    href: "#",
  },
];

const alumniTestimonials = [
  {
    id: 1,
    name: "Vadhanaa Venkatakrishnan",
    batch: "Batch 2023, Cambridge",
    university: "University of Texas at Dallas",
    quote: "‘extremely adaptive…’",
    text: `I have become the best version of myself. I was highly motivated and inspired to achieve my best both inside and outside the classroom. I learnt to become extremely adaptive and proactive about my work.`,
    note: "",
  },
  {
    id: 2,
    name: "Sanjay Subramanian",
    batch: "Batch 2021, Cambridge",
    university: "Michigan State University",
    quote: "‘personalised learning plan…’",
    text: `APL provided a personalised learning plan to cater to my academic interests. I was able to adapt myself to other academic conditions. It is a great school with a nice infrastructure.`,
    note: "",
  },
  {
    id: 3,
    name: "Neha Venugopal",
    batch: "Batch 2021, Cambridge",
    university: "VIT Chennai",
    quote: "‘freedom to think…’",
    text: `APL has given the right amount of freedom to think free and learn life to the fullest. This has helped me in socializing.`,
    note: "",
  },
  {
    id: 4,
    name: "Aditi",
    batch: "Batch 2020, Cambridge",
    university: "SRM University",
    quote: "‘positive exposure…’",
    text: `It was a very positive exposure for me. I learnt a lot from the school including how to interact with people. The school and my batch of friends really helped me get out of my introvert zone. I had a really good time in APL.`,
    note: "",
  },
  {
    id: 5,
    name: "Shridula Gopinath",
    batch: "2020, Cambridge",
    university: "Shiv Nadar University",
    quote: "‘foster critical thinking…’",
    text: `The support from teachers was extremely fruitful, as was the way in which the AS and A level curriculum was designed to foster critical thinking and analysis skills. This helped me immensely in university when it comes to class discussions and assignments.`,
    note: "",
  },
  {
    id: 6,
    name: "Aaron Melito",
    batch: "2020, Cambridge",
    university: "MGR Film and Television Training Institute",
    quote: "‘exposure’",
    text: `I was exposed to lots of new experiences and lifestyles I never knew existed. I’m more open-minded about things now. I have experienced more in the last two years than I ever did in the 12 years of my previous school.`,
    note: "",
  },
  {
    id: 7,
    name: "Austin",
    batch: "2020, Cambridge",
    university: "VIT Chennai: CSE with specialisation in AI and ML",
    quote: "‘I could do a lot here in this school.’",
    text: `APL more than anything, was a very good environment for students—academics were important, of course, but there was much more going on. The management and staff were always very accommodating to new ideas and suggestions. When students brought up issues, they were addressed directly by the management. I believe APL is a good place to grow past just being students. As SPL, I gained leadership, speaking, planning and organising skills, but even as a normal student from Grade 5, I was never hindered from trying to do many things.`,
    note: "",
  },
  {
    id: 8,
    name: "A Arjun",
    batch: "2020, Cambridge",
    university: "Manipal Institute of Communication",
    quote: "‘a better future’",
    text: `APL provided me the platform that has since proven to be a springboard that launched me towards a better future. This has given me the opportunity to think globally and aim higher.`,
    note: "",
  },
  {
    id: 9,
    name: "Sumaiyya Anas",
    batch: "2019, Cambridge",
    university: "Vellore Institute of Technology, Chennai",
    quote: "‘initiate chapters’",
    text: `This particular institution aided me in refining my oratory and leadership skills. It provided me with opportunities to participate and win various events, and initiate a chapter of ‘Girl Up—an APL student initiative’ at my university. Being a part of APL has definitely been a major stepping stone to who I’ve become.`,
    note: "",
  },
  {
    id: 10,
    name: "Gandhimathi Viswanathan",
    batch: "2019, Cambridge",
    university: "Kalakshetra Foundation",
    quote: "‘independence and experience’",
    text: `The independence and experience I got here was more than what I could have hoped for in my old school. I learned to accept things and people for what they are and not change them to my convenience.`,
    note: "",
  },
  {
    id: 11,
    name: "Maryam Mohamed Anas",
    batch: "2019, Cambridge",
    university: "Crescent University",
    quote: "‘welcoming atmosphere’",
    text: `APL has made me the person I am today. I was once a shy girl who would not talk to anyone but now I can comfortably have conversation with anyone. The open and welcoming atmosphere made me grow so much. It broadened my mind and thought process. It has helped me interact more easily with people, allowing me to forge contacts and make friends. I just wish I had studied for more than 2 years here. It was such a wonderful experience.`,
    note: "",
  },
  {
    id: 12,
    name: "Ishani Mehta",
    batch: "2017, Cambridge",
    university: "M.O.P Vaishnav College for Women",
    quote: "‘significant learnings’",
    text: `Two years in APL School has been the most interesting and impactful time of my life so far. The journey has been enriching and extremely empowering. APL provided one-on-one classes to help me complete portions on time, which no other school would do. The Synergy mega event helped me realize my passion for Business & Food and Nutrition. The assistance and availability of all faculty members made the school feel like home and helped me focus more on academics.`,
    note: "",
  },
  {
    id: 13,
    name: "Kenneth Grace Mascarenhas D",
    batch: "2017, Cambridge",
    university: "ESIC Medical College and PGIMSR, K.K. Nagar",
    quote: "‘smooth transition’",
    text: `My transition from state board to the Cambridge curriculum was smooth thanks to APL's support. The school encouraged learning at one’s own pace, constructive feedback, and collaboration between learners and faculty. The principal and teachers were supportive and energetic throughout. I credit my success in NEET and admission to ESIC to APL’s methods.`,
    note: "",
  },
  {
    id: 14,
    name: "Utkarsh Jain",
    batch: "2017, Cambridge",
    university: "Christ University Bangalore",
    quote: "‘transform my personality’",
    text: `APL has helped me transform my personality to a better one… special thanks to Sarija ma'am.`,
    note: "",
  },
];

export default function OurAlumini() {
  const [imageIndex, setImageIndex] = useState(0);
  const [selected, setSelected] = useState(alumniTestimonials[0]);

  // Auto-rotate banner every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="">
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

      {/* Info Section */}
      <section
        className=" max-w-8xl mx-auto overflow-hidden bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="py-12 px-4 sm:px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-top">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary inline-block border-b-2 border-secondary mb-6">
                APL Alumni
              </h2>
              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                APL Global School is an initiative of the Ramaniyam Group
                Enterprise
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                We are truly rewarded when our students get the recognition they
                deserve and find a place in well-known colleges and universities
                in India and all parts of the world. Our mission of helping
                students realize their potential is fulfilled when their dearest
                dreams come true and they are welcomed by institutes of their
                choice to pursue the subjects they want.
              </p>
              <p className="text-black font-secondary font-bold text-sm sm:text-base leading-relaxed">
                Currently we have 102 students in GR 12 who will be graduating
                in 2025. We are proud of our alumni community featuring 856
                graduates since 2009 Here’s some of the details of our alumni’s
                placement.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={Alumni}
                alt="Alumni"
                className="w-full max-w-[350px] h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      <section
        className=" max-w-8xl mx-auto overflow-hidden flex flex-col md:flex-row gap-6 px-4 py-10 sm:px-6 md:px-12 md:py-16"
        style={{ backgroundImage: `url(${PaperBg})`, backgroundSize: "cover" }}
      >
        {/* Alumni List */}
        <div className="md:w-1/3 w-full md:max-h-[270px] overflow-x-auto md:overflow-y-auto flex md:flex-col gap-4 pb-4 md:pb-0 md:pr-6 scrollbar-hide">
          {alumniTestimonials.map((student) => (
            <div
              key={student.id}
              onClick={() => setSelected(student)}
              className={`min-w-[200px] md:min-w-0 cursor-pointer p-4 rounded-lg transition-all duration-200 ${
                selected.id === student.id
                  ? "bg-secondary/60 shadow-md"
                  : "hover:bg-secondary/40"
              }`}
            >
              <p className="font-semibold font-primary text-primary border-b-2 border-secondary inline-block mb-1">
                {student.name}
              </p>
              <p className="text-sm font-light text-primary/80">
                {student.batch}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Detail */}
        <div className="w-full md:w-2/3">
          <div className="max-w-3xl md:sticky md:top-20 space-y-5 bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-md">
            <Quote className="w-6 h-6 text-secondary" />
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              {selected.quote}
            </h2>
            <p className="text-black whitespace-pre-line leading-relaxed text-sm sm:text-base">
              {selected.text}
            </p>
            <div className="text-sm text-black space-y-1">
              <p>
                <strong>Batch:</strong> {selected.batch}
              </p>
              <p>
                <strong>University:</strong> {selected.university}
              </p>
            </div>
            {selected.note && (
              <p className="text-xs text-black italic border-t pt-4">
                {selected.note}
              </p>
            )}
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
    </div>
  );
}
