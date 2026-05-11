import React from "react";
import logo from "/logo.png"; // Replace with actual path

export default function LogoLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-20 h-20">
        {/* Spinning Dual Ring */}
        <div className="absolute inset-0 rounded-full border-8 border-t-primary border-b-secondary animate-spin" />

        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="Loading..."
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
