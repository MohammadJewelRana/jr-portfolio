import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

import logo from "@/assets/logo/logo.png";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  // ✅ UPDATED SOCIAL
  const socialMedia = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/profile.php?id=100011573768588",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/md-jewel-rana-05808b273",
    },
    { icon: <FaGithub />, link: "https://github.com/MohammadJewelRana" },
    { icon: <FaEnvelope />, link: "mailto:js.rana0326@gmail.com" },
  ];

  // ✅ NAV
  const navigationData = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <footer className="w-full bg-[#1C1D20] md:pt-4 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6">
          {/* Logo */}
          <div>
            <Image
              src={logo}
              alt="logo"
              width={120}
              height={60}
              className="h-12 w-auto object-contain rounded-[4px]"
            />
          </div>

          {/* ✅ Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            {navigationData.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group cursor-pointer transition-all duration-300 hover:text-main"
              >
                {item.label} 

                {/* 🔥 underline hover */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-main transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 opacity-40" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6">
          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {year} Md. Jewel Rana. All rights reserved.
          </p>

          {/* ✅ Social Icons */}
          <div className="flex gap-4">
            {socialMedia.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target={social.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <div className="p-2 border border-gray-600 rounded-full transition-all duration-300 hover:bg-main hover:text-black hover:border-transparent hover:scale-110">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
