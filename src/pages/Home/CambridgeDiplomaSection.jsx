"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ FIX

export default function CambridgeDiplomaSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const router = useRouter(); // ✅ FIX

  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-16 bg-white overflow-hidden">
      
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-third mb-10">
        Centre for Cambridge International Diploma
        <br className="hidden sm:block" />
        in Teaching and Learning - CIDTL
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <img
            src="/assets/cambridge-logo.jpg"
            alt="Cambridge"
            className="w-full max-w-md object-contain"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm sm:text-base font-secondary mb-4">
            APL Global is an accredited centre for the Cambridge International
            Diploma in Teaching and Learning (CIDTL).
          </p>

          {/* ✅ FIXED BUTTON */}
          <button
            onClick={() => router.push("/teacher")}
            className="px-6 py-2 bg-secondary text-white rounded uppercase"
          >
            Know More
          </button>
        </motion.div>

      </div>
    </section>
  );
}