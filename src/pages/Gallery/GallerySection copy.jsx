import React from "react";

const GallerySection = ({ year, title, linkText, images, reverse }) => {
  return (
    <section className="w-full px-6 md:px-16 py-12">
      {/* Year */}
      {year && (
        <h3 className="text-primary font-primary font-medium underline underline-offset-4 mb-2 text-lg">
          {year}
        </h3>
      )}

      <div className={`md:flex gap-12 items-start ${reverse ? 'flex-row-reverse' : ''}`}>
        {/* LEFT SIDE */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold font-primary uppercase text-primary border-b-2 border-secondary inline-block pb-1 mb-2">
            {title}
          </h2> <br />
          <a
            href="#"
            className="text-sm text-black mt-2 inline-flex font-secondary items-center gap-1 group hover:text-primary"
          >
            {linkText}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="md:w-2/3 overflow-x-auto">
          <div className={`flex gap-4 w-max ${reverse ? 'flex-row-reverse' : ''}`}>
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${title} ${idx}`}
                className="w-48 h-64 object-cover rounded shadow"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
