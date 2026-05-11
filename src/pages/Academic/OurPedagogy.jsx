import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import StaticBanner from "../../../components/StaticBanner";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";
import APLVAlue4 from "../others/AplValue4";
import APLVAlue3 from "../others/AplValue3";




const slides = [{ desktop: "/assets/apl-pedagogy.jpg", mobile: "/assets/apl-pedagogy-mob.jpg" }];
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
function OurPedagogy() {
  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt=" My School Pedagogy Banner" />

      {/* Pedagogy Section with Background */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="py-12 px-4 sm:px-6 md:px-16 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left - Text */}
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                My School Pedagogy
              </h2>

              <h3 className="text-xl sm:text-2xl text-primary font-primary leading-relaxed">
                Every Child is Unique
              </h3>

              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                At APL, we understand that every child{" "}
                <span className="font-bold">
                  thinks, feels, and learns in their own way.{" "}
                </span>{" "}
                To support this, we create opportunities for students to{" "}
                <span className="font-bold">
                  explore learning on their own terms.{" "}
                </span>
              </p>

              <h3 className="text-xl sm:text-2xl text-primary font-primary leading-relaxed">
                A Personalised Approach
              </h3>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Learning plans are tailored to the{" "}
                <span className="font-bold">
                  individual strengths, needs, and interests{" "}
                </span>{" "}
                of each student. This is strengthened with{" "}
                <span className="font-bold">Experiential methods </span> and
                multiple pathways to make learning dynamic and inclusive.
              </p>

              <h3 className="text-xl sm:text-2xl text-primary font-primary leading-relaxed">
                Innovation at the Core
              </h3>

              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Creativity and innovation are the
                {" "} <span className="font-bold">
                   foundation of our teaching philosophy.
                </span>
                Our teachers therefore constantly work to design plans that
                adapt to diverse learning styles.
              </p>
              <h3 className="text-xl sm:text-2xl text-primary font-primary leading-relaxed">
                Strong Teacher–Student Connections
              </h3>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Teachers build rapport through {" "}
                <span className="font-bold">
                  active dialogue and trust-based relationships,
                </span>{" "}
                making learning relevant and engaging.
              </p>
              <h3 className="text-xl sm:text-2xl text-primary font-primary leading-relaxed">
                Student Voice & Choice
              </h3>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Students are encouraged to{" "}
                <span className="font-bold">set their own goals {" "}</span>and
                reflect on their progress. We provide a compassionate mentoring
                space to help them realise their potential.
              </p>
              <h3 className="text-xl sm:text-2xl text-primary font-primary leading-relaxed">
                Inclusive & Supportive Environment
              </h3>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                We nurture a{" "}
                <span className="font-bold">compassionate mentoring space {" "}</span>
                where every learner is valued.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Open conversations are welcomed, fostering a strong sense of
                {" "}<span className="font-bold">belonging and respect.</span>
              </p>
              <h3 className="text-xl sm:text-2xl text-primary font-primary leading-relaxed">
                Growth-Oriented Mindset
              </h3>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                APL embraces a progressive mindset that is open to growth and
                change as part of the learning journey.
              </p>
              <h3 className="text-xl sm:text-2xl text-primary font-primary leading-relaxed">
                No One Left Behind
              </h3>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Our differentiated strategies ensure that {" "}
                <span className="font-bold">every child is supported</span>{" "}
                Inclusion isn’t just a goal — it’s a{" "}
                <span className=" living practice"> living practice</span>at
                APL.
              </p>
            </div>

            {/* Right - Sticky Image */}
            <div className="md:sticky md:top-32">
              <img
                src={"/assets/my-school-pedagogy.png"}
                alt="APL Performance Reporting"
                className="w-full max-w-[350px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="py-12 px-4 sm:px-6 md:px-16 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left - Text */}
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl text-primary font-primary leading-relaxed">
                TEACHING-LEARNING PATTERN
              </h3>

              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                The teaching pedagogy is designed and derived from the
                respective curricula, -Cambridge International or the NIOS,
                keeping holistic development in mind. Plans are created
                primarily taking the affective side of learning into
                consideration.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Teachers are encouraged to use a variety of strategies which
                include different modes of mentoring, learning, and assessments
                that prompts every learner to feel inspired to realize and
                celebrate their unique potential. Above all, we nurture each
                student’s strengths while developing other essential areas —
                resilience, collaboration, and wellbeing — so that learners
                thrive not only intellectually, but personally.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                We recognise giftedness across intellectual, creative, artistic
                and social-emotional domains, and weave tiered levels of
                learning that challenge their exceptional abilities.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Acceleration into higher grades is considered carefully and
                selectively — only when clear mastery justifies it. More often,
                we enrich learning in place to support academic growth while
                maintaining social and emotional balance.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                These approaches deepen student engagement and promote balanced
                development alongside curricular goals. The pedagogy is tuned to
                generate optimal engagement from the students. Teachers
                continuously engage in personal and professional development to
                refine their skills as educators in a collaborative space.
              </p>
            </div>

            {/* Right - Sticky Image */}
            <div className="md:sticky md:top-32">
              <img
                src={"/assets/teaching.png"}
                alt="APL TeachingPattern"
                className="w-full max-w-[350px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="py-12 px-4 sm:px-6 md:px-16 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left - Text */}
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl text-primary font-primary leading-relaxed">
                Forms of Assessment
              </h3>

              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Assessment is a natural and intrinsic part of the learning
                experience at APL. It is done to develop the confidence and
                aspiration levels of students while keeping in mind their level
                of readiness. The assessment pattern varies for school levels.
                For KG - 5 is continuous and formative in nature. Grade 6 is
                gently transitioned to the idea of formal assessments.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Students with higher cognition level, academic progress beyond
                the functional components of the curriculum is also tracked.
                Since there is a minority of students who are identified as
                gifted with neurodivergence, the curriculum and hence the
                assessments are highly customized to support their growth.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                For Kamalam the assessment model provides a framework that has
                standardization of parameters and at the same time provides
                flexibility to accommodate the spectrum of learning styles and
                needs based on student neurodivergence.
              </p>
              <h3 className="text-xl sm:text-2xl text-primary font-primary leading-relaxed">
                Feedback Mechanism
              </h3>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                In keeping with the pedagogic systems at APL, our reporting
                pattern takes a holistic view of the student's development,
                progress and performance. The progress report gives an analysis
                of the child's performance which includes their Learner Profile,
                Socio-emotional Strengths, Scholastic Performance, and their
                Sports and Co-curricular Performance. Parents are invited to
                meet the subject teachers, mentors and the Heads of School,
                together with the student to discuss performances, challenges
                and needs. Parents can also request meetings with school on
                specific requirements.
              </p>
            </div>

            {/* Right - Sticky Image */}
            <div className="md:sticky md:top-32">
              <img
                src={"/assets/forms.png"}
                alt="APL Assesmentpattern"
                className="w-full max-w-[350px]"
              />
            </div>
          </div>
        </div>
      </section>
      <APLVAlue3 />
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="py-12 px-4 sm:px-6 md:px-16 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left - Text */}
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl text-primary font-primary leading-relaxed">
                SUPPORT SYSTEM
              </h3>

              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                <span className="font-bold">Mentoring</span> is a very
                significant part of APL and the students feel supported to have
                mentors as their friend, philosopher, and guide in school. The
                student’s mentor plays a multidimensional role in helping the
                child with academic, social, and emotional needs. Mentors are
                the first point of contact, and their interaction with parents
                helps build mutual confidence.
              </p>
              
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Mentor periods aim to create a space in which the class group is guided by the Class Mentor to discuss and air-out issues specific to the class. Some of the activities that happen at this time are silent time, guided meditation, circle time and sharing of news that is relevant to the class.
              </p>
                <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                APL has qualified <span className="font-bold">counsellors</span> who are experienced and skilled in one-to-one counselling as well as group sessions. The one-on-one sessions meet individual counseling needs of students. Students can voluntarily approach them to get guidance on any socio- emotional concerns or for a chat in a confidential manner.
              </p>
                  <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
               Psychological guidance in terms of social and moral values are imbibed in students in a clearly defined, fully confidential space. Proactive strategies are put in place to help students with conflict resolution and effective engagement with the community.  At all levels of school, the effort is to create self-awareness and promote emotional literacy, thus creating a school climate promoting healthy living and learning. Counsellors also consult with parents and teachers to support the student’s overall well-being.
              </p>
            </div>

            {/* Right - Sticky Image */}
            <div className="md:sticky md:top-32">
              <img
                src={"/assets/support-system.png"}
                alt="APL PersonalLearning"
                className="w-full max-w-[350px]"
              />
            </div>
          </div>
        </div>
      </section>

     
      <APLVAlue4 />
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

export default OurPedagogy;
