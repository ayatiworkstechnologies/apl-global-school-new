import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

// Image gallery
const items = [
  { src: "/assets/exp_1.webp", alt: "Back to School" },
  { src:"/assets/exp_2.webp", alt: "Creative Kids" },
  { src: "/assets/exp_3.webp", alt: "Holiday Fun" },
];

// Accordion content
const merakiSections = [
  {
    title: "Cookery Club",
    content: [
      "The Cookery Club helps students explore culinary creativity while learning basic to advanced cooking techniques. It promotes teamwork, nutrition awareness, and cultural appreciation through hands-on activities.",
    ],
  },
  {
    title: "Debate Club",
    content: [
      "This club develops students' public speaking, critical thinking, and argumentation skills. Learners engage in structured debates on current and historical topics, improving articulation and confidence.",
    ],
  },
  {
    title: "Theatre Club",
    content: [
      "The Theatre Club offers a platform for students to express themselves through drama, acting, and storytelling. It nurtures imagination, empathy, and stage presence while fostering teamwork.",
    ],
  },
  {
    title: "Math Club",
    content: [
      "The Math Club fosters a love for numbers and problem-solving. Through games, puzzles, and challenges, students develop mathematical thinking and real-world application skills.",
    ],
  },
  {
    title: "Organic Farming Club",
    content: [
      "Students in this club learn sustainable farming techniques and the importance of organic produce. They grow vegetables and herbs while understanding soil health, composting, and biodiversity.",
    ],
  },
  {
    title: "Creative Movement Club",
    content: [
      "This club blends dance, physical expression, and improvisation to help students explore movement as a form of communication and creativity, enhancing physical and emotional well-being.",
    ],
  },
  {
    title: "Financial Literacy Club",
    content: [
      "Designed to equip students with practical financial knowledge, this club covers topics such as budgeting, saving, investing, and responsible spending through engaging simulations and workshops.",
    ],
  },
  {
    title: "Public Speaking Club",
    content: [
      "Students refine their speaking skills through speeches, presentations, and storytelling. The club focuses on voice modulation, body language, and overcoming stage fear.",
    ],
  },
  {
    title: "MUN Club",
    content: [
      "The Model United Nations (MUN) Club trains students in diplomacy, international affairs, and resolution writing. Participants simulate UN committees and represent countries in debates.",
    ],
  },
  {
    title: "Creative Expressions Club",
    content: [
      "This club allows students to explore various art forms like painting, sketching, sculpture, and mixed media. It encourages free expression and develops aesthetic sensibilities.",
    ],
  },
  {
    title: "Music Club",
    content: [
      "The Music Club helps students explore vocal and instrumental music. From Indian classical to Western genres, students practice rhythm, melody, and group performance skills.",
    ],
  },
];

export default function ExpressionSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="px-4 md:px-16 py-12 bg-white text-primary font-sans">
      {/* Image Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Intro Text */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-secondary mb-2">
         EXPRESSIONS CLUBS
        </h2>
        <p className="italic text-sm text-primary mb-4">Impress Through Expressions</p>
        
        <p className="text-sm md:text-base text-black leading-relaxed mb-6">
          ‘Expressions’ are a collection of clubs that provide opportunities for
          students to engage in curricular activities outside the classroom –
          Music, Environment, Technology, Dance, Theatre, Debating and Public
          Speaking amongst other things. Students go on field trips, interact
          with professionals from different fields and participate in organizing
          various events to complete the experience.
        </p>

        <p className="text-sm md:text-base text-black leading-relaxed mb-6">
          Participation in national and international competitions like the MUN,
          inter school cultural, talent competitions across various interest
          areas, help to build self-confidence and offer opportunities for
          students to broaden their horizons.
        </p>

        <p className="text-sm md:text-base text-black leading-relaxed mb-6">
          Students hone their leadership abilities as they manage all major
          school events, participate in the school student council, and
          volunteer to conduct events. These activities mimic actual
          responsibilities they will be shouldering in the real world, where
          leadership skills become an indispensable requirement.
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {merakiSections.map((item, index) => (
            <div key={index} className="border rounded-md shadow-sm">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-3 font-medium text-left"
              >
                <div className="flex gap-3 items-center">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white text-xs rounded-full">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>
                  <span>{item.title}</span>
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-sm text-gray-700 whitespace-pre-line overflow-hidden"
                  >
                    {typeof item.content === "string" ? (
                      <p>{item.content}</p>
                    ) : (
                      item.content
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
