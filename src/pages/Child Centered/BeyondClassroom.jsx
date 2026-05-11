import React, { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";


import StaticBanner from "../../../components/StaticBanner";

import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  FileText,
  ChevronsRight,
} from "lucide-react";
import APLVAlue3 from "../others/AplValue3";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";



const slides = [{ desktop: "/assets/beyond-classroom-web.png", mobile: "/assets/beyond-classroom-mob.png" }];

// Reusable Accordion Component
function AccordionItem({ title, isOpen, onToggle, children }) {
  return (
    <div
      className={`overflow-hidden shadow-sm border-b-2 ${
        isOpen ? "border-secondary" : "border-secondary/60"
      } bg-white/70 rounded-xl`}
    >
      <button
        aria-expanded={isOpen}
        onClick={onToggle}
        className="w-full text-left px-4 sm:px-6 py-3 text-primary transition font-secondary font-semibold text-lg flex justify-between items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      >
        <span className="pr-4">{title}</span>
        <span
          className={`shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </span>
      </button>

      {isOpen && (
        <div className="px-4 sm:px-6">
          <div className="py-4 font-secondary space-y-4 text-sm sm:text-base text-gray-800">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function BeyondClassRoom() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = useCallback(
    (i) => setOpenIndex((prev) => (prev === i ? null : i)),
    []
  );

  const [innerOpen, setInnerOpen] = useState(null);
  const toggleInnerAccordion = useCallback(
    (i) => setInnerOpen((prev) => (prev === i ? null : i)),
    []
  );

  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt="APL Beyond Class Room Banner" />

      {/* Intro Section */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="py-10 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-top">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                Beyond Classroom
              </h2>
              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                Any education is not complete without taking cognisance of what
                is the need of the hour. Designed to complement the academic
                curriculum, beyond classroom widens horizons, maximises
                learner’s participation and potential, thus leading to increased
                learning and enhanced cognitive development. Recognising the
                need for this, the following domains provide that and more:
                social opportunities and opening a child’s mind to new
                interests.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src={"/assets/section-classroom.png"}
                alt="APL Vision"
                className="w-full max-w-[350px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
        className="relative bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"
          aria-hidden
        />
        <div className="relative p-4 sm:p-6 md:p-10 max-w-6xl mx-auto text-left space-y-6">
          {/* The Meraki */}
          <AccordionItem
            title="The Meraki"
            isOpen={openIndex === 0}
            onToggle={() => toggleAccordion(0)}
          >
            <p>
              The Meraki (Experiential Learning ) program helps students to
              explore creation and expression through Art, Music, Movement and
              Photography. The department nurtures an inclusive environment for
              students, allowing for a fluid engagement with the art forms from
              Grade 3 onwards. Through an immersive experience in art making,
              creative process and reflections, Meraki aims to go beyond the
              product, to promote artistic process. We strongly believe that it
              is the process of art-making that gives a child the creative
              confidence, not merely the final product. Folk toy making and
              play, junk instruments and music making, puppetry and theatre—are
              some of the projects planned for junior school.
            </p>
            <p>
              The department also stands apart in its consistent efforts to
              integrate visual arts with other art forms and disciplines—the
              environment, culture, mental health, and the body.
            </p>
            <p>
              For the senior school, Meraki is offered for the students of the
              NIOS stream. The 11th and 12th Grade students may opt to take up
              an area in greater depth to create a body of work or a portfolio
              in art, music or photography. While this course is geared to
              nurture creation and free expression, some students have gone on
              to pursue art and music on recognising their core abilities.
            </p>
            <p className="">
              Alumni of the program now find themselves in institutions such as
              Srishti School of Design and KM College of Music and Technology.
              <br />
            </p>
          </AccordionItem>

          {/* Eat Your School Garden */}
          <AccordionItem
            title="Farming @ APL"
            isOpen={openIndex === 1}
            onToggle={() => toggleAccordion(1)}
          >
            <p>
              This is a movement that was started in 2017, by working with APL
              students to create a garden campus that is edible. We follow
              regenerative agricultural practices where there is minimal cost
              and external inputs and maximum benefits such as harvests, a
              permanent ecosystem with bio diverse flora and fauna, and a closed
              loop system. As a part of the APL garden, our students across
              grades have created two Miyawaki Forests that are now self
              sustaining with over 20 varieties of trees, shrubs, and other
              vegetation.
            </p>
            <p>
              Over the years, our practices have attracted fauna such as
              earthworms that are indicative of a healthy soil, garden lizards
              that keep our insects in control, birds, butterflies, bees, and
              even tree frogs and toads. We have also started what we call a sky
              garden, where we have vines, both ornamental and edible growing on
              the topmost floor edges of our building that also double up as
              natural cool curtains for our classrooms there. The main aim of
              the movement is to impart Education for Sustainability (EfS) and
              share our best practices with other schools to encourage more
              schools to create such learning gardens. We are also active on
              social media with pages on Facebook and Instagram, along with a
              blog page with student contributions on medium.com.
            </p>
          </AccordionItem>

          {/* Responsible Citizenship Program */}
          <AccordionItem
            title="Responsible Citizenship Program"
            isOpen={openIndex === 2}
            onToggle={() => toggleAccordion(2)}
          >
            <p>
              The Responsible Citizenship Program in APL has been initiated to
              help students practice the various aspects that an individual
              needs to possess in order to lead a sustainable and responsible
              life while being an informed, law-abiding citizen, recognising
              their civic responsibility. The student members have taken good
              practises to their communities where they speak about recycling;
              spreading awareness about signs and symptoms of infectious disease
              to name a few.
            </p>
            <p>
              Real Time issues within the school community were studied and
              members of the RCP sensitised the student body on mindful use of
              water, tissues, and segregation of waste. Their campaign on
              reducing wastage of food within the school community delivered a
              phenomenal response.
            </p>
            <p>
              Sustainable Development Goals (SDGs), or Global Goals, an
              initiative by United Nations Member States (2015) was a universal
              call to action to end poverty, protect the planet and ensure that
              all people enjoy peace and prosperity by 2030. Members of the RCP
              have bestowed upon themselves this goal to discuss prevalent
              issues and discuss possible solutions.
            </p>
          </AccordionItem>

          {/* Publishing with Inner Accordions */}
          <AccordionItem
            title="Publishing"
            isOpen={openIndex === 3}
            onToggle={() => toggleAccordion(3)}
          >
            <p>
              SnapShot, APL’s e-magazine is created by the students, for the
              students. It is a platform that gives them an opportunity to voice
              their opinions, showcase the events of the school and the world
              around them. Contributions cut across students, teachers and even
              parents making it a diverse magazine. This yet another
              student-centered program provides the opportunity to students to
              try and experience different tasks and roles such as writing,
              proofing, art directing, designing etc. Snapshot is an exemplar of
              the synthesis between academic learning, experiential learning and
              the print industry.
            </p>
            <p>
              Copy of the latest APL SnapShot:&nbsp;
              <a
                href="/assets/pdf/SnapShot-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-primary border border-primary p-3 rounded-full bg-primary hover:text-primary hover:bg-secondary hover:border-none break-words"
              >
                Download
              </a>
            </p>
            <h4 className="font-semibold text-lg text-primary mt-4 mb-2">
              Below is the list of Snapshots available sorted by the year &amp;
              month.
            </h4>

            {/* Inner Accordions by Year Range */}
            <div className="mt-6 space-y-4">
              <AccordionItem
                title="2024 - 2020"
                isOpen={innerOpen === 0}
                onToggle={() => toggleInnerAccordion(0)}
              >
                <ul className="list-none space-y-1">
                  {[
                    { label: "October 2024", pdf: "#" },
                    { label: "August 2023", pdf: "#" },
                    { label: "November 2022", pdf: "/assets/pdf/nov-2022.pdf" },
                    { label: "June 2022", pdf: "/assets/pdf/june-2022.pdf" },
                    { label: "January 2022", pdf: "/assets/pdf/jan-2022.pdf" },
                    { label: "June 2021", pdf: "#" },
                    { label: "February 2021", pdf: "/assets/pdf/feb-2021.pdf" },
                    { label: "November 2020", pdf: "/assets/pdf/nov-2020.pdf" },
                    { label: "February 2020", pdf: "/assets/pdf/feb-2020.pdf" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <ChevronsRight className="h-5 w-5 text-primary" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionItem>

              <AccordionItem
                title="2019 - 2014"
                isOpen={innerOpen === 1}
                onToggle={() => toggleInnerAccordion(1)}
              >
                <ul className="list-none space-y-1">
                  {[
                    { label: "October 2019", pdf: "/assets/pdf/oct-2019.pdf" },
                    { label: "January 2019", pdf: "/assets/pdf/jan-2019.pdf" },
                    { label: "August 2018", pdf: "/assets/pdf/aug-2018.pdf" },
                    { label: "April 2018", pdf: "/assets/pdf/april-2018.pdf" },
                    { label: "December 2017", pdf: "/assets/pdf/dec-2017.pdf" },
                    { label: "July 2017", pdf: "/assets/pdf/july-2017.pdf" },
                    { label: "January 2017", pdf: "/assets/pdf/jan-2017.pdf" },
                    { label: "October 2016", pdf: "/assets/pdf/oct-2016.pdf" },
                    { label: "July 2016", pdf: "/assets/pdf/july-2016.pdf" },
                    { label: "April 2016", pdf: "/assets/pdf/april-2016.pdf" },
                    { label: "January 2016", pdf: "/assets/pdf/jan-2016.pdf" },
                    { label: "October 2015", pdf: "/assets/pdf/oct-2015.pdf" },
                    { label: "July 2015", pdf: "/assets/pdf/july-2015.pdf" },
                    { label: "May 2015", pdf: "#" },
                    { label: "Dec 2014", pdf: "/assets/pdf/dec-2014.pdf" },
                    { label: "September 2014", pdf: "/assets/pdf/sep-2014.pdf" },
                    { label: "July 2014", pdf: "/assets/pdf/july-2014.pdf" },
                    { label: "Jan 2014", pdf: "/assets/pdf/jan-2014.pdf" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-secondary transition-colors"
                      >
                        <ChevronsRight className="h-5 w-5 text-secondary" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionItem>

              <AccordionItem
                title="2013 - 2012"
                isOpen={innerOpen === 2}
                onToggle={() => toggleInnerAccordion(2)}
              >
                <ul className="list-none space-y-1">
                  {[
                    { label: "September 2013", pdf: "/assets/pdf/sep-2013.pdf" },
                    { label: "April 2013", pdf: "/assets/pdf/april-2013.pdf" },
                    { label: "February 2013", pdf: "/assets/pdf/feb-2013.pdf" },
                    { label: "November 2012", pdf: "/assets/pdf/nov-2012.pdf" },
                    { label: "August 2012", pdf: "/assets/pdf/aug-2012.pdf" },
                    { label: "April 2012", pdf: "/assets/pdf/april-2012.pdf" },
                    { label: "January 2012", pdf: "/assets/pdf/jan-2012.pdf" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <ChevronsRight className="h-5 w-5 text-primary" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            </div>

            <p className="mt-4">
              <ChevronsRight className="inline h-5 w-5 text-primary mr-2" />
              Please give us your feedback!{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeB7kfUXqauvRVdEdQlF-oodKn-Ph08RSsdMRB4aOnRUhZLiw/viewform?formkey=dGx3aVA0cnFsbHloNnhOcnFPbEd1b2c6MQ#gid=0"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center justify-center text-secondary font-primary border border-primary px-4 py-2 rounded-full bg-primary hover:text-primary hover:bg-secondary hover:border-transparent"
              >
                Click Here
              </a>
            </p>
          </AccordionItem>
        </div>
      </section>

      <APLVAlue3 />

      <AplEventsShowcase
        bgUrl="/assets/apl-event-bg.png"
        rightImg="/assets/event-boy.png"
        rightImgAlt="APL student"
        cards={[
          {
            date: "31st July &1st August 2025",
            title: "SYNERGY\nBYTES",
            href: "/assets/pdf/Synergy-Bytes.pdf",
            target: "_blank",
          },

          {
            date: "18th & 19th July, 2025",
            title: "APL MUN\n2024",
            href: "/assets/pdf/APL-MUN.pdf",
            target: "_blank",
          },
          {
            date: "21st July 2023",
            title: "ENGLISH FESTIVITAS 2023",
            href: "/assets/pdf/Inglish-festival.pdf",
            target: "_blank",
          },
          {
            date: "July 2025",
            title: "APL SnapShot",
            href: "/assets/pdf/SnapShot-1.pdf",
            target: "_blank",
          },
        ]}
      />

      <CertificatesCarousel />
    </>
  );
}

export default BeyondClassRoom;
