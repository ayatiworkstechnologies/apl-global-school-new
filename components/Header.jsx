// Navbar.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About APL",
    dropdown: [
      { label: "About APL", path: "/apl-framework" },
      { label: "Our Promoters", path: "/apl-promoters" },
      { label: "Our Management", path: "/apl-management" },
      { label: "Our Faculty", path: "/apl-faculty" },
      { label: "Our Campus", path: "/apl-campus" },
      { label: "Our Associates", path: "/apl-associates" },
      { label: "APL Awards", path: "/apl-awards" },
      { label: "Our Educational Philosophy", path: "/apl-educational" },
    ],
  },
  {
    label: "APL Academics",
    dropdown: [
      { label: "Academics Curriculum", path: "/apl-curriculum" },
      { label: "Our Programmes", path: "/apl-programmes" },
      { label: "Our Pedagogy", path: "/apl-pedagogy" },
      { label: "Essential Support", path: "/essential-support" },
    ],
  },
  {
    label: "Child - Centered Programs",
    dropdown: [
     
      { label: "Beyond Classroom", path: "/beyond-classrooms" },
      { label: "Expressions Clubs", path: "/expressions-clubs" },
      { label: "APL Events", path: "/apl-events" },
      { label: "Youth Awards", path: "/youth-awards" },
    ],
  },
  { label: "IMS", path: "https://sch.edulip.in/UI/indexAPL.php", external: true },
  {
    label: "Admission",
    dropdown: [
      { label: "Fees and Process", path: "/apl-fees-and-streams" },
      {
        label: "Registration",
        path: "https://sch.edulip.in/UI/Website/APL/RegistrationForm.php",
        external: true,
      },
      { label: "A Day at school", path: "/day-at-school" },
      { label: "Vatsa ", path: "/vatsa" },
    ],
  },
  {
    label: "My School",
    dropdown: [
      { label: "Gallery", path: "/gallery" },
     
      { label: "Testimonials", path: "/testimonials" },
    ],
  },
  {
    label: "Training",
    dropdown: [
      { label: "Teacher Mentor Centre", path: "/teacher" },
      { label: "CIDTL", path: "/cidtl" },
    
    ],
  },
];

const isExternal = (path = "") => /^https?:\/\//i.test(path);

const isActivePath = (pathname = "", href = "") => {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

/** Desktop Dropdown (accessible) */
function DropdownMenu({ label, items, alignRight = false, active = false }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <div
        className={`flex items-center gap-1 cursor-pointer font-primary transition-colors ${
          active ? "text-secondary font-semibold" : "hover:text-secondary"
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      <AnimatePresence >
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full mt-6 w-64 bg-white text-primary rounded-md shadow-2xl p-4 font-secondary  ${
              alignRight ? "right-0" : "left-0"
            }`}
          >
            {items.map((item) =>
              isExternal(item.path) || item.external ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-secondary/20 p-2 rounded-md shadow-3xl"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className={`block p-2 rounded-md hover:bg-secondary/20 ${
                    isActivePath(pathname, item.path)
                      ? "text-secondary font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Parent active highlight if any child matches
  const isParentActive = (dropdown = []) =>
    dropdown.some((d) => !isExternal(d.path) && isActivePath(pathname, d.path));

  const handleLinkClick = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="w-full z-50 sticky top-0 font-secondary">
      <div className="bg-primary text-white shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick} className="shrink-0">
            <img src="/logo.svg" alt="APL Logo" className="h-12" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center font-primary font-medium">
            {navItems.map((item, index) => {
              if (item.dropdown) {
                const active = isParentActive(item.dropdown);
                return (
                  <DropdownMenu
                    key={item.label}
                    label={item.label}
                    items={item.dropdown}
                    active={active}
                    alignRight={index >= navItems.length - 2}
                  />
                );
              }

              if (isExternal(item.path) || item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary font-primary"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={handleLinkClick}
                  className={`relative px-1 transition-colors hover:text-secondary ${
                    isActivePath(pathname, item.path)
                      ? "text-secondary font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-1 rounded hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="md:hidden bg-primary px-4 pb-4 overflow-hidden font-secondary"
            >
              <div className="border-t border-white/30 pt-3">
                {navItems.map((item) => {
                  if (item.dropdown) {
                    const parentActive = isParentActive(item.dropdown);
                    return (
                      <details key={item.label} className="group">
                        <summary
                          className={`flex justify-between py-2 cursor-pointer list-none font-primary ${
                            parentActive ? "text-secondary font-semibold" : ""
                          }`}
                          // prevent page jump due to summary default focusing
                          onClick={(e) => e.preventDefault()}
                          onMouseDown={(e) => {
                            // emulate native toggle without focus jump
                            const el = e.currentTarget.parentElement;
                            if (el && el.hasAttribute("open")) el.removeAttribute("open");
                            else el && el.setAttribute("open", "");
                          }}
                        >
                          {item.label}
                          <ChevronDown className="transition group-open:rotate-180" size={16} />
                        </summary>
                        <ul className="pl-4 text-white/90">
                          {item.dropdown.map((sub) =>
                            isExternal(sub.path) || sub.external ? (
                              <li key={sub.label}>
                                <a
                                  href={sub.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={handleLinkClick}
                                  className="block py-1 hover:text-secondary"
                                >
                                  {sub.label}
                                </a>
                              </li>
                            ) : (
                              <li key={sub.label}>
                                <Link
                                  href={sub.path}
                                  onClick={handleLinkClick}
                                  className={`block py-1 ${
                                    isActivePath(pathname, sub.path)
                                      ? "text-secondary font-semibold"
                                      : ""
                                  }`}
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </details>
                    );
                  }

                  if (isExternal(item.path) || item.external) {
                    return (
                      <a
                        key={item.label}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                        className="block py-2 hover:text-secondary"
                      >
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.path}
                      onClick={handleLinkClick}
                      className={`block py-2 ${
                        isActivePath(pathname, item.path)
                          ? "text-secondary font-semibold"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
