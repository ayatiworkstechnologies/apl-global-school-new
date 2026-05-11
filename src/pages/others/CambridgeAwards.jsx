import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Award } from "lucide-react";

// ✅ Your existing awards data
const awardsData = {
   "2024 - 25": [
  { 
    name: "Arpana Vinodh Shankar", 
    image: "/assets/arpana.jpg",
    awards: [
      { title: "Top in India for A Level Chemistry, Physics Best across three for A Level Best across three for A Level, First place", session: "November 2024" }
    ]
  },
  { 
    name: "Tom Vadasseril Mathew", 
    image: "/assets/user.png",
    awards: [
      { title: "Top in World for IGCSE Mathematics (without Coursework)", session: "March 2025" }
    ]
  },
],

  "2022 - 23": [
    { name: "Joshua Joseph John", image: "/assets/user.png", awards: [{ title: "Top in India for AS Level Business", session: "November 2022" }] },
    { name: "Vittal Nanda Kumar", image: "/assets/user.png", awards: [{ title: "Top in India for AS Level Physics", session: "March 2023" }] },
    { name: "Jenica Rinu Devaprasad", image: "/assets/user.png", awards: [{ title: "Top in India for A Level History", session: "March 2023" }] },
    { name: "Divya Kishore", image: "/assets/user.png", awards: [{ title: "Top in India for A Level Sociology", session: "March 2023" }] },
  ],
  "2021 - 22": [
    { name: "Jenica Rinu Devaprasad", image: "/assets/user.png", awards: [{ title: "Top in Country for AS Level History", session: "March 2022" }] },
    { name: "Amithav Gautam", image: "/assets/user.png", awards: [{ title: "High Achievement Award for AS Level Music", session: "June 2022" }] },
    { name: "Asish Balasundaram", image: "/assets/user.png", awards: [{ title: "Top in Country for AS Level Chemistry", session: "November 2021" }] },
    { name: "Sai Raghav Balakrishnan", image: "/assets/user.png", awards: [{ title: "Top in Country for AS Level Psychology", session: "November 2021" }] },
    { name: "Narasimhan Aravindan Raghavan", image: "/assets/user.png", awards: [{ title: "High Achievement Award for AS Level Computer Science", session: "November 2021" }] },
    { name: "Niyati Ramachandran", image: "/assets/user.png", awards: [{ title: "High Achievement Award for AS Level Music", session: "November 2021" }] },
    { name: "Harshvardhan Warrier", image: "/assets/user.png", awards: [{ title: "High Achievement Award for A Level Physical Education", session: "November 2021" }] },
  ],
  "2019 - 20": [
    { name: "Mohammad Ibrahim", image: "/assets/Ibrahim.jpg", awards: [{ title: "Top in the World Award for AS Level Art & Design", session: "November 2020" }] },
    { name: "Varsha Vignesh", image: "/assets/user.png", awards: [{ title: "Top in Country Award for IGCSE First Language English (Oral Endorsement)", session: "November 2020" }] },
    { name: "Meghna Sriram", image: "/assets/meghna.jpg", awards: [{ title: "Top in Country Award for AS Level English Language", session: "November 2020" }] },
    { name: "Dhananjay Karthik Athreya", image: "/assets/user.png", awards: [{ title: "High Achievement Award for IGCSE Physical Education", session: "November 2020" }] },
    { name: "Aahana Nischal", image: "/assets/Aahana.jpg", awards: [{ title: "High Achievement Award for IGCSE Computer Science", session: "November 2020" }] },
  ],
  "2018 - 19": [
    { name: "Priyadarshini", image: "/assets/Priya.jpg", awards: [{ title: "Outstanding Learner Award for AS Level Music", session: "May-June 2019" }] },
    { name: "Arjun Paranthaman", image: "/assets/Arjun.jpg", awards: [{ title: "Top in World Award for IGCSE Mathematics", session: "May-June 2019" }] },
  ],
  "2017 - 18": [
    { name: "Gnanaswarup Srinivasan", image: "/assets/Gnanaswarup.jpg", awards: [
      { title: "Top in Country for A Level Computer Science", session: "May-June 2018" },
      { title: "Top in Country for AS Level Mathematics", session: "March 2017" },
      { title: "Top in World Award for AS Level Computer Science", session: "Mar-May / June 2017" },
    ]},
    { name: "Anniroodh Kumaraja", image: "/assets/Anniroodh.jpg", awards: [
      { title: "High Achievement Award for AS Level Music", session: "May-June 2018" },
      { title: "High Achievement Award for IGCSE Music", session: "Nov 2016" },
    ]},
    { name: "Kavya Maran", image: "/assets/Kavya.jpg", awards: [{ title: "High Achievement Award for AS Level Media Studies", session: "March / June 2016" }] },
  ],
  "2011 - 15": [
    { name: "Sanjana Chandrashekar", image: "/assets/Sanjana.jpg", awards: [
      { title: "Top in Country Award for A Level Art and Design", session: "2012" },
      { title: "Top in Country Award for AS Level Art and Design", session: "2011" },
      { title: "Top in Country Award for IGCSE Level Art and Design", session: "2010" },
    ]},
    { name: "Arjun Gonsalves", image: "/assets/ArjunG.jpg", awards: [{ title: "High Achievement Award for A Level Music", session: "May-June 2015" }] },
    { name: "Siddharth", image: "/assets/Siddharth.jpg", awards: [{ title: "High Achievement Award for A Level Economics", session: "2012" }] },
  ],
};

