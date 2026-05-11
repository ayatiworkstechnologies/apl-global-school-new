import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import APLVAlue2 from "../others/AplValue2";


export const testimonialData = {
  Students: [
    {
      name: "Tanya Gupta",
      role: " An Ex APL student",
      message:
        "The school has made a big difference in my learning experience from my previous school, an ICSE board. The teachers helped me in every possible way to achieve good grades. The PLPs were hectic but I realized, along with many others, that PLPs actually developed my research skills and m thinking capacity. APL has truly helped me become more aware of the outside world. I would never have achieved my IGCSE grades if it weren’t for the teachers at APL.",
      image: "/assets/user.png",
    },
    {
      name: "Aarav Sharma",
      role: "Grade 10 Student",
      message:
        "APL gives me the freedom to explore my interests and learn in creative ways. Every day is exciting here!",
      image:"/assets/user.png",
    },
    {
      name: "Priya Ramesh",
      role: "Grade 12 Student",
      message:
        "The teachers encourage us to think differently and participate in many activities beyond academics.",
      image: "/assets/user.png",
    },
  ],

  Alumni: [
    {
      name: "Sakshi",
      role: "Batch 2014, Alumni",
      message:
        "I would recommend prospective students to undertake the CIE curriculum for the availability and the freedom of choice it offers; no other academic stream offers that absolute liberty to make your own unique set of subjects. And in addition to that, CIE trains all its students for an international standard of research and writing – which ended up being the biggest advantage in my case. It provides a customised scholastic experience wherein every student gets the chance to delve deep into the courses of their choice as well as a wide and in-depth study into each course.",
      image: "/assets/user.png",
    },
    {
      name: "Brihadeesh N",
      role: "Batch 2016, NIOS Alumni",
      message:
        "I thank all my teachers who have taught me from Grade 7 to Grade 12. Special thanks to Sangeetha ma’am, Varalakshmi ma’am and the Sports teachers for helping me to improve my fitness. A very special thanks to Susan ma’am for helping me to reduce my examination stress which made me a better person.  It has also heIped me to reduce my health problems too. I would like to say thanks because none of them was able to give me a perfect solution .Teachers of APL have made me such a good student and also encouraged me a lot right from the time I joined the school. I thank the school management for giving me the certificate every year beginning which was like encouragement for me. APL has removed my fear of speaking to teachers. None of the schools will have such friendly teachers. APL has 97% of friendly teachers. I enjoyed being part of excursion to Ooty in Grade 7, Night Camps in Grade 9 and 10, Day Camp in Grade 11. I also enjoyed being part of Synergy in 2012, 2014 and 2015. This was the best school I have ever studied and others students stopped bullying me. I would not have come so far if I hadn’t joined APL. Thanks to my parents for that. I will be in touch with my teachers of APL. I will come to school and meet my teachers whenever I find time.",
      image: "/assets/user.png",
    },
    {
      name: "Dilan Thakrar",
      role: "Batch 2015, Alumni",
      message:
        "I think of the CIE A-levels as the benchmark in high-school education standards as it offers a very application-oriented course and is also very well reputed almost all over the world. I would recommend it as an option to anyone who is looking to build a strong base before pursuing their University education/careers.The subjects offered by CIE were taught in a conceptually strong manner, and this allowed me to realise the importance of going deep into the concepts of any subject in order to fully understand it. The syllabuses offered also enabled a strong understanding of the core of the subjects themselves. This has helped me, and is currently helping me as well, as it has made it easier to learn and grasp unknown concepts being taught at University level.",
      image: "/assets/user.png",
    },
    {
      name: "Sasha",
      role: "Batch 2014, Alumni",
      message:
        "I like the teaching-learning methodology at APL. The PLPs are very helpful in preparing for our semester exams and it gives us an idea of how well we have understood the lesson. Besides the academic classes and tests, we also learn a lot during the assemblies.",
      image: "/assets/user.png",
    },
    {
      name: "Shivaadith",
      role: " Alumni",
      message:
        "The school has made a big difference in my learning experience from my previous school, an ICSE board. The teachers helped me in every possible way to achieve good grades. The PLPs were hectic but I realized, along with many others, that PLPs actually developed my research skills and m thinking capacity. APL has truly helped me become more aware of the outside world. I would never have achieved my IGCSE grades if it weren’t for the teachers at APL.",
      image: "/assets/user.png",
    },
    {
      name: "Vadhanaa Venkatakrishnan",
      role: "Batch 2023, Cambridge",
      message:
        "I have become the best version of myself. I was highly motivated and inspired to achieve my best both inside and outside the classroom. I learnt to become extremely adaptive and proactive about my work.",
      image: "/assets/user.png",
    },
    {
      name: "Sanjay Subramanian",
      role: "Batch 2021, Cambridge",
      message:
        "APL provided a personalised learning plan to cater to my academic interests. I was able to adapt myself to other academic conditions. It is a great school with a nice infrastructure.",
      image: "/assets/user.png",
    },
    {
      name: "Neha Venugopal",
      role: "Batch 2021, Cambridge",
      message:
        "APL has given the right amount of freedom to think free and learn life to the fullest. This has helped me in socializing.",
      image: "/assets/user.png",
    },
    {
      name: "Aditi",
      role: "Batch 2020, Cambridge",
      message:
        "It was a very positive exposure for me. I learnt a lot from the school including how to interact with people. The school and my batch of friends really helped me get out of my introvert zone. I had a really good time in APL.",
      image: "/assets/user.png",
    },
    {
      name: "Shridula Gopinath",
      role: "Batch 2020, Cambridge",
      message:
        "The support from teachers was extremely fruitful, as was the way in which the AS and A level curriculum was designed to foster critical thinking and analysis skills. This helped me immensely in university when it comes to class discussions and assignments.",
      image: "/assets/user.png",
    },
    {
      name: "Aaron Melito",
      role: "Batch 2020, Cambridge",
      message:
        "I was exposed to lots of new experiences and lifestyles I never knew existed. I’m more open-minded about things now. I have experienced more in the last two years than I ever did in the 12 years of my previous school.",
      image: "/assets/user.png",
    },
    {
      name: "Austin",
      role: "Batch 2020, Cambridge",
      message:
        "APL more than anything, was a very good environment for students—academics were important, of course, but there was much more going on. The management and staff were always very accommodating to new ideas and suggestions. When students brought up issues, they were addressed directly by the management. I believe APL is a good place to grow past just being students. As SPL, I gained leadership, speaking, planning and organising skills.",
      image: "/assets/user.png",
    },
    {
      name: "A Arjun",
      role: "Batch 2020, Cambridge",
      message:
        "APL provided me the platform that has since proven to be a springboard that launched me towards a better future. This has given me the opportunity to think globally and aim higher.",
      image: "/assets/user.png",
    },
    {
      name: "Sumaiyya Anas",
      role: "Batch 2019, Cambridge",
      message:
        "This particular institution aided me in refining my oratory and leadership skills. It provided me with opportunities to participate and win various events, and initiate a chapter of ‘Girl Up—an APL student initiative’ at my university. Being a part of APL has definitely been a major stepping stone to who I’ve become.",
      image: "/assets/user.png",
    },
    {
      name: "Gandhimathi Viswanathan",
      role: "Batch 2019, Cambridge",
      message:
        "The independence and experience I got here was more than what I could have hoped for in my old school. I learned to accept things and people for what they are and not change them to my convenience.",
      image: "/assets/user.png",
    },
    {
      name: "Maryam Mohamed Anas",
      role: "Batch 2019, Cambridge",
      message:
        "APL has made me the person I am today. I was once a shy girl who would not talk to anyone but now I can comfortably have conversation with anyone. The open and welcoming atmosphere made me grow so much. It broadened my mind and thought process. It has helped me interact more easily with people, allowing me to forge contacts and make friends. I just wish I had studied for more than 2 years here. It was such a wonderful experience.",
      image: "/assets/user.png",
    },
    {
      name: "Ishani Mehta",
      role: "Batch 2017, Cambridge",
      message:
        "Two years in APL School has been the most interesting and impactful time of my life so far. The journey has been enriching and extremely empowering. APL provided one-on-one classes to help me complete portions on time, which no other school would do. The Synergy mega event helped me realize my passion for Business & Food and Nutrition. The assistance and availability of all faculty members made the school feel like home and helped me focus more on academics.",
      image: "/assets/user.png",
    },
    {
      name: "Kenneth Grace Mascarenhas D",
      role: "Batch 2017, Cambridge",
      message:
        "My transition from state board to the Cambridge curriculum was smooth thanks to APL's support. The school encouraged learning at one’s own pace, constructive feedback, and collaboration between learners and faculty. The principal and teachers were supportive and energetic throughout. I credit my success in NEET and admission to ESIC to APL’s methods.",
      image: "/assets/user.png",
    },
    {
      name: "Utkarsh Jain",
      role: "Batch 2017, Cambridge",
      message:
        "APL has helped me transform my personality to a better one… special thanks to Sarija ma'am.",
      image: "/assets/user.png",
    },
  ],

  Staff: [
    {
      name: "Zulaikha",
      role: "French teacher",
      message:
        "The true measure of any professional development program is its impact on practice. Hear directly from fellow educators about their experience with the CIDTL program and how it has shaped their teaching journey. I have become more conscious and intentional about what happens in my lessons.",
      image: "/assets/user.png",
    },
    {
      name: "",
      role: "Module 1 candidate",
      message: "A renewed sense of purpose as an educator.",
      image: "/assets/user.png",
    },
    {
      name: "Srividhya",
      role: "Module 3 Distinction holder",
      message:
        "I am seeing its positive impact in my classrooms… this has boosted my confidence.",
      image: "/assets/user.png",
    },
    {
      name: "Sowmya",
      role: "Module 3",
      message:
        "This spiral of learning has enlightened me as a reflective practitioner and a lifelong learner.",
      image: "/assets/user.png",
    },
    {
      name: "Nandini",
      role: "Module 3",
      message:
        "A lot of learning and unlearning has helped me transform into a reflective and learner-centric teacher.",
      image: "/assets/user.png",
    },
    {
      name: "",
      role: "Module 2 candidate",
      message:
        "I highly recommend the CIDTL program for teachers looking to enhance their skills and improve teaching quality and outcomes.",
      image: "/assets/user.png",
    },
  ],

 Parents : [
  {
    name: "Ms Jane Jerold",
    role: "Parent of Jethro Jean",
    message: [
      "The Kamalam division of APL Global School has been a truly transformative experience for my son, Jethro Jean. The customized curriculum has allowed him to explore his interests and strengths in an engaging and challenging way.",
      "What impresses me most is the passion, patience, and genuine care the teachers bring to their work. Their dedication has empowered my son to overcome challenges and reach his full potential.",
      "The mentors and school leaders take time to understand each child’s strengths, weaknesses, and learning style, often identifying potential even parents may not see. This personalized attention has helped Jean discover hidden talents and build confidence.",
      "We also deeply appreciate initiatives like home visits, field trips, and organic farming, which strengthen the bond between parents, students, and staff.",
      "APL Global has instilled confidence and empathy in my son. Seeing him support his peers during school events is a true testament to the school’s positive impact on his character and development."
    ],
    image: "/assets/user.png",
  },

  {
    name: "Pavithra Narasimman",
    role: "Parent of Darshan Reddy (Class 11B)",
    message: [
      "We feel truly blessed to have our child studying at APL Global School.",
      "The love, patience, and genuine care shown by the teachers have made a remarkable difference in our child’s confidence and happiness.",
      "The school feels less like an institution and more like a second home where our child is understood, encouraged, and celebrated.",
      "We are grateful to the entire team for shaping not just a student, but a strong and compassionate human being."
    ],
    image: "/assets/user.png",
  },

  {
    name: "Sashi Priyadarshni",
    role: "Parent of Zara (4A)",
    message: [
      "I sincerely appreciate the positive changes implemented by the school in recent months, especially traffic management and revised school timings.",
      "The staff managing traffic daily show remarkable patience and responsibility.",
      "Parents Sports Day was wonderfully organized, creating a joyful and inclusive experience for families.",
      "The academic and administrative staff are always approachable and supportive. Please extend my heartfelt thanks to the entire team."
    ],
    image: "/assets/user.png",
  },

  {
    name: "Lakshmi Ramaswamy & Nanda Kumar Parthasarathy",
    role: "Parents of Vittal Nanda Kumar",
    message: [
      "We are sincerely grateful for identifying Vittal’s talent in Mathematics and encouraging him to pursue Tubular Maths.",
      "The school’s flexibility in subject choices and personalized approach has played a vital role in nurturing our child’s confidence.",
      "APL’s ability to recognize and create opportunities for children to showcase their unique talents is truly commendable.",
      "Thank you for your unwavering commitment to our children’s holistic success."
    ],
    image: "/assets/user.png",
  },

  {
    name: "Anitha Arumugam",
    role: "Parent of Shree Neetra",
    message: [
      "After struggling in a traditional CBSE school, enrolling my daughter at APL Global transformed her academic and emotional journey.",
      "With personalized psychological support and dedicated special educators, she achieved remarkable academic success.",
      "I am deeply grateful to the teachers, especially Mrs. Gomathy Prabhakar, who supported my daughter with compassion and care.",
      "My daughter’s All-India High Achievement Award in Accounting would not have been possible without APL Global."
    ],
    image: "/assets/user.png",
  },


],

};

