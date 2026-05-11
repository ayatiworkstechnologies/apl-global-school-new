"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

/* ✅ Social links */
const socials = [
  { icon: FaFacebookF, href: "https://facebook.com/aplglobalschool/", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/aplglobalchennai/", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://in.linkedin.com/school/apl-global-school/", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/917338744475", label: "Whatsapp" },
];

export default function SocialIcon() {

  /* 🔹 Social icons */
  const SocialStrip = () => (
    <div className="bg-white flex gap-3 rounded p-2 shadow-md">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="bg-third text-white p-2 rounded hover:scale-110 transition-transform"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );

  /* 🔹 Enquiry button */
  const EnquiryBtn = () => (
    <div className="flex items-center">
      
      {/* ✅ Next Image (correct way) */}
      <Image
        src="/assets/chat-icon.webp"
        alt="Chat icon"
        width={40}
        height={40}
        className="-ml-4 object-contain"
      />

      <button
        onClick={() =>
          (window.location.href =
            "https://sch.edulip.in/UI/Website/APL/RegistrationForm.php")
        }
        type="button"
        className="h-12 px-3 text-sm md:text-base font-semibold text-white rounded-lg bg-gradient-to-r from-purple-700 to-pink-500 shadow hover:opacity-90"
      >
        Register your child
      </button>
    </div>
  );

  return (
    <>
      {/* ✅ Desktop */}
      <div className="hidden md:flex absolute bottom-6 left-2 items-center gap-6 z-10">
        <SocialStrip />
        <EnquiryBtn />
      </div>

      {/* ✅ Mobile */}
      <div className="flex flex-col items-center md:hidden mt-6 gap-4">
        <SocialStrip />
        <EnquiryBtn />
      </div>
    </>
  );
}