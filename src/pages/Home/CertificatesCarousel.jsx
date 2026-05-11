// CertificatesCarousel.jsx
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DEFAULT_ITEMS = [
  { src: "/assets/affliations-6.png", alt: "Certificate of Excellence" },
  { src: "/assets/apl-affliations-1.webp", alt: "UCAS registered centre" },
  { src: "/assets/apl-affliations-2.webp", alt: "IKA 2022 Award" },
  
  { src: "/assets/apl-affliations-4.webp", alt: "Certificate of Excellence" },

];

export default function CertificatesCarousel({ items = DEFAULT_ITEMS }) {
  const [i, setI] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const n = items.length || 0;

  // responsive visible count
  useEffect(() => {
    const calc = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(3); // desktop
      else if (w >= 768) setVisibleCount(2); // tablet
      else setVisibleCount(1); // mobile
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const next = () => setI((v) => (n ? (v + 1) % n : 0));
  const prev = () => setI((v) => (n ? (v - 1 + n) % n : 0));

  const visible = () =>
    Array.from(
      { length: Math.min(visibleCount, Math.max(1, n)) },
      (_, k) => items[(i + k) % n]
    );

  const arrowsDisabled = n <= visibleCount;

  return (
    <section className="relative w-full py-8">
      {/* soft purple glow behind cards */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="h-28 w-[82%] max-w-5xl rounded-full bg-purple-500/10 blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-[48px_1fr_48px] items-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            disabled={arrowsDisabled}
            className={[
              "grid place-items-center h-10 w-10 rounded-full bg-white ring-1 ring-purple-300 text-purple-700 shadow-md",
              "hover:bg-purple-50 active:scale-95 transition",
              arrowsDisabled ? "opacity-40 cursor-not-allowed" : "",
            ].join(" ")}
          >
            <FaArrowLeft />
          </button>

          {/* Track */}
          <div className="flex items-center justify-center gap-6">
            {visible().map((it, idx) => (
              <figure
                key={`${it.src}-${idx}`}
                className={[
                  "relative overflow-hidden rounded-xl bg-white ring-1 ring-black/5",
                  "shadow-[0_10px_34px_rgba(0,0,0,0.14)] p-4",
                  "flex items-center justify-center",
                  visibleCount >= 2 && idx === 1
                    ? "scale-105 shadow-[0_16px_44px_rgba(0,0,0,0.18)]"
                    : "opacity-95",
                  "transition-transform duration-300",
                ].join(" ")}
              >
                <img
                  src={it.src}
                  alt={it.alt || "Certificate"}
                  className="object-contain max-h-[380px] w-auto h-auto"
                  draggable="false"
                />
              </figure>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next"
            disabled={arrowsDisabled}
            className={[
              "grid place-items-center h-10 w-10 rounded-full bg-white ring-1 ring-purple-300 text-purple-700 shadow-md",
              "hover:bg-purple-50 active:scale-95 transition",
              arrowsDisabled ? "opacity-40 cursor-not-allowed" : "",
            ].join(" ")}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
