import React from "react";

/**
 * StaticBanner
 * @param {Object[]} slides - [{ desktop: string, mobile: string }]
 * @param {number} index - which slide to show (default: 0)
 * @param {string} alt - base alt text (optional)
 */
export default function StaticBanner({ slides = [], index = 0, alt = "Banner" }) {
  if (!slides.length) return null;

  const slide = slides[index] ?? slides[0];

  return (
    <section className="relative w-full h-[600px] md:h-[400px] overflow-hidden">
      {/* Mobile */}
      <img
        src={slide.mobile}
        alt={`${alt} Mobile`}
        className="absolute w-full max-w-[420px] h-[600px] object-cover block sm:hidden mx-auto left-1/2 -translate-x-1/2"
        loading="lazy"
        decoding="async"
      />

      {/* Desktop */}
      <img
        src={slide.desktop}
        alt={`${alt} Desktop`}
        className="absolute w-full max-w-[1440px] h-[400px] object-cover hidden sm:block mx-auto left-1/2 -translate-x-1/2"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
}
