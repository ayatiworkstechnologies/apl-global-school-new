import React, { useState } from "react";
import AboutGraph from "/assets/about-graph.svg";
import { MdDoubleArrow } from "react-icons/md";

import ContactFormTabs from "./ContactForm";

const tabs = [
  { id: "general", label: "GENERAL INFORMATION" },
  { id: "academic", label: "ACADEMICS INFORMATION" },
  { id: "parent", label: "PARENTAL INFORMATION" },
  { id: "other", label: "OTHER INFORMATION" },
];
export const instructionList = [
  {
    number: "01",
    text: "Request you to use only Google Chrome or Mozilla Firefox for the registration process.",
  },
  {
    number: "02",
    text: "Please refrain from using special characters in the form.",
  },
  {
    number: "03",
    text: "The website is the best option for completing the form. Kindly do not use mobile phones for registering online.",
  },
  {
    number: "04",
    text: "Please have the following documents handy, as they will be required for the completion of registration process.",
    subPoints: [
      "Birth Certificate",
      "Passport size photo",
      "Academic report",
      "Any other documents (Ex. Assessment reports if applicable)",
    ],
  },
  {
    number: "05",
    text: "In case you encounter any technical issues and have been unable to submit the form, you may use the link sent to your registered email id to access and complete the application. The link will expire in 24 hrs and the application number will be rendered invalid.",
  },
  {
    number: "06",
    text: "The adult program is applicable for students above 18 years (students born on or before 1st December 2006). For details please refer to the school website or contact admission@apl.edu.in",
  },
];

function Registration() {
    
  return (
    <>
      <section
        className="py-12 px-4 sm:px-6 md:px-10"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="max-w-6xl mx-auto text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-primary inline-block border-b-2 border-secondary mb-4">
            We welcome your application for admission to our school.
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-black font-primary inline-block border-b-2 border-secondary mb-4">
            Registrations are now open for the academic session 2025-26. click
            here to know about the admission process.
          </h3>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-black font-primary inline-block border-b-2 border-secondary mb-4">
            Instructions:
          </h3>

          <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
            To adapt to different schooling needs, we offer two streams of
            teaching-learning formats. Both streams are available in Cambridge
            as well as the NIOS board. Formal Stream, a full-time schooling
            which provides a child with a plethora of learning pathways in the
            academic and non-academic areas. We provide the child a personalised
            learning experience with a focus on holistic growth and development.
            The curriculum is rolled out in definite time cycles and structures,
            with periodic formative and summative assessments. Differentiated
            teaching and assessment are practised while addressing the unique
            needs and potentials of all students in a regular classroom setting.
          </p>
        </div>

        {/* Instructions List */}
        <div className="max-w-6xl mx-auto text-left space-y-6 mt-10">
          {instructionList.map((item, index) => {
            const isEven = index % 2 === 1;
            const colorClass = isEven ? "text-secondary" : "text-primary";
            return (
              <div key={index}>
                <div className="flex items-start gap-2">
                  <div className={`font-bold ${colorClass} flex items-center gap-1`}>
                    {item.number}
                    <MdDoubleArrow className="text-lg" />
                  </div>
                  <p className="text-gray-800">{item.text}</p>
                </div>
                {item.subPoints && (
                  <ul className="pl-8 mt-2 space-y-1">
                    {item.subPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`mt-1 ${colorClass}`}>
                          <MdDoubleArrow className="text-lg" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>
    <ContactFormTabs />
    </>
  );
}

export default Registration;
