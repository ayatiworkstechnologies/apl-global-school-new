import React, { useState } from "react";
import VideoGallery from "./VideoGallery";
import APLPODCAST from "./APLPodcast";
import GalleryPage from "./gallerySection";


export default function MySchoolGallery() {
  const [activeTab, setActiveTab] = useState("Photos");
  const tabs = ["Photos", "Videos", "Podcasts"];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      {/* ✅ Page Title */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-primary mb-8">
        My School Gallery
      </h2>

      {/* ✅ Tabs */}
      <div className="flex flex-wrap justify-center gap-10 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg text-sm sm:text-base md:text-lg font-primary font-semibold border-2 transition-all duration-300 uppercase
              ${
                activeTab === tab
                  ? "bg-primary text-secondary border-primary"
                  : "text-primary border-primary hover:bg-primary hover:text-white"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ✅ Tab Content */}
      <div>
        {activeTab === "Photos" && <GalleryPage />}
        {activeTab === "Videos" && <VideoGallery />}
        {activeTab === "Podcasts" && <APLPODCAST />}
      </div>
    </section>
  );
}
