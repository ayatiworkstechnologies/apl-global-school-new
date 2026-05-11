// AplEventsShowcase.jsx
import React from "react";

export default function AplEventsShowcase({
  bgUrl = "/assets/apl-event-bg.png", // full background (cover)
  rightImg, // your cutout PNG on the right
  rightImgAlt = "APL student",
  cards = defaultCards, // uses defaultCards unless you pass your own
  showTopTorn = false,
}) {
  return (
    <section className="relative w-full overflow-hidden py-16 px-4 sm:px-6 md:px-10">
      {/* ===== FULL BACKGROUND (cover) ===== */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${bgUrl})` }}
          aria-hidden="true"
        />

      </div>
      

      {/* ===== CONTENT ===== */}
      <div className="relative mx-auto max-w-7xl pt-10 pb-10 md:pb-16">
       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* LEFT: cards (8 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-8">
                   <h2 className="text-3xl md:text-2xl font-bold text-black text-center mb-10">
          Campus Chronicles
        </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards?.slice(0, 4).map((card, index) => (
                <EventCard key={index} card={card} />
              ))}
            </div>
          </div>

          {/* RIGHT: cutout image (4 cols) */}
          <div className="relative order-1 lg:order-2 lg:col-span-4">
            <div className="absolute -inset-6 blur-3xl rounded-full bg-black/5" />
            {rightImg ? (
              <img
                src={rightImg}
                alt={rightImgAlt}
                className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-h-[520px] object-contain"
                draggable="false"
              />
            ) : (
              <div className="relative mx-auto lg:ml-auto lg:mr-0 h-[440px] w-[320px] rounded-xl bg-white/50 backdrop-blur grid place-items-center text-sm text-black/50">
                Add right-side PNG
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- sub component ---------- */
function EventCard({ card }) {
  if (!card) return null;

  const titleOneLine = (card.title || "")
    .replace(/\/n/gi, "\n")
    .replace(/\n+/g, " ");

  const isExternal = card.target === "_blank";

  return (
    <article className="relative rounded-2xl bg-white/95 backdrop-blur-sm ring-1 ring-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-6">
      <a
        href={card.href || "#"}
        target={card.target || "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="inline-block text-[20px] font-semibold text-primary leading-snug"
      >
        <span className="underline font-primary underline-offset-4 decoration-[1.5px]">
          {card.date}
        </span>
      </a>

      <div className="mt-4 flex items-center justify-between gap-3">
        <h3 className="text-[22px] font-secondary font-bold tracking-tight text-black min-w-0 truncate">
          {titleOneLine}
        </h3>
        <a
          href={card.href || "#"}
          target={card.target || "_self"}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2 text-[15px] font-primary font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary text-secondary"
        >
          Read more
        </a>
      </div>

      <div className="pointer-events-none absolute -bottom-6 left-6 right-6 h-6 rounded-[20px] bg-black/10 blur-lg" />
    </article>
  );
}


