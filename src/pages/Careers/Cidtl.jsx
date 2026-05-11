import React, { useEffect, useState } from "react";

import { MdDoubleArrow } from "react-icons/md";

import { ChevronDown, ChevronUp } from "lucide-react";
import InstitutionForm from "./InstitutionForm";
import IndividualForm from "./IndividualForm";

import StaticBanner from "../../../components/StaticBanner";


import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import APLVAlue5 from "../others/AplValue5";



export const testimonialData = {
  Students: [
        {
      name: "Tanya Gupta",
      role: " An Ex APL student",
      message:
        "The school has made a big difference in my learning experience from my previous school, an ICSE board. The teachers helped me in every possible way to achieve good grades. The PLPs were hectic but I realized, along with many others, that PLPs actually developed my research skills and m thinking capacity. APL has truly helped me become more aware of the outside world. I would never have achieved my IGCSE grades if it weren’t for the teachers at APL.",
      image: "/assets/user.png",
    },
    {
      name: "Aarav Sharma",
      role: "Grade 10 Student",
      message:
        "APL gives me the freedom to explore my interests and learn in creative ways. Every day is exciting here!",
      image: "/assets/user.png",
    },
    {
      name: "Priya Ramesh",
      role: "Grade 12 Student",
      message:
        "The teachers encourage us to think differently and participate in many activities beyond academics.",
      image: "/assets/user.png",
    },
  ],

  Alumni: [
      {
       name: "Sakshi",
       role: "Batch 2014, Alumni",
       message:
         "I would recommend prospective students to undertake the CIE curriculum for the availability and the freedom of choice it offers; no other academic stream offers that absolute liberty to make your own unique set of subjects. And in addition to that, CIE trains all its students for an international standard of research and writing – which ended up being the biggest advantage in my case. It provides a customised scholastic experience wherein every student gets the chance to delve deep into the courses of their choice as well as a wide and in-depth study into each course.",
       image: "/assets/user.png",
     },
       {
       name: "Brihadeesh N",
       role: "Batch 2016, NIOS Alumni",
       message:
         "I thank all my teachers who have taught me from Grade 7 to Grade 12. Special thanks to Sangeetha ma’am, Varalakshmi ma’am and the Sports teachers for helping me to improve my fitness. A very special thanks to Susan ma’am for helping me to reduce my examination stress which made me a better person.  It has also heIped me to reduce my health problems too. I would like to say thanks because none of them was able to give me a perfect solution .Teachers of APL have made me such a good student and also encouraged me a lot right from the time I joined the school. I thank the school management for giving me the certificate every year beginning which was like encouragement for me. APL has removed my fear of speaking to teachers. None of the schools will have such friendly teachers. APL has 97% of friendly teachers. I enjoyed being part of excursion to Ooty in Grade 7, Night Camps in Grade 9 and 10, Day Camp in Grade 11. I also enjoyed being part of Synergy in 2012, 2014 and 2015. This was the best school I have ever studied and others students stopped bullying me. I would not have come so far if I hadn’t joined APL. Thanks to my parents for that. I will be in touch with my teachers of APL. I will come to school and meet my teachers whenever I find time.",
       image: "/assets/user.png",
     },
      {
       name: "Dilan Thakrar",
       role: "Batch 2015, Alumni",
       message:
         "I think of the CIE A-levels as the benchmark in high-school education standards as it offers a very application-oriented course and is also very well reputed almost all over the world. I would recommend it as an option to anyone who is looking to build a strong base before pursuing their University education/careers.The subjects offered by CIE were taught in a conceptually strong manner, and this allowed me to realise the importance of going deep into the concepts of any subject in order to fully understand it. The syllabuses offered also enabled a strong understanding of the core of the subjects themselves. This has helped me, and is currently helping me as well, as it has made it easier to learn and grasp unknown concepts being taught at University level.",
       image: "/assets/user.png",
     },
      {
       name: "Sasha",
       role: "Batch 2014, Alumni",
       message:
         "I like the teaching-learning methodology at APL. The PLPs are very helpful in preparing for our semester exams and it gives us an idea of how well we have understood the lesson. Besides the academic classes and tests, we also learn a lot during the assemblies.",
       image: "/assets/user.png",
     },
      {
       name: "Shivaadith",
       role: " Alumni",
       message:
         "The school has made a big difference in my learning experience from my previous school, an ICSE board. The teachers helped me in every possible way to achieve good grades. The PLPs were hectic but I realized, along with many others, that PLPs actually developed my research skills and m thinking capacity. APL has truly helped me become more aware of the outside world. I would never have achieved my IGCSE grades if it weren’t for the teachers at APL.",
       image: "/assets/user.png",
     },
     {
       name: "Vadhanaa Venkatakrishnan",
       role: "Batch 2023, Cambridge",
       message:
         "I have become the best version of myself. I was highly motivated and inspired to achieve my best both inside and outside the classroom. I learnt to become extremely adaptive and proactive about my work.",
       image: "/assets/user.png",
     },
     {
       name: "Sanjay Subramanian",
       role: "Batch 2021, Cambridge",
       message:
         "APL provided a personalised learning plan to cater to my academic interests. I was able to adapt myself to other academic conditions. It is a great school with a nice infrastructure.",
       image: "/assets/user.png",
     },
     {
       name: "Neha Venugopal",
       role: "Batch 2021, Cambridge",
       message:
         "APL has given the right amount of freedom to think free and learn life to the fullest. This has helped me in socializing.",
       image: "/assets/user.png",
     },
     {
       name: "Aditi",
       role: "Batch 2020, Cambridge",
       message:
         "It was a very positive exposure for me. I learnt a lot from the school including how to interact with people. The school and my batch of friends really helped me get out of my introvert zone. I had a really good time in APL.",
       image: "/assets/user.png",
     },
     {
       name: "Shridula Gopinath",
       role: "Batch 2020, Cambridge",
       message:
         "The support from teachers was extremely fruitful, as was the way in which the AS and A level curriculum was designed to foster critical thinking and analysis skills. This helped me immensely in university when it comes to class discussions and assignments.",
       image: "/assets/user.png",
     },
     {
       name: "Aaron Melito",
       role: "Batch 2020, Cambridge",
       message:
         "I was exposed to lots of new experiences and lifestyles I never knew existed. I’m more open-minded about things now. I have experienced more in the last two years than I ever did in the 12 years of my previous school.",
       image: "/assets/user.png",
     },
     {
       name: "Austin",
       role: "Batch 2020, Cambridge",
       message:
         "APL more than anything, was a very good environment for students—academics were important, of course, but there was much more going on. The management and staff were always very accommodating to new ideas and suggestions. When students brought up issues, they were addressed directly by the management. I believe APL is a good place to grow past just being students. As SPL, I gained leadership, speaking, planning and organising skills.",
       image: "/assets/user.png",
     },
     {
       name: "A Arjun",
       role: "Batch 2020, Cambridge",
       message:
         "APL provided me the platform that has since proven to be a springboard that launched me towards a better future. This has given me the opportunity to think globally and aim higher.",
       image: "/assets/user.png",
     },
     {
       name: "Sumaiyya Anas",
       role: "Batch 2019, Cambridge",
       message:
         "This particular institution aided me in refining my oratory and leadership skills. It provided me with opportunities to participate and win various events, and initiate a chapter of ‘Girl Up—an APL student initiative’ at my university. Being a part of APL has definitely been a major stepping stone to who I’ve become.",
       image: "/assets/user.png",
     },
     {
       name: "Gandhimathi Viswanathan",
       role: "Batch 2019, Cambridge",
       message:
         "The independence and experience I got here was more than what I could have hoped for in my old school. I learned to accept things and people for what they are and not change them to my convenience.",
       image: "/assets/user.png",
     },
     {
       name: "Maryam Mohamed Anas",
       role: "Batch 2019, Cambridge",
       message:
         "APL has made me the person I am today. I was once a shy girl who would not talk to anyone but now I can comfortably have conversation with anyone. The open and welcoming atmosphere made me grow so much. It broadened my mind and thought process. It has helped me interact more easily with people, allowing me to forge contacts and make friends. I just wish I had studied for more than 2 years here. It was such a wonderful experience.",
       image: "/assets/user.png",
     },
     {
       name: "Ishani Mehta",
       role: "Batch 2017, Cambridge",
       message:
         "Two years in APL School has been the most interesting and impactful time of my life so far. The journey has been enriching and extremely empowering. APL provided one-on-one classes to help me complete portions on time, which no other school would do. The Synergy mega event helped me realize my passion for Business & Food and Nutrition. The assistance and availability of all faculty members made the school feel like home and helped me focus more on academics.",
       image: "/assets/user.png",
     },
     {
       name: "Kenneth Grace Mascarenhas D",
       role: "Batch 2017, Cambridge",
       message:
         "My transition from state board to the Cambridge curriculum was smooth thanks to APL's support. The school encouraged learning at one’s own pace, constructive feedback, and collaboration between learners and faculty. The principal and teachers were supportive and energetic throughout. I credit my success in NEET and admission to ESIC to APL’s methods.",
       image: "/assets/user.png",
     },
     {
       name: "Utkarsh Jain",
       role: "Batch 2017, Cambridge",
       message:
         "APL has helped me transform my personality to a better one… special thanks to Sarija ma'am.",
       image: "/assets/user.png",
     },
   ],

  Staff: [
     {
       name: " Zulaikha",
       role: " French teacher",
       message:
         "The true measure of any professional development program is its impact on practice. Hear directly from fellow educators about their experience with the CIDTL program and how it has shaped their teaching journey. I have become more conscious and intentional about what happens in my lessons.",
       image: "/assets/user.png",
     },
       {
       name: "",
       role: "Module 1 candidate",
       message:
         "A renewed sense of purpose as an educator ",
       image: "/assets/user.png",
     },
       {
       name: "Srividhya",
       role: "Module 3 Distinction holder",
       message:
         "I am seeing its positive impact in my classrooms… this has boosted my confidence",
       image: "/assets/user.png",
     },
       {
       name: "Sowmya",
       role: "Module 3",
       message:
         "This spiral of learning has enlightened me as a reflective practitioner and a lifelong learner.",
       image: "/assets/user.png",
     },
       {
       name: "Nandini",
       role: "Module 3",
       message:
         "A lot of learning and unlearning has helped me transform into a reflective and learner-centric teacher.",
       image: "/assets/user.png",
     },
        {
       name: "",
       role: "Module 2 candidate",
       message:
         "I highly recommend the CIDTL program for teachers looking to enhance their skills and improve teaching quality and outcomes.",
       image: "/assets/user.png",
     },
   ],

 Parents: [
    {
      name: "Samiullah Khan & Sarah Fathima",
      role: "Parents of Taha Fathima Khan",
      message:[
        "09/09/2009: The day our daughter, Taha Fathima Khan, got enrolled into APL Global School. Shifting schools for a 13 year old is not always a welcome thing. Still, it was the short travel distance, the accessibility, which initially prompted the idea.",
        "We still remember the day as if it was yesterday. When we first visited the school, the warm and friendly atmosphere that prevailed overwhelmed us. We were shown around by the administrative in charge. As we toured around the corridors at different levels, the perfect balance of formal and voluntary learning was explicit from the amiable demeanour of the students, who walked around the bustling corridors. Every student appeared to be enjoying immensely. Here we noticed the enthusiasm and willingness of the youngsters to learn by doing rather than just studying all that is taught. The artistically designed and well-­‐equipped classrooms portrayed a perfect description, befitting the school’s name, “Academy for Personalized Learning”.",
        "Apart from uninterrupted individual attention that is inevitably given to each student, it’s important to note that not just the academic performance but it’s also the social, cultural, behavioural and mental grooming that takes place in an extremely cordial environment. The school hosts a wide range of co-­‐curricular activities that enhance and accentuate the potential of the students. A broad variety of events, that are always lined up under the banner of the various cultural clubs organised by the school, determine the ceaseless endeavor to boost the intellectual and emotional aspect of the students’ personality.",
        "The most remarkable aspect is the student -­‐ teacher rapport that goes a long way, resulting in the exceptional performance, be it examinations or inter -­‐ school activities. This two-­‐way open interaction has been an amazing and motivating factor for a comprehensive growth. The school has always been very supportive in allowing our daughter to cultivate, nourish and exhibit her talent. A special mention to the exemplary support rendered whilst preparing for CIE exams is pertinent, wherein extra coaching is continuously offered and performance assessed. It’s indeed a world-­‐class learning that is imparted without much emphasis on quantity; it’s the quality of students that emerge from this institution.",
        "Our daughter has thoroughly enjoyed her four years of schooling, where, she entered as a vibrant adolescent, and passed out as a young lady, with the perfect amalgamation of intellect and maturity. Being elected, as the Assistant School Pupil Leader, and, later on, as School Pupil Leader, instilled in her a strong sense of leadership. Moreover, the career counselling offered by the school is of great help in allowing students to recognise their field of interest and eventually pursue courses of their choice. We would definitely recommend this school for its level of expertise in colossal training. For our daughter, the overall experience has been remarkable, with achieving three straight A*s, in biology, physics and chemistry, at her A level examinations. This proves beyond doubt how greatly the school has been pivotal in enhancing her dedication and commitment.",
        "The uniqueness of the school is in its congruous approach, to both academic, and extra-­‐ curricular training. We also take this opportunity to thank the school: its management, teaching and non-­‐ teaching staff for being instrumental in our daughter’s achievements and accomplishments, by extending their valuable contributions in respective periphery. Being parents of an APL alum has been an extremely interesting and memorable experience."
      ],
      image: "/assets/user.png",
    },
     {
      name: "Venkat",
      role: "Parent",
      message:[
        "The day we chose and entered APL Global should have been a blessed day for our kids. We have submitted the future of our four kids viz., Nikarika, Sai Vinika, Sai Praveen and Nishika with APL Global. I could feel from the day one that APL GLOBAL is the eden garden of learning at three levels viz., gaining information, acquiring knowledge and attaining wisdom.  Under the lovely caring guidance of the head of the institution, respected madame Ms. ‘Gita Jagannathan’, our children learnt a lot about not only books but also the realities of the world.  With a lot of educational tours, our children have experienced lot of earthly experiences at farm houses and lot of technical exposure at hi-tech offices. I should specially mention about the caring guidance and helping hand rendered to Sai Vinika (who earlier left Singapore after completing IX grade and joined APL in June 2011 to complete X grade exams in Oct-November 2011). With only 3 months of preparing time available for her, Madame Gita Jagannathan, Head of the institution along with Madame Kiran Merchant (The Principal) exquisitely planned personalised programme for preparing her for the X grade exams. I should also mention about the dedication of the faculty Ms. Nilanthi (Physics), Ms.Jayalakhmi (Chemistry), Ms.Sarija and Ms.Radhika (Biology) and Ms.Viswabharathi (Mathematics) (not to mention about lab technicians and other staff members), all of them took so much care for her future, conducting  coaching classes even after school hours and conducting laboratory practices even during holidays.  Question papers were prepared meticulously for the Mock exams results which were thoroughly scrutinized to reduce her mistakes and to prepare her for the finals.One rarely comes across such selfless dedication, sacrificing their routines for the betterment of the child under their care. They all toiled tirelessly and literally removed her exam pressure.  It was so wonderful and heart filling to see the entire workforce and amenities of the institution were deployed for the welfare of this child’s success. Under their able guidance and constant care, Sai Vinika finished her X grade with flying colours scoring many ‘A’ grades. I surely feel that the pages of her successful future will be engraved with golden letters of affection and loving care meted out by these good samaritans who literally shared her burden. The name APL (Academy for Personalised Learning) is well chosen and most suitable for this school and the motto “Realizing Potential” is well served for the future of not only one Sai Vinika but for every child under their care. Could I reverse the Time Machine rewinding life cycle, I would have readily become a student of the loving and caring school APL GLOBAL to live the student life filled with fragrance of caring education. I pray to the divine almighty to keep the institution and its lovely people in good shape for many years to come for preparing young folks for their best future."
      ],
      image: "/assets/user.png",
    },
       {
      name: "Manohar Krishnan",
      role: "Parent of Tapaz",
      message:
        "APL GLOBAL has been the ideal school for my son Tapaz. Tapaz joined the school for his AS and A levels. My son has finished his A level and is now in the process of applying for his undergraduate studies in the US. I have found the teachers to be very helpful and student friendly. The Principal is easily approachable. The facilities in the school are top class. In the last three years that my son Tapaz had been there, I have seen the school grow in the right direction. I wish APL GLOBAL SCHOOL, its Principal and all the Teachers the very best in their future endeavors.",
      image: "/assets/user.png",
    },
      {
      name: "Vijaya & Mohan",
      role: "Parents of Niranjan",
      message:
        "We came to know about APL GLOBAL while having dinner with the promoters of the school, Gita and Jaggannathan who happen to be our family friends. Our son Niranjan had just finished his 10th exams through NIOS and wanted to keenly pursue competitive tennis along with his academics. APL Global was just about to kick-off and the casual conversation with the promoters led to a serious discussion with Dr Vasanthi Vasudev, the Academic Director who encouraged us and Niranjan in a manner which convinced us to enroll Niranjan in this school immediately without second thoughts. Niranjan can proudly say that he was one of the first students to enroll in APL when the strength was just 13. Niranjan is a national ranked tennis player. In order to continue his tennis seriously he had to necessarily participate in all the national level ranked tournaments conducted in various parts of the country throughout the year. For doing this he needed a school which could offer him the much required flexibility so as to enable him to take part in the tournaments as well as make up his academic back log whenever he was in town. This required a lot of planning between the student, parents and the school . The Flexi Stream offered by APL Global was just the perfect blend of what we expected. The personalized learning programme was tailored to meet Niranjan’s specific needs. The classes would always be taken in small groups or one-on-one classes. The school does not focus only on scholastic performance but also on brain based skills and attitudinal strengths. Though the Cambridge syllabus is more challenging than the other Indian syllabi, it is pertinent to mention that this definitely has a more holistic approach and grooms the students to take up challenges with confidence. The best part of the experience were the teaching staff who were well trained and excellent teachers who explained material clearly, prepared for classes and knew what they wished to accomplish. Niranjan’s teachers were very cooperative with him and would never hesitate to help him out on his missed work, be it class or test re-scheduling. The teachers were easily accessible by Niranjan and us. We would like to make a special mention about Kiran Merchant who has taken personal pains to coordinate Niranjan’s schedules in spite of her busy work. The school’s infrastructure is excellent with the state of art facilities creating a great atmosphere unlike the other regular ones. Niranjan has thoroughly enjoyed his stint in APL. He has not only been challenged academically, but has learnt life skills that he will carry with him the rest of his life. The school has been an incredible experience to our family.",
      image: "/assets/user.png",
    },
      {
      name: "Dr. Cecil Daniel",
      role: "Parent of Cynthia",
      message:
        "“We are very fortunate that our child Cynthia is part of APL Global school in Grade 10. Cynthia has special needs, and we have found that APL Global provides her with a good mix of academics, and social development opportunity within a flexible framework. Based on expert evaluation and recommendation, the school suggested the NIOS (National Institute of Open School) curriculum for her, and also trained teachers to effectively teach this curriculum. NIOS provides interesting and life skills oriented subjects like Home Science, Painting, Word Processing, etc. and have a lot of flexibility in scheduling exams. We are very happy to see Cynthia doing well with this curriculum, and also enjoying school. The school provides an environment which enhances social interaction, and this has proved to be very helpful. Teachers are also genuinely interested in the students and the small classes help a lot. Overall we are fortunate to find such a good school, and strongly recommend this school for children with special needs”.",
      image: "/assets/user.png",
    },
    {
      name: "Aditya Sinha",
      role: "Parent of Mrinalini",
      message:
        "I had never heard of the APL Global School until my daughter, who had done well in her 10th boards at a well-known Chennai school, mentioned that she would like to finish her secondary education here. We went and had a look at the campus and were immediately pleased with its design and layout, which were not only aesthetically pleasing but also seemed conducive for a new kind of learning, something that was different from the usual factories that much of our education system seems to have become. We found the director, Vasanthi Vasudev , filled with fresh ideas and a holistic approach to learning. I did not even have to think twice about the curriculum details; just the attitude seemed right for personalized learning. Indeed, during my daughter’s time here we have found the school teachers incredibly intense and committed about teaching the subjects, ensuring that the student is well prepared, and there is a level of monitoring that would be unthinkable in a larger school. The one thing that always frightened me about my children was that they might get lost in the school they attended, and that it would prevent them from fulfilling their potential. At APL Global, I know such fears are unfounded, and I feel that the school has, through its ultra-personalized approach, helped my daughter become a better student and a better person.",
      image: "/assets/user.png",
    },
     {
      name: "Mrs Latha",
      role: "Parent of Akshara Ramabadran",
      message:
        "I had never heard of the APL Global School until my daughter, who had done well in her 10th boards at a well-known Chennai school, mentioned that she would like to finish her secondary education here. We went and had a look at the campus and were immediately pleased with its design and layout, which were not only aesthetically pleasing but also seemed conducive for a new kind of learning, something that was different from the usual factories that much of our education system seems to have become. We found the director, Vasanthi Vasudev , filled with fresh ideas and a holistic approach to learning. I did not even have to think twice about the curriculum details; just the attitude seemed right for personalized learning. Indeed, during my daughter’s time here we have found the school teachers incredibly intense and committed about teaching the subjects, ensuring that the student is well prepared, and there is a level of monitoring that would be unthinkable in a larger school. The one thing that always frightened me about my children was that they might get lost in the school they attended, and that it would prevent them from fulfilling their potential. At APL Global, I know such fears are unfounded, and I feel that the school has, through its ultra-personalized approach, helped my daughter become a better student and a better person.",
      image: "/assets/user.png",
    },
      {
      name: "Student",
      role: "Parents of Nomita Saldanha",
      message:
        "In November 2008, my husband and I were in a frantic search for a good school in Chennai for our 14 year old daughter. No,we were not being relocated or transferred. In fact our daughter, a bright and creative girl, was studying in one of the best schools in Chennai, but was intensely unhappy with the Indian Education system and its dozen compulsory subjects and constant round of tests and exams. There were no suitable options available.A chance meeting with a close friend turned out to be a Blessing from Above. She had heard about a new school – APL Global which offered the International Cambridge Curriculum with Personalized Learning as their Motto. We went there and liked what we saw — Modern school building, bright and cheerful colours that exuded warmth, well ventilated classrooms, State of the Art Labs, creative and dedicated teachers and most of all a Curriculum and Examination Schedule that seemed tailor-made for our daughter.She has been a student at APL for 2 years now. She chose interesting subjects from a wide range that the school offers, did away with subjects that did not interest her, had supportive and caring teachers guiding her and passed her IGCSE with flying colours. She is currently doing her A levels and has had the opportunity to participate in International Competitions and National conferences and has blossomed into a confident young lady.",
      image: "/assets/user.png",
    },
     {
      name: "Ramesh Kumar",
      role: "Parent of Grade 5 Student",
      message:
        "APL respects each child’s uniqueness and provides a safe, inclusive environment for learning.",
      image: "/assets/user.png",
    },
  ],
};
const slides = [{ desktop: "/banners/apl-teacher-mentor.jpg", mobile: "/banners/Teacher-mob.jpg" }];

