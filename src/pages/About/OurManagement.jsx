import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import StaticBanner from "../../../components/StaticBanner";
import APLVAlue2 from "../others/AplValue2";
import APLVAlue4 from "../others/AplValue4";




const slides = [{ desktop: "/banners/manage-web.jpg", mobile: "/banners/manage-mob.jpg" }];

const Management = [
  {
    name: "Gita Jagannathan",
    position: "Founder",
    Img: "/assets/Management/Founder.png",
    bio: [
      "Ms. Gita Jagannathan is the owner and founder of APL Global School, Chennai. She is a voracious reader and connoisseur of fine art, music, and humorous tales. She has a penchant for exploration and thirst to constantly evolve; attributes that reflect her growing-up years when she had to make sense of the cumulative experiences of travelling through 8 different schools, her father having been in a transferable job. APL Global School is the outcome of her search for an inclusive and nurturing space. Gifted with a thirst for the whys and hows of a person’s evolution she spent years reaching out, tutoring and mentoring students who were struggling to fit in despite being intelligent, talented, and hardworking.",
      "This drove her to learn more about giftedness, learning disabilities, and special education. She used the Cambridge International Diploma for Teachers and Trainers and a course with Harvard Wide on Differentiated Strategies to deepen her understanding of pedagogy and learning.  She has also earned a Post Graduate Certificate in Special and Inclusive Education from the University of Roehampton. Gita is a Reiki Grand Master, a hypnotherapist and a student of Yoga. This spiritual sensibility in combination with her skills in psychology and counseling alchemically contributed to the birth of APL school as a space to experience personalized learning for students, faculty members and all stakeholders.",
      "Gita has put in huge efforts and timeless exploration for the establishment and smooth functioning of the Academy for Personalized Learning or APL Global School. Founding the institute was the beginning of her journey of transforming the education system. Her unique endeavours to make a positive difference in the education sector continue to help her develop a person centered and responsive approach to education. She recognises that we are all, adults and children, work in progress and that drives her to create a learning growing environment.",
      "She believes that every human being is unique; that it is possible for each of us to realize our true potential and create an environment that is supportive. In a relatively short span of 13 years, under the tutelage of Gita, APL has gained a reputation for providing a caring educational system that develops every facet of a child’s personality. Her aim is to have every student become a happy and healthy individual who confidently explores the limits of their own potential  and continue to learn and grow till their last breath.",
    ],
  },
  {
    name: "Sarija Santhosh",
    position: "Principal",
    Img: "/assets/Management/Principal.png",
    bio: [
      "“ What I learn, I explore; that I experience. I learn and learn for life. This is the driving force behind my role as an educator. Facilitating my students’ journey along with their teachers’ through wonderment, exploration, inspiration and learning is my goal. I aim to instil confidence in students and make them believe they too can be inventors, discoverers, scientists, a good Earth citizen- A fantastic human being. My day is made when I see the glee and the gleam on my students face when they have had learning which was splendid, awe-inspiring.”",
      "Sarija Santhosh holds a Bio-Medical Engineering (Hons) degree from the Bombay University. She has had a successful career in a string of reputed corporate houses including Hewlett Packard, Network Ltd, Interkadio Pvt. Ltd and Systems Bio-medical Pvt. Ltd in which she has held and successfully performed challenging sales and service responsibilities. She moved into the educational field to share her knowledge, combined with her passion for being with children.",
      "Sarija has completed her Cambridge International Diploma for Teachers and Trainers with a distinction in module 1 and A-level (Biology) online training with Cambridge University.",
      "In addition to being a faculty in the Department of Biology, she was also the Biology co-coordinator, where she mentored teachers in making lesson plans and assessments to help them give wings to student’s imagination and experience science with all their senses. In the role of an Examination officer, Sarija brought in her years of managerial experience and skill and took the entire team of teachers to conduct the examinations seamlessly and flawlessly. In her stint as Head of Middle and Senior School, her vision to develop a rigorous learning environment, mentoring and leading a team of teachers for the holistic development of the students, saw its fruition at various levels. In her role as Head of Junior School, she continued to deliver the vision that she developed in her earlier role. Her efforts towards an inclusive learning environment and empowering students through restorative justice are close to her heart.",
      "Having gained rich experience at every level of the school system, she assumed the role of Principal with confidence and vision of APL Global School in 2020-21. Sarija successfully navigated the school through the unprecedented challenges of 2020, working hand-in-hand with all stakeholders. Her experience and expertise has served as a lynchpin in embracing change while engaging students and teachers alike with the same vigour and energy. In keeping with the ever-evolving digital ecosystem, she strives to strike a balance in the use of technology to create effective and meaningful learning experiences. With great elan, she continues to steer the school’s affairs while steadfastly maintaining its vision and ethos, ensuring that each student benefits from personalized learning and is empowered to achieve their true potential.",
      "Sarija has multifaceted talents and interests that range from being a nature lover to Indian classical dance & music. She also likes reading technical updates on medical advances and has a keen interest in various art forms and mediums.",
    ],
  },
  {
    name: "Gomathi Prabhakar",
    position: "Head Senior, Teacher Mentor Centre",
    Img: "/assets/Management/Head_Teacher.png",
    bio: [
      "Gomathi Prabhakar heads the Teacher Mentor Center at APL Global School, where she plays a pivotal role in mentoring and teacher training. She believes that the well-being of a teacher plays a crucial part in building a safe and nurturing environment for their learners.",
      "Gomathi has done her masters in History from the Delhi University and holds the Cambridge International Diploma for Teachers and Trainers. She has also acquired the IB certificate in Holistic Teaching and Training and trained in Mindfulness Fundamentals.",
      "She has been an integral part of APL Global School since its inception in 2008 and has witnessed the translation of the school’s vision and values into meaningful action. Her extensive experience in various roles; as a faculty member, subject coordinator, and head of senior school has helped her contribute to the institution’s mission and its everyday practice. Her ability to listen in a non-judgmental manner allows her to build trust and rapport with teachers, enabling them to explore their challenges and aspirations with confidence.",
      "In her role, Gomathi provides a robust support through the Teacher Mentor Center by offering a range of professional development opportunities or training programs tailored to the diverse needs of the teaching staff that are necessary to constantly enhance their practice.",
    ],
  },
  {
    name: "Ms Gayathri Jayaraman",
    position: "Head of School, Senior ",
    Img: "/assets/Management/ms.png",
    bio: [
      "‘Sapere Aude’— Latin for 'dare to know' — is the principle that has quietly guided Gayathri through nearly a decade and a half in education, and continues to shape the way she leads today.",
      "Long before she stepped into a classroom of her own, Gayathri was working in education counselling, walking alongside students as they navigated the hopes, nerves, and big decisions of securing a place at universities in the UK and the US. That early experience left her with a lasting empathy for young people at moments of change, a quality that has stayed with her ever since. Gayathri holds a Master's degree in Broadcast Journalism (UK), a Bachelor's degree in English Literature, a B.Ed in English, and is a certified CIDTL (Cambridge International Diploma in Teaching and Learning) holder. Her dedication to her students and her craft was recognised early on, when she received the Best Teacher Award from the Times of India as part of its '30 under 30' initiative.",
      "Gayathri's journey at APL Global School began in 2019, when she joined as an English teacher and mentor. She went on to take on the role of English Coordinator for the Lower Secondary school and was later appointed and accredited as Programme Leader for CIDTL, where she has loved guiding fellow educators through Cambridge's professional development qualifications.",
      "As Head of Senior School, Gayathri leads with three principles close to her heart: creating an environment where every student feels seen, represented, and valued; nurturing a strong sense of school spirit and community; and weaving critical thinking and life skills into everyday learning. For her, a truly future-ready student isn't just exam-ready, but a confident, curious young person equipped to meet a changing world head-on.",
      "Outside of school, Gayathri loves keeping up with geopolitics and losing herself in books and movies on Indian and world history, alongside a genuine love of travel that keeps widening her own view of the world. It's this same spirit of curiosity — the same dare to know — that she hopes to gently instil in every student who walks through the doors of APL's Senior School.",
    ],
  },
  {
    name: "P.M.Hajira Beevi",
    position: "Head Senior, NIOS ",
    Img: "/assets/Management/hajira.jpeg",
    bio: [
      "Driven by the belief that every learner deserves the opportunity to discover their strengths and realise their full potential, Hajira is committed to equipping students with the confidence, skills, and values needed to lead successful and fulfilling lives.",
      "Hajira is an experienced and an inclusive education leader with over 15 years of expertise in supporting diverse learners. She holds a Bachelor's degree in Pharmacy, a B.Ed. in Special Education (Intellectual Disabilities), an MBA in Human Resource Management, and is an RCI-certified Special Educator, CTET-qualified teacher, and certified Remedial Educator.",
      "As a Pearson Clinical India authorised end user of assessment tools, Hajira has assessed thousands of students, developed Individualised Education Plans (IEPs), and designed comprehensive remediation, behaviour modification, and intervention programmes. Her experience spans CBSE, Tamil Nadu State Board, Cambridge International, and NIOS, where she has championed inclusive education, facilitated examination access arrangements, and supported neurodivergent learners.",
      "A passionate teacher trainer and parent educator, Hajira advocates student-centred practices that foster confidence, independence, and meaningful participation. As the Head of NIOS, she is committed to creating flexible, future-ready learning pathways that prepare students for higher education, successful careers, and responsible citizenship. Through empowering teachers and partnering with parents, she strives to nurture confident, compassionate, and responsible young adults who contribute positively to society.",
    ],
  },
  {
    name: "Mahalakshmi Sankaran",
    position: "Head Senior, Lower Secondary",
    Img: "/assets/Management/Head_Lower.png",
    bio: [
      "‘The more I read and understand, the more certain I am that I know very little. I am still learning and better so with my students. My job here is not to help prepare my students for something but to support students prepare themselves for any challenge ahead. APL is a special place for me as the classrooms are great learning spaces for both the teacher and the student; the staff — collaborative, and the whole environment — inclusive’ ",
      "A life-long learner, Mahalakshmi Sankaran has over seven years of experience in the profession of teaching. She joined APL Global School in 2014 as a teacher for Math, Science, and Computer Science for Primary. Taking on the role of Math Coordinator for Primary and later for Lower-Secondary School were the stepping stones to her current role as the Head of Lower-Secondary School.",
      "Before joining APL Global, Mahalakshmi worked in the IT industry with companies like IBM, Tata Consultancy Services in India and Australia, and Philips in Singapore. As Alvin Toffler said, ‘The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn and relearn’. An Electrical and electronics engineer by profession, Mahalakshmi is now working on her Cambridge International Diploma in Teaching and Learning.",
      "Having spent the last few years in the education sector, she is particularly interested in new-age teaching practices and pedagogies that will help teachers recognize students’ varied learning styles and practice differentiation in the classrooms. Differentiation, she believes, will be the way forward to create compassionate, humane contributors who are critical thinkers and skilled communicators. Having essayed the role of a student-mentor for several years now, Mahalakshmi firmly believes that a teacher with a passion for teaching, a hunger to learn, and the determination to nurture the young minds is the best facilitator a student can have in their school life. Working alongside the Training department, to equip teachers with these essential skills for this challenging and relevant curriculum, has been her passion.",
      "The most valuable resources we have at school are our people – parents, teachers, students, staff – and we all have each other. She will strive to collaborate with all of them for their mutual growth. For a school as diverse as APL, she believes in creating inclusive environments where every student will have strengths to build upon, interests to share, and experiences to honour.",
    ],
  },
  {
    name: "Jolly Francis ",
    position: "Head Senior, Primary ",
    Img: "/assets/Management/Head_Primary.png",
    bio: [
      "Teaching children to count is fine, but teaching them what counts is best— This is Jolly’s mantra. A Gold medalist in post-graduate Engineering with 10-years of teaching experience, Jolly Francis’ career started as a lecturer in an Engineering college. After a stint of 3 years of developing and nurturing technical minds, she was drawn into the world of tiny tots ",
      "An enthusiastic, dedicated and creative individual, Jolly found her true calling in the world of young children. At APL, she began as a math teacher for Primary grades. Her classroom success stories and pleasing personality propelled her towards a leadership role, thus taking over as the coordinator for Math at the Primary level.",
      "As a coordinator, Jolly guided her colleagues to improve teaching strategies in Math. As a team player and go-getter, she established professional relationships with parents, the administration, and other staff members ensuring the seamless functioning of the Primary Mathematics Department.",
      "Agile and active, Jolly shows a keen interest in sports and dance. As a swift sprinter, she has won several championships and participated in state-level events. Apart from these activities, she channelizes her creativity by engaging in design art.",
      "Jolly has also been a part of national and international conferences. Her paper titled ‘Kernel Weighted FCM base MR Image segmentation’ was presented at the Institute of Electrical and Electronics Engineers Association (IEEE) conference and was published in the IEEE digital library.",
      "As the Head of Primary school, Jolly aspires to create an environment to nourish and nurture young minds and empower them with the ability to realize their potential,  guided by the principles and philosophy of APL. She vows to continue to uphold the professional atmosphere amongst teachers, building on collaboration and investing in new practices.",
    ],
  },
  {
    name: "Cimpu Susana Thomas ",
    position: "Head Senior, Kindergarten",
    Img: "/assets/Management/Head_Kindergarten.png",
    bio: [
      "John Steinbeck “Teaching is the greatest of the arts since the medium is the human mind and spirit”",
      "Cimpu Susana Thomas leads with kindness and has a passion for young learners. She stands at the helm guiding little learners on the discovery and growth. She is a firm believer of inclusion, empathy, and play in early childhood education. She believes in creating a safe and nurturing environment where every child feels seen, heard, and valued. With a focus on fostering curiosity, creativity, and resilience, she strives to empower each child to reach their full potential.",
      "Cimpu Susana has a wealth of experience and expertise with over 20 years of dedication to nurturing young minds; which she now brings to her current role as Head of Kindergarten. She found her passion for children’s education when she enrolled as a teacher in 2000 in a preschool. Over the years, she progressed to teach in various institutions as a teacher and shadow mentor, until 2014, the year she joined APL Global as a homeroom mentor for Grade 1. She has served as a curriculum coordinator for Grades 1 and 2 for 6 years.",
      "She strongly believes in a culture of collaboration and mutual respect among staff, encouraging each educator to bring their unique talents and perspectives to the table. Through mentorship, support, and professional development opportunities, she inspires her team to continuously innovate and grow.",
      "She recognizes that parents are a child’s first and most influential teacher. She is committed to build strong partnerships with families, inviting them to actively participate in their child’s learning journey. Through open communication, trust, collaboration and creating a supportive network that extends beyond the classroom walls, Susana believes it opens up opportunities for a child to thrive and realise its potential.",
      "Cimpu Susana also firmly believes that mindfulness as a method can bring clarity, calmness and focus to each individual. “Passion with compassion” is her go-to motto in her professional and personal space. She is an avid reader, who also enjoys conducting workshops, training & guiding teachers to bring out their best skills. Besides teaching and mentoring, she enjoys spending time caring for her plants, drawing, dabbling in singing and watching movies.",
    ],
  },
  {
    name: "Soumya Rajan",
    position: "Head Senior, Kamalam",
    Img: "/assets/Management/Head_Kamalam.png",
    bio: [
      "“Some children don’t follow the path—they create their own. And the right guide walks beside them, not ahead.”",
      "Soumya Rajan is a dynamic and deeply committed special educator with almost 2 decades of rich experience in empowering children with diverse learning needs. Guided by the unwavering belief that every child has the ability to succeed, she brings strength, compassion, and purpose to everything she does.",
      "Soumya has worked extensively in both inclusive and specialised educational settings, designing personalised learning pathways that honour each student’s strengths and learning style. She is highly skilled in differentiated instruction, behavioural intervention, and the creation of Individualised Education Plans (IEPs), ensuring every learner receives the support they deserve.",
      "With a calm, steady presence, Soumya builds deep, trusting relationships with students, creating nurturing spaces where they feel safe, confident, and ready to grow academically, socially, and emotionally. Her vision is to make every classroom a place of belonging and possibility.",
      "A passionate reader and painter, she brings creativity and depth to her approach.",
      "“Every child is a story of strength and light, unfolding at their own pace.”",
    ],
  },
];

