import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-primary pt-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-10">
        {/* âœ… Left - Logo */}
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <img src="/assets/logo.svg" alt="APL Logo" className="h-12 md:h-16" />
          </Link>
        </div>

        {/* âœ… Center - Links + Social */}
        <div className="text-center">
          <ul className="flex flex-wrap justify-center gap-6 mb-4 font-secondary font-semibold text-sm md:text-base">
            <li>
              <Link href="/apl-framework" className="hover:text-secondary">
                About APL
              </Link>
            </li>
            <li>
              <Link href="/apl-programmes" className="hover:text-secondary">
                APL Academics
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-secondary">
                FAQ's
              </Link>
            </li>

            <li>
              <Link href="/photo-gallery" className="hover:text-secondary">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/careers/" className="hover:text-secondary">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-secondary">
                Contact us
              </Link>
            </li>
          </ul>

          {/*  Social Media */}
          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com/aplglobalschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-2 rounded-md"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/aplglobalchennai/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-2 rounded-md"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://in.linkedin.com/school/apl-global-school/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-2 rounded-md"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://wa.me/917338744475"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-2 rounded-md"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* âœ… Right - Books Image */}
        <div className="mt-4 md:mt-0 px-10">
          <img src="/assets/book.svg" alt="Books" className="h-20 md:h-24" />
        </div>
      </div>

      {/* âœ… Footer Background */}
      <div className="bg-[url('/bg-footer.svg')] bg-cover bg-center lg:h-7 md:h-7 h-4"></div>

      {/* âœ… Bottom Copyright */}
      <div className="bg-primary p-4 text-center">
        <p className="text-sm font-semibold text-white">
          Copyright &copy; {new Date().getFullYear()}. APL Global School | All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
