"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaStar, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import img from "@/assets/hero/jewel_rana.jpg";
import { useCreateContact } from "@/store/hooks/contact.hook";
import toast from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const { create, isLoading } = useCreateContact();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    await create(formData);

    e.target.reset();
  };
  return (
    <div id="contact" className="py-16 bg-[#1C1D20] text-white ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT (UNCHANGED) */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-main text-sm px-4 py-1.5 rounded-full border border-main bg-main/10">
            <FaStar />
            <span>Stay connected</span>
          </div>

          <h1 className="text-3xl sm:text-2xl md:text-4xl font-bold leading-snug py-4 max-w-lg">
            Let’s Work Together on Your Next Project
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
            I’m a Full Stack Developer focused on building scalable and
            user-friendly applications. Feel free to reach out for
            collaboration, freelance work, or any project ideas.
          </p>

          <div className="flex items-start gap-4 pt-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-main">
              <Image src={img} alt="Jewel Rana" className="object-cover" />
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <p className="text-gray-400 text-sm">Call Now</p>
                <p className="font-semibold text-lg flex items-center gap-2">
                  <FaPhoneAlt className="text-main text-sm" />
                  +880 1533850435
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-semibold text-lg flex items-center gap-2">
                  <FaEnvelope className="text-main text-sm" />
                  js.rana0326@email.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM (ONLY FUNCTIONALITY ADDED) */}
        <form
          onSubmit={handleSubmit}
          className="border border-main rounded-2xl p-6 sm:p-8 bg-[#1C1D20] shadow-[0_0_40px_rgba(40,233,140,0.15)]"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">
            Get In Touch
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-sm outline-none focus:border-main transition"
              />

              <input
                name="phone"
                type="text"
                placeholder="Enter Your Number"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-sm outline-none focus:border-main transition"
              />
            </div>

            <input
              name="email"
              required
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-sm outline-none focus:border-main transition"
            />

            <textarea
              name="message"
              required
              rows={4}
              placeholder="Enter Your Message"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-sm outline-none focus:border-main transition"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              mt-6 w-full 
              py-3 
              rounded-full 
              bg-main text-black 
              font-medium 
              text-sm sm:text-base
              transition-all duration-300
              hover:scale-105 
              hover:shadow-[0_10px_30px_rgba(40,233,140,0.4)] 
              cursor-pointer
              disabled:opacity-50
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
