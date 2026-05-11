import React from "react";
import APLVAlue2 from "../others/AplValue2";
import StaticBanner from "../../../components/StaticBanner";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";

const slides = [{ desktop: "/banners/apl-promoters.jpg", mobile: "/banners/Our-Promoters-mob.webp" }];

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

export default function OurPromoters() {
  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt="Our Promoters Banner" />

      {/* Main Content Section */}
      <section
        className="relative w-full py-16 px-4 sm:px-6 md:px-10 overflow-hidden"
        style={{ backgroundImage: `url(${"/assets/about-graph.svg"})` }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-primary inline-block border-b-2 border-secondary mb-4">
                Promoters
              </h2>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                APL Global School is an initiative of the Ramaniyam Group
                Enterprise.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                <span className="font-extrabold text-lg">
                  RAMANIYAM REAL ESTATES PRIVATE LIMITED
                </span>{" "}
                is a leading builder in Chennai with over three decades of
                experience in the residential, commercial and IT sectors. It has
                earned a reputation for expertise in providing customized
                buildings. A myriad of projects across the city of Chennai stand
                tall as a testament to their commitment to personalisation,
                quality and excellence.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                APL Global School’s Personalized Learning Design is an extension
                of the same ethos of customization into the field of education.
                The architects for this project, Arvind Varuna Associates have
                converted these values with equal passion and have gone out of
                their way to accommodate our customisation requests.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                The infrastructure has been designed to cater to the varied
                needs of the students with the sports facilities, spacious
                auditorium and a multi purpose gallery being some of its
                hallmarks.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                To provide a shield from the marshland, a 30 feet grill wall has
                been erected at the western side of the building which supports
                a vertical garden, simulating a rainforest environment.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                Natural Stones like Tandur stone are used for the flooring to
                provide an anti-skid, low maintenance but hardy surface. The
                exterior Wall paint is made from grinding natural stones like
                green marble and Jaisalmer stone to provide an earthy, chemical
                free wall finish with an elegant look; a unique Ramaniyam
                innovation.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                Founder Gita Jagannathan says - “Academy for Personalized
                Learning is based on the principles of person-centered approach
                to Education, Inclusion and Sustainable Living. The school
                nurtures and supports every individual to be a happy and healthy
                person who confidently explores the limits of their own
                potential. APL Global School believes that schools should
                provide a safe and open space, in which children build an
                understanding of self, their community and the larger world
                while exploring their role in society.”
              </p>
            </div>

            {/* Right Column - Sticky Image */}
            <div className="sticky top-28 self-start">
              <img
                src={"/assets/apl/Our-Promoters.png"}
                alt="Ramaniyam Building"
                className="w-full max-w-[350px] h-auto rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <APLVAlue2 />

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
