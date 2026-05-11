import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { MdDoubleArrow } from "react-icons/md";
import { X } from "lucide-react";

import StaticBanner from "../../../components/StaticBanner";
import APLVAlue5 from "../others/AplValue5";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";




const slides = [{ desktop: "/assets/academic_web.webp", mobile: "/assets/academic-mob.png" }];

const faqs = [
  {
    question: "How does the Cambridge pathway help students to navigate an increasingly uncertain and rapidly evolving world?",
    answer: <>
    At APL, we believe education must evolve with the times. Our pedagogy is thoughtfully aligned with the needs of today’s learners—encouraging curiosity, critical thinking, and adaptability. The Cambridge pathway provides students with global exposure, academic discipline, and the flexibility to keep future options open. Whether they aspire to pursue competitive fields such as engineering, medicine, or research, or wish to explore emerging and interdisciplinary domains in India or abroad, the curriculum equips them with both depth and breadth of learning. 
    Top Universities worldwide recognise Cambridge students. These universities note that Cambridge students demonstrate academic maturity, independence of thought, and readiness for higher education — qualities that support a smooth and successful transition beyond school.
    </>
  },
  {
    question: "Can APL students write the competitive exams conducted in India?",
    answer:
      "Yes. Students from APL Global School can and do appear for competitive examinations even if they are driven on a national curriculum model such as JEE, NEET, CUET and CLAT. The curriculum builds strong subject knowledge, conceptual clarity and critical thinking skills, which support preparation for these examinations.",
  },
  {
    question: "Is the school only for students who plan to study abroad?",
    answer:
      "No. While the curriculum provides an excellent foundation for international education, it is also designed to equally support a wide range of Indian academic courses. Many students choose to pursue higher education in India and successfully gain admission into Indian universities and professional programmes.  ",
  },
  {
    question:"Will the students who are planning to pursue higher education in Indian Universities be able to cope up with it?",
    answer:<>
    The Cambridge (IGCSE and A Levels) programme is recognised by the University Grants Commission (UGS) as equivalent to Indian senior secondary boards, enabling students to apply to universities across India. The NIOS (National Institute of Open Schooling) pathway is a national-level board that is widely accepted by Indian universities for undergraduate and postgraduate admissions.
    APL students will be well prepared for higher education in India. The curriculum emphasises critical thinking, independent learning and academic depth, which are essential for university success. With its focus on application-based learning rather than rote memorisation, the curriculum equips students to perform well in analytical and problem-solving components for all kinds of Indian entrance examinations as well as in undergraduate programmes.
    </>
  },
  {
    question:"Will my child be able to adjust from the ICSE/ CBSE stream with the Cambridge curriculum?",
    answer:"Yes.  Although ICSE and CBSE differ in syllabus structure and assessment style, students who have conceptual understanding and are self driven can adapt with confidence and are able to transition successfully with appropriate academic guidance. Students at APL develop independent learning and critical thinking skills which provides the foundation for a strong conceptual understanding. This further helps them with analytical thinking and disciplined study habits.",

  },
];

