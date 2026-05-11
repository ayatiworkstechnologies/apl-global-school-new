"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FcCellPhone } from "react-icons/fc";
import { IoIosPhonePortrait } from "react-icons/io";

export default function ContactSection() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });

  return (
    <footer className="w-full bg-primary text-white font-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* ✅ Admission Enquiries */}
        <motion.div
          {...fadeUp(0)}
          className="space-y-4 bg-primary/90 p-5 rounded-xl border border-secondary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="text-xl font-primary font-semibold text-secondary">
            Admission Enquiries
          </h3>
          <p className="flex items-center gap-3 text-sm sm:text-base">
            <Phone className="w-5 h-5 text-secondary" />
            <a
              href="tel:04440761199"
              className="hover:text-secondary transition-colors"
            >
              (044) 4076 1199
            </a>

            <IoIosPhonePortrait className="w-5 h-5 text-secondary" />
            <a
              href="tel:7338744475"
              className="hover:text-secondary transition-colors"
            >
              73387 44475
            </a>
          </p>

          <p className="flex items-center gap-3 text-sm sm:text-base">
            <Mail className="w-5 h-5 text-secondary" />
            <a
              href="mailto:admission@apl.edu.in"
              className="hover:underline hover:text-secondary transition"
            >
              admission@apl.edu.in
            </a>
          </p>
          <p className="flex items-center gap-3 text-sm sm:text-base">
            <Globe className="w-5 h-5 text-secondary" />
            <a
              href="https://www.aplglobalschool.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:text-secondary transition"
            >
              www.aplglobalschool.com
            </a>
          </p>
        </motion.div>

        {/* ✅ General Enquiries */}
        <motion.div
          {...fadeUp(0.2)}
          className="space-y-4 bg-primary/90 p-5 rounded-xl border border-secondary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="text-xl font-primary font-semibold text-secondary">
            General Enquiries
          </h3>
          <p className="flex items-center gap-3 text-sm sm:text-base">
            <Phone className="w-5 h-5 text-secondary" />
            <a
              href="tel:04440761199"
              className="hover:text-secondary transition-colors"
            >
              (044) 4076 1199
            </a>
          </p>
          <p className="flex items-center gap-3 text-sm sm:text-base">
            <Mail className="w-5 h-5 text-secondary" />
            <a
              href="mailto:admin@apl.edu.in"
              className="hover:underline hover:text-secondary transition"
            >
              admin@apl.edu.in
            </a>
          </p>
        </motion.div>

        {/* ✅ Location & Office Hours */}
        <motion.div
          {...fadeUp(0.4)}
          className="space-y-4 bg-primary/90 p-5 rounded-xl border border-secondary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="text-xl font-primary font-semibold text-secondary">
            Location
          </h3>
          <a
            href="https://maps.app.goo.gl/zqQzcRLxywQfhbY5A"
            target="_blank"
            rel="noreferrer"
          >
            <p className="flex items-start gap-3 text-sm sm:text-base hover:text-secondary transition">
              <MapPin className="w-5 h-5 text-secondary mt-1" />
              <span>
                No 697/3, Anand Nagar Main Road, <br />
                Thoraipakkam, Chennai 600 097, India
              </span>
            </p>
          </a>
          <div className="text-sm sm:text-base">
            <p className="text-secondary font-semibold font-primary">
              Office Open Hours
            </p>
            <p>Monday to Friday: 7.30 AM – 3 PM</p>
            <p>Saturday: 9 AM – 12 PM</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
