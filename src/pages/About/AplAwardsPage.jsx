import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Sections
import StaticBanner from "../../../components/StaticBanner";
import APLVAlue3 from "../others/AplValue3";
import CertificatesCarousel from "../Home/SpecialMention";
import CambridgeAwards from "../others/CambridgeAwards";

const slides = [
  {
    desktop: "/banners/apl-awards.jpg",
    mobile: "/banners/apl-awards-mob.webp",
  },
];

const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";

  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split(/[?&]/)[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  }

  if (url.includes("youtube.com/watch")) {
    const id = url.split("watch?v=")[1].split(/[?&]/)[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  }

  return url;
};

const isYouTubeLink = (url) =>
  typeof url === "string" &&
  (url.includes("youtube.com") || url.includes("youtu.be"));

const awards = [
  {
    title: "Swiss Certification Council - <br/> My Safe Spaces",
    year: "2026",
    description:
      "We’re proud to welcome Gita Jagannathan, a renowned cultural psychologist and long-standing advocate for inclusive education, to the SWISS Certification Council at My Safe Spaces. With decades of experience working at the intersection of culture, learning, and student development, she has been instrumental in shaping inclusive learning environments that recognise every child’s emotional and social needs - not just academic outcomes. Her expertise will further strengthen SWISS (Student Wellness & Institutional Safety Standards) - our comprehensive certification framework designed to help institutions build safer systems, train staff to respond with empathy, and embed wellbeing into everyday school culture. Together, we continue our mission to raise the standard of safety and inclusion across institutions.",
    image: "/assets/gita.jpeg",
    link: "#",
  },

  {
    title: "Creative & Distinguished Educators Conclave",
    year: "2025",
    description:
      "The Creative & Distinguished Educators Conclave (CDEC) 2025 held in October this year in Chennai focused on generating new insights into education, fostering meaningful conversations, and recognising efforts related to Universal Design for Learning (UDL): Reaching Every Child. The panel discussions focused on strategies to transform classrooms into innovative clubs, how forward-thinking schools are turning AI disruption into opportunities and shared inspiring journeys from educators who chose to lead. Among other awardees, APL Global School was recognised and awarded as an Inclusion Education Institution.",
    image: "/assets/cdec-1.png",
    link: "#",
  },

  {
    title: "ETEducation EDNXT Chennai",
    year: "2025",
    description:
      "The ETEducation EDNXT Chennai, held in September 2025, Chennai brought together education leaders, government officials, policymakers, and innovators—to chart the course of India’s tech-driven education future. Our principal, Ms Sarija Santhosh was invited to be a speaker in the panel discussion - The Education Transformation: AI, Access, and Acceleration – Shaping the Next Era of Chennai’s School Education.",
    image: "/assets/ete.png",
    link: "#",
  },

  {
    title: "33rd Elets World Education Summit",
    year: "2025",
    description:
      "Honouring excellence and innovation shaping the future of education.",
    image: "/assets/33rd.jpg",
    link: "#",
  },

  {
    title: "Excellence in Global Education",
    year: "2024",
    description:
      "Our school was featured in The Knowledge Review Magazine as one of 'The Most Excellent International Schools to Study in India, 2024'. The Knowledge Review Magazine is a global education magazine dealing with institutes and education leaders around the world.",
    image: "/assets/award-10.png",
    link: "#",
  },

  {
    title: "IKA 2024 - Chennai",
    year: "2024",
    description:
      "Our principal, Ms. Sarija Santhosh was awarded the 'IKA 2024 - Chennai' in recognition for excellence in Promoting Extra Curricular Activities for Holistic Development. The honour was bestowed by Eldrok India K-12 Summit - 2024, on 6th August, 2024, at ITC Grand Chola, Chennai.",
    image: "/assets/ika.png",
    link: "#",
  },

  {
    title: "IDA Education Awards 2024",
    year: "2024",
    description:
      "APL was the winner of The IDA Education Awards 2024 under the category of 'Fostering Inclusive Education'. We were recognised for our contributions and dedication to the field of education and for setting an inspiring example for educators and institutions across the nation.",
    image: "/assets/award-12.png",
    link: "#",
  },

  {
    title: "Most Outstanding School Award",
    year: "2024",
    description:
      "We were awarded 'The Most Outstanding School' in the regional rankings by The Global Educators Conclave (GEO), a prestigious platform for visionary school leaders, academic heads, educators, policy advocates, and education innovators.",
    image: "/assets/outstanding.png",
    link: "#",
  },

  {
    title: "Women's Empowerment Entrepreneur 2019",
    year: "2022",
    description:
      "Our Founder Ms. Gita Jagannathan was honoured with the Leadership award under the category of 'Women's Empowerment Entrepreneur 2019'.",
    image: "/assets/award-3.png",
    link: "#",
  },

  {
    title: "World Education Summit & Awards 2022",
    year: "2022",
    description:
      "Our Founder Ms. Gita Jagannathan was invited as a speaker in the 23rd World Education Summit & Awards 2022 – The Premier Global Event on Innovation in Education virtual conference organised by Elets Technomedia & DigitalLearning Magazine.",
    image: "/assets/world.jpg",
    link: "https://www.youtube.com/watch?v=0SdvFqndx6g",
  },

  {
    title: "Outstanding Professional Achievement Award",
    year: "2022",
    description:
      "In Recognition of Outstanding Professional Achievement & Contribution in Nation Building, our Founder Ms Gita Jagannathan was conferred with a Certificate of Appreciation, 2022.",
    image: "/assets/awards-6.png",
    link: "#",
  },

  {
    title: "Sports Talk With Gita",
    year: "2022",
    description:
      "Our Founder Ms Gita Jagannathan was a speaker in the talk show 'Sports Champ' hosted by Mr Bhushan Thakur, an international Sportsperson and Founder and Editor-in-chief of Sports Champ.",
    image: "/assets/thumbnail-3.jpg",
    link: "https://youtu.be/abcIPmDJTuU",
  },

  {
    title: "Eldrok India K12 Awards - 2022",
    year: "2022",
    description:
      'APL received the prestigious award for "Excellence in Providing Personalised Learning Environment" presented by Eldrok India K12 Awards - 2022.',
    image: "/assets/award-8.png",
    link: "#",
  },

  {
    title: "Recognizing Transformative School Leadership",
    year: "2022",
    description:
      "Our Founder Ms. Gita Jagannathan participated in a talk show by Great Principals, an organization committed to recognizing the contribution of school leaders and their exceptional contribution in the field of education.",
    image: "/assets/thumbnail-4.jpg",
    link: "https://www.youtube.com/watch?v=vGH87-gshCg&t=16s",
  },

  {
    title: "CEII Most Innovational Pedagogy Award 2020–21",
    year: "2021",
    description:
      "APL was awarded the CEII Most Innovational Pedagogy Award 2020-21 in Tamil Nadu region. It was also conferred with an honorary membership of CEII’s Academy Guild.",
    image: "/assets/ceii.jpg",
    link: "https://youtu.be/1pOqrxeg65w",
  },

  {
    title: "Excellence in Activity Based Learning",
    year: "2019",
    description:
      "APL received the prestigious award for 'Excellence in Activity Based Learning' in the ELDROK India K-12 Summit 2019.",
    image: "/assets/award-2.webp",
    link: "https://youtu.be/-GZY7rW1PzA",
  },
];

