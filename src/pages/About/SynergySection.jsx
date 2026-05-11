import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";

import ucasImage from "/assets/ucas-banner.webp";
import paper from "/assets/grid-1.webp";
import sliderImg from "/assets/sliderImg.webp";
import slider2 from "/assets/slide-2.webp";
import slider3 from "/assets/slide-3.webp";
import slider4 from "/assets/slide-4.webp";
import slider5 from "/assets/slide-5.webp";

export default function SynergySection() {
  return (
    <section
      className="relative w-full py-16 px-4 sm:px-6 md:px-10 overflow-hidden"
      style={{ backgroundImage: `url(${paper})`, backgroundSize: "cover" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ✅ Marquee Full Width with PDF Buttons */}
        <Marquee pauseOnHover={true} gradient={false} speed={50}>
          {[
            {
              date: "3rd & 4th August 2023",
              title: "SYNERGY BYTES",
              btn: "Click Here",
              pdf: "https://www.aplglobalschool.com/wp-content/uploads/2023/08/Synergy-Bytes23-Web.pdf",
            },
            {
              date: "19th & 20th July 2024",
              title: "APL MUN 2024",
              btn: "Know More",
              pdf: "https://www.aplglobalschool.com/wp-content/uploads/2024/09/APL-MUN-Gazette-Color.pdf",
            },
            {
              date: "21st July 2023",
              title: "ENGLISH FESTIVITAS 2023",
              btn: "Click Here",
              pdf: "https://www.aplglobalschool.com/wp-content/uploads/2023/08/Inglish-festival23-WEB.pdf",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-secondary text-white py-4 px-6 flex items-center mt-6 shadow"
            >
              <p className="font-semibold text-lg md:text-xl whitespace-nowrap font-primary mr-4">
                {item.date}
                <span className="ml-2 font-primary">{item.title}</span>
              </p>
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 bg-primary/80 hover:bg-primary text-white text-base px-3 py-2 rounded-full"
              >
                {item.btn}
              </a>
            </div>
          ))}
        </Marquee>

        {/* ✅ Poster + Slider */}
        <div className="relative z-10 mt-6 md:mt-0 mb-16">
          {/* On Desktop, position absolute; On Mobile, it's relative flow */}
          <div className="md:absolute md:right-4 lg:right-16 md:top-1/2 md:-translate-y-1/2 w-full sm:w-[280px] md:w-[320px] mx-auto md:mx-0">
            <div
              className="w-full h-[340px] sm:h-[380px] md:h-[400px] bg-center bg-contain bg-no-repeat flex items-center justify-center"
              style={{ backgroundImage: `url(${ucasImage})` }}
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-[70%] h-[60%] sm:h-[65%] md:h-[70%]"
              >
                <SwiperSlide>
                  <img
                    src={sliderImg}
                    alt="Slide 1"
                    className="w-full h-full object-contain rounded"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={slider2}
                    alt="Slide 2"
                    className="w-full h-full object-contain rounded"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={slider3}
                    alt="Slide 3"
                    className="w-full h-full object-contain rounded"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={slider4}
                    alt="Slide 4"
                    className="w-full h-full object-contain rounded"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={slider5}
                    alt="Slide 5"
                    className="w-full h-full object-contain rounded"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
