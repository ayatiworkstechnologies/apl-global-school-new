import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";


 

const faqs = [
  {
    q: "1. What curriculum does APL Global School follow?",
    a: [
      "APL Global School follows both Cambridge International and NIOS curricula:",
      "• Cambridge International (Primary to Advanced levels)",
      "• National Institute of Open Schooling (NIOS) (Grades 8–12)",
    ],
  },
  {
    q: "2. What is the student–teacher ratio at APL Global School?",
    a: "The school maintains small class sizes with a teacher–student ratio of 1:22 to provide personalized attention and effective learning, with a maximum of 10% of each class allocated to students with special educational needs.",
  },
  {
    q: "3. How does APL support inclusive education?",
    a: "APL fosters a culture of inclusion by integrating children with different needs and cultural diversity in classrooms. Differentiated teaching and assistive technology are used to accommodate varied learning styles.",
  },
  {
    q: "4. What facilities are available on campus?",
    a: [
      "APL Global School offers a thoughtfully designed campus that supports academic excellence, creativity, and well-being. Key facilities include:",
      "",
      "Academic Spaces:",
      "• Spacious, well-ventilated classrooms",
      "• Science laboratories (Physics, Chemistry, Biology)",
      "• Computer lab with modern systems",
      "• Library and reading room",
      "• Resource rooms for individualized learning support",
      "",
      "Arts & Creative Spaces:",
      "• Art and craft studios",
      "• Music room (vocal and instrumental)",
      "• Dance studio and drama performance area",
      "",
      "Sports & Physical Education:",
      "• Multi-sport outdoor ground",
      "• Indoor sports area",
      "• Basketball and volleyball courts",
      "• Yoga and physical fitness programs",
      "",
      "Multipurpose & Community Spaces:",
      "• Auditorium for events and performances",
      "• Multi-purpose gallery for exhibitions and gatherings",
      "• Cafeteria and dining area",
      "",
      "Support & Accessibility:",
      "• Counselling and wellness center",
      "• Medical/first-aid room",
      "• Safe and secure transport facilities",
      "• Wheelchair-accessible pathways and ramps",
    ],
  },
  {
    q: "5. How does APL use technology in learning spaces?",
    a: "All classrooms are equipped with projectors. Students use technology for research, projects, and multimedia presentations, while teachers use it for differentiated teaching.",
  },
  {
    q: "6. Are APL teachers accredited in Cambridge training?",
    a: "Yes. Many of our faculty hold CAIE Teacher Training qualifications and serve as accredited Moderators for CAIE coursework.",
  },
  {
    q: "7. Is APL an accredited teacher training centre?",
    a: "Yes. APL Global School is an accredited centre for the Cambridge International Diploma for Teaching and Learning (CIDTL) and can register other school candidates.",
  },
  {
    q: "8. How many students have graduated from APL Global School so far?",
    a: "Since our inception in 2008, we are proud to have nurtured an alumni community of 856 graduates.",
  },
  {
    q: "9. Where do APL graduates pursue higher education?",
    a: "Our graduates have secured admissions in prestigious colleges and universities across India and around the world, pursuing diverse disciplines.",
  },
  {
    q: "10. What is the Kamalam Program?",
    a: "Kamalam is a specialized learning unit that supports children with diverse learning needs, including neurodivergent learners. It provides a personalized, strength-based curriculum focusing on academics, life skills, and social-emotional development. Each child receives an Individualized Education Plan (IEP) designed by educators, therapists, coordinators, and parents.",
  },
  {
    q: "11. What is NIOS and who is it suitable for?",
    a: "The National Institute of Open Schooling (NIOS) is an autonomous board under the Government of India, recognized internationally and equivalent to other boards. It offers flexible learning, subject choice, and accommodations for diverse learners — ideal for those balancing academics with sports, arts, or other pursuits.",
  },
  {
    q: "12. Why choose NIOS at APL?",
    a: [
      "APL offers NIOS for students who:",
      "• Desire flexibility to balance academics and co-curricular interests",
      "• Prefer small class sizes (1:10 ratio)",
      "• Wish to focus on competitive exams alongside schooling",
      "• Need flexibility in assessments and subject selection",
      "• Have special educational or medical needs",
    ],
  },
  {
    q: "13. Is the NIOS certificate recognized internationally?",
    a: "Yes. The Association of Indian Universities (AIU) has granted equivalence to the NIOS Senior Secondary Certificate Examination, enabling global higher education opportunities.",
  },
  {
    q: "14. What kinds of subjects are available under NIOS?",
    a: "NIOS offers a wide range of academic and vocational subjects. Detailed subject choices are available on the NIOS official website.",
  },
  {
    q: "15. What kind of socio-emotional counseling services are available at APL?",
    a: [
      "APL has qualified counselors who provide:",
      "• One-on-one counseling for individual guidance",
      "• Group sessions for shared concerns",
      "• Confidential emotional and developmental support",
    ],
  },
  {
    q: "16. How do counselors support students’ growth?",
    a: "Counselors work closely with students to build self-awareness, guide conflict resolution, and foster positive peer and community engagement.",
  },
  {
    q: "17. Does APL provide career and college guidance?",
    a: [
      "Yes. APL has dedicated academic and career counselors who offer:",
      "• Career Talks with alumni and parents",
      "• Subject selection guidance (Grades 9 & 11)",
      "• Psychometric assessments for strengths and interests",
      "• University fairs and representative visits",
      "• Information sessions on global admissions",
      "• Guidance for internships, summer schools, and volunteering",
    ],
  },
  {
    q: "18. What kind of support does APL provide for children with special needs?",
    a: "APL offers a full support system including special educators, occupational and speech therapists, counselors, and support staff who collaboratively design individualized learning plans.",
  },
  {
    q: "19. Does APL have programs for gifted and talented students?",
    a: "Yes. APL offers enrichment programs that allow gifted students to undertake higher-level projects or accelerated curricula, based on demonstrated mastery and readiness.",
  },
  {
    q: "20. What is the Adult Program at APL?",
    a: [
      "The Adult Program supports learners who exceed the age limit for Grade 12 (born before 1st Dec 2007).",
      "• Classes: Monday–Friday, 12.30 pm to 2.30 pm",
      "• Available for both CIE and NIOS students",
      "This ensures students can complete their schooling without disruption.",
    ],
  },
  {
    q: "21. Does the school provide transport facilities?",
    a: "Yes, the school offers safe and reliable bus transport with fixed routes and trained staff ensuring comfort and safety.",
  },
  {
    q: "22. Are the buses GPS-enabled and can I track my child's bus in real-time?",
    a: "Yes. All buses are GPS-enabled and parents can track them in real-time via an app. Trained drivers and attendants ensure student safety.",
  },
  {
    q: "23. Does the school have a canteen facility?",
    a: "Yes, the school provides a hygienic canteen facility serving wholesome vegetarian meals for breakfast and lunch, available through a subscription plan.",
  },
  {
    q: "24. Is it mandatory to avail the canteen facility?",
    a: "No, the canteen is optional. Students may bring food from home or subscribe to the school meal plan.",
  },
  {
    q: "25. Are there any additional expenses apart from those mentioned on the website?",
    a: "Yes. Optional activities like picnics or excursions may incur additional fees. Students in Grades 9 and 11 also have a one-time fee for the psychometric test.",
  },
  {
    q: "26. What child safety measures are in place?",
    a: [
      "APL prioritizes student safety through:",
      "• Trained security personnel and monitored entry/exit points",
      "• CCTV surveillance throughout the campus",
      "• Strict visitor management protocols",
      "• Regular fire drills and emergency preparedness training",
      "• On-site medical support (Apollo Shine)",
      "• Safe transportation with trained drivers and attendants",
      "• A dedicated Student Safeguarding Committee",
    ],
  },
];