function OurManagement() {
  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt="Our Management Banner" />

      {/* Management Section */}
      <section className="relative w-full py-16 px-4 sm:px-6 md:px-10 overflow-hidden ">
        <div
          className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 md:px-16 space-y-10"
          style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block">
            Our Management
          </h2>

        {Management.map((member, index) => {
  const isOdd = index % 2 === 1;
  return (
    <div
      key={member.name}
      className={`max-w-7xl mx-auto flex flex-col md:flex-row ${
        isOdd ? "md:flex-row-reverse" : ""
      } items-center gap-10`}
    >
      {/* Image: FIRST on mobile (order-1), but let desktop use the flex-direction (md:order-none) */}
      <div className="w-full md:w-4/12 flex justify-center items-center order-1 md:order-none">
        <img
          src={member.Img}
          alt={member.name}
          className="w-full max-w-[350px] h-auto"
        />
      </div>

      {/* Text: SECOND on mobile (order-2), reset on md so desktop alternation remains unchanged */}
      <div className="w-full md:w-8/12 space-y-6 order-2 md:order-none">
        <h3 className="text-2xl sm:text-2xl font-bold text-primary font-primary flex items-center gap-3">
          {member.name.toUpperCase()}
          <span className="h-6 border-l-2 border-secondary"></span>
          {member.position.toUpperCase()}
        </h3>

        {member.bio.map((para, idx) => (
          <p
            key={idx}
            className="text-black font-secondary text-base sm:text-base leading-relaxed"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Mobile-only divider (hidden on md and up) */}
      <div className="w-full border-t border-gray-300 my-6 block md:hidden"></div>
    </div>
  );
})}

        </div>
        <APLVAlue4 />
      </section>
    </>
  );
}

export default OurManagement;