const faqsdata = [
  {
    question: "Is NIOS recognised as equivalent to other boards, and will it be accepted by Indian universities?",
    answer: <>
    NIOS (National Institute of Open Schooling) is a national-level board established by the Government of India under the Ministry of Education. Its Secondary (Class 10) and Senior Secondary (Class 12) qualifications are recognised as equivalent to CBSE and ICSE by the University Grants Commission (UGC) and most regulatory bodies in India.
    Students holding a NIOS certificate are eligible to apply to a wide range of undergraduate programmes across Indian universities, including courses in Engineering, Medicine, Law, Commerce, Design, and the Liberal Arts. As with any board, it is advisable to check the specific admission requirements of target institutions in advance, and APL's Academic Counselling team is available to guide families through this process.
    </>
  },
  {
    question: "How many subjects can a NIOS student take at APL, and how does the school support subject selection and preparation?",
    answer:<>
     At the Senior Secondary level (Class 12), NIOS requires a minimum of five subjects for certification — including at least one language. Students may take up to two additional subjects, making a maximum of seven in total. A similar minimum of five subjects applies at the Secondary level (Class 10).
     At APL, regular school hours are structured to provide full academic support for five subjects. Students who wish to take up additional subjects may do so as self-study subjects, up to a maximum of two.
     At APL, every student gets to work with an academic counsellor to design a subject profile aligned with their interests, career direction, and entrance examination eligibility. Parents are closely involved in this process, and subject choices are made with both personal meaning and strategic intent.

    </>
     
  },
  {
    question: "What vocational subjects does NIOS offer at APL, why should a student consider them, and how does APL support vocational learners?",
    answer:<>
    At APL, the vocational subjects currently offered under NIOS include Catering Management, Preservation of Fruits and Vegetables, Physical Education and Yoga, and Data Entry Operations, among others. These are practical, skill-based courses designed to complement academic subjects and build real-world competencies.
    Data Entry Operations is classified as an integrated academic and vocational subject, giving it weight across both categories — making it a versatile choice for students looking to build digital skills while meeting subject requirements.
    Students can include a vocational subject within their subject combination, and academic counsellors at APL guide every student in assessing whether a vocational subject genuinely serves their goals and how best to position it within their overall profile.
    </>
      
  },
  {
    question:"How does the NIOS pathway at APL differ from studying NIOS independently or through a regular open schooling centre?",
    answer:<>
    The Cambridge (IGCSE and A Levels) programme is recognised by the University At APL, NIOS students benefit from the same structured school environment, qualified faculty, mentoring, and enrichment opportunities as any other student in the institution. Unlike self-study models, APL provides a full school experience — timetabled classes, academic support, internal assessments, co-curricular activities, and personalised guidance.
    Choosing NIOS at APL is not choosing an alternative to school — it is choosing a different pathway within a full and rigorous school environment.
    </>
  },
  {
    question:"How does the NIOS examination system work, including flexible scheduling and multiple attempts?",
    answer:<>
    NIOS conducts public examinations twice a year — in April/May and October/November. The On Demand Examination (ODE) system provides additional exam window periods between the two scheduled examination sessions, giving students greater flexibility in timing their assessments around their academic readiness and personal commitments.
    Students can also carry forward passing grades in individual subjects, meaning they do not need to repeat subjects they have already cleared - significantly reducing exam-related pressure.
    </>

  },
   {
    question:"Is NIOS a suitable pathway for students who are pursuing competitive sports or other high-performance disciplines?",
    answer:<>
    Yes — NIOS is particularly well-suited for student-athletes and those pursuing excellence in sport or other demanding disciplines that demand significant time, travel, and energy outside the classroom.
    Competing at state, national, or international level often means training camps, tournaments, and extended periods away from school. NIOS's flexible examination structure allows students to pace their academic journey around their sporting commitments without compromising educational quality. At APL, subject combinations are planned with each student's schedule in mind, ensuring that sporting ambition and academic progress go hand in hand.
    </>

  },
   {
    question:"Can NIOS students appear for competitive entrance exams like JEE, NEET, CUET, or CLAT?",
    answer:<>
    Yes. NIOS students are eligible to appear for major competitive entrance examinations including JEE, NEET, CUET, and CLAT, provided they meet the subject and eligibility requirements set by the respective examining bodies.
    At APL, subject combinations are planned from the outset with entrance examination eligibility in mind, ensuring students are always on track for their target examinations.
    </>

  },
   {
    question:"Should parents be concerned about stigma or social perception around NIOS?",
    answer:<>
    This is a question many families carry but hesitate to ask. NIOS is a government-established, nationally recognised board with a strong and growing track record. Its perception has evolved significantly — it is increasingly chosen as a deliberate, informed decision, not a fallback.
    While most Indian universities recognise and accept NIOS qualifications, admission policies can vary by institution. APL's academic counselling team works closely with families to identify the right target institutions and ensure that every student's academic profile is positioned as strongly as possible. For families transitioning from the Cambridge pathway, the shift to NIOS is one of structure and flexibility — not a step down in ambition or seriousness.
    </>

  },
   {
    question:"Where have former NIOS students from APL gone — in terms of higher education and career choices?",
    answer:<>
    NIOS graduates from APL have gone on to pursue undergraduate programmes across disciplines including Engineering, Medicine, Commerce, Design, Media, Psychology, and the Liberal Arts at reputed Indian universities and colleges.
    Beyond traditional degree programmes, students have entered the workforce through vocational routes, pursued entrepreneurial ventures, and creative careers - paths that the flexibility of NIOS helped make possible. APL's NIOS students leave school with clarity of purpose and the skills to navigate whatever direction they choose.
    </>

  },
    {
    question:"Can NIOS students at APL participate in co-curricular activities, enrichment programmes, and the wider school community?",
    answer:<>
    Absolutely. At APL, all students — regardless of board or pathway — are full members of the school community, with equal access to sports, clubs, Student Council, inter-house and inter-school events, and community activities.
    The NIOS pathway at APL offers access to exclusive enrichment programmes including Meraki — the Creative Expressions programme, Helen O'Grady — the Theatre programme, and the Vocational Club — an entrepreneurship-focused programme aimed at building real-world readiness.
    At APL, holistic development is not a privilege of one pathway — it is a promise to every student in the school.
    </>

  },
];