export default function FQS() {
  const [open, setOpen] = useState(0); // first open by default

  return (
    <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-16 md:py-20">
      {/* Title with lime underline bar (like screenshot) */}
      <div className="mb-10 md:mb-14">
        <h2 className="text-4xl md:text-[44px] font-semibold leading-none tracking-tight text-primary font-primary">
          FAQ'S
        </h2>
        <div className="h-1 w-16 md:w-20 bg-secondary mt-3 rounded-full" />
      </div>

      <div className="space-y-10">
        {faqs.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <div key={idx} className="relative">
              {/* Clickable header */}
              <button
                onClick={() => setOpen(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
                className={[
                  "group w-full text-left flex items-center gap-4",
                  "text-[18px] md:text-[20px] font-primary font-medium",
                  isOpen ? "text-primary" : "text-[#1F1F1F]",
                  "focus:outline-none"
                ].join(" ")}
              >
                {/* Chevron */}
                <span
                  className={[
                    "inline-flex items-center justify-center",
                    "w-6 h-6 md:w-7 md:h-7 rounded-full",
                    isOpen ? "text-primary" : "text-[#8F9094]",
                    "transition-transform duration-300",
                    isOpen ? "-rotate-180" : "rotate-0",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                </span>

                <span className="select-none">{item.q}</span>
              </button>

              {/* Answer panel – soft rounded lavender bg like the design */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4">
                      <div className="rounded-2xl md:rounded-3xl px-6 md:px-10 py-6 md:py-7 bg-[#F6F3FF]">
                        <p className="text-[15px] md:text-[16px] leading-7 font-secondary text-[#373737] max-w-3xl">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