// ✅ New data for the second Staff collapsible
const staffTrainingInsights = [
  {
    image: "/assets/user.png",
    name: "Sambavi P. - Kamalam",
    message:
      "The music facilitators were flexible and tried our suggestion of songs. A suggestion would be to include songs that can be used in the classroom setting to make learning more fun and engaging.",
  },
  {
    image: "/assets/user.png",
    name: "K. Mohammed Shammem - Kamalam",
    message:
      "I learnt how perceptual development influences a child’s ability to understand and interact with their environment. I have to see how to tailor perceptual development activities for children with different learning needs or disabilities.",
  },
  {
    image: "/assets/user.png",
    name: "Sindhu Rekha .C - KG",
    message:
      "About Holistic Development Training - Understand more about developmental milestones. Interactive and experimental learning with others' experience.",
  },
  {
    image: "/assets/user.png",
    name: "Pascal Mary V.N - Primary",
    message:
      "How to incorporate / differentiate the different components of visual perception in teaching. I learnt about the keys of visual perception skills, its importance and challenges. Connecting all these skills with activities such as matching pictures, sorting games, puzzles, drawing etc was very rewarding.",
  },
  {
    image: "/assets/user.png",
    name: "Padmavathy C. - LS",
    message:
      "Collaborative square, foam printmaking and ice cream stick painting was a calming and relaxing session. The facilitator played music in the background which was so relaxing.",
  },
];

