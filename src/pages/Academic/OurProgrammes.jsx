import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MdDoubleArrow } from "react-icons/md";


import StaticBanner from "../../../components/StaticBanner";


import APLVAlue2 from "../others/AplValue2";
import APLValue6 from "../others/AplValue6";
import APLVAlue3 from "../others/AplValue3";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";
const slides = [{ desktop: "/banners/apl-programmes.jpg", mobile: "/banners/our-programmes-mob.webp" }];

const careerGuidancePoints = [
  "Pre-kg (Pre-Kindergarten) – 3 years as on 1st June 2026.",
  "LKG (Lower Kindergarten) – 4 years as on 1st June 2026.",
  "UKG (Upper Kindergarten) – 5 years as on 1st June 2026.",
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
const curriculumData = [
  {
    title: "Forms of Knowledge",
    ages: "5–11 years",
    grades: "I to V",
    content: [
      "English",
      "Math",
      "Combined Science (Physics, Chemistry, and Biology)",
      "Global Perspectives",
      "Second Language - Tamil / French / Hindi (starting in Grade II)",
      "Art",
      "Music",
      "Computer Science (starting in Grade II)",
    ],
  },
  {
    title: "Co-curricular Experiences",
    content: [
      "Games & Sports",
      "Music (till Grade 2)",
      "Creative Movement",
      "Theatre",
      "Expressions",
      "Library",
      "Meraki",
    ],
  },
];

const curriculumData1 = [
  {
    title: "Forms of Knowledge",
    ages: "11-14 years",
    grades: "VI to VIII",
    content: [
      "English",
      "Math",
      "Combined Science (Physics, Chemistry, and Biology)",
      "Computer Science",
      "History",
      "Geography",
      "Global Perspectives",
      "Second Language - Tamil/French/Hindi/Spanish/German",
      "Art",
      "Drama",
      "Music",
      "Creative Movement",
    ],
  },
  {
    title: "Co-curricular Experiences",
    content: ["Games ", "Expressions Clubs"],
  },
];

const curriculumData2 = [
  {
    title: "Forms of Knowledge - Upper Secondary",
    ages: "14-16 years",
    grades: " IX to X",
    content: [
      "English as First Language (0500)",
      "English as a Second Language (0510)",
      "Mathematics (0580)",
      "Additional Mathematics (0606)",
      "Physics (0625)",
      "Chemistry (0620)",
      "Biology (0610)",
      "Environmental Management (0680)",
      "Accounting (0452)",
      "Business (0264)",
      "Economics (0455)",
      "Enterprise (0454)",
      "Sociology (0495)",
      "Psychology (0266)",
      "History (0470)",
      "Geography (0460)",
      "Travel & Tourism (0471) O-level (0684)",
      "Global Perspectives (0457)",
      "Food & Nutrition (0684)",
      "Information & Communication Technology (0417)",
      "Computer Science (0478)",
      "Art & Design (0400)",
      "Music (0410)",
      "Drama (0411)",
      "Physical Education (0413)",
      "German (0525)",
      "French (0520)",
      "Spanish (0530)",
      "Hindi (0549)",
      "Tamil (3226) O-level",
    ],
  },
    {
    title: "Co-curricular Experiences - Upper Secondary",
    content: ["Games ", "Expressions Clubs"],
  },
];

const curriculumData3 = [
  {
    title: "Forms of Knowledge - Advanced",
    ages: "16-18 years",
    grades: "XI to XII",
    content: [
      "Biology (9700)",
      "Chemistry (9701)",
      "Physics (9702)",
      "Mathematics (9709)",
      "Further Mathematics (9231)",
      "Business (9609)",
      "History (9489)",
      "Computer Science (9618)",
      "Psychology (9990)",
      "Information Technology (9626)",
      "Accounting (9706)",
      "Global Perspective (9239)",
      "Sociology (9699)",
      "Economics (9708)",
      "English Language (9093)",
      "English General Paper (8021)",
      "Art & Design (9479)",
      "Music (9483)",
      "Media Studies (9607)",
      "Travel & Tourism (9395)",
    ],
  },
  {
    title: "Co-curricular Experiences - Advanced",
    content: [
      "Games",
      "Expressions Clubs",
     
    ],
  },
];

const curriculumData4 = [
  {
    title: "Secondary",
    content: [
      "English",
      "Mathematics",
      "Science and Technology",
      "Painting",
      "Home Science",
      "Accountancy",
      "Business Studies",
      "Economics",
      "Social Science",
      "Data Entry Operations",
      "Psychology",
      "Carnatic Music",
      "Bakery & Confectionery",
      "Tamil",
      "Hindi",
    ],
  },
  {
    title: " Senior Secondary",
    content: [
      "English",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Psychology",
      "Computer Science",
      "Data Entry Orientations",
      "Mass Communication",
      "Painting",
      "Economics",
      "Business Studies",
      "Accountancy",
      "Catering Management",
      "Home Science",
      "Physical Education and Yog",
      "Environmental Science",
    ],
  },
  {
    title: "Co-Curricular Experiences",
    content: ["Games", "Expressions Clubs"],
  },
];
const curriculumData6 = [
  {
    title: "Forms of Knowledge",
    ages: "7–18 years",
   
    items: [
      "Literacy & Numeracy",
      "Environmental Studies (EVS)",
      "Computer Skills",
      "Perception & Cognitive Skills",
      "Activities of Daily Living (ADL)",
      "Pre-Vocational & Vocational Training",
    ],
  },
  {
    title: "Co-Curricular Experiences",
    items: [
      "Music",
      "Games & Sports",
      "Creative Movement",
      "Theatre",
      "Club Activities",
      "Meraki",
    ],
  },
  {
    title: "Therapeutic Support",
    items: [
      "Occupational Therapy",
      "Speech Therapy",
      "Music Therapy",
    ],
    footer:
      "Our therapists and educators collaborate to ensure seamless support across the school day.",
  },
];

function OurProgrammes() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    const [openMain, setOpenMain] = useState(true);
  const [openSub, setOpenSub] = useState(null);

  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt="Our Programmes Banner" />

      {/* Kindergarten Description */}
      <section className="bg-white py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* ✅ Left: Text Content */}
            <div className="flex-1 space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-primary border-b-2 border-secondary inline-block">
                Our Programmes
              </h2>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary font-primary mt-4">
                Kindergarten
              </h3>

              <p className="text-black text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                The kindergarten/preschool programme in APL is integrated and
                holistic. It is designed to provide the children with the
                opportunity to develop self-awareness, better communication
                skills, improved balance and coordination and grow to be caring,
                life-long learners. Our Kindergarten curriculum is an in-house
                curriculum where we focus on the PSE (Personal, social and
                emotional) development, communication, sensory and cognitive
                development and all the other areas that form a foundation for
                Grade 1. Learning in APL is experiential, hands-on and
                personalised which helps the children make real-life
                connections. We have differentiated learning classrooms, where
                children learn individually and collaboratively. The environment
                in APL is joyful, purposeful and engaging with lots of
                opportunities to explore without losing focus on the values,
                empathy, discipline and respect.
              </p>
            </div>

            {/* ✅ Right: Sticky Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-24 self-start w-full max-w-sm"
            >
              <img
                src="/assets/kindergarden.png"
                alt="APL Kindergarten"
                className="w-full mx-auto "
              />
            </motion.div>
          </div>
        </div>

        {/* Kindergarten 3-Year List */}
        <div className="max-w-5xl mx-auto mt-10 space-y-6 px-2 sm:px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
            Our kindergarten is a 3 year programme
          </h2>

          <div className="space-y-6">
            {careerGuidancePoints.map((point, index) => (
              <div
                key={index}
                className={`flex items-start text-sm md:text-base ${
                  index % 2 === 0 ? "text-primary" : "text-primary"
                }`}
              >
                <MdDoubleArrow className="w-6 h-6 mt-1 mr-2 flex-shrink-0" />

                <span className="font-secondary text-base sm:text-lg md:text-xl">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cambridge Primary Section */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* ✅ Left: Text Content */}
            <div className="flex-1 space-y-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary font-primary mt-4">
                Cambridge Primary
              </h3>

              <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                Our Primary Program is guided by the Cambridge Primary
                Curriculum aimed at developing young learners who are confident,
                responsible, reflective, innovative and engaged. Our curricular
                and co-curricular activities are planned with a focus on
                holistic development with an equal emphasis on cognitive
                socio-emotional and physical skills alongside creative
                expression. Learning is exploratory and evaluative in nature.
                Students learn to apply their knowledge and understanding to
                solve new and unfamiliar problems. There are ample opportunities
                to work independently or collaboratively and take intellectual
                risks.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                A roadmap to learning at the primary level – With a
                student-centric approach to imparting knowledge, students learn
                to imbibe mathematical, language, and scientific skills among
                many others. Children learn to express their voice in multiple
                mediums. By encouraging children to explore, experiment and
                learn independently through activity-based techniques, we seek
                to equip children with skills in problem-solving, critical
                analysis and creativity. In addition to integrating formative
                and summative assessments to strengthen their learning,
                portfolios are created to exhibit the student’s developmental
                milestones. unities to explore without losing focus on the
                values, empathy, discipline and respect.
              </p>
              <div className="pt-2">
                <a
                  href="/testimonials"
                  className="inline-block px-6 py-2 rounded-full bg-primary text-white font-medium text-sm md:text-base hover:bg-secondary transition"
                >
                  Cambridge Curriculum
                </a>
              </div>
            </div>

            {/* ✅ Right: Sticky Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-24 self-start w-full max-w-sm"
            >
              <img
                src="/assets/cambridge-primary.png"
                alt="APL Kindergarten"
                className="w-full mx-auto "
              />
            </motion.div>
          </div>
        </div>

        {/* Accordion Section */}
        <section
          style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
          className="bg-cover bg-no-repeat bg-center"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 space-y-6">
            {curriculumData.map((section, index) => (
              <div
                key={index}
                className="border-b-2 border-secondary shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-4 py-2 transition font-primary text-third font-semibold text-base sm:text-lg flex justify-between items-center"
                >
                  {section.title}
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary transition duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary transition duration-200" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-4 space-y-4 text-sm sm:text-base">
                    {section.ages && (
                      <p className="text-primary font-secondary">
                        <strong>Ages:</strong>{" "}
                        <span className="text-secondary">{section.ages}</span>
                      </p>
                    )}
                    {section.grades && (
                      <p className="text-primary font-secondary">
                        <strong>Grades:</strong>{" "}
                        <span className="text-secondary">{section.grades}</span>
                      </p>
                    )}
                    <ol className="space-y-1 text-primary list-none pl-1">
                      {section.content.map((item, i) => {
                        const isOdd = (i + 1) % 2 !== 0;
                        const number = String(i + 1).padStart(2, "0");
                        const iconColor = isOdd
                          ? "text-primary"
                          : "text-secondary";

                        return (
                          <li key={i} className="flex items-center gap-2">
                            <span
                              className={`font-medium flex items-center gap-1 ${iconColor}`}
                            >
                              <MdDoubleArrow
                                className={`w-4 h-4 ${iconColor}`}
                              />
                            </span>
                            <span className="font-secondary">{item}</span>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Cambridge Lower Secondary Section */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* ✅ Left: Text Content */}
            <div className="flex-1 space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
               Cambridge Lower Secondary
              </h2>

              <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                The Lower Secondary program is based largely on the Cambridge
                Lower secondary curriculum, that develops our students into
                confident, responsible, reflective, innovative and engaged
                learners. A student at this level will experience ample
                cognitive stimulus and an extensive co-curricular program. Our
                co-curricular activities are designed to supplement their
                curricular learning. They have a choice to learn either Art,
                Music, Drama or Creative Movement as part of the curriculum.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                Every child is encouraged and supported to engage in independent
                critical thinking and an array of transferable skills that would
                prepare them for Senior School. The curriculum is supplemented
                by our own History and Geography curriculum that prepares our
                students to seamlessly transition into the Cambridge IGCSE
                program in Senior school.
              </p>
              <p className="text-black text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                Students are encouraged to learn through projects and guided
                discovery methods, fostering and nurturing their own natural
                curiosity. Our differentiated classroom and personalised
                learning methods allow students to take ownership of their
                learning and progress. This allows every student to develop a
                voice and agency; the confidence to choose for themselves the
                subjects for further study in Senior School.
              </p>
            </div>

            {/* ✅ Right: Sticky Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-24 self-start w-full max-w-sm"
            >
              <img
                src="/assets/cambridge-lower-secondary.png"
                alt="APL Kindergarten"
                className="w-full mx-auto "
              />
            </motion.div>
          </div>
        </div>

        <section
          style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
          className="bg-cover bg-no-repeat bg-center"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 space-y-6">
            {curriculumData1.map((section, index) => (
              <div
                key={index}
                className="border-b-2 border-secondary shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-4 py-2 transition font-primary text-third font-semibold text-base sm:text-lg flex justify-between items-center"
                >
                  {section.title}
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary transition duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary transition duration-200" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-4 space-y-4 text-sm sm:text-base">
                    {section.ages && (
                      <p className="text-primary font-secondary">
                        <strong>Ages:</strong>{" "}
                        <span className="text-secondary">{section.ages}</span>
                      </p>
                    )}
                    {section.grades && (
                      <p className="text-primary font-secondary">
                        <strong>Grades:</strong>{" "}
                        <span className="text-secondary">{section.grades}</span>
                      </p>
                    )}
                    <ol className="space-y-1 text-primary list-none pl-1">
                      {section.content.map((item, i) => {
                        const isOdd = (i + 1) % 2 !== 0;
                        const number = String(i + 1).padStart(2, "0");
                        const iconColor = isOdd
                          ? "text-primary"
                          : "text-secondary";

                        return (
                          <li key={i} className="flex items-center gap-2">
                            <span
                              className={`font-medium flex items-center gap-1 ${iconColor}`}
                            >
                              <MdDoubleArrow
                                className={`w-4 h-4 ${iconColor}`}
                              />
                            </span>
                            <span className="font-secondary">{item}</span>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Cambridge Upper Secondary Section */}

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* ✅ Left: Text Content */}
            <div className="flex-1 space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                Cambridge Upper Secondary & Advanced
              </h2>

              <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                In the Senior School, the IGCSE and AS-A level program is geared
                to deliver the Cambridge International curriculum to develop
                learners who are Confident, Responsible, Reflective, Innovative
                and Engaged. With a student centric approach, we aim to foster
                social-emotional and life skills, thereby preparing them for the
                next stage of their educational journey. A broad-based
                curriculum with varied subject choices is offered to match the
                interests and aspirations of all students. Unusual subject
                combinations are often allowed to accommodate individual needs.
                Students are encouraged to make informed decisions in all areas
                of schooling. Student-led initiatives such as ‘Girl-up’, MUN,
                and RCP (Responsible Citizenship Programme) are a highlight.
              </p>
            </div>

            {/* ✅ Right: Sticky Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-24 self-start w-full max-w-sm"
            >
              <img
                src="/assets/cambridge-upper-secondary-advanced.png"
                alt="APL Upper Secondary"
                className="w-full mx-auto "
              />
            </motion.div>
          </div>
        </div>

        <section
          style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
          className="bg-cover bg-no-repeat bg-center"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 space-y-6">
            {curriculumData2.map((section, index) => (
              <div
                key={index}
                className="border-b-2 border-secondary shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-4 py-2 transition font-primary text-third font-semibold text-base sm:text-lg flex justify-between items-center"
                >
                  {section.title}
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary transition duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary transition duration-200" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-4 space-y-4 text-sm sm:text-base">
                    {section.ages && (
                      <p className="text-primary font-secondary">
                        <strong>Ages:</strong>{" "}
                        <span className="text-secondary">{section.ages}</span>
                      </p>
                    )}
                    {section.grades && (
                      <p className="text-primary font-secondary">
                        <strong>Grades:</strong>{" "}
                        <span className="text-secondary">{section.grades}</span>
                      </p>
                    )}
                    <ol className="space-y-1 text-primary list-none pl-1">
                      {section.content.map((item, i) => {
                        const isOdd = (i + 1) % 2 !== 0;
                        const number = String(i + 1).padStart(2, "0");
                        const iconColor = isOdd
                          ? "text-primary"
                          : "text-secondary";

                        return (
                          <li key={i} className="flex items-center gap-2">
                            <span
                              className={`font-medium flex items-center gap-1 ${iconColor}`}
                            >
                              <MdDoubleArrow
                                className={`w-4 h-4 ${iconColor}`}
                              />
                            </span>
                            <span className="font-secondary">{item}</span>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>

           <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10  space-y-6 mb-10">
            {curriculumData3.map((section, index) => (
              <div
                key={index}
                className="border-b-2 border-secondary shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-4 py-2 transition font-primary text-third font-semibold text-base sm:text-lg flex justify-between items-center"
                >
                  {section.title}
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary transition duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary transition duration-200" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-4 space-y-4 text-sm sm:text-base">
                    {section.ages && (
                      <p className="text-primary font-secondary">
                        <strong>Ages:</strong>{" "}
                        <span className="text-secondary">{section.ages}</span>
                      </p>
                    )}
                    {section.grades && (
                      <p className="text-primary font-secondary">
                        <strong>Grades:</strong>{" "}
                        <span className="text-secondary">{section.grades}</span>
                      </p>
                    )}
                    <ol className="space-y-1 text-primary list-none pl-1">
                      {section.content.map((item, i) => {
                        const isOdd = (i + 1) % 2 !== 0;
                        const number = String(i + 1).padStart(2, "0");
                        const iconColor = isOdd
                          ? "text-primary"
                          : "text-secondary";

                        return (
                          <li key={i} className="flex items-center gap-2">
                            <span
                              className={`font-medium flex items-center gap-1 ${iconColor}`}
                            >
                              <MdDoubleArrow
                                className={`w-4 h-4 ${iconColor}`}
                              />
                            </span>
                            <span className="font-secondary">{item}</span>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      

        <APLVAlue2 />
        {/* NIOS (Gr8-12) Section */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* ✅ Left: Text Content */}
            <div className="flex-1 space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                NIOS Gr8-12
              </h2>

              <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                A student’s self-image is a direct result of the kind of
                reinforcement he or she receives on a daily basis. NIOS@APL
                strives to empower all students to become stronger and more
                confident, especially in controlling one’s life and claiming
                one’s rights”. Empowering kids by fostering a growth mind-set
                helps children find new ways to look at their abilities. Being
                supportive but being realistic is the key to help children
                develop positive self-esteem.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                The NIOS Curriculum at APL caters to diverse abilities and needs of students with its flexible structure. The students further broaden their scope of learning in areas such as financial literacy, creative expressions, vocational skills programs and intra/interpersonal skills. We encourage students to select their subjects thoughtfully, aligning their choices and assessments with their abilities and future goals.

              </p>
            </div>

            {/* ✅ Right: Sticky Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-24 self-start w-full max-w-sm"
            >
              <img
                src="/assets/apl/nios.png"
                alt="APL Kindergarten"
                className="w-full mx-auto "
              />
            </motion.div>
          </div>
        </div>
        <section
          style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
          className="bg-cover bg-no-repeat bg-center"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 space-y-6">
            {curriculumData4.map((section, index) => (
              <div
                key={index}
                className="border-b-2 border-secondary shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-4 py-2 transition font-primary text-third font-semibold text-base sm:text-lg flex justify-between items-center"
                >
                  {section.title}
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary transition duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary transition duration-200" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-4 space-y-4 text-sm sm:text-base">
                    {section.ages && (
                      <p className="text-primary font-secondary">
                        <strong>Ages:</strong>{" "}
                        <span className="text-secondary">{section.ages}</span>
                      </p>
                    )}
                    {section.grades && (
                      <p className="text-primary font-secondary">
                        <strong>Grades:</strong>{" "}
                        <span className="text-secondary">{section.grades}</span>
                      </p>
                    )}
                    <ol className="space-y-1 text-primary list-none pl-1">
                      {section.content.map((item, i) => {
                        const isOdd = (i + 1) % 2 !== 0;
                        const number = String(i + 1).padStart(2, "0");
                        const iconColor = isOdd
                          ? "text-primary"
                          : "text-secondary";

                        return (
                          <li key={i} className="flex items-center gap-2">
                            <span
                              className={`font-medium flex items-center gap-1 ${iconColor}`}
                            >
                              <MdDoubleArrow
                                className={`w-4 h-4 ${iconColor}`}
                              />
                            </span>
                            <span className="font-secondary">{item}</span>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Kamalam Section */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* ✅ Left: Text Content */}
            <div className="flex-1 space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-2">
                Kamalam
              </h2>

              <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary font-primary mt-2">A Holistic Learning Unit for Unique Learners</h4>

               <h6 className="text-sm sm:text-xl md:text-2xl font-semibold text-black font-primary mt-2">Where Every Child Finds Space to Grow, Learn & Shine</h6>

              <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                 
                 Kamalam is a nurturing learning space designed for children with diverse learning needs.<br/>
                Here, we offer a warm, inclusive, and thoughtfully structured environment where learning is personalized and rooted in compassion. Education here goes beyond academics—it embraces life skills, social-emotional growth, and meaningful experiences that help children understand themselves and the world around them.
                </p>

                  <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary font-primary mt-2">What Makes Kamalam Special</h4>

                      <h6 className="text-sm sm:text-xl md:text-2xl font-semibold text-black font-primary mt-2">Customised Learning for Every Child</h6>

                     <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                 
                 Each learner at Kamalam follows an Individualised Education Plan (IEP) co-created by a dedicated team of special educators, therapists, coordinators, and parents. Every plan is rooted in the child’s unique strengths, interests, and needs, ensuring they grow with confidence, independence, and dignity.
                </p>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary font-primary mt-2">A Safe & Inclusive Space</h4>
                <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                 
                 Our classrooms are thoughtfully designed for comfort, safety, and sensory regulation, ensuring every child feels secure, valued, and ready to learn.
                </p>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary font-primary mt-2">Holistic Development at the Heart</h4>
              <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed">   
                  Beyond functional academics, we focus on building communication, independence, self-regulation, emotional well-being, social skills, and life readiness.
                  </p>



             
            </div>

            {/* ✅ Right: Sticky Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-24 self-start w-full max-w-sm"
            >
              <img
                src="/assets/kamalam.png"
                alt="APL Kamalam"
                className="w-full mx-auto "
              />
            </motion.div>
          </div>
        </div>

         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 space-y-6 mb-10">
  {curriculumData6.map((section, index) => (
    <div
      key={index}
      className="border-b-2 border-secondary shadow-sm"
    >
      {/* Header */}
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full text-left px-4 py-2 transition font-primary text-third font-semibold text-base sm:text-lg flex justify-between items-center"
      >
        {section.title}
        {openIndex === index ? (
          <ChevronUp className="w-5 h-5 text-primary transition duration-200" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary transition duration-200" />
        )}
      </button>

      {/* Content */}
      {openIndex === index && (
        <div className="px-4 pb-4 space-y-4 text-sm sm:text-base">
          {section.ages && (
            <p className="text-primary font-secondary">
              <strong>Ages:</strong>{" "}
              <span className="text-secondary">{section.ages}</span>
            </p>
          )}

          {section.grades && (
            <p className="text-primary font-secondary">
              <strong>Grades:</strong>{" "}
              <span className="text-secondary">{section.grades}</span>
            </p>
          )}

          {/* ✅ FIX: items instead of content */}
          <ol className="space-y-1 list-none pl-1">
            {section.items.map((item, i) => {
              const isOdd = (i + 1) % 2 !== 0;
              const iconColor = isOdd ? "text-primary" : "text-secondary";

              return (
                <li key={i} className="flex items-start gap-2">
                  <MdDoubleArrow
                    className={`w-4 h-4 mt-1 ${iconColor}`}
                  />
                  <span className="font-secondary text-primary">
                    {item}
                  </span>
                </li>
              );
            })}
          </ol>

          {/* ✅ Footer Support */}
          {section.footer && (
            <p className="pt-2 text-secondary font-secondary italic">
              {section.footer}
            </p>
          )}
        </div>
      )}
    </div>
  ))}
</div>


          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* ✅ Left: Text Content */}
            <div className="flex-1 space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                Academic Pathways
              </h2>

              <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-4">
               For students who are ready for structured academics at the secondary level, Kamalam offers the National Institute of Open Schooling (NIOS) secondary curriculum. This pathway allows learners to progress confidently at their own pace while receiving the guidance they need.
              </p>
            </div>

            
          </div>
        </div>

        <APLValue6 />

        {/* Adult Program Section */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* ✅ Left: Text Content */}
            <div className="flex-1 space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                Adult Program
              </h2>

              <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-4">
               As per APL policy, students who turn 18 years of age before the completion of the academic year will be moved to the Adult Program. The Adult Program has been designed to enable students to complete their schooling without any interruption to their academic progression. Under this program, students will attend their academic classes from 12:30 p.m. to 2:30 p.m., Monday to Friday. 
              </p>
            </div>

            {/* ✅ Right: Sticky Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-24 self-start w-full max-w-sm"
            >
              <img
                src="/assets/adult-program.png"
                alt="APL Kindergarten"
                className="w-full mx-auto "
              />
            </motion.div>
          </div>
        </div>
      </section>
      <APLVAlue3 />
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

export default OurProgrammes;
