import React from "react";
import { motion } from "framer-motion";
import { MdDoubleArrow } from "react-icons/md";



// Components
import StaticBanner from "../../../components/StaticBanner";
import APLVAlue4 from "../others/AplValue4";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";


const slides = [{ desktop: "/assets/club-web.png", mobile: "/assets/club-web.png" }];

/* ------------ clubs data ------------ */
const curriculumData = [
  {
    title: "Cookery Club",
    content:
      "The Cookery Club helps students explore culinary creativity while learning basic to advanced cooking techniques. It promotes teamwork, nutrition awareness, and cultural appreciation through hands-on activities.",
  },
  {
    title: "Debate Club",
    content:
      "This club develops students' public speaking, critical thinking, and argumentation skills. Learners engage in structured debates on current and historical topics, improving articulation and confidence.",
  },
  {
    title: "Theatre Club",
    content:
      "The Theatre Club offers a platform for students to express themselves through drama, acting, and storytelling. It nurtures imagination, empathy, and stage presence while fostering teamwork.",
  },
  {
    title: "Math Club",
    content:
      "The Math Club fosters a love for numbers and problem-solving. Through games, puzzles, and challenges, students develop mathematical thinking and real-world application skills.",
  },
  {
    title: "Organic Farming Club",
    content:
      "Students in this club learn sustainable farming techniques and the importance of organic produce. They grow vegetables and herbs while understanding soil health, composting, and biodiversity.",
  },
  {
    title: "Creative Movement Club",
    content:
      "This club blends dance, physical expression, and improvisation to help students explore movement as a form of communication and creativity, enhancing physical and emotional well-being.",
  },
  {
    title: "Financial Literacy Club",
    content:
      "Designed to equip students with practical financial knowledge, this club covers topics such as budgeting, saving, investing, and responsible spending through engaging simulations and workshops.",
  },
  {
    title: "Public Speaking Club",
    content:
      "Students refine their speaking skills through speeches, presentations, and storytelling. The club focuses on voice modulation, body language, and overcoming stage fear.",
  },
  {
    title: "MUN Club",
    content:
      "The Model United Nations (MUN) Club trains students in diplomacy, international affairs, and resolution writing. Participants simulate UN committees and represent countries in debates.",
  },
  {
    title: "Creative Expressions Club",
    content:
      "This club allows students to explore various art forms like painting, sketching, sculpture, and mixed media. It encourages free expression and develops aesthetic sensibilities.",
  },
  {
    title: "Music Club",
    content:
      "The Music Club helps students explore vocal and instrumental music. From Indian classical to Western genres, students practice rhythm, melody, and group performance skills.",
  },
];

/* ------------ custom cards for events showcase ------------ */
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

/* ------------ animation + layout constants ------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ------------ component ------------ */
export default function ExpressionClub() {
  return (
    <>
      {/* Banner */}
      <StaticBanner slides={slides} alt="APL EXPRESSIONS CLUBS Banner" />

      {/* Intro Section */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="py-10 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                EXPRESSIONS CLUBS
              </h2>
              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                ‘Expressions’ are a collection of clubs that provide opportunities for students to engage in curricular activities outside the classroom – Music, Environment, Technology, Dance, Theatre, Debating and Public Speaking amongst other things. Students go on field trips, interact with professionals from different fields and participate in organizing various events to complete the experience.
              </p>
              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                Participation in national and international competitions like the MUN, inter school cultural, talent competitions across various interest areas, help to build self-confidence and offer opportunities for students to broaden their horizons.
              </p>
              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
               Students hone their leadership abilities as they manage all major school events, participate in the school student council, and volunteer to conduct events. These activities mimic actual responsibilities they will be shouldering in the real world, where leadership skills become an indispensable requirement.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src={"/assets/apl/Department.webp"}
                alt="Pedagogy"
                className="w-full max-w-[350px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Grid Section */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${"/assets/about-graph.svg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 text-left">
            {curriculumData.map((club, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="
                  group relative rounded-2xl bg-primary text-white shadow-xl overflow-hidden
                  h-auto sm:h-[360px] md:h-[320px] lg:h-[320px]
                  flex flex-col justify-between
                "
              >
                {/* Decorative Arrow */}
                <MdDoubleArrow className="absolute top-5 right-5 w-6 h-6 opacity-20 text-white pointer-events-none select-none" />

                {/* --- MOBILE (always expanded) --- */}
                <div className="block md:hidden p-6 text-white font-secondary">
                  <h3 className="text-xl sm:text-2xl font-semibold font-primary mb-2">
                    {club.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed opacity-95">
                    {club.content}
                  </p>
                </div>

                {/* --- DESKTOP (hover reveal) --- */}
                <div className="hidden md:block">
                  {/* Collapsed Title */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <h3
                      className="
                        text-2xl font-semibold font-primary
                        md:opacity-100 md:translate-y-0
                        md:group-hover:opacity-0 md:group-hover:translate-y-2
                        transition-all duration-300
                      "
                    >
                      {club.title}
                    </h3>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <div
                      className="
                        translate-y-full opacity-0
                        md:group-hover:translate-y-0 md:group-hover:opacity-100
                        transition-transform duration-500 ease-out
                      "
                    >
                      <h3 className="text-2xl font-semibold font-primary mb-2">
                        {club.title}
                      </h3>

                      <div className="relative text-sm md:text-base font-secondary leading-relaxed opacity-95 text-white/95 space-y-2 max-h-[320px] md:max-h-[360px] overflow-hidden">
                        <p>{club.content}</p>
                        {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-primary to-transparent" /> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glaze overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <APLVAlue4 />
      <AplEventsShowcase
        bgUrl="/assets/apl-event-bg.png"
        rightImg="/assets/event-boy.png"
        rightImgAlt="APL student"
        cards={customCards}
      />
      <CertificatesCarousel />
    </>
  );
}
