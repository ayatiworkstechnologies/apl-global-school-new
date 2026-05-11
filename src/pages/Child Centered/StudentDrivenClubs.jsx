import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutGraph from "/assets/about-graph.svg";
import Student from "/assets/apl/Student.webp";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md"; // updated icon
import SynergySection from "../About/SynergySection";
import APLVAlue4 from "../others/AplValue4";
import APLVAlue5 from "../others/AplValue5";

import StaticBanner from "../../components/StaticBanner";

import banner1 from "/banners/apl-student-driven.jpg";
import mobile1 from "/banners/student-driven-mob.webp";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";
const slides = [{ desktop: banner1, mobile: mobile1 }];
const curriculumData = [
  {
    title: "Girl up club",
    content: [
      `Girl up is a student initiative by our dynamic students who work to promote the advancement of girls in terms of gender equality and women’s empowerment. Inspired by and a subsidiary of United Nations’ Girl up – A global movement, the club actively engages to create a positive impact on critical issues concerning the girl child. Our students have been progressive in elevating the public’s understanding of girl education and its importance. Successful campaigns and fundraisers have been organised to this effect, thereby being able to supply feminine hygiene products to schools for girls and women of lower-income groups. An honorary member of this community of change-makers was chosen to visit the UN’s summit and training program. The club has flourished over the years, broadening its horizons, thanks to a community of passionate advocates.`,
    ],
  },
  {
    title: "Poly-math club",
    content: [
      `A polymath is a person with knowledge of a wide array of disciplines. Notable polymaths include Leonardo Da Vinci, Benjamin Franklin, and Gottfried Leibniz who, over their lifetimes, contributed to various areas of study.`,
      `The student-driven Polymath Club was founded around the idea of exposing students to a wide variety of skills to build well rounded individuals who are brought out of their comfort zones. Grades 9 to 12 were taught everything from Public Speaking, Programming, and Chess to the basics of Stock Trading and Hip Hop.`,
      `The second concept behind the founding of the club was the Pareto Principle, or the 80-20 rule. Students were taught the 20% which consisted of the basics of each discipline that they could use in 80% of cases, which gave them a good idea of what it might be like to pursue the new skill. A number of students mentioned how the club introduced them to skills that they may not have even considered trying out.`,
    ],
  },
];
const customCards = [
  { date: "3rd & 4th August 2023", title: "SYNERGY\nBYTES", href: "#" },
  { date: "19th & 20th July 2024", title: "APL MUN\n2024", href: "#" },
  {
    date: "19th & 20th July 2024",
    title: "ENGLISH\nFESTIVITAS 2023",
    href: "#",
  },
      {
    date: "19th & 20th July 2024",
    title: "APL SnapShot",
    href: "https://www.aplglobalschool.com/wp-content/uploads/2024/11/SnapShot-Issue-33.pdf",
  },
];
function StudentDrivenClub() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt="APL STUDENT-DRIVEN CLUBS Banner" />

      {/* Intro Section */}
      <section
        className="relative w-full py-16 px-4 sm:px-6 md:px-10 overflow-hidden"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="relative z-10 max-w-6xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                STUDENT-DRIVEN CLUBS
              </h2>
              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                Three years ago we started the concept of Student-driven Clubs.
                The objective was to provide a platform to bring together
                like-minded students who wish to engage with their peer group in
                ways which enhances the group’s learning and gives them an
                opportunity to work collectively in the area of their interest.
              </p>
              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                Students who are interested in starting a club are expected to
                send their proposal outlining the objective of the club along
                with the expected outcomes for its members, their session plans
                and the expected budget for the running of the club.
              </p>
              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                Girl Up and Poly-math Club are such clubs run by our
                enterprising young minds.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src={Student}
                alt="Student"
                className="w-full max-w-[350px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section
        style={{ backgroundImage: `url(${AboutGraph})` }}
        className="relative w-full py-16 px-4 sm:px-6 md:px-10 overflow-hidden"
      >
        <div className="p-4 sm:p-6 md:p-10 max-w-6xl mx-auto text-left space-y-6">
          {curriculumData.map((section, index) => (
            <div
              key={index}
              className="border-b-2 border-secondary overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 sm:px-6 py-2 transition text-primary font-secondary font-semibold text-lg flex justify-between items-center"
              >
                {section.title}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-6 font-secondary space-y-4 text-sm sm:text-base">
                  <ul className="space-y-2 text-gray-800">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <MdKeyboardDoubleArrowRight
                          size={20}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <APLVAlue5 />
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

export default StudentDrivenClub;