/* --- Safely resolve SVG to a URL string --- */
const AboutGraph =
  typeof "/assets/about-graph.svg" === "string"
    ? "/assets/about-graph.svg"
    : ("/assets/about-graph.svg" && "/assets/about-graph.svg".src) || "/assets/about-graph.svg";

/* ---------------- Cambridge curriculum ---------------- */
const curriculum = [
  {
    title: "Cambridge Primary",
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
    title: "Cambridge Lower Secondary",
    ages: "11–14 years",
    grades: "VI to VIII",
    content: [
      "English",
      "Math",
      "Combined Science (Physics, Chemistry, and Biology)",
      "Computer Science",
      "History",
      "Geography",
      "Global Perspectives",
      "Second Language - Tamil / French / Hindi",
      "Drama",
      "Art",
      "Music",
      "Creative Movement",
    ],
  },
  {
    title: "Cambridge Upper Secondary",
    ages: "14-16 years",
    grades: "IX to X",
    content: [
      "English as First Language (0500)",
      "English as a Second Language (0510)",
      "Mathematics (0580)",
      "Additional Mathematics (0606)",
      "Physics (0625)",
      "Chemistry (0620)",
      "Biology (0610)",
      "Environmental Management (0680)",
      "Accountancy (0452)",
      "Business Studies (0450)",
      "Economics (0455)",
      "Enterprise (0454)",
      "Sociology (0495)",
      "History (0470)",
      "Geography (0460)",
      "Travel & Tourism (0471) – O Level",
      "Global Perspectives (0457)",
      "Food & Nutrition (0648)",
      "Information and Communication Technology (0417)",
      "Computer Science (0478)",
      "Art and Design (0400)",
      "Music (0410)",
      "Drama (0411)",
      "Physical Education (0413)",
      "German (0525)",
      "French (0520)",
      "Spanish (0530)",
      "Hindi (0549)",
      "Tamil (3226) – O Level",
    ],
  },
  {
    title: "Cambridge Advanced",
    ages: "16-18 years",
    grades: " XI to XII",
    content: [
      "(Any four, including English)",
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
      "Sociology (9699)",
      "Economics (9708)",
      "English Language (9093)",
      "English General Paper (8021)",
      "Art & Design (9479)",
      "Music (9483)",
      "Media Studies (9607)",
      "Travel & Tourism (9395)",
      "Global Perspectives (9239)",
    ],
  },
];

/* ---------------- NIOS subjects ---------------- */
const niosData = [
  {
    title: "Secondary - Forms of Knowledge",
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
    title: "Senior Secondary - Forms of Knowledge",
    content: [
      "English",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Psychology",
      "Computer Science",
      "Data Entry Operations",
      "Mass Communication",
      "Painting",
      "Economics",
      "Business Studies",
      "Accountancy",
      "Catering Management",
      "Home Science",
      "Physical Education and Yoga",
      "Environmental Science",
    ],
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
    href: "/assets/pdf/SnapShot.pdf",
     target: "_blank",
  },
];