const curriculumData = [
  {
    title: "CIDTL Request form (individual)",
    key: "individual",
    render: () => <IndividualForm />,
  },
  {
    title: "Training Requisition Form For Institution",
    key: "institution",
    render: () => <InstitutionForm />,
  },
];

function Cidtl() {
     const [activeTab, setActiveTab] = useState("Students");
      const tabs = ["Students", "Alumni", "Staff", "Parents"];
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
      {/* Content Sections */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full py-10 px-4 sm:px-6 md:px-12"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="max-w-6xl mx-auto space-y-10 text-sm sm:text-base">
          <div className="space-y-4">
            <p className="text-black font-bold font-secondary leading-relaxed">
              Cambridge International Diploma in Teaching and Learning
            </p>
            <p className="text-black font-secondary leading-relaxed">
              APL Global School is an accredited center for Cambridge
              International Diploma in Teaching and Learning. We have been
              successfully providing this professional development qualification
              since 2010.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              The diploma program consists of 3 modules. As mentioned in the syllabus for 2025, Module 1 can be taken on its own as a Certificate. Candidates can then progress to Modules 2 and 3 to complete the Diploma. Candidates can also progress directly to the Diploma programme on completion of two years of teaching experience and a qualification in education. Interested candidates are advised to complete the ‘Is CIDTL right for you’ form below to hear from us.

            </p>
            <div className="flex justify-center md:justify-center">
              <img
                src={"/assets/apl-diploma.png"}
                alt="APL Deplomo IMg"
                className="max-w-lg  object-cover rounded-lg mb-4"
              />
            </div>

            <p className="text-black font-secondary leading-relaxed">
              This programme is planned and supervised by a certified Programme Leader. The course is available for both in-house teachers and external faculty members. Registration is open throughout the year. Individual mentoring and personalised workshops are conducted to ensure that candidates emerge successfully as reflective practitioners and inspiring world class educators. 

            </p>
            <p className="text-black font-secondary leading-relaxed">
              <span className="font-bold">
                Eligibility: As stipulated in the syllabus for 2020, 2021 and
                2022
              </span>
            </p>
            <p className="text-black font-secondary leading-relaxed">
              Candidates need to :
            </p>
            <div className="text-black font-secondary leading-relaxed space-y-2">
              <div className="flex items-start gap-3">
                <MdDoubleArrow className="w-4 h-4 text-primary mt-1" />
                <span>
                  Be a full or part-time teacher employed in an educational
                  institution such as a school, college, university, or adult
                  training centre
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MdDoubleArrow className="w-4 h-4 text-secondary mt-1" />
                <span>
                  Teach in their current school over a full academic year, for a
                  minimum of 24 weeks and a minimum of six hours per week
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MdDoubleArrow className="w-4 h-4 text-primary mt-1" />
                <span>
                  Have the regular support of a mentor who understands the
                  essential principles that underpin this qualification, and can
                  provide helpful advice and observations
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MdDoubleArrow className="w-4 h-4 text-secondary mt-1" />
                <span>Teach a group with a minimum of six learners</span>
              </div>

              <div className="flex items-start gap-3">
                <MdDoubleArrow className="w-4 h-4 text-primary mt-1" />
                <span>
                  Be responsible for planning, teaching, and formatively
                  assessing groups of learners.
                </span>
              </div>
            </div>

            <p className="text-black font-secondary leading-relaxed">
              <span className="font-bold">Language requirements:</span> To take part in the programme candidates are required to have sufficient competence in English with a recommended minimum requirement of 5.5 on the International English Language Testing System(IELTS). 
            </p>
            <p className="text-black font-secondary leading-relaxed">
              Recommended duration: 4 months per module
            </p>

            <p className="text-black font-secondary leading-relaxed">
              Support: The candidate will be supported by at least 50 hours of guided sessions for each module. These will be arranged during working days and over Saturdays. This format is kept flexible and asynchronous and non-traditional, with a combination of online and face-to-face sessions based on prevailing factors. Candidates will be provided with adequate support and resource materials. 

            </p>
            <p className="text-black font-secondary leading-relaxed">
              For further details of the course, you may access{" "}
              <a
                className="text-primary font-bold text-lg"
                href="https://www.cambridgeinternational.org/support-and-training-for-schools/professional-development/professional-development-qualifications/discover-our-syllabuses/"
              >e
                Click Here
              </a>
            </p>
             <p className="text-black font-secondary leading-relaxed">
            We are deeply committed to teacher development through the CIDTL certification, equipping educators with globally recognized pedagogical expertise. With structured mentorship and dedicated time for inquiry, teachers receive personalised guidance to reflect, innovate, and refine their practice. This supportive environment empowers them to grow with confidence and make a lasting impact on student learning.

            </p>
            <p className="text-black font-secondary leading-relaxed font-bold">
             We've made it easier for you to explore our programme.
            </p>
              <p className="text-black font-secondary leading-relaxed">
          For a fee of Rs. 10,000/-, you can register for the course and gain visitor access to some of the Unit 1 sessions. This allows you to experience the content and teaching style firsthand.

            </p>
              <p className="text-black font-secondary leading-relaxed">
          If you choose to continue the course as a regular candidate, this amount will be applied as a credit toward your tuition.


            </p>
          

            <p className="text-black font-secondary leading-relaxed">
              Email us For further information regarding fee or to register for the course please mail us at – {" "}
              <a
                className="italic font-bold text-primary"
                href="mailto:training@apl.edu.in"
              >
                training@apl.edu.in
              </a>{". "}
               Alternatively, you may complete the inquiry form to hear from us.
            </p>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <div className="p-4 sm:p-6 md:p-10 max-w-6xl mx-auto text-left space-y-6">
          {curriculumData.map((section, index) => (
            <div
              key={index}
              className="border-b-2 border-secondary overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 sm:px-6 py-2 transition text-primary font-secondary font-semibold text-lg flex justify-between items-center"
              >
                {section.title}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>

              {openIndex === index && (
                <div className="p-4 sm:p-6">{section.render()}</div>
              )}
            </div>
          ))}
        </div>
      </section>
       
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12">
            
      
            {/* ✅ Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-lg text-sm sm:text-base md:text-lg font-primary font-semibold border-2 transition-all duration-300 uppercase
                    ${
                      activeTab === tab
                        ? "bg-primary text-secondary border-primary"
                        : "text-primary border-primary hover:bg-primary hover:text-white"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
      
            {/* ✅ Testimonials Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              >
                {testimonialData[activeTab].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-xl shadow hover:shadow-lg p-5 text-center transition"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover mb-4 border-2 border-secondary"
                    />
                    <FaQuoteLeft className="text-secondary text-xl mx-auto mb-3" />
                    <p className="text-md text-gray-700 font-secondary italic mb-3">
                      "{item.message}"
                    </p>
                    <h3 className="font-primary font-bold text-primary text-lg">
                      {item.name}
                    </h3>
                    <p className="text-xl text-secondary font-secondary">{item.role}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </section>
      <APLVAlue5 />
    </>
  );
}

export default Cidtl;
