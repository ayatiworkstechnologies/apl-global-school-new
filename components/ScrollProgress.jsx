// src/components/ScrollProgress.jsx
"use client";

import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      <div
        className="h-1 bg-secondary transition-all duration-200 ease-linear"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}
