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
import img1 from "/assets/Gallery/sportsday_1.webp";
import img2 from "/assets/Gallery/sportsday_2.webp";
import img3 from "/assets/Gallery/sportsday_3.webp";
import img4 from "/assets/Gallery/sportsday_4.webp";
import img5 from "/assets/Gallery/sportsday_5.webp";
import img6 from "/assets/Gallery/invsting_cermony_1.webp";
import img7 from "/assets/Gallery/invsting_cermony_2.webp";
import img8 from "/assets/Gallery/invsting_cermony_3.webp";
import img9 from "/assets/Gallery/invsting_cermony_4.webp";
import img10 from "/assets/Gallery/invsting_cermony_5.webp";

const gallerySections = [
  {
    title: "Sports Day",
    description:
      "Celebrating the spirit of sportsmanship and teamwork. Sports Day was a grand success with races, relays, and smiles all around.",
    images: [img1, img2, img3, img4, img5],
  },
  {
    title: "Cultural Fest",
    description:
      "An explosion of color, talent, and tradition. Our Cultural Fest showcased the vibrant heritage and creativity of our students.",
    images: [img6, img7, img8, img9, img10],
    reverse: true,
  },
];

const GallerySection = ({ title, description, images, reverse = false, onImageClick }) => (
  <section className="py-12 px-4 md:px-10">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
      {/* Text Section */}
      <div
        className={`col-span-12 md:col-span-3 space-y-4 text-center md:text-left ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
        <p className="text-gray-700">{description}</p>
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
              className={`cursor-pointer object-cover w-full h-full rounded-lg shadow-md hover:scale-105 transition ${classMap[i] || "col-span-2"}`}
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
    <div className="bg-white text-black">
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
