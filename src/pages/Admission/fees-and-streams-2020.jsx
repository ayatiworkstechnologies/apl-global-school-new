import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  feeStructureData,
  admissionGuidelines,
  timings,
  termsConditions,
  Conditions, // [{ title, description: string[] }, ...]
  note,
} from "../../../data/Fees";


import StaticBanner from "../../../components/StaticBanner";
import APLVAlue3 from "../others/AplValue3";
import APLVAlue4 from "../others/AplValue4";


const slides = [{ desktop: "/banners/fees-web.jpg", mobile: "/banners/fees-mob.jpg" }];

function FeesAndStreams() {
  const [activeTab, setActiveTab] = useState(Object.keys(feeStructureData)[0]);

  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt="APL  Fees and Streams Banner" />

      {/* Intro */}
      <section
        className="py-12 px-4 sm:px-6 md:px-10 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="max-w-6xl mx-auto text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
            Fees and Process
          </h2>

          <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
            Thank you for your interest in enrolling your child at APL Global
            School. We are a registered school with Cambridge Assessment
            International Education, affiliated with the University of
            Cambridge. We welcome applications from students of all
            nationalities year-round and are currently accepting admissions for
            Pre-KG through Grade 11.
          </p>

          <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
            To accommodate diverse educational needs, APL Global School offers
            learning pathways under both the Cambridge International and NIOS
            boards. Our curriculum combines academic excellence with a wide
            range of co-curricular opportunities, delivered in structured time
            cycles and supported by regular formative and summative assessments.
            Through differentiated teaching and evaluation, we ensure every
            learner’s unique potential is recognized and nurtured via a
            personalized learning journey focused on holistic development.
          </p>

          <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
            We welcome your application for admission to our school. To know
            more about the admission process{" "}
            <a
              href="/assets/pdf/final-admission-process-ay-2026-27.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-semibold underline hover:text-primary transition duration-300"
            >
              click here
            </a>
          </p>
        </div>

        <div className="max-w-6xl mx-auto text-left space-y-6 py-6">
          <motion.a
            href="https://sch.edulip.in/UI/Website/APL/RegistrationForm.php"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block bg-primary text-secondary rounded-full px-6 py-2 md:px-8 md:py-3 
             text-sm md:text-base lg:text-lg font-semibold 
             shadow-xl hover:shadow-2xl 
             hover:bg-secondary hover:text-white 
             transition-all duration-300"
          >
            Register Now
          </motion.a>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-5 md:p-6 shadow-md max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Kindly note: For fee details for academic year 2025-26, kindly
              contact the admission dept @{" "}
              <a
                href="mailto:admission@apl.edu.in"
                className="text-secondary font-semibold underline hover:text-primary transition duration-300"
              >
                admission@apl.edu.in
              </a>{" "}
              or call 73387 44475
            </p>
          </div>
        </div>
      </section>

      {/* Process Images */}
      <section className="w-full">
        <img
          src={"/assets/Fees-and-Process-web.svg"}
          alt="Fees and Process Web"
          className="hidden md:block w-full h-auto object-cover"
        />
        <img
          src={"/assets/Fees-and-Process-mobile.svg"}
          alt="Fees and Process Mobile"
          className="block md:hidden w-full h-auto object-cover"
        />
      </section>

      {/* Tables */}
      <section className="bg-gray-50 py-14 font-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-primary font-bold text-center text-primary mb-10"
          >
            Fee Structure <span className="text-secondary">2026-27</span>
          </motion.h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {Object.keys(feeStructureData).map((tab) => (
              <motion.button
                whileTap={{ scale: 0.9 }}
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-secondary hover:text-white border border-primary"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Stream</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Admission Fee</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Semester 1</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Semester 2</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeStructureData[activeTab].map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="border-b hover:bg-gray-100"
                  >
                    <td className="px-4 py-3 text-gray-700 text-sm md:text-base font-medium">
                      {row.stream}
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-sm md:text-base">
                      {row.admissionFee}
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-sm md:text-base">
                      {row.sem1}
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-sm md:text-base">
                      {row.sem2}
                    </td>
                    <td className="px-4 py-3 text-gray-900 font-semibold text-sm md:text-base">
                      {row.annual}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>

            <div className="font-medium px-2 mt-2">
              <h2>* from grade 8 onwards</h2>
            </div>

            <div className="relative bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border-l-4 border-primary rounded-xl p-5 md:p-6 shadow-md max-w-3xl mx-auto text-center mt-5 mb-5">
              <div className="absolute top-[4%] left-[10%] -translate-x-1/2 text-primary text-xs md:text-sm px-3 py-1">
                Important Note
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-3">
                <span className="font-medium text-primary">*</span> The fee does not include the cost of books, uniforms, canteen, transport, board exam fee (for senior school), and other miscellaneous payments.
                <br />
                <span className="font-medium text-primary">*</span> Please refer to the terms and conditions given at the end of the page.
                <br />
                <span className="font-medium text-primary">*</span> Request you to use only Google Chrome or Mozilla Firefox for the registration process.
              </p>
            </div>
          </div>

          <APLVAlue3 />

          {/* Guidelines, Timings, T&C */}
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-10">
            {/* Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-md rounded-xl p-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Admission Guidelines for Grade 9 and Above
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {admissionGuidelines.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>

            {/* Timings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white shadow-md rounded-xl p-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Class Timings
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm md:text-base">Class</th>
                      <th className="px-4 py-3 text-left text-sm md:text-base">Timing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timings.map((row, i) => (
                      <motion.tr
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="border-b hover:bg-gray-100"
                      >
                        <td className="px-4 py-3 text-gray-700 text-sm md:text-base font-medium">
                          {row.class}
                        </td>
                        <td className="px-4 py-3 text-gray-700 text-sm md:text-base">
                          {row.time}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Terms & Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white shadow-md rounded-xl p-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Terms & Conditions
              </h3>

              <h4 className="text-xl font-bold text-secondary mb-4">Age Criteria</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {termsConditions.map((term, i) => (
                  <li key={i}>{term}</li>
                ))}
              </ul>

              <h4 className="text-xl font-bold text-secondary mt-6">Fee Payment details 2026 - 27</h4>
              <div className="mt-3 space-y-5">
                {Conditions.map((block, i) => (
                  <div key={i}>
                    <div className="font-semibold text-gray-900">{block.title}</div>
                    <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                      {block.description.map((line, j) => (
                        <li key={j}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h4 className="text-xl font-bold text-secondary mt-6">Note</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-3">
                {note.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <APLVAlue4 />
    </>
  );
}

export default FeesAndStreams;
