import React, { useEffect, useState } from "react";


import InstitutionForm from "./InstitutionForm";
import IndividualForm from "./IndividualForm";


import StaticBanner from "../../../components/StaticBanner";
import APLVAlue4 from "../others/AplValue4";
import APLVAlue5 from "../others/AplValue5";

const slides = [{ desktop: "/banners/mentor-web.jpg", mobile: "/banners/mentor-mob.jpg" }];

const curriculumData = [
  {
    title: "INDIVIDUAL 'CIDTL' REQUEST FORM",
    key: "individual",
    render: () => <IndividualForm />,
  },
  {
    title: "TRAINING REQUISITION FORM FOR INSTITUTION",
    key: "institution",
    render: () => <InstitutionForm />,
  },
];

function TeacherMentor() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner Section */}
      <StaticBanner
        slides={slides}
        alt="APL Teacher Mentor center Training Banner"
      />

      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="py-10 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: Content */}
            <div className="space-y-5 text-sm sm:text-base">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                TRAINING
              </h2>

              <p className="text-black font-secondary leading-relaxed">
                The Teacher Mentor Centre (TMC) is the heart of professional and
                personal growth for all faculty members of our school. Here,
                teachers are empowered to grow as confident, responsible,
                innovative, reflective, and engaged practitioners, while staying
                aligned with our school values and the Cambridge Teacher
                Standards.
              </p>

              <p className="text-black font-secondary leading-relaxed">
                More than just a training hub, the TMC fosters a collaborative community where teachers share their expertise, exchange ideas, and learn from one another. Through personal mentoring sessions and in-house training programmes, we address both pedagogical and skill-based needs of teachers, including subject-focused workshops. These programmes are experiential, interactive, and designed to nurture reflective practice and innovation in the classroom. Teachers are also encouraged to step into the role of trainers themselves, building a culture of peer learning and lifelong professional growth.
              </p>
              <p className="text-black font-secondary leading-relaxed">
                In addition, the TMC connects faculty with professional development opportunities beyond the school, ensuring they remain part of a wider network of global educators. Training programmes include internal initiatives as well as internationally recognised courses such as the Cambridge International Diploma in Teaching and Learning (CIDTL).</p>

             <p className="text-black font-secondary leading-relaxed">Recognising the importance of wellbeing, the TMC curates wellness programmes that integrate mindfulness, art, music, nature, and play helping teachers to recharge, balance, and inspire their students with renewed energy.</p>
            </div>

            {/* Right: Sticky Image */}
            <div className="sticky top-28 h-fit flex justify-center md:justify-end">
              <img
                src={"/assets/training.png"}
                alt="APL Training"
                className="max-w-xs w-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <APLVAlue4 />
      <section
        className="bg-cover bg-center bg-no-repeat w-full py-10 px-4 sm:px-6 md:px-12"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="max-w-6xl mx-auto space-y-10 text-sm sm:text-base">
          <div className="space-y-4">
            <h3 className="text-primary font-primary text-2xl leading-relaxed">
              Ikigai Lab
            </h3>
            <p className="text-black font-secondary leading-relaxed">
             The Ikigai Lab, housed within the TMC, is a unique space designed around the Japanese concept of ikigai,celebrating joie de vivre,the joy of living with purpose. It offers teachers a chance to pause from their daily demands and engage in reflective, self-help practices that nurture both body and mind.
            </p>
                <p className="text-black font-secondary leading-relaxed">
             Here, teachers can explore grounding activities, set intentions at the wish tree, or simply relax with curated reading and reference materials. This calm and creative environment allows teachers to recalibrate, find balance, and rediscover the joy of learning.

            </p>
                <p className="text-black font-secondary leading-relaxed">
             The Ikigai Lab inspires teachers to emerge as role models who radiate inner awareness, share their wisdom with colleagues, and embody a spirit of lifelong learning making a lasting impact on the entire school community.

            </p> 
          </div>
        </div>
      </section>
     
      <APLVAlue5 />
    </>
  );
}

export default TeacherMentor;
