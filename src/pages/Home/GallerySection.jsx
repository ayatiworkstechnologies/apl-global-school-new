"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ FIX
import { Plus, Minus } from "lucide-react";

const images = ["/assets/school-1.jpg", "/assets/school-2.jpg"];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const router = useRouter(); // ✅ FIX

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
      <section className="container mx-auto w-full bg-white py-16 px-4 md:px-10 lg:px-20 overflow-hidden">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-third mb-4 leading-tight">
        My School
      </h2>
      <p className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-third mb-10 font-primary">
        Capturing joy, Learning 
      </p>

      <div className="flex flex-col-reverse lg:flex-row items-start gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-gray-700 text-sm sm:text-base font-secondary">
            Every day at APL Global School is a vibrant tapestry of learning,
            laughter, and limitless possibilities. From academic milestones to
            artful performances, from championship wins to moments of quiet
            discovery, our journey is filled with stories worth remembering.
          </p>
          <p className="text-gray-700 text-sm sm:text-base font-secondary">
            Beyond textbooks, our students shine in theatre, music, community
            projects, and spirited house competitions. Each snapshot reflects
            the heart of a truly global learning experience rooted in curiosity
            and care.
          </p>
          <p className="text-gray-700 text-sm sm:text-base font-secondary font-bold">
            Explore our Gallery of Moments and hear heartfelt testimonials from
            students and staff to experience why APL is more than just a school
            - it's a home of lasting memories.
          </p>

          {/* Accordion Example (Optional: Uncomment to use) */}
          {/* 
          <ul className="text-sm text-gray-800 space-y-3">
            {highlights.map((item, index) => (
              <li key={index}>
                <button
                  className="flex items-center gap-2 w-full text-left font-medium font-primary"
                  onClick={() => toggleAccordion(index)}
                >
                  <span
                    className={`text-sm font-bold w-5 h-5 flex items-center justify-center border-2 border-secondary rounded-full transition ${
                      openIndex === index
                        ? "bg-secondary text-white"
                        : "bg-white text-secondary"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" strokeWidth={3} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={3} />
                    )}
                  </span>
                  <span>{item.title}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm font-secondary pl-4">
                    {item.content}
                  </p>
                )}
              </li>
            ))}
          </ul>
          */}

          <button
            className="mt-4 px-5 py-2 bg-secondary uppercase text-white rounded hover:bg-secondary transition font-primary text-sm sm:text-base"
            onClick={() => navigate("/gallery")}
          >
            View More Photos
          </button>
        </div>

        {/* Right: Auto-scrolling Image Slider */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[360px] sm:min-h-[420px] md:min-h-[500px]">
          <div className="relative w-full max-w-[400px] sm:max-w-[460px] md:max-w-[500px] flex justify-center items-center">
            {images.map((img, index) => {
              const diff = index - activeIndex;
              const scale = index === activeIndex ? 1.08 : 1;
              const zIndex = images.length - Math.abs(diff);
              const translateX = diff * 60;

              return (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute rounded-xl shadow-xl object-cover cursor-pointer transition-all duration-300 ease-in-out ${
                    index === activeIndex
                      ? "h-80 w-60 sm:h-96 sm:w-72"
                      : "h-72 w-52 sm:h-80 sm:w-64"
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex: zIndex,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}