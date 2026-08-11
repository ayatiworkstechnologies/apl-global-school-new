"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

/* ---------- Default Items ---------- */

const DEFAULT_ITEMS = [
   {
    images: [
      "/assets/viyaan.png",
      "/assets/viyaan-2.png",
      "/assets/viyaan-3.png",
      "/assets/viyaan-4.png",
    ],

    popupImages: [
      "/assets/viyaan.png",
      "/assets/viyaan-2.png",
      "/assets/viyaan-3.png",
      "/assets/viyaan-4.png",
    ],

    alt: "viyaan of grade 2 participated in the 38th Tamil Nadu State Under-07 Open Chess Championship 2026",
    para: "Viyaan of grade 2 participated in the 38th Tamil Nadu State",

    title: [
      "Viyaan of grade 2 participated in the 38th Tamil Nadu State Under-07 Open Chess Championship 2026, in which players from 32 districts across Tamil Nadu competed. He scored 7 points and secured 6th place among 180 players.",

      "Viyaan has participated in several district, state, and national-level chess tournaments, often competing in categories above his age group. Through his consistent performances, he has won numerous competitions and has also received cash prizes in several tournaments. Each tournament has helped him strengthen his skills, build confidence, and develop sportsmanship.",

      "Viyaan is also a State Champion in Abacus and has also been awarded the Outstanding grade in the International Grading Competition.",
    ],
  },
   {
     images: [
      "/assets/chanakya.png",
     
    ],

    popupImages: [
      "/assets/chanakya.png",
      
    ],

    para: "Chanakya was recognised as a Zonal Winner",
    alt: "Chanakya was recognised as a Zonal Winner in the Junior IAS Examination conducted by Prodigy Brains.",

    title: [
      "Chanakya was recognised as a Zonal Winner in the Junior IAS Examination conducted by Prodigy Brains. The Junior IAS Examination is a school-level examination inspired by the UPSC pattern. It assesses students' knowledge of governance, current affairs, and social sciences while evaluating their reasoning and decision-making abilities.",

      "Chanakya's participation in this competition was driven by his curiosity to explore and understand the world around him. Whenever a topic captures his interest, he enjoys exploring it through books, educational videos, quizzes, discussions, and debates. Although he prepared wholeheartedly for the examination, his true motivation was the journey of learning—the chance to explore, question, and challenge himself.",

      "The experience expanded his learning, strengthened his ability to think independently, and gave him the confidence to trust his own understanding.",
    ],
  },
   {
     images: [
      "/assets/mukilan.png",
  
    ],

    popupImages: [
      "/assets/mukilan.png",
   
    ],

    alt: "mugilan ramu of grade 3 has successfully completed the Roboton 26 Mega Robotics event on 26th July 2026, at VR Chennai along with 1254 students.",
    para: "Mugilan Ramu of grade 3 has successfully completed the Roboton",

    title: [
      "Mugilan Ramu of grade 3 has successfully completed the Roboton 26 Mega Robotics event on 26th July 2026, at VR Chennai along with 1254 students. It was conducted by Kash Robotics. This event was recorded by India Book of Records. He made one with IR sensors that deflected impact upon sensing an incoming collision with a white object or wall. There were different options presented in the kit for making robots and he chose this one. In Mugilan’s words - “It was a really fun experience I would repeat”.",

   
    ],
  },
  {
    images: [
      "/assets/nisha-1.png",
      "/assets/nisha-2.png",
      "/assets/nisha-3.png",
      "/assets/nisha-4.png",
      "/assets/nisha-5.png",
    ],

    popupImages: [
      "/assets/nisha-pop.png",
      "/assets/nisha-2.png",
      "/assets/nisha-3.png",
      "/assets/nisha-4.png",
      "/assets/nisha-5.png",
    ],

    alt: "Youngest Seven Summits Climber - Nisha",
    para: "Scaling of Mt Everest - May 2026",

    title: [
      "Nisha Sasikumar has had the extraordinary privilege of representing India on the global stage through high-altitude mountaineering while continuing her academic journey at APL Global School.",

      "She has successfully summited Mount Everest, Aconcagua, Mount Elbrus, Mount Kilimanjaro, Carstensz Pyramid, and Mount Kosciuszko, and is steadily progressing towards completing the prestigious Seven Summits Challenge—an achievement reserved for a select group of mountaineers worldwide.",

      "Throughout this remarkable journey, Nisha has balanced the demands of her academic responsibilities with intensive training and challenging international expeditions, exemplifying resilience, discipline, perseverance, and unwavering determination.",

      "We are immensely proud of Nisha's achievements and wish her many more milestones and accolades as she continues to pursue her passion for mountaineering, inspiring young people to dream big, embrace challenges, and reach new heights.",
    ],
  },

  {
    images: [
      "/assets/ruhan-1.png",
      "/assets/ruhan-2.png",
    ],

    popupImages: [
      "/assets/ruhan.jpg",
      "/assets/ruhan-1.png",
    ],

    alt: "Ruhan Siddanth",

    para:
      "Ruhan Siddhanth of Grade 8 on winning a Silver Medal",

    title: [
      "The District Regional Cycling Championship 2026 concluded successfully with enthusiastic participation from cyclists across Tamil Nadu. From an inspiring flag-off to thrilling races and deserving podium finishes, the championship reflected TNCA’s continued commitment to grassroots development, talent identification, and sporting excellence.",

      "Congratulations to Ruhan Siddhanth of Grade 8 on winning a Silver Medal in the Championship.",
    ],
  },

  {
    images: [
      "/assets/nisha.png",
    ],

    popupImages: [
      "/assets/nisha-popup.png",
    ],

    alt:
      "Youngest Seven Summits Climber - Nisha",

    para:
      "Nisha becomes the youngest climber",

    title: [
      "Nisha becomes the youngest climber. Nisha has successfully summited four peaks in three continents as part of the Seven Summits—the highest mountains on each continent—during the year 2025.",

      "Her achievements include the successful ascents of peak of each of continent:",

      "Mount Elbrus in Russia (Europe) on 19 April 2025",

      "Mount Kilimanjaro in Tanzania (Africa) on 11 June 2025",

      "Mount Kosciuszko (Australia) on 03 October 2025 + Carstensz Pyramid in Papua, Indonesia (Oceania) on 14 October 2025 (these 2 peaks form a part of the Messner version as well as Bass version of seven summits)",

      "With these climbs, Nisha, at the age of 15, has become one of the youngest Indians and among the youngest globally to have summited Carstensz Pyramid, the highest peak in Oceania (and the most technically challenging mountain).",

      "Nisha now has a clear plan to continue her journey:",

      "January 2026: To summit Mount Aconcagua (South America)",

      "April/May 2026: To attempt Mount Everest (Asia) - to be the Youngest female in the world to have summited Mount Everest from Nepal side",

      "Following Everest, she will proceed to summit Denali (North America) and then Vinson Massif (Antarctica) — with the goal of completing all Seven Summits by the end of 2026.",

      "Upon successful completion, she aspires to become the youngest woman in the world to complete the Seven Summits—bringing immense pride to Tamil Nadu and India.",
    ],
  },

  {
    images: [
      "/assets/mention-1.webp",
    ],

    popupImages: [
      "/assets/special-1.webp",
    ],

    alt:
      "ASIA BOOK OF RECORDS",

    para:
      "ASIA BOOK OF RECORDS",

    title:
      "U Anirudhan set a world record in February 2024 by completing 10 KM continuous sea swimming in an open sea out of 165 KM swimming rally expeditions by children with autism spectrum. This world record was registered in World Records Union, Asia Book of Records and Indian Book of Records.",
  },

  {
    images: [
      "/assets/mention-2.webp",
    ],

    popupImages: [
      "/assets/special-2.jpg",
    ],

    alt:
      "Speed Power International Open Taekwondo Championship",

    para:
      "Speed Power International Open Taekwondo Championship",

    title:
      "RAKSHAN MOHANDASS participated in the 11TH Speed Power International Open Taekwondo Championship 2024 and won Gold in the category - speed kick male 9-11 and a bronze in the category - pomsee male 9-11.",
  },

  {
    images: [
      "/assets/mention-3.webp",
    ],

    popupImages: [
      "/assets/special-3.jpg",
    ],

    alt:
      "Queen's Commonwealth Essay Competition 2023",

    para:
      "Queen's Commonwealth Essay Competition 2023",

    title:
      "Anjali Jayraman participated in the Queen's Commonwealth Essay Competition 2023 held in London, UK and was awarded bronze for her essay submission.",
  },

  {
    images: [
      "/assets/mention-4.webp",
    ],

    popupImages: [
      "/assets/special-4.jpg",
    ],

    alt:
      "ILCA 4 Youths World Championships",

    para:
      "ILCA 4 Youths World Championships",

    title:
      "Alia Sabreen Faisal participated in the 2024 ILCA 4 Youths World Championships for sailing held at Portugal in June 2024.",
  },

  {
    images: [
      "/assets/mention-5.webp",
    ],

    popupImages: [
      "/assets/special-5.webp",
    ],

    alt:
      "Emergent Ventures",

    para:
      "Emergent Ventures by Mercatus Centre of George Mason University",

    title:
      "Anjali Jayaraman Grade 10 presented her project Repay Smart in the form of a 1500 word proposal to Emergent Ventures by Mercatus Centre of George Mason University, a fellowship and grant program that supports entrepreneurs and brilliant minds.",
  },
];


