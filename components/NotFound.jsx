"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ComingSoon404() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-primary flex flex-col items-center justify-center text-center px-4 font-secondary">
      {/* âœ… Animated 404 */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl sm:text-8xl md:text-9xl font-bold text-secondary drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* âœ… Coming Soon Animated Text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-white tracking-wide uppercase"
      >
        Coming Soon
      </motion.h2>

      {/* âœ… Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-3 text-sm sm:text-base md:text-lg text-white/90 max-w-md"
      >
        We're working hard to bring you something amazing. Stay tuned!
      </motion.p>

      {/* âœ… Back Home Button */}
      <motion.button
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-3 bg-secondary text-primary font-primary font-semibold rounded-lg shadow hover:bg-secondary/90 hover:shadow-lg transition-all duration-300 uppercase"
      >
        Go Back Home
      </motion.button>
    </div>
  );
}
