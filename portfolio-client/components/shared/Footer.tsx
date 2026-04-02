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

  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <hr className="my-4" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
          {/* Left */}
          <p className="text-sm text-gray-600">
            Copyright © {year} FedIQ. All rights reserved.
          </p>

          {/* Right Icons */}
          <div className="flex gap-6">
            {socialMedia.map((social) => (
              <Link
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-2 border border-gray-600 rounded-full cursor-e-resize transition-colors duration-200 hover:bg-main hover:text-white hover:border-transparent">
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