/* ==========================================
   MULTIPLE IMAGE AUTO SLIDER
   NO ARROWS
   NO DOTS
========================================== */

function CardImageSlider({
  item,
  onImageClick,
}) {
  const images =
    item.images ||
    (item.src ? [item.src] : []);

  const popupImages =
    item.popupImages ||
    (item.popupSrc
      ? [item.popupSrc]
      : images);

  const [imageIndex, setImageIndex] =
    useState(0);

  const totalImages =
    images.length;

  /* ---------- Auto Slide ---------- */

  useEffect(() => {
    if (totalImages <= 1) return;

    const slider =
      setInterval(() => {
        setImageIndex(
          (prev) =>
            (prev + 1) %
            totalImages
        );
      }, 3000);

    return () =>
      clearInterval(slider);

  }, [totalImages]);

  if (!totalImages) {
    return null;
  }

  return (
    <div
      className="
        relative
        flex-1
        flex
        items-center
        justify-center
        p-4
        cursor-pointer
        overflow-hidden
      "
      onClick={() =>
        onImageClick(
          popupImages[
            imageIndex
          ] ||
            images[
              imageIndex
            ]
        )
      }
    >

      <AnimatePresence mode="wait">

        <motion.img
          key={`${images[imageIndex]}-${imageIndex}`}

          src={
            images[
              imageIndex
            ]
          }

          alt={
            item.alt ||
            "Certificate"
          }

          draggable="false"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 0.5,
          }}

          className="
            max-h-full
            max-w-full
            object-contain
          "
        />

      </AnimatePresence>

    </div>
  );
}


