import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import StaticBanner from "../../../components/StaticBanner";
import APLVAlue3 from "../others/AplValue3";


const slides = [{ desktop: "/banners/apl-youth-awards.jpg", mobile: "/banners/youth-awards-mob.webp"}];
function YouthAwards() {
  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt="APL YOUTH AWARDS Banner" />

      <section className="bg-white py-16 px-4 sm:px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            YOUTH AWARDS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
            {/* Image */}
            <motion.div
              className="md:col-span-2 flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={"/assets/apl/Youth_award.webp"}
                alt="Youth_award"
                className="w-full max-w-[350px] h-auto"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className="md:col-span-3 space-y-6 text-sm sm:text-base font-secondary text-gray-800"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  DUKE OF EDINBURGH
                </h3>
                <p className="italic text-gray-700">
                  “The Duke of Edinburgh’s International Award is a non-formal
                  education and learning framework operating in more than 130
                  countries and territories around the world, through which
                  young people’s achievements outside of academia are recognized
                  and celebrated. The DoE is the world’s leading youth
                  achievement award, giving millions of 14 to 24-year-old’s the
                  opportunity to be the very best they can be. “The objective of
                  this program is to provide an introduction to worthwhile
                  leisure activities and voluntary service, as a challenge to
                  the individual to discover the satisfaction of achievement.”
                </p>
              </div>

              <p>
                These awards are in line with our school’s philosophy of
                holistic development, emphasizing the non-competitive growth and
                progress of young minds. To help our students in reaching their
                greatest potential, the Duke of Edinburgh (DoFE) awards was
                instituted for Grades 9 to 12. The award comprises 4 sections –
                Skills, Volunteering, Physical Recreation and an Adventurous
                Journey.
              </p>

              <p>
                APL Global School is registered as a YES (Youth Engaging
                Society) Centre to operate the Award Program. We as a YES Centre
                have partnered with the NAA office to help deliver The Award
                Program to participants and young people in the community.
              </p>

              <p>
                We are committed to assist and ensure that our students get the
                best possible support while they participate in The Award
                Program.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <APLVAlue3 />
    </>
  );
}

export default YouthAwards;
