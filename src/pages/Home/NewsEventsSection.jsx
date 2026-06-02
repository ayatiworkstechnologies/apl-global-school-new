"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Calendar } from "lucide-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CertificatesCarousel from "./CertificatesCarousel";

// ─── Leaflet CSS Injection ───────────────────────────────────────────────────
const LEAFLET_CSS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
function injectLeafletCSS() {
  if (typeof document === "undefined") return;
  if (document.querySelector(`link[href="${LEAFLET_CSS}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = LEAFLET_CSS;
  document.head.appendChild(link);
}

/* ---------------- Main Data Object ---------------- */
const data = {
  Affiliations: [],

  News: [
    {
      title: "Swiss Certification Council",
      date: "",
      image: "/assets/gita.jpeg",
      description: "We’re proud to welcome Gita Jagannathan, a renowned cultural psychologist and long-standing advocate for inclusive education, to the SWISS Certification Council at My Safe Spaces. With decades of experience working at the intersection of culture, learning, and student development, she has been instrumental in shaping inclusive learning environments that recognise every child’s emotional and social needs - not just academic outcomes.",
      link: "/apl-awards",
    },
    {
      title: "School awards",
      date: "",
      image: "/assets/events/school-award.jpg",
      description: "Awards are recognitions that demonstrate exceptional achievements in the fields of education, innovation, and holistic development. APL has been recognised in different areas for consistently striving for academic excellence.",
      link: "/apl-awards",
    },
    {
      title: "Cambridge Learners awards",
      date: "",
      image: "/assets/cambridge.webp",
      description: "Outstanding Cambridge Learner Awards are a group of awards issued by Cambridge International Education, that recognise exceptional achievement in Cambridge exams around the world.",
      link: "/apl-awards",
    },
    {
      title: "Special mention",
      date: "",
      image: "/assets/children-day.webp",
      description: "We take pride in celebrating our students’ grit, focus, and determination reflected in their remarkable achievements. Whether in sports, literary pursuits, or innovative endeavors.",
      link: "/apl-awards",
    },
  ],

  Events: [
    { title: "Investiture Ceremony", image: "/assets/investiture-ceremony.webp", description: "A formal event where student leaders are inducted into their roles, taking an oath to uphold school values and lead by example." },
    { title: "APL MUN", image: "/assets/apl-mun.webp", description: "Students engage in simulated United Nations discussions, honing diplomatic thinking and public speaking skills." },
    { title: "Synergy", image: "/assets/synergy.jpg", description: "A celebration of the English language through drama, poetry, and compelling stage performances." },
    { title: "Cultural Evening", image: "/assets/cultural-evening.jpg", description: "A vibrant conglomeration of music, art, drama and speech that showcases student creativity." },
    { title: "HUCOMTEK", image: "/assets/hucomtek.webp", description: "An interdisciplinary showcase where technology meets the humanities with student-led creations." },
    { title: "Sports Day", image: "/assets/sports-day.webp", description: "A high-powered annual meet where houses compete in track and field, team games, and relays." },
    { title: "Swadeshi Week", image: "/assets/swadeshi.png", description: "A week-long August celebration, buzzing with activities appreciating local craft and culture." },
    { title: "Aspire", image: "/assets/aspire.png", description: "Experiential field trips that bring classroom learning to life with hands-on exploration." },
    { title: "Meraki Fair", image: "/assets/meraki-fair.jpg", description: "An exhibition of creativity where students present projects, inventions, and innovations." },
    { title: "Talent Show", image: "/assets/talent-show.jpg", description: "A fun-filled platform for singing, dance, magic, and unique talents to shine." },
    { title: "Children’s Day", image: "/assets/children’s-day.jpg", description: "A joyful day celebrating childhood with games, performances, and special assemblies." },
    { title: "Inter school Sports Day", image: "/assets/inter-school-sports-day.jpg", description: "Students from different schools compete, showcasing athleticism, teamwork, and spirit." },
  ],
  
  Alumni: [] 
};

/* ---------------- Alumni Detailed Data ---------------- */
const indiaData = [
  { city: "Chennai", count: 61, lat: 13.08, lng: 80.27, universities: ["SRM University", "Loyola College", "University of Madras", "Anna University", "NIFT", "Stella Maris", "WCC", "Ethiraj College", "SSN", "Saveetha University", "Vels University", "Madras Christian College"] },
  { city: "Pune", count: 24, lat: 18.52, lng: 73.86, universities: ["FLAME University", "Symbiosis International", "MIT-WPU", "Christ Lavasa", "MIT Pune"] },
  { city: "Bengaluru", count: 20, lat: 12.97, lng: 77.59, universities: ["Jain University", "Christ University", "IISc", "Azim Premji University", "Srishti Manipal", "Mount Carmel College", "NIFT"] },
  { city: "Manipal", count: 18, lat: 13.35, lng: 74.78, universities: ["Manipal University", "MAHE", "Welcomegroup GS of Hotel Administration"] },
  { city: "Mumbai", count: 5, lat: 19.08, lng: 72.88, universities: ["Whistling Woods International", "Amity University", "Atlas Skilltech University (ISDI)"] },
  { city: "Coimbatore", count: 5, lat: 11.02, lng: 76.96, universities: ["PSG College", "TNAU", "DJ Academy", "PSGR Krishnamaal"] },
  { city: "Haryana", count: 5, lat: 28.80, lng: 76.60, universities: ["Ashoka University", "OP Jindal Global University", "Jindal Global Law School"] },
  { city: "New Delhi", count: 4, lat: 28.61, lng: 77.21, universities: ["NIFT", "National Law University", "IIAD"] },
];

const abroadData = [
  { country: "USA", count: 108, lat: 39.5, lng: -98.35, universities: ["NYU", "Purdue", "UC Berkeley", "UCLA", "Cornell", "Johns Hopkins", "UIUC", "Georgia Tech", "UPenn", "Boston University"] },
  { country: "UK", count: 46, lat: 54.5, lng: -3.0, universities: ["UCL", "Imperial College London", "Warwick", "Oxford", "Cambridge", "King's College London", "University of Edinburgh"] },
  { country: "Singapore", count: 24, lat: 1.35, lng: 103.82, universities: ["NUS", "NTU", "SMU", "LASALLE College of Arts", "Nanyang Academy of Fine Arts"] },
  { country: "Canada", count: 17, lat: 56.13, lng: -106.35, universities: ["University of Toronto", "UBC", "Waterloo", "York University", "McGill University"] },
  { country: "Australia", count: 14, lat: -27.0, lng: 133.0, universities: ["University of Melbourne", "ANU", "UNSW", "Monash University", "University of Sydney"] },
  { country: "UAE", count: 4, lat: 24.45, lng: 54.38, universities: ["NYU Abu Dhabi", "Manipal Dubai", "RIT Dubai"] },
];

// ─── Alumni Component ─────────────────────────────────────────────────────────
function AlumniTab() {
  const [mapTab, setMapTab] = useState("india");
  const mapRef = useRef(null);
  const instanceRef = useRef(null);

  // APL Pure Colors
  const brandBlue = "#8167A0"; // Primary
  const brandGold = "#C3D452"; // Secondary

  useEffect(() => {
    injectLeafletCSS();
    async function initMap() {
      const L = (await import("leaflet")).default;
      if (instanceRef.current) { instanceRef.current.remove(); instanceRef.current = null; }
      if (!mapRef.current) return;

      const isIndia = mapTab === "india";
      const map = L.map(mapRef.current, { center: isIndia ? [22, 82] : [30, 10], zoom: isIndia ? 5 : 2, scrollWheelZoom: false });
      instanceRef.current = map;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png").addTo(map);

      const markerData = isIndia ? indiaData : abroadData;
      const activeColor = isIndia ? brandBlue : brandGold;

      markerData.forEach((d) => {
        const circle = L.circleMarker([d.lat, d.lng], {
          radius: 9 + (d.count / 20), // Medium size
          fillColor: activeColor,
          color: "#fff", 
          weight: 1.5, 
          fillOpacity: 0.9
        }).addTo(map);

        circle.bindPopup(`
          <div style="font-family: 'Inter', sans-serif; min-width:180px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid ${activeColor}; padding-bottom:6px; margin-bottom:8px;">
              <b style="font-size:13px; color:${activeColor};">${d.city || d.country}</b>
              <span style="background:${activeColor}; color:#fff; padding:1px 6px; border-radius:3px; font-size:10px; font-weight:bold;">${d.count}</span>
            </div>
            <ul style="margin:0; padding:0; list-style:none; font-size:11px; color:#333; line-height: 1.5;">
              ${d.universities.slice(0, 6).map(u => `<li style="display:flex; align-items:start; margin-bottom:4px;"><span style="color:${activeColor}; margin-right:6px; font-size:10px;">▶</span> <span>${u}</span></li>`).join('')}
            </ul>
          </div>
        `);
      });
    }
    initMap();
  }, [mapTab]);

  const indiaTotal = indiaData.reduce((s, d) => s + d.count, 0);
  const abroadTotal = abroadData.reduce((s, d) => s + d.count, 0);

  return (
    <div className="w-full relative z-0">
      {/* Stats Dashboard - Dynamic border and text based on tab */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className={`bg-white border-l-4 rounded-xl p-5 shadow-sm text-center ${mapTab === 'india' ? 'border-primary' : 'border-secondary'}`}>
          <p className={`text-3xl font-bold ${mapTab === 'india' ? 'text-primary' : 'text-secondary'}`}>{indiaTotal + abroadTotal}</p>
          <p className="text-xs text-gray-500 uppercase font-semibold tracking-widest mt-1">Total Alumni</p>
        </div>
        <div className={`bg-white border-l-4 rounded-xl p-5 shadow-sm text-center ${mapTab === 'india' ? 'border-primary' : 'border-gray-200'}`}>
          <p className={`text-3xl font-bold ${mapTab === 'india' ? 'text-primary' : 'text-gray-400'}`}>{indiaTotal}</p>
          <p className="text-xs text-gray-500 uppercase font-semibold tracking-widest mt-1">In India</p>
        </div>
        <div className={`bg-white border-l-4 rounded-xl p-5 shadow-sm text-center ${mapTab === 'abroad' ? 'border-secondary' : 'border-gray-200'}`}>
          <p className={`text-3xl font-bold ${mapTab === 'abroad' ? 'text-secondary' : 'text-gray-400'}`}>{abroadTotal}</p>
          <p className="text-xs text-gray-500 uppercase font-semibold tracking-widest mt-1">In Abroad</p>
        </div>
      </div>

      {/* Region Switcher */}
      <div className="flex gap-3 mb-5">
        <button 
          onClick={() => setMapTab("india")} 
          className={`flex-1 py-3 rounded-xl text-sm font-bold uppercase transition-all border-2 ${mapTab === "india" ? "bg-primary border-primary text-white shadow-lg" : "bg-white border-gray-100 text-gray-500 hover:border-primary"}`}
        >
           India
        </button>
        <button 
          onClick={() => setMapTab("abroad")} 
          className={`flex-1 py-3 rounded-xl text-sm font-bold uppercase transition-all border-2 ${mapTab === "abroad" ? "bg-secondary border-secondary text-white shadow-lg" : "bg-white border-gray-100 text-gray-500 hover:border-secondary"}`}
        >
          🌍 Global
        </button>
      </div>

      <div ref={mapRef} className="w-full rounded-2xl border-2 border-white shadow-xl bg-gray-100 relative z-0" style={{ height: 480 }} />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function NewsEventsTabs() {
  const [activeTab, setActiveTab] = useState("Affiliations");
  const tabs = Object.keys(data);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full bg-gray-50 py-16 font-secondary relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Tab Bar */}
        <div className="mb-10 overflow-x-auto no-scrollbar relative z-20">
          <div className="flex items-center gap-4 min-w-max">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-primary uppercase text-sm font-bold tracking-wider transition-all duration-300 border-2 ${
                  activeTab === tab
                    ? "bg-primary border-primary text-white shadow-xl"
                    : "bg-white border-gray-100 text-gray-500 hover:border-primary hover:text-primary"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Heading Section */}
        <div className="mb-8 flex items-end justify-between border-b border-gray-200 pb-6 relative z-10">
          <div>
            <motion.h2
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-4xl uppercase font-primary font-black text-primary"
            >
              {activeTab === "Alumni" ? "Alumni" : activeTab}
            </motion.h2>
            <div className={`w-20 h-2 mt-2 rounded-full ${activeTab === 'Alumni' && data.Alumni ? 'bg-secondary' : 'bg-secondary'}`} />
          </div>

          {activeTab !== "Affiliations" && activeTab !== "Alumni" && (
            <div className="flex items-center gap-3">
              <button ref={prevRef} className="grid place-items-center h-12 w-12 rounded-full bg-white border-2 border-primary text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
                <FaArrowLeft className="h-5 w-5" />
              </button>
              <button ref={nextRef} className="grid place-items-center h-12 w-12 rounded-full bg-white border-2 border-primary text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
                <FaArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 relative z-0">
          {activeTab === "Affiliations" ? (
            <CertificatesCarousel />
          ) : activeTab === "Alumni" ? (
            <AlumniTab />
          ) : (
            <Swiper
              key={activeTab}
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              pagination={{ clickable: true, dynamicBullets: true }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{}}
              className="pb-12"
            >
              {data[activeTab].map((item, i) => (
                <SwiperSlide key={i}>
                  <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col">
                    <div className="relative w-full h-56 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      {item.date && <p className="flex items-center text-xs font-bold text-secondary mb-3 uppercase tracking-tighter"><Calendar className="w-4 h-4 mr-2" />{item.date}</p>}
                      <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.description.slice(0, 120)}...</p>
                      <Link href={activeTab === "Events" ? "/gallery" : (item.link || "/apl-awards")} className="mt-auto inline-flex items-center text-sm font-black text-primary group uppercase tracking-widest">
                        Read More <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
                      </Link>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