function OurCurriculum() {
  // ✅ Pure JS: no TypeScript generics
  const [openCambridgeIndex, setOpenCambridgeIndex] = useState(null);
  const [openNiosIndex, setOpenNiosIndex] = useState(null);

    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt="Our Academics Curriculum Banner" />

      <section className="bg-cover bg-center bg-no-repeat w-full">
        {/* Cambridge intro */}
        <div
          className="py-12 px-4 sm:px-8 md:px-16 max-w-screen-xl mx-auto"
          style={{ backgroundImage: `url(${AboutGraph})` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-top">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                Academics Curriculum
              </h2>
              <p className="text-black font-bold font-secondary text-sm sm:text-base leading-relaxed">
                Cambridge International Education
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                We are a registered school of <b>Cambridge Assessment International
                Education,</b> part of the University of Cambridge. Through
                Cambridge International’s programmes, APL prepares students for
                higher education and also helps them develop an informed
                curiosity and a lasting passion for learning.
              </p>

              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Cambridge International (
                <a
                  href="https://www.cambridgeinternational.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b-2 border-secondary"
                >
                  www.cambridgeinternational.org
                </a>
                ) is the world’s largest provider of international education
                programmes and qualifications for 5–19 year olds.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
              APL’s Personalized Learning design ensures that the student is a self-learner and has the necessary skills to excel in university level courses. We shape the Cambridge curriculum around how our students learn and als offer a wide range of subjects which allows greater flexibility for them to make their choices.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                As a Cambridge International registered centre we are supported
                by teacher training and resources developed by Cambridge
                International to match the highest international standards.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={"/assets/apl/cambridge.png"}
                alt="APL Curriculum"
                className="w-full max-w-[350px] h-auto"
              />
            </div>
          </div>
        </div>

        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8 font-primary         text-primary  border-b-2 border-secondary text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
            <div
            key={index}
            className="border rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-lg font-secondary"
            >
              {faq.question}
              <span
                className={`transition-transform duration-300 text-secondary ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 py-4">
                <p className="text-gray-600 font-secondary">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        </section>

        {/* Cambridge cards */}
        <section
          style={{ backgroundImage: `url(${AboutGraph})` }}
          className="bg-cover bg-center bg-no-repeat py-10"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {curriculum.map((section, index) => (
                <div
                  key={section.title}
                  className="bg-white rounded-lg shadow hover:shadow-md transition p-4 border-l-4 border-secondary cursor-pointer"
                  onClick={() => setOpenCambridgeIndex(index)}
                >
                  <h3 className="text-primary font-primary text-lg sm:text-xl font-semibold flex justify-between items-center">
                    {section.title}
                    <span className="text-secondary border border-primary hover:bg-primary p-2 px-4 rounded-full font-secondary text-sm">
                      Click to View
                    </span>
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-center text-sm sm:text-base md:text-lg p-6 sm:p-10 text-primary font-primary">
            Details of courses can be obtained from{" "}
            <a
              href="https://www.cambridgeinternational.org/"
              target="_blank"
              rel="noreferrer"
              className="text-primary border-b border-primary font-bold"
            >
              www.cambridgeinternational.org
            </a>
          </h2>

          {/* Cambridge Modal */}
          <AnimatePresence>
            {openCambridgeIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
                onClick={() => setOpenCambridgeIndex(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white max-w-4xl w-full rounded-lg shadow-lg p-6 relative max-h-[85vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setOpenCambridgeIndex(null)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-primary"
                    aria-label="Close Cambridge curriculum modal"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Title */}
                  <h2 className="text-primary text-xl font-bold font-primary mb-4">
                    {curriculum[openCambridgeIndex].title}
                  </h2>

                  {curriculum[openCambridgeIndex].ages && (
                    <p className="text-gray-700 text-sm mb-1">
                      <strong>Ages:</strong> {curriculum[openCambridgeIndex].ages}
                    </p>
                  )}
                  {curriculum[openCambridgeIndex].grades && (
                    <p className="text-gray-700 text-sm mb-3">
                      <strong>Grades:</strong> {curriculum[openCambridgeIndex].grades}
                    </p>
                  )}

                  {/* Subjects */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {curriculum[openCambridgeIndex].content.map((item, i) => {
                      const iconColor = (i + 1) % 2 !== 0 ? "text-primary" : "text-secondary";
                      return (
                        <div
                          key={`${item}-${i}`}
                          className="flex items-start gap-2 text-sm sm:text-base bg-gray-50 p-2 rounded-md"
                        >
                          <MdDoubleArrow className={`w-4 h-4 mt-1 ${iconColor}`} />
                          <span>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* NIOS */}
       <div
        className="py-12 px-4 sm:px-8 md:px-16 max-w-screen-xl mx-auto"
        style={{ backgroundImage: `url(${AboutGraph})` }}
        >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    {/* --- Left Text Section --- */}
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
        NIOS Gr8–12
      </h2>
      <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
        APL Global School is accredited to the National Institute of Open
        Schooling (NIOS) curriculum. NIOS is a national level board of education
        through which students complete their Secondary &amp; Senior Secondary
        school program. It is internationally recognised and students have been
        known to pursue their higher education across the world. The board
        offers students significant flexibility in their pace of learning. In
        addition to the wide variety of subject choices, it is possible to have
        staged assessments and a range of accommodations to support those
        students with special educational needs.
      </p>
      <p className="font-secondary font-semibold">
        At APL, NIOS is the chosen board of studies for a plethora of reasons.
        Typically, the board is chosen by students who —
      </p>

      <div className="text-black font-secondary leading-relaxed space-y-2 px-6">
        {[
          "Want to strike a balance between their academic and non-academic interests.",
          "Want to concentrate on competitive exams to achieve their long term goals.",
          "Prefer learning in a small group setting (our ratio in the NIOS classroom 1:10).",
          "Value flexibility in choice of subjects and pace of learning.",
          "Have special educational needs and/or medical needs.",
        ].map((text, i) => (
          <div key={i} className="flex items-start gap-3">
            <MdDoubleArrow className="w-4 h-4 text-primary mt-1" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* --- Right Sticky Image --- */}
    <div className="flex justify-center md:justify-center">
      <div className="sticky top-24">
        <img
          src={"/assets/apl/nios.png"}
          alt="NIOS at APL"
          className="w-full max-w-[350px] h-auto"
        />
      </div>
    </div>
        </div>
      </div>
      <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8 font-primary         text-primary  border-b-2 border-secondary text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqsdata.map((faq, index) => (
            <div
            key={index}
            className="border rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-lg font-secondary"
            >
              {faq.question}
              <span
                className={`transition-transform duration-300 text-secondary ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 py-4">
                <p className="text-gray-600 font-secondary">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        </section>

        {/* NIOS cards */}
        <section
          style={{ backgroundImage: `url(${AboutGraph})` }}
          className="bg-cover bg-center bg-no-repeat py-10"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {niosData.map((section, index) => (
                <div
                  key={section.title}
                  className="bg-white rounded-lg shadow hover:shadow-md transition p-4 border-l-4 border-secondary cursor-pointer"
                  onClick={() => setOpenNiosIndex(index)}
                >
                  <h3 className="text-primary font-primary text-lg sm:text-xl font-semibold flex justify-between items-center">
                    {section.title}
                    <span className="text-secondary border border-primary hover:bg-primary p-2 px-4 rounded-full font-secondary text-sm">
                      Click to View
                    </span>
                  </h3>
                </div>
              ))}
            </div>
          </div>
           
          {/* NIOS Modal */}
          <AnimatePresence>
            {openNiosIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
                onClick={() => setOpenNiosIndex(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white max-w-4xl w-full rounded-lg shadow-lg p-6 relative max-h-[85vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setOpenNiosIndex(null)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-primary"
                    aria-label="Close NIOS modal"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <h2 className="text-primary text-xl font-bold font-primary mb-4">
                    {niosData[openNiosIndex].title}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {niosData[openNiosIndex].content.map((item, i) => {
                      const iconColor = (i + 1) % 2 !== 0 ? "text-primary" : "text-secondary";
                      return (
                        <div
                          key={`${item}-${i}`}
                          className="flex items-start gap-2 text-sm sm:text-base bg-gray-50 p-2 rounded-md"
                        >
                          <MdDoubleArrow className={`w-4 h-4 mt-1 ${iconColor}`} />
                          <span>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          

          <h2 className="text-center text-sm sm:text-base md:text-lg p-6 sm:p-10 text-primary font-primary">
            For more details on the subjects, you can go through the following link{" "}
            <a
              href="https://www.nios.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="text-primary border-b border-primary font-bold"
            >
              www.nios.ac.in
            </a>
          </h2>
        </section>
      </section>

      <APLVAlue5 />

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

export default OurCurriculum;
