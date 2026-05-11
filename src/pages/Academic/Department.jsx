import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutGraph from "/assets/about-graph.svg";
import DepartmentIMg from "/assets/apl/Department.webp";
import SynergySection from "../About/SynergySection";
import APLVAlue1 from "../others/AplValue1";

import StaticBanner from "../../components/StaticBanner";

import banner1 from "/banners/apl-department.jpg";
import mobile1 from "/banners/Department-mob.webp";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";
const slides = [{ desktop: banner1, mobile: mobile1 }];
const customCards = [
  { date: "3rd & 4th August 2023", title: "SYNERGY\nBYTES", href: "#" },
  { date: "19th & 20th July 2024", title: "APL MUN\n2024", href: "#" },
  {
    date: "19th & 20th July 2024",
    title: "ENGLISH\nFESTIVITAS 2023",
    href: "#",
  },
];
function Department() {
  return (
    <>
      {/* Banner Section */}
      <StaticBanner
        slides={slides}
        alt=" Department of Special Education Banner"
      />

      {/* Introduction Section */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="py-10 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5 text-sm sm:text-base">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                Department of Special Education
              </h2>
              <p className="text-black font-secondary leading-relaxed">
                APL believes that it is crucial to understand that all children
                learn and grow differently. The school aims to provide learning
                environments that are both self-paced and process-oriented.
              </p>
              <p className="text-black font-secondary leading-relaxed">
                The school creates an environment that allows for personalised
                learning experiences that extends to all members of the school
                irrespective of age, abilities and backgrounds. The idea behind
                personalized education is to keep in mind every individual’s
                capabilities while nurturing the same within a larger community,
                providing life-enriching skills. With the help of an
                access-friendly campus, the school aims at participation of the
                whole school citizenry in various school activities, to foster a
                sense of oneness.
              </p>
              <p className="text-black font-secondary leading-relaxed">
                Special educators, teachers, occupational therapists and
                counselors provide a support system that compliments each
                other’s skill sets and help in translating ideas into an action
                plan. Individual sessions, small group sessions, shadow
                teaching, and advanced studies in specific subjects are some
                ways in which services are extended. All staff members work
                towards a process whereby students become self-motivated,
                process- oriented individuals who are getting ready to face the
                challenges of work, life and citizenship in a global society.
              </p>
              <p className="text-black font-secondary font-bold leading-relaxed">
                In the pipeline and still in its nascent stages, the Gifted and
                Talented program would allow students to take up projects or
                work on a higher grade level curriculum depending on their areas
                of interest and their long term goals.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={DepartmentIMg}
                alt="APL DepartmentIMg"
                className="w-full max-w-[350px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full py-10 px-4 sm:px-6 md:px-12"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="max-w-6xl mx-auto space-y-10 text-sm sm:text-base">
          <div className="space-y-4">
            <h3 className="text-primary font-primary text-2xl leading-relaxed">
              Special Education Team at APL
            </h3>
            <p className="text-black font-secondary leading-relaxed">
              <span className="font-bold">Special Educators:</span> The role of
              special educators is to use tools to differentiate the learning
              environment, goals and/or instruction. They may work with any
              child at any given point in time and identify goals that could be
              either short or long term in nature.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              <span className="font-bold">Special Education Coordinators:</span>{" "}
              Each student, following an individualized support plan, will be
              assigned to a special education coordinator. They help in planning
              and coordinating between stakeholders to arrive at an
              individualized plan.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              <span className="font-bold">Occupational Therapists:</span> Their
              primary role is to assist and engage students in meaningful
              activities to promote health, safety, and quality of life. This
              includes daily living activities, education, pre-vocational tasks,
              play, leisure, and social participation.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              {" "}
              <span className="font-bold">Support Staff:</span> Assigned to
              students with physical, sensory, or behavioral needs. They help
              with daily living skills, transitions between classes, and
              mobility within the campus.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              <span className="font-bold">
                Meraki – Centre for Creative Expressions:
              </span>{" "}
              Offers programs for every child — not just the artistically
              exceptional — integrating visual arts, music, and movement as
              essential forms of language and expression.
            </p>
          </div>
          <APLVAlue1 />
          <div className="space-y-4">
            <h3 className="text-primary font-primary text-2xl leading-relaxed">
              Special Needs Support Program
            </h3>
            <p className="text-black font-secondary leading-relaxed">
              <span className="font-bold">Kindergarten level:</span> At this
              level, the special educator works as a co-mentor, collaborating on
              lesson plans to enable differentiation. Focus groups target
              specific developmental areas. Occupational Therapists and
              Coordinators help design individualised plans.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              {" "}
              <span className="font-bold">
                Primary and lower secondary level:
              </span>{" "}
              Grades 1–8 students with specific support needs follow development
              paths and individualised plans for areas like occupational
              therapy, creative expression, and more. These are planned
              collaboratively with educators and parents.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary font-primary text-2xl leading-relaxed">
              Skill Enrichment
            </h3>
            <p className="text-black font-secondary leading-relaxed">
              {" "}
              Students follow their grade curriculum but receive short-term
              support in specific skills like spelling, sentence expansion, and
              perception. Sessions occur once or twice a week with a skill
              enrichment teacher.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary font-primary text-2xl leading-relaxed">
              Mainstream Easy
            </h3>
            <p className="text-black font-secondary leading-relaxed">
              Students attend mainstream classes with added support in small
              groups led by special educators. Content is paced to suit group
              learning needs with extended hand-holding.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary font-primary text-2xl leading-relaxed">
              Customized Curriculum
            </h3>
            <p className="text-black font-secondary leading-relaxed">
              The curriculum is adjusted based on student readiness and may be
              below grade level in one or more subjects. These sessions are
              conducted in small groups with special educators.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary font-primary text-2xl leading-relaxed">
              Kamalam Program
            </h3>
            <p className="text-black font-secondary font-bold leading-relaxed">
              {" "}
              The ‘Kamalam Program’ is designed for students following a
              functional curriculum based on readiness. It focuses on functional
              academics and independent living skills. Students also join
              co-curricular activities based on strengths and interests. Classes
              are conducted in small groups by special educators.
            </p>
          </div>
        </div>
      </section>

      <AplEventsShowcase
        bgUrl="/assets/apl-event-bg.png"
        rightImg="/assets/event-boy.png"
        rightImgAlt="APL student"
        cards={customCards} // (optional) pass to override defaultCards
      />
      <CertificatesCarousel />

      {/* Senior Level Section */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full py-10 px-4 sm:px-6 md:px-12"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-black font-secondary leading-relaxed">
            <span className="font-bold">Senior level: </span>
            At the Senior School level, the two curriculums – IGCSE and NIOS
            prepare students to take on further challenges as adolescents and
            young adults. The support offered at this level ranges from remedial
            interventions, study skills, and assessments to understand the
            personalisation required in exam arrangements, for the student to be
            able to receive recognition for their attainment.  Exam arrangements
            include the use of a scribe, Word Processor or extra time. The
            purpose is to remove any barriers to the standard assessment,
            without compromising the standards being tested.
          </p>
        </div>
      </section>
    </>
  );
}

export default Department;
