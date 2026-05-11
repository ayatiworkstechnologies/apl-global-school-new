// src/components/ScrollToTopButton.jsx
"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return show ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-[99] bg-secondary text-white p-3 rounded-full shadow-md hover:shadow-lg transition"
    >
      <ArrowUpCircle size={28} className="" />
    </button>
  ) : null;
}
