import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import APLVAlue4 from "../others/AplValue7";
import StaticBanner from "../../../components/StaticBanner";

const slides = [{ desktop: "/assets/faculty-web.png", mobile: "/assets/faculty-mob.png" }];

function OurFaculty() {
  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt="Our Faculty Banner" />

      {/* Faculty Section */}
      <section className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-8">
            Our Faculty
          </h2>

          <div className="space-y-6 text-black font-secondary text-base sm:text-lg leading-relaxed">
            <p>
              The educators at APL who have come from different educational
              models are an <span className="font-extrabold">Exciting mix</span>{" "}
              of individuals driven with a passion to raise the standard of
              teaching and learning. We are proud of our experienced and
              “willing to learn and grow” faculty who blend their domain
              expertise and experience with the philosophy and pedagogy of
              Personalized Learning Design. Many of our educators are scholars
              in their respective fields and thrive as learners themselves. Our
              educators are ever ready to stand up to challenges, for they
              believe the journey of learning is as important as the goal
              itself. They never lose an opportunity to collaborate and share
              learning, making it an enlightening experience for the students.
            </p>

            <p>
              While gathering information about our educators, we realized we
              have such a diverse group which includes different pedagogical
              backgrounds, cultures, languages, hobbies, interests and they all
              share a deep passion to make a difference to the lives of each
              student. Our selection process focuses on a teacher’s
              understanding of our school’s philosophy, inclusive education,
              personalization and experiential learning. We welcome teachers who
              like to innovate, are ready to imbibe the learning process as much
              as they would want their students to do so and practice
              self-reflection.
            </p>

            <p>
              Our endeavour to course correct our processes through periodic
              feedback from all the stakeholders help us tremendously to ensure
              we have the best perspectives and a truly collaborative approach.
              Several suggestions from our teachers have helped in establishing
              good systems, leading to a healthy work culture.
            </p>

            <p>
              We also empower our educators to develop themselves
              professionally. On-going in-house, external and Cambridge training
              opportunities abound. Teachers engage in formal and informal
              in-house training, collaborative learning, peer reviews, inter &
              intra departmental meetings to further their understanding of the
              CAIE requirements and enhance their adherence to the APL ethos.
            </p>

            <p>
              We offer a variety of growth avenues for the teachers; they could
              master our pedagogy to become Expert Teachers, take on
              administrative and leadership roles or become Teacher Trainers.
              Many of our faculty hold CIE Teacher Training qualifications and
              are accredited Moderators for CIE coursework.
            </p>

            <p className="font-bold">
              APL Global School is an accredited centre for the CIDTL with
              authorization to register other school candidates as well.
            </p>
          </div>
        </div>
      </section>
      <APLVAlue4 />
    </>
  );
}

export default OurFaculty;