export default function AplAwardsPage() {
  const [activeTab, setActiveTab] = useState("apl");
  const [popupContent, setPopupContent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = popupContent ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [popupContent]);

  const openPopup = (award, type) => {
    if (type === "youtube") {
      setPopupContent({
        type: "youtube",
        src: getYouTubeEmbedUrl(award.link),
      });
    } else {
      setPopupContent({
        type: "image",
        src: award.image,
      });
    }
  };

  const tabs = [
    {
      id: "apl",
      label: "APL Awards",
    },
    {
      id: "cambridge",
      label: "Cambridge Awards",
    },
    {
      id: "special",
      label: "Special Mention",
    },
  ];

  return (
    <>
      {/* ================= BANNER ================= */}

      <StaticBanner
        slides={slides}
        alt="APL Awards Banner"
      />

      {/* ================= TABS ================= */}

      <section className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

          <div className="flex justify-center items-center gap-3 md:gap-5 py-6 overflow-x-auto">

            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex-shrink-0
                    px-5 md:px-8
                    py-3
                    rounded-full
                    font-primary
                    font-semibold
                    text-sm md:text-base
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-primary hover:text-white"
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= TAB CONTENT ================= */}

      <AnimatePresence mode="wait">

        {/* ================= APL AWARDS ================= */}

        {activeTab === "apl" && (
          <motion.div
            key="apl"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.35,
            }}
          >

            <section className="relative w-full py-16 px-4 sm:px-6 md:px-10 overflow-hidden">

              {/* Heading Box */}

              <div className="bg-primary text-white rounded-lg py-14 relative z-10 max-w-6xl mx-auto text-center">

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: -30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="text-3xl md:text-5xl font-primary font-bold text-secondary"
                >
                  APL Awards & Recognitions
                </motion.h1>

                <p className="text-white px-6 md:px-10 mt-4 max-w-5xl mx-auto leading-7">
                  Awards are recognitions that demonstrate exceptional
                  achievements in the fields of education, innovation, and
                  holistic development. APL has been recognised in different
                  areas for consistently striving for academic excellence,
                  fostering creativity, and implementing forward-thinking
                  practices that positively impact students and the broader
                  learning community.
                </p>

              </div>

              {/* Awards Grid */}

              <div className="max-w-7xl mx-auto py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {awards.map((award, index) => (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index * 0.06, 0.3),
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      bg-white
                      rounded-xl
                      shadow-md
                      hover:shadow-xl
                      transition-all
                      duration-300
                      overflow-hidden
                      flex
                      flex-col
                    "
                  >

                    {/* Image */}

                    <div className="w-full flex items-center justify-center p-2">

                      <img
                        src={award.image}
                        alt={award.title || `award-${index}`}
                        className="
                          w-full
                          h-64
                          md:h-72
                          object-contain
                          cursor-pointer
                        "
                        onClick={() =>
                          openPopup(
                            award,
                            isYouTubeLink(award.link)
                              ? "youtube"
                              : "image"
                          )
                        }
                      />

                    </div>

                    {/* Content */}

                    <div className="p-6 flex flex-col flex-grow">

                      <h3
                        className="
                          text-lg
                          font-primary
                          font-semibold
                          text-secondary
                        "
                        dangerouslySetInnerHTML={{
                          __html: award.title,
                        }}
                      />

                      <p className="text-sm text-primary font-medium mt-1">
                        {award.year}
                      </p>

                      {typeof award.description === "string" && (
                        <div
                          className="
                            text-sm
                            text-gray-700
                            mt-3
                            whitespace-pre-line
                            leading-6
                          "
                          dangerouslySetInnerHTML={{
                            __html: award.description,
                          }}
                        />
                      )}

                      {/* Watch Video */}

                      {award.link &&
                        award.link !== "#" &&
                        isYouTubeLink(award.link) && (

                          <button
                            type="button"
                            onClick={() =>
                              openPopup(
                                award,
                                "youtube"
                              )
                            }
                            className="
                              mt-5
                              px-4
                              py-2
                              bg-primary
                              text-white
                              text-sm
                              rounded-lg
                              hover:bg-secondary
                              transition
                              self-start
                            "
                          >
                            Watch Video
                          </button>

                        )}

                    </div>

                  </motion.div>

                ))}

              </div>

            </section>

            {/* Existing APL Value Content */}

            <APLVAlue3 />

          </motion.div>
        )}

        {/* ================= CAMBRIDGE AWARDS ================= */}

        {activeTab === "cambridge" && (

          <motion.div
            key="cambridge"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.35,
            }}
          >

            <CambridgeAwards />

          </motion.div>
        )}

        {/* ================= SPECIAL MENTION ================= */}

        {activeTab === "special" && (

          <motion.div
            key="special"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.35,
            }}
          >

            <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16">

              <CertificatesCarousel />

            </section>

          </motion.div>
        )}

      </AnimatePresence>

      {/* ================= POPUP ================= */}

      <AnimatePresence>

        {popupContent && (

          <motion.div
            className="
              fixed
              inset-0
              bg-black/90
              flex
              items-center
              justify-center
              z-[100]
              p-4
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setPopupContent(null)
            }
          >

            {/* YouTube */}

            {popupContent.type === "youtube" ? (

              <iframe
                src={popupContent.src}
                title="Award Video"
                className="
                  w-full
                  max-w-6xl
                  h-[60vh]
                  md:h-[80vh]
                  rounded-lg
                  shadow-2xl
                "
                frameBorder="0"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture
                "
                allowFullScreen
                onClick={(e) =>
                  e.stopPropagation()
                }
              />

            ) : (

              /* Image */

              <img
                src={popupContent.src}
                alt="Award"
                className="
                  max-w-[95vw]
                  max-h-[90vh]
                  rounded-lg
                  object-contain
                  shadow-2xl
                "
                onClick={(e) =>
                  e.stopPropagation()
                }
              />

            )}

            {/* Close Button */}

            <button
              type="button"
              onClick={() =>
                setPopupContent(null)
              }
              className="
                absolute
                top-5
                right-5
                bg-white/90
                hover:bg-secondary
                hover:text-white
                rounded-full
                w-10
                h-10
                flex
                items-center
                justify-center
                text-gray-900
                text-lg
                font-bold
                shadow
                transition
              "
            >
              ✕
            </button>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}