/* ==========================================
   MAIN COMPONENT
========================================== */

export default function CertificatesCarousel({
  items = DEFAULT_ITEMS,
}) {
  const [index, setIndex] =
    useState(0);

  const [expanded, setExpanded] =
    useState(null);

  const [
    visibleCount,
    setVisibleCount,
  ] = useState(1);

  const [
    popupImage,
    setPopupImage,
  ] = useState(null);

  const total =
    items.length;


  /* ---------- Responsive Visible Count ---------- */

  useEffect(() => {

    const calc = () => {

      const w =
        window.innerWidth;

      if (w >= 1024) {
        setVisibleCount(3);

      } else if (
        w >= 768
      ) {
        setVisibleCount(2);

      } else {
        setVisibleCount(1);
      }

    };

    calc();

    window.addEventListener(
      "resize",
      calc
    );

    return () =>
      window.removeEventListener(
        "resize",
        calc
      );

  }, []);


  /* ---------- Carousel Navigation ---------- */

  const next = () =>
    setIndex(
      (v) =>
        total
          ? (v + 1) %
            total
          : 0
    );


  const prev = () =>
    setIndex(
      (v) =>
        total
          ? (
              v -
              1 +
              total
            ) %
            total
          : 0
    );


  /* ---------- Visible Items ---------- */

  const visibleItems =
    () =>
      Array.from(
        {
          length:
            Math.min(
              visibleCount,
              Math.max(
                1,
                total
              )
            ),
        },

        (_, k) =>
          items[
            (
              index +
              k
            ) %
              total
          ]
      );


  const arrowsDisabled =
    total <=
    visibleCount;


  /* ==========================================
     RENDER
  ========================================== */

  return (
    <section
      className="
        relative
        w-full
        py-12
      "
    >

      {/* ---------- Heading ---------- */}

      <motion.h2
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

        className="
          text-3xl
          md:text-5xl

          font-primary
          font-bold

          text-secondary

          text-center

          mb-10
        "
      >

        Special Mentions

      </motion.h2>


      {/* ---------- Description ---------- */}

      <p
        className="
          text-primary

          px-10

          mt-2
          mb-10

          text-center
        "
      >

        We take pride in
        celebrating our
        students’ grit,
        focus, and
        determination
        reflected in their
        remarkable
        achievements.
        Whether in sports,
        literary pursuits,
        or innovative
        endeavors, we
        encourage them to
        follow their
        passions with zeal
        and enthusiasm.

      </p>


      {/* ---------- Glow Background ---------- */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          flex
          items-center
          justify-center

          -z-10
        "
      >

        <div
          className="
            h-28

            w-[82%]
            max-w-5xl

            rounded-full

            bg-purple-500/10

            blur-2xl
          "
        />

      </div>


      {/* ======================================
          MAIN CAROUSEL
      ====================================== */}

      <div
        className="
          mx-auto
          max-w-6xl
        "
      >

        <div
          className="
            grid

            grid-cols-[48px_1fr_48px]

            items-center

            gap-3
          "
        >

          {/* ---------- Left Arrow ---------- */}

          <button
            type="button"

            onClick={
              prev
            }

            aria-label="Previous"

            disabled={
              arrowsDisabled
            }

            className={`
              grid
              place-items-center

              h-10
              w-10

              rounded-full

              bg-white

              ring-1
              ring-purple-300

              text-purple-700

              shadow-md

              hover:bg-purple-50

              active:scale-95

              transition

              ${
                arrowsDisabled
                  ? "opacity-40 cursor-not-allowed"
                  : ""
              }
            `}
          >

            <FaArrowLeft />

          </button>


          {/* ---------- Carousel Cards ---------- */}

          <div
            className="
              flex

              items-end

              justify-center

              gap-5

              flex-wrap
            "
          >

            {visibleItems().map(
              (
                item,
                idx
              ) => {

                const globalIndex =
                  (
                    index +
                    idx
                  ) %
                  total;

                const isExpanded =
                  expanded ===
                  globalIndex;

                return (

                  <figure
                    key={
                      `${globalIndex}-${item.para}`
                    }

                    className={`
                      relative

                      flex
                      flex-col

                      overflow-hidden

                      rounded-xl

                      bg-white

                      ring-1
                      ring-black/5

                      shadow-[0_10px_34px_rgba(0,0,0,0.14)]

                      w-[70vw]

                      sm:w-[320px]

                      md:w-[280px]

                      lg:w-[300px]

                      xl:w-[320px]

                      transition-transform

                      duration-300

                      ${
                        visibleCount >=
                          2 &&
                        idx === 1
                          ? "scale-105 shadow-[0_16px_44px_rgba(0,0,0,0.18)]"
                          : "opacity-95"
                      }
                    `}
                  >

                    {/* ==================================
                        MULTIPLE IMAGES AUTO SLIDE
                    ================================== */}

                    <CardImageSlider
                      item={
                        item
                      }

                      onImageClick={(
                        image
                      ) =>
                        setPopupImage(
                          image
                        )
                      }
                    />


                    {/* ---------- Caption ---------- */}

                    <figcaption
                      className="
                        text-center

                        text-sm
                        md:text-base

                        font-medium

                        text-gray-800

                        bg-purple-50

                        py-3
                        px-2

                        rounded-b-xl
                      "
                    >

                      {
                        item.para
                      }

                    </figcaption>


                    {/* ---------- Read More ---------- */}

                    {item.title && (

                      <div
                        className="
                          bg-purple-50

                          px-4
                          pb-3

                          text-center
                        "
                      >

                        {isExpanded && (

                          <div
                            className="
                              text-xs
                              md:text-sm

                              text-gray-700

                              mb-2

                              leading-6
                            "
                          >

                            {Array.isArray(
                              item.title
                            ) ? (

                              item.title.map(
                                (
                                  text,
                                  textIndex
                                ) => (

                                  <p
                                    key={
                                      textIndex
                                    }
                                    className="mb-2"
                                  >
                                    {
                                      text
                                    }
                                  </p>

                                )
                              )

                            ) : (

                              <p>
                                {
                                  item.title
                                }
                              </p>

                            )}

                          </div>

                        )}


                        <button
                          type="button"

                          onClick={() =>
                            setExpanded(
                              isExpanded
                                ? null
                                : globalIndex
                            )
                          }

                          className="
                            text-primary

                            text-sm

                            font-medium
                          "
                        >

                          {isExpanded
                            ? "Read Less"
                            : "Read More"}

                        </button>

                      </div>

                    )}

                  </figure>

                );
              }
            )}

          </div>


          {/* ---------- Right Arrow ---------- */}

          <button
            type="button"

            onClick={
              next
            }

            aria-label="Next"

            disabled={
              arrowsDisabled
            }

            className={`
              grid
              place-items-center

              h-10
              w-10

              rounded-full

              bg-white

              ring-1
              ring-purple-300

              text-purple-700

              shadow-md

              hover:bg-purple-50

              active:scale-95

              transition

              ${
                arrowsDisabled
                  ? "opacity-40 cursor-not-allowed"
                  : ""
              }
            `}
          >

            <FaArrowRight />

          </button>

        </div>

      </div>


      {/* ======================================
          POPUP MODAL
      ====================================== */}

      <AnimatePresence>

        {popupImage && (

          <motion.div
            className="
              fixed
              inset-0

              z-[100]

              bg-black/80

              flex
              items-center
              justify-center

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
              setPopupImage(
                null
              )
            }
          >

            <motion.div
              className="
                relative

                flex
                items-center
                justify-center
              "

              initial={{
                scale: 0.8,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: 0.8,
                opacity: 0,
              }}

              onClick={(
                e
              ) =>
                e.stopPropagation()
              }
            >

              {/* ---------- Close Button ---------- */}

              <button
                type="button"

                onClick={() =>
                  setPopupImage(
                    null
                  )
                }

                className="
                  absolute

                  -top-10
                  right-0

                  text-white

                  text-4xl

                  hover:text-gray-300

                  transition
                "
              >

                <IoClose />

              </button>


              {/* ---------- Popup Image ---------- */}

              <img
                src={
                  popupImage
                }

                alt="Popup"

                className="
                  max-h-[85vh]
                  max-w-[90vw]

                  w-auto
                  h-auto

                  object-contain

                  rounded-lg

                  shadow-lg
                "
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}