import React, { useEffect, useState } from "react";




import StaticBanner from "../../../components/StaticBanner";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";
import APLVAlue2 from "../others/AplValue2";



const slides = [{ desktop: "/assets/essential-web.jpg", mobile: "/assets/essential-mob.jpg" }];
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
const careerGuidancePoints = [
  "Conducting career talks with APL Alumni and parents as guest speakers",
  "Conducting information sessions for different grade levels on vital information such as entry requirements, entrance exams, timelines, and country-specific requirements.",
  "Helping them to explore different career options and possibilities.",
  "Guiding them in the subject-selection process before stepping into Grade 9 and Grade 11.",
  "Facilitating the Psychometric assessments.",
  "Encouraging them to explore various learning opportunities during summer breaks and vacations like internships, summer schools and volunteering activities.",
  "Arranging university representative visits and university fairs.",
  "Sharing fortnightly / monthly newsletters with information on various webinars, university updates and summer programs.",
  "Coordinating yearly parent-interaction and subject-selection orientation sessions.",
  "Helping Grade 12 students with transcript uploads on application portals.",
  "Coordinating and procuring teacher reference letters and predicted grades for Grade 12 students.",
  "Providing letters of recommendation from counsellors.",
];

function EssentialSupport() {
 
  return (
    <>
      {/* Banner Section */}
            <StaticBanner slides={slides} alt=" Essential Support Banner" />
      

      {/* Content Section */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="py-12 px-4 sm:px-6 md:px-16 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Text Content */}
            <div className="space-y-6 text-black font-secondary">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                Essential Support
              </h2>

              <h3 className="text-xl sm:text-2xl text-primary font-primary">
               Explore
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
               Explore is a one-of-a-kind program where sessions are conducted to create a non-judgemental space for students to reflect on various topics. These topics are selected based on areas of social and emotional relevance to the students. It gives students structured time each week to reflect, discuss and make personal meaning under the guidance of a facilitator. These sessions are facilitated by our trained and qualified counsellors.The topics for Explore are discussed using different methodologies like interactive sessions, activities, power-point presentations, role-plays, videos and debates. The content for Explore is designed by the Counsellors and is age-appropriately presented to the students across Grades 2-12.
              </p>
                   <h3 className="text-xl sm:text-2xl text-primary font-primary">
             Academic and Career Counselors
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                APL Global School has dedicated academic and college counsellors who guide CAIE & NIOS students to prepare and apply for courses post A levels and NIOS. The counseling team offers personalized guidance to help students realize their academic aspirations by identifying their strengths and interests as they navigate their educational and career pathways.The academic counsellors support students from Grade 8 through IGCSE and AS/A2 levels in their career/ course planning process that includes <span className="font-bold">grade-level information sessions</span> on vital topics such as <span className="font-bold">university entry requirements, entrance exams, timelines, and country-specific admissions processes.</span>
              </p>
               <p className="text-sm sm:text-base leading-relaxed">
               Our counselors guide students through the <span className="font-bold">subject-selection process</span> for Grades 9 and 11 and help them <span className="font-bold">explore diverse career options </span>using tools like <span className="">psychometric assessments.</span> We also encourage students to pursue <span className="font-bold"> enriching summer opportunities</span>-including internships, volunteering, and summer schools—to build skills and strengthen college applications.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
               To support higher education planning, we organize <span className="">university fairs and representative visits, </span> and share <span className="font-bold">fortnightly/monthly newsletters</span> with updates on webinars, summer programs etc.
              </p>

              <h3 className="text-xl sm:text-2xl text-primary font-primary">
                Department of Special Education
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                APL believes that it is crucial to understand that all children learn and grow differently. The school aims to provide learning environments that are both self-paced and process-oriented.
              </p>
                <p className="text-sm sm:text-base leading-relaxed">
                The school creates an environment that allows for personalised learning experiences that extends to all members of the school irrespective of age, abilities and backgrounds. The idea behind personalized education is to keep in mind every individual’s capabilities while nurturing the same within a larger community, providing life-enriching skills. With the help of an access-friendly campus, the school aims at participation of the whole school citizenry in various school activities, to foster a sense of oneness.
              </p>
               <p className="text-sm sm:text-base leading-relaxed">
                Special educators, teachers, occupational therapists and counselors provide a support system that compliments each other’s skill sets and help in translating ideas into an action plan. Individual sessions, small group sessions, shadow teaching, and advanced studies in specific subjects are some ways in which services are extended. All staff members work towards a process whereby students become self-motivated, process- oriented individuals who are getting ready to face the challenges of work, life and citizenship in a global society.
              </p>

              <h3 className="text-xl sm:text-2xl text-primary font-primary">
             Special Education Team at APL
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                <span className="font-bold">Special Educators  : </span> The role of special educators is to use tools to differentiate the learning environment, goals and/or instruction. They may work with any child at any given point in time and identify goals that could be either short or long term in nature.
              </p>
               <p className="text-sm sm:text-base leading-relaxed">
                <span className="font-bold">Special Education Coordinators : </span>Each student, following an individualized support plan, will be assigned to a special education coordinator. They help in planning and coordinating between stakeholders to arrive at an individualized plan.

              </p>
               <p className="text-sm sm:text-base leading-relaxed">
                <span className="font-bold">Occupational Therapists : </span>  Their primary role is to assist and engage students in meaningful activities to promote health, safety, and quality of life. This includes daily living activities, education, pre-vocational tasks, play, leisure, and social participation.
              </p>
               <p className="text-sm sm:text-base leading-relaxed">
                <span className="font-bold">Support Staff  : </span> Assigned to students with physical, sensory, or behavioral needs. They help with daily living skills, transitions between classes, and mobility within the campus.
              </p>
               <p className="text-sm sm:text-base leading-relaxed">
                <span className="font-bold">Meraki : </span> Centre for Creative Expressions: Offers programs for every child — not just the artistically exceptional — integrating visual arts, music, and movement as essential forms of language and expression.

              </p>
            </div>
            <div className="hidden md:flex justify-end sticky top-24 h-fit">
              <img
                src={"/assets/apl/Essential.webp"}
                alt="APL Support"
                className="w-full max-w-[350px] h-auto"
              />
            </div>
          </div>
        </div>
   <APLVAlue2 />
      </section>


  <section
        className="bg-cover bg-center bg-no-repeat w-full py-10 px-4 sm:px-6 md:px-12"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="max-w-6xl mx-auto space-y-10 text-sm sm:text-base">
          <div className="space-y-4">
            <h3 className="text-primary font-primary text-2xl leading-relaxed">
             Special Needs Support Program
            </h3>
            <p className="text-black font-secondary leading-relaxed">
              <span className="font-bold">Kindergarten level:</span> At this level, the special educator works as a co-mentor, collaborating on lesson plans to enable differentiation. Focus groups target specific developmental areas. Occupational Therapists and Coordinators help design individualised plans.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              <span className="font-bold">Primary and lower secondary level: </span>{" "}
               Grades 1–8 students with specific support needs follow development paths and individualised plans for areas like occupational therapy, creative expression, and more. These are planned collaboratively with educators and parents.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              <span className="font-bold">Skill Enrichment:</span> Students follow their grade curriculum but receive short-term support in specific skills like spelling, sentence expansion, and perception. Sessions occur once or twice a week with a skill enrichment teacher.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              {" "}
              <span className="font-bold">Mainstream Easy:</span> Students attend mainstream classes with added support in small groups led by special educators. Content is paced to suit group learning needs with extended hand-holding.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              <span className="font-bold">
               Customized Curriculum:
              </span>{" "}
           The curriculum is adjusted based on student readiness and may be below grade level in one or more subjects. These sessions are conducted in small groups with special educators.
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
    </>
  );
}

export default EssentialSupport;