// ✅ Grouped Ranges
const groupedAwards = {
   "2024 - 2025": ["2024 - 25"],
  "2021 - 2023": ["2022 - 23", "2021 - 22"],
  "2018 - 2020": ["2019 - 20", "2018 - 19"],
  "2011 - 2017": ["2017 - 18", "2011 - 15"],
};

export default function CambridgeAwards() {
  const [openGroup, setOpenGroup] = useState(null); // ✅ no default open

  return (
    <section className="font-secondary">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-primary font-bold text-secondary mt-5 text-center"
      >
        Cambridge - Learners Awards
      </motion.h2>

         <p className="text-primary px-10 mt-4 mb-4 text-center">Outstanding Cambridge Learner Awards are a group of awards issued by Cambridge International Education, that recognise exceptional achievement in Cambridge exams around the world. The primary purpose of these awards is to celebrate and recognise the success of Cambridge learners.</p>

      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {Object.entries(groupedAwards).map(([groupLabel, years]) => {
            const students = years.flatMap((year) => awardsData[year] || []);

            return (
              <div
                key={groupLabel}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition"
              >
                {/* Group Header */}
                <button
                  onClick={() => setOpenGroup(openGroup === groupLabel ? null : groupLabel)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-primary">
                    {groupLabel}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary transition-transform ${
                      openGroup === groupLabel ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Group Content */}
                <AnimatePresence>
                  {openGroup === groupLabel && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-5 pb-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                      {students.length > 0 ? (
                        students.map((student, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                          >
                            <div className="w-50 h-50 rounded-lg overflow-hidden mb-3">
                              <img
                                src={student.image}
                                alt={student.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-primary text-lg font-bold mb-2">
                              {student.name}
                            </p>
                            <div className="space-y-2">
                              {student.awards.map((award, i) => (
                                <div key={i} className="border-t border-gray-200 pt-2">
                                  <div className="flex items-center gap-2">
                                    <Award className="w-4 h-4 text-secondary" />
                                    <h4 className="text-xs md:text-sm font-semibold text-gray-800">
                                      {award.title}
                                    </h4>
                                  </div>
                                  <p className="text-gray-600 text-xs">
                                    <strong>Session:</strong> {award.session}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <p className="text-gray-500 text-sm italic col-span-full">
                          No awards listed for this range.
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
