import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";


// Image gallery
const items = [
  { src: "/assets/Art_1.webp", alt: "Back to School" },
  { src: "/assets/Art_2.webp", alt: "Creative Kids" },
  { src: "/assets/Art_3.webp", alt: "Holiday Fun" },
];



// Accordion content
const merakiSections = [
  {
    title: "ART",
    content: `The Art Program at APL Global School is designed to stimulate young minds to reflect and express themselves creatively. The program exposes children to artistically respond and understand their environment. Children will be exploring the evolution of art by understanding local and world art history. They will be encouraged to identify the significance of art history in their present lives.
We live among a rich cultural art tradition. Children will get an opportunity to see and learn about local, traditional and contemporary art practices. They will explore different areas of study like painting, sculpture, printmaking, digital art, textiles…etc. They will also have hands-on experience with all the different art mediums.

The Art Program aims to provide a child with a holistic experience. For children who want to pursue and grow into practicing a creative career, the experience and learning they get from school will be valuable. The attempt is to provide a space for personal artistic growth. This will allow the child to grow into an individual that artistically responds to its environment.

By grade 8, the students are well equipped to take on IGCSE Art & Design curriculum. By extension, Art & Design is provided as a subject at A & AS level as well.
`,
  },
  {
    title: "MUSIC",
    content: `
    Even before recorded history, people created music, whether through drumming, singing or chanting. Some of our strongest emotions may be brought on by listening to a piece of music.
To enable our students to understand and learn this method of expression, we introduced Music as a subject from Grade 1 to 8. At APL Global, using various Western Classical Music teaching techniques (like Alfred’s, John Thomson, Suzuki and Trinity based) we equip our students to play and analyse all levels of music.
Since we believe each child is unique, we ensure that equal importance is given to both World Music and Indian Classical Music in the curriculum, so that students are exposed to alternative forms of music. In addition, we ensure that students are exposed to top-notch music and sound engineering software so that they are in touch with aspects of music production as well.
By grade 8, the students are well equipped to take on IGCSE Music curriculum. By extension, Music is provided as a subject at A & AS level as well.
Our students have composed and created background scores for the yearly annual day event and other programmes. they have worked in collaboration with leading musicians in the industry; composing music pieces for school fundraisers and awareness programmes. This has led to a profound sense of individuality and on a broader social level, the ability of music to foster community while creating art.
`,
  },
  {
    title: "SPORT",
    content: `Sports have always been an integral part of the APL curriculum. The path shown by
Dr. Kannan Pugazhendi— a renowned sports physician and fitness consultant — is being carried forward ably by the sports faculty. With a firm belief that the physical state impacts mental energies, APL ensures that its students are exposed to regular fitness checks, exercises and sports.
The sports program is aimed at developing physical fitness and sporting ability in a variety of indoor and outdoor games, at individual and team levels. Attention is given to individual needs in areas like posture, strength, endurance, flexibility, stamina and skill development for sporting events. Sports and movement activities are used effectively to work on psychological factors like self-confidence, attention, motivation, managing emotions and so on. With access to excellent sports facilities, students benefit from enhanced and age-appropriate coaching & learning.
The programme is more than just a co-curricular activity. It is being addressed as a CAIE curriculum with syllabus aims and assessment objectives in place. Students are exposed to a sound understanding of the principles & practices of sports as a discipline and good health in general.
The games played at APL include basketball, football, cricket, badminton, table tennis, throw ball, volleyball and a range of athletic sports.`,
  },
  {
    title: "DMAC",
    content: `Students in the Lower Secondary school have the option of choosing any one of the four Creative forms of Expression: Drama, Music, Art, and Creative Movements (DMAC). They will be assessed on their progress at the end of each term.
Drama
The course in Drama promotes active learning, stimulates creativity and widens perceptions. A series of theatre games and improvisational exercises conducted under the supervision of a professional theatre person will focus on helping them develop their imagination, spontaneity, and reflexes.

The specific aims of the course include:

enabling students to understand the role of rhythm, space, character, and plot in creating a piece of theatre
helping students discover and enhance their storytelling skills
developing their acting skills, both individually and in groups
enabling students to develop their skills in devising original stories for the stage
Music
Music is introduced as a subject from Grade 1 to 8 at APL Global. Using various Western Classical Music teaching techniques (like Alfred’s, John Thomson, Suzuki, and Trinity based) we equip our students to play and analyze all levels of music. Since we believe each child is unique, we ensure that equal importance is given to World Music and Indian Classical Music as well in the curriculum. We ensure that students are exposed to top-notch music and sound engineering software so that they are in touch with aspects of music production as well. The students have a choice of instruments between Vocal, Guitar, Keyboard and Drums.

By grade 8, the students are well equipped to take on the IGCSE Music curriculum. By extension, Music is provided as a subject at A & AS level as well.

Art
The Art program is designed to stimulate young minds to reflect and express themselves creatively. Children will be exploring the evolution of art by understanding local and world art history. Children will get an opportunity to see and learn about local, traditional and contemporary art practices. They will explore different areas of study and also have hands-on experience with all the different art mediums.

For children who want to pursue and grow into practising a creative career, the experience and learning they get in school will be valuable.

By grade 8, the students are well equipped to take on the IGCSE Art & Design curriculum. By extension, Art & Design is provided as a subject at A & AS level as well.

Creative Movements
Creative movement sessions offer a safe space where one is able to creatively solve problems, collaborate with others, express feelings, accept and value individual differences while being respectful and responsible individuals.

It focuses on self-expression through various artistic disciplines to discover the aesthetic in life experiences and self-discovery in the long run. The classes aim at increasing awareness of the body and the space that surrounds it. This, in turn, makes the individual sensitive to their own bodies and to other bodies that they relate to.

The subject is further divided into three components: Creative movement and Performance, Rhythm & Fitness, and Dance studies.


`
   
  },
];

export default function ArtSection() {
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
          Art
        </h2>
        <p className="italic text-sm text-primary mb-4">
          Creative Expression | Passion Meets Purpose
        </p>
        <h3 className="text-lg md:text-xl font-bold text-black uppercase mb-2">
          Co-Curricular Programs
        </h3>
        <p className="text-sm md:text-base text-black leading-relaxed mb-6">
          Co-curricular programmes are disciplines that align with and mirror our academic programme. These structured disciplines are CAIE approved and bear credits.
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
