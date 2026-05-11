"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

import SocialIcon from "./SocialIcons";
import EnquiryForm from "./EnquiryForm";

/* ✅ Use public folder paths */
const images = [
  { url: "/banners/home-banner-1.jpg", mobile: "/banners/home-banner-mob-1.jpg" },
  { url: "/banners/personal-web.jpg", mobile: "/banners/personal-mob.jpg" },
  { url: "/banners/dedicate-web.jpg", mobile: "/banners/dedicate-mob.jpg" },
  { url: "/banners/experiential-web.jpg", mobile: "/banners/experiential-mob.jpg" },
  { url: "/banners/home-banner-5.webp", mobile: "/banners/home-banner-mob-5.webp" },
];

const BannerSection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const slideRef = useRef(null);

  /* ✅ Fix SSR window issue */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ✅ Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative w-full h-[600px] md:h-[400px] overflow-hidden">

        {/* DESKTOP BUTTONS */}
        <div className="absolute left-6 top-[65%] z-20 hidden md:flex gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSebCax5tzajflI60EpD-DBgTty1N-Wqg1z7dOGMDTabTimYrQ/viewform?usp=send_form"
            className="bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-primary/90 transition"
          >
            APL Student Hub
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeiWdZHJe8DO9FY3ScFr3-EHqmuwmCkL33-fYTbD7Pp9HaXxQ/viewform?usp=send_form"
            className="bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            APL Parent Forum
          </a>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="absolute bottom-14 left-0 right-0 z-20 flex justify-center px-4 md:hidden">
          <div className="flex w-full max-w-[340px] gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSebCax5tzajflI60EpD-DBgTty1N-Wqg1z7dOGMDTabTimYrQ/viewform?usp=send_form"
              className="flex-1 text-center bg-primary text-white text-sm px-4 py-3 rounded-full font-semibold shadow"
            >
              APL Student Hub
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeiWdZHJe8DO9FY3ScFr3-EHqmuwmCkL33-fYTbD7Pp9HaXxQ/viewform?usp=send_form"
              className="flex-1 text-center bg-white text-primary text-sm px-4 py-3 rounded-full font-semibold shadow"
            >
              APL Parent Forum
            </a>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={slideRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-full relative h-[600px] md:h-[400px]">

              {/* Desktop */}
              <Image
                src={img.url}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="hidden md:block object-cover"
              />

              {/* Mobile */}
              <Image
                src={img.mobile}
                alt={`Mobile ${index + 1}`}
                fill
                className="block md:hidden object-cover"
              />

            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full border transition ${
                current === index
                  ? "bg-primary border-primary scale-125"
                  : "bg-white border-primary"
              }`}
            />
          ))}
        </div>

        {/* DESKTOP FORM */}
        {!isMobile && (
          <div className="absolute top-4 right-10 z-10 max-w-md">
            <EnquiryForm />
            <div className="mt-26 flex justify-center">
              <SocialIcon />
            </div>
          </div>
        )}
      </div>

      {/* MOBILE FORM */}
      {isMobile && (
        <div className="md:hidden px-4 py-6">
          <EnquiryForm />
          <div className="mt-6">
            <SocialIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default BannerSection;