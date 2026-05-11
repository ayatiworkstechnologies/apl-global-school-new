import React, { useState } from "react";
import { motion } from "framer-motion";
import StaticBanner from "../../../components/StaticBanner";



// ✅ Partner images (replace with your actual file paths)


import APLVAlue3 from "../others/AplValue3";

const slides = [{ desktop: "/banners/allies-web.jpg", mobile: "/banners/allies-mob.jpg" }];

const tabs = [
  {
    title: "Ramaniyam Real Estate",
    image: "/assets/ramaniyam-logo.svg",
    content: `RAMANIYAM REAL ESTATES PRIVATE LIMITED is a leading builder in Chennai with over three decades of experience in the residential, commercial and IT sectors. The impressive infrastructure of APL Global School — including our academic blocks, sports facilities, spacious auditorium, and multi-purpose gallery — was thoughtfully designed and built by Ramaniyam Real Estate. Their team continues to oversee regular maintenance and timely repairs, ensuring that our facilities remain safe, functional, and conducive to learning and growth.`,
  },
  {
    title: "Compass Group",
    image: "/assets/compass.png",
    content: [
      "For over four years, Chartwells by Compass Group India has been our trusted food and nutrition partner, helping foster a healthy relationship between students and food.",
      "Chartwells brings to our campus world-class best practices, deep sector expertise, and thoughtful culinary innovations. Their mission goes beyond simply serving meals — they aim to nourish students with balanced nutrition while creating joyful and positive food experiences for students, faculty, and staff.",
      "Their holistic approach includes engaging initiatives such as Teaching Kitchens and Nutritional Sessions, which promote food awareness, encourage healthier habits, and support overall wellness.",
      "Chartwells sees this partnership as an ongoing journey of improvement. With a strong focus on food safety, hygiene, and strict adherence to FSSAI guidelines — combined with a genuine openness to feedback — they continue to demonstrate deep dedication to student well-being.",
    ],
  },
  {
    title: "School Transport",
    image: "/assets/apl/school-transport.png",
    content: [
      "At APL, the safety and comfort of our children always come first. To make that journey safe and reassuring, we partnered with The School Transport nearly 17 years ago, who have been serving schools with dedication since 2007.",
      "With nearly two decades of experience and a fleet of close to 100 buses in both AC and non-AC variants, their trained drivers, attendants, and supervisors ensure that every ride is comfortable, reliable, and secure.",
      "What we value most about our association is their commitment to values which we deeply share. The team continues to adopt new practices and technologies to make transportation seamless, while always placing the safety and satisfaction of students and parents at the heart of their service.",
    ],
  },
  {
    title: "Rapidora Solutions",
    image: "/assets/solution.png",
    content: [
      "Rapidora Solutions Pvt. Ltd. has been our trusted ERP partner for over 10 years, providing comprehensive Institute Management Solutions that seamlessly connect all stakeholders — anytime, anywhere.",
      "Rapidora is a SaaS-based ERP solution designed to deliver comprehensive, end-to-end services for both web and mobile platforms through innovative cloud technology.",
      "The Rapidora team provides continuous technical support, helping us resolve day-to-day issues promptly.",
      "Their collaborative approach, combined with the integration of smart technologies and hardware, ensures that our evolving needs are consistently met.",
    ],
  },
  {
    title: "Dragon Force",
    image: "/assets/apl/dragon-force.png",
    content: [
      "At APL Global School, the safety and well-being of our students, staff, and community remain our highest priority. To ensure a secure learning environment, we have partnered with Dragon Force One (DFO) for over a decade.",
      "DFO is a licensed and registered security agency (Tamil Nadu Police Govt. Reg. No. 1301/2020, Reg. Trademark No. 1666467/2008) and is backed by professionals from Defence, Police, Law, and the Private Security Industry.",
    ],
  },
  {
    title: "Apollo Shine",
    image: "/assets/apl/apollo-shine.png",
    content: [
      "Apollo SHINE Foundation is our trusted healthcare partner, dedicated to student well-being and early health awareness.",
      "Apollo SHINE established the First Aid Center in school nearly a decade ago and is designed in line with Apollo Hospitals’ Student Health Division protocols.",
      "A qualified and experienced SHINE Nurse is available during working hours to address health issues, queries, and concerns, supported by a team of on-call doctors.",
    ],
  },
];

export default function OurAssociates() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* ✅ Banner Section */}
      <StaticBanner slides={slides} alt="Our Associates Banner" />

      <section className="w-full bg-gray-50 text-gray-800 font-secondary py-12">
        {/* ✅ Section Header */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-primary font-bold text-primary"
          >
            Our Associates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We are greatly supported by our associates, all of whom play a vital role
            in ensuring the seamless functioning of our institution. Their unwavering
            presence allows us to function smoothly and focus on our core vision with
            greater depth.
          </motion.p>
        </div>

        {/* ✅ Tabs and Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* ✅ Tabs */}
          <div className="md:col-span-2 space-y-3">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                className={`w-full text-left px-5 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab.title}
              </motion.button>
            ))}
          </div>

          {/* ✅ Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-10 bg-white rounded-lg shadow-md p-6 grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Text */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-primary font-semibold text-secondary mb-3">
                {tabs[activeTab].title}
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                {Array.isArray(tabs[activeTab].content) ? (
                  tabs[activeTab].content.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))
                ) : (
                  <p>{tabs[activeTab].content}</p>
                )}
              </div>
            </div>

            {/* ✅ Dynamic Image */}
            <div className="flex items-center justify-center">
              <img
                src={tabs[activeTab].image}
                alt={`${tabs[activeTab].title} Partner`}
                className="w-full max-w-[250px] rounded-lg object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <APLVAlue3 />
    </>
  );
}
