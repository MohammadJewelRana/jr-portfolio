import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialMedia = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
    { icon: <FaTwitter />, link: "https://www.twitter.com/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/" },
  ];

  const navigationData = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full   bg-[#0f1117] md:pt-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6">
          {/* Logo */}
          <div>
            <p className="text-xl font-semibold text-main">Jewel</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            {navigationData.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group cursor-pointer transition-colors duration-200 hover:text-main"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 opacity-40" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6">
          {/* Left */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            Copyright © {year} FedIQ. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialMedia.map((social) => (
              <Link
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-2 border border-gray-600 rounded-full transition-colors duration-200 hover:bg-main hover:text-white hover:border-transparent">
                  {social.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