export default function TestimonialTabs() {
  const [activeTab, setActiveTab] = useState("Students");
  const [openStaffToggle, setOpenStaffToggle] = useState("cidtl"); // "cidtl" | "insights"
  const tabs = ["Students", "Alumni", "Staff", "Parents"];

  const handleStaffToggle = (key) => {
    setOpenStaffToggle((prev) => (prev === key ? "" : key));
  };

  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-primary">
            Voices of APL Global School
          </h2>
          <p className="mt-2 text-secondary text-sm sm:text-base font-secondary">
            Hear what our students, alumni, staff, and parents have to say.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm sm:text-base md:text-lg font-primary font-semibold border-2 transition-all duration-300 uppercase
              ${
                activeTab === tab
                  ? "bg-primary text-secondary border-primary"
                  : "text-primary border-primary hover:bg-primary hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab !== "Staff" ? (
            // ✅ Regular grid for Students / Alumni / Parents
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8"
            >
              {testimonialData[activeTab].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-xl shadow hover:shadow-lg p-5 text-center transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover mb-4 border-2 border-secondary"
                  />
                  <FaQuoteLeft className="text-secondary text-xl mx-auto mb-3" />
                  <p className="text-md text-gray-700 font-secondary italic mb-3">
                    "
                    {Array.isArray(item.message)
                      ? item.message.join(" ")
                      : item.message}
                    "
                  </p>
                  <h3 className="font-primary font-bold text-primary text-lg">
                    {item.name}
                  </h3>
                  <p className="text-md text-secondary font-secondary">
                    {item.role}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // ✅ Special layout for Staff tab with 2 collapsible toggles
            <motion.div
              key="Staff"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Collapsible toggle 1 */}
              <div className="bg-white rounded-xl shadow border">
                <button
                  type="button"
                  onClick={() => handleStaffToggle("cidtl")}
                  className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-primary font-semibold text-primary">
                      Teachers on their CIDTL module completion
                    </h3>
                   
                  </div>
                  <span className="ml-3 text-xl font-bold text-primary">
                    {openStaffToggle === "cidtl" ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openStaffToggle === "cidtl" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="border-t px-4 sm:px-6 pb-4 sm:pb-6 overflow-hidden"
                    >
                      <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonialData.Staff.map((item, i) => (
                          <div
                            key={i}
                            className="bg-primary/5 rounded-lg p-4 text-center h-full flex flex-col"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 rounded-full mx-auto object-cover mb-3 border-2 border-secondary"
                            />
                            <FaQuoteLeft className="text-secondary text-lg mx-auto mb-2" />
                            <p className="text-md sm:text-sm text-gray-700 font-secondary italic mb-3 flex-1">
                              "{item.message}"
                            </p>
                            <h4 className="font-primary font-semibold text-primary text-md">
                              {item.name || "Educator"}
                            </h4>
                            <p className="text-md text-secondary font-secondary">
                              {item.role}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Collapsible toggle 2 */}
              <div className="bg-white rounded-xl shadow border">
                <button
                  type="button"
                  onClick={() => handleStaffToggle("insights")}
                  className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-primary font-semibold text-primary">
                      Insights from our in-house teacher training sessions
                    </h3>
                
                  </div>
                  <span className="ml-3 text-xl font-bold text-primary">
                    {openStaffToggle === "insights" ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openStaffToggle === "insights" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="border-t px-4 sm:px-6 pb-4 sm:pb-6 overflow-hidden"
                    >
                      <div className="pt-4 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {staffTrainingInsights.map((item, index) => (
                          <div
                            key={index}
                            className="bg-primary/5 rounded-lg items-center p-4 h-full flex flex-col"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-secondary"
                            />
                            <FaQuoteLeft className="text-secondary text-lg mb-2" />
                            <p className="text-md sm:text-sm text-gray-700 font-secondary italic mb-3 flex-1">
                              "{item.message}"
                            </p>
                            <h4 className="font-primary font-semibold text-primary text-md">
                              {item.name}
                            </h4>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Branding */}
        <div className="mt-12 text-center bg-primary/10 py-6 px-4 rounded-lg">
          <h3 className="text-lg sm:text-xl md:text-2xl font-primary font-bold text-primary">
            APL Global School – Nurturing Leaders of Tomorrow
          </h3>
          <p className="text-sm sm:text-base font-secondary text-gray-700 mt-2 max-w-2xl mx-auto">
            Every voice matters at APL. Our community thrives on inclusivity,
            innovation, and personalized learning, empowering students to shine
            in every field.
          </p>
        </div>
      </section>
      <APLVAlue2 />
    </>
  );
}
