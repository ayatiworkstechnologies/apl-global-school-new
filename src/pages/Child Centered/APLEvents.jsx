import React, { useEffect } from "react";
import { motion } from "framer-motion";

import StaticBanner from "../../../components/StaticBanner";
import APLVAlue3 from "../others/AplValue3";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";



const slides = [{ desktop: "/banners/apl-events.jpg", mobile: "/banners/apl-events-mob.webp" }];

const curriculumData = [
  {
    title: "Cultural Evening",
    image: "/assets/cultural-evening.jpg",
    imageAlt: "Students performing at Cultural Evening",
    content: `Playing a multipurpose role, the cultural evening is a conglomeration of music, art, drama and speech aimed at bringing students and families together on an evening with the purpose of appreciating art and culture. Usually held on a grand note, the cultural evening paves way for students to exhibit their talent and passion in a non-academic platform, thus preparing students for a world of possibilities.`,
  },
  {
    title: "Sports Day",
    image: "/assets/sports-day.webp",
    imageAlt: "Track events during Sports Day",
    content: `Sports day is a high-powered annual event with students competing against each other in foundational sport activities like running and professional ones like football. The day is a celebration of team ethics and skill development.`,
  },
  {
    title: "Swadeshi Week",
    image: "/assets/swadeshi.png",
    imageAlt: "Swadeshi Week celebrations",
    content: `A week-long celebration appreciating and promoting the rich culture and tradition of our country. Intricate kolam work, discussions and cultural renditions encapsulate the essence of our diverse heritage.`,
  },
  {
    title: "Children's Day",
    image: "/assets/children’s-day.jpg",
    imageAlt: "Children's Day celebrations",
    content: `This day is celebrated to make our children feel extra loved and appreciated, with merriment and entertainment aplenty happening throughout the day.`,
  },
  {
    title: "Inter-School Sports Meet",
    image: "/assets/inter-school-sports-day.jpg",
    imageAlt: "Students competing at Inter-School Sports Meet",
    content: `APL’s inter-school sports meet is an opportunity for students from various schools across Chennai and Tamil Nadu to participate and compete in different sporting events.`,
  },
  {
    title: "Synergy",
    image: "/assets/synergy.jpg",
    imageAlt: "Synergy inter-school cultural festival",
    content: `Synergy is a student-led, theme-based inter school cultural event conceived and planned by the student council. It promotes teamwork, collaboration, and responsibility.`,
  },
  {
    title: "Student Council Elections",
    image: "/assets/img-1.png",
    imageAlt: "Student Council Elections at APL",
    content: `A major school event that mirrors a democratic election process — from nominations and campaigns to ballot voting and oath-taking during the investiture ceremony.`,
  },
  {
    title: "Talent Day",
    image: "/assets/talent-show.jpg",
    imageAlt: "Performances on Talent Day",
    content: `An inter-house talent show to celebrate unique skills — from poetry and shipwrecks to music and dance — nurturing confidence and creativity.`,
  },
  {
    title: "MUN at APL",
    image: "/assets/apl-mun.webp",
    imageAlt: "Model United Nations at APL",
    content: `APL MUN encourages students to develop leadership, diplomacy, and public speaking through engaging simulations of global discussions.`,
  },
];

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

export default function APLEvents() {
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Banner */}
      <StaticBanner slides={slides} alt="APL EVENTS Banner" />

      {/* Intro */}
      <section
        className="relative w-full py-16 px-4 sm:px-6 md:px-10 overflow-hidden"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-6">
                APL EVENTS
              </h2>
              <p className="text-black font-secondary text-base leading-relaxed">
                Events @ APL are celebrated with much fervour and enthusiasm. These cultural, social and sporting events refine one’s personality while building a positive image of oneself. Here’s how we do it here.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={"/assets/apl/APL_Events.webp"}
                alt="APL Events"
                className="w-full max-w-[350px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="relative w-full py-16 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumData.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.imageAlt}
                className="w-full h-48 object-cover transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-primary font-semibold text-secondary">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                  {event.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Sections */}
      <APLVAlue3 />
      <AplEventsShowcase
        bgUrl="/assets/apl-event-bg.png"
        rightImg="/assets/event-boy.png"
        rightImgAlt="APL student"
        cards={customCards}
      />
      <CertificatesCarousel />
    </>
  );
}
