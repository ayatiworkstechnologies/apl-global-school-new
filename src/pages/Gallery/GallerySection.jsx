import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

// Sample images (Replace with your imports or dynamic require)





const gallerySections = [
  {
    title: "APL investiture Ceremony 2025-26!",
    description:
      "A big round of applause for the APL student Council 2025-26. Congratulations to our newly elected Student Council - your energy, ideas, and dedication reflect the true spirit of our school. May your leadership inspire growth, unity and joy in every corner of our campus. Here’s to a stellar year - together we achieve more.",
    images: ["/assets/img-1.png", "/assets/Gallery/invsting_cermony_2.webp", "/assets/Gallery/invsting_cermony_3.webp", "/assets/Gallery/invsting_cermony_4.webp", "/assets/Gallery/invsting_cermony_5.webp"],
  },
  {
    title: "HUCOMTek",
    description:
      "HuComTek, an acronym for Humanities, Commerce, and Technology, is an annual inter-school event that highlights the intersection of these three academic streams. Far from a conventional school event, HuComTek is a forward-thinking platform organized entirely by students and supported by faculty from the humanities, business, and tech departments. Beginning in 2023 as BizCom, blooming into HuCom through careful planning by both students and teachers, and finally blossoming into HuComTek by 2025, its mission is simple but ambitious: to provide high school students with real-world exposure to the convergence of ideas shaping the future.",
    images: ["/assets/Gallery/hucomm_1.webp", "/assets/Gallery/hucomm_2.webp", "/assets/Gallery/hucomm_3.webp", "/assets/Gallery/hucomm_4.webp", "/assets/Gallery/hucomm_5.webp"],
    reverse: true,
  },
  {
    title: "APL MUN",
    description:
      "At APL Model United Nations, students stepped into the shoes of diplomats, debating global issues with passion and precision. An inspiring showcase of leadership, research, and collaboration.",
    images: ["/assets/Gallery/apl_mun_1.webp", "/assets/Gallery/apl_mun_2.webp", "/assets/Gallery/apl_mun_3.webp", "/assets/Gallery/apl_mun_4.webp", "/assets/Gallery/apl_mun_5.webp"],
  },
 
  {
    title: "Sports Day",
    description:
      "Celebrating athleticism, team spirit, and sportsmanship. From track events to relays, Sports Day was filled with energy, enthusiasm, and proud victories across all grades.",
    images: ["/assets/sports-1.png", "/assets/sports-2.png", "/assets/sports-3.png", "/assets/sports-4.png", "/assets/sports-5.png"],
     reverse: true,
  },

    {
    title: "Independence Day",
    description:

      "At APL, we celebrated Independence Day and Swadeshi week with colours, pride and patriotism. The day was filled with vibrant independence rangolis, creative expressions and soulful performances that reflected the essence of our nation. From the flag hoisting to cultural programs, the campus came alive with energy, pride and unity. It was a celebration of our heritage, our culture and our journey as a nation - a day where patriotism met creativity, and freedom danced to the bell of joy.",
    images: ["/assets/independence-1.png", "/assets/independence-2.png", "/assets/independence-3.png", "/assets/independence-4.png", "/assets/independence-5.png"],
     
  },
];

const GallerySection = ({
  title,
  description,
  images,
  reverse = false,
  onImageClick,
}) => (
  <section className="py-12 px-4 md:px-10">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
      {/* Text Section */}
      <div
        className={`col-span-12 md:col-span-3 space-y-4 text-center md:text-left ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <h2 className="text-3xl md:text-2xl font-bold text-primary">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>

      {/* Image Grid */}
      <div
        className={`col-span-12 md:col-span-9 grid grid-cols-4 grid-rows-3 gap-2 h-[400px] ${
          reverse ? "md:order-1" : ""
        }`}
      >
        {images.map((img, i) => {
          const classMap = [
            "col-span-2 row-span-2",
            "col-span-2 row-span-1",
            "col-span-2 row-span-1",
            "col-span-2",
            "col-span-2",
          ];
          return (
            <img
              key={i}
              src={img}
              alt={`${title} ${i + 1}`}
              onClick={() => onImageClick(i, images)}
              className={`cursor-pointer object-cover w-full h-full rounded-lg shadow-md hover:scale-105 transition ${
                classMap[i] || "col-span-2"
              }`}
            />
          );
        })}
      </div>
    </div>
  </section>
);

const Modal = ({ images, currentIndex, setCurrentIndex, onClose }) => {
  const image = images[currentIndex];
  const shareURL = encodeURIComponent(window.location.href);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-black rounded-full p-2 z-50"
        >
          <FaTimes size={20} />
        </button>

        {/* Image Number */}
        <div className="absolute top-3 left-4 bg-black text-white px-3 py-1 rounded text-sm z-50">
          Image {currentIndex + 1} of {images.length}
        </div>

        {/* Image Preview and Navigation */}
        <div className="relative flex items-center justify-center bg-black">
          <img
            src={image}
            alt="Preview"
            className="max-h-[70vh] w-full object-contain"
          />

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/60 p-2 rounded-full hover:bg-black"
          >
            <FaArrowLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/60 p-2 rounded-full hover:bg-black"
          >
            <FaArrowRight size={18} />
          </button>
        </div>

        {/* Social Icons */}
        <div className="p-4 bg-white flex justify-center gap-6 text-primary text-xl">
          <a
            href={`https://facebook.com/sharer/sharer.php?u=${shareURL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href={`https://www.instagram.com/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href={`https://wa.me/?text=${shareURL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function GalleryPage() {
  const [modalData, setModalData] = useState({ images: [], index: null });

  const handleImageClick = (index, imageSet) => {
    setModalData({ images: imageSet, index });
  };

  return (
    <div className="bg-white text-black py-10">
      {/* Section Year Heading */}
      <div className="flex justify-center mb-8">
        <div className="bg-primary px-6 py-3 rounded-md shadow-md">
          <h2 className="text-3xl md:text-4xl text-white font-bold">
            2025 - 2026
          </h2>
        </div>
      </div>

      {/* Gallery Sections */}
      {gallerySections.map((section, idx) => (
        <GallerySection
          key={idx}
          title={section.title}
          description={section.description}
          images={section.images}
          reverse={section.reverse}
          onImageClick={handleImageClick}
        />
      ))}

      {/* Modal Popup */}
      {modalData.index !== null && (
        <Modal
          images={modalData.images}
          currentIndex={modalData.index}
          setCurrentIndex={(i) =>
            setModalData((prev) => ({ ...prev, index: i }))
          }
          onClose={() => setModalData({ images: [], index: null })}
        />
      )}
    </div>
  );
}
