"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import Image from "next/image";
import image from "@/assets/logo/logo1.jpg";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Project", "Blog"];

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="
      relative 
      border-b border-gray-200
      bg-gradient-to-r from-white via-white to-[#aef3d9]
      backdrop-blur-xl
      "
    >

      {/* LEFT LOGO */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <NextLink href="/" className="flex items-center gap-2">
            <Image src={image} alt="logo" width={32} height={32} />
            <span className="font-bold text-xl text-black">Jewel</span>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* CENTER MENU (DESKTOP) */}
      <NavbarContent justify="center" className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <NavbarItem key={item}>
            <NextLink
              href="#"
              className="
              relative 
              text-black/80 
              font-medium 
              transition-all duration-300
              hover:text-main
              
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0
              after:bg-main
              after:transition-all after:duration-300
              hover:after:w-full
              "
            >
              {item}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* RIGHT SIDE */}
      <NavbarContent justify="end" className="gap-3">

        {/* 🔥 PREMIUM HAMBURGER */}
        <NavbarMenuToggle
          className="
          md:hidden 
          text-black 
          border border-gray-300 
          rounded-full 
          p-2
          transition-all duration-300
          hover:bg-main hover:text-white hover:border-main
          "
        />

        {/* DESKTOP BUTTON */}
        <Button
          className="
          hidden md:flex
          bg-main text-white 
          rounded-full px-6
          transition-all duration-300
          hover:scale-105
          hover:shadow-[0_10px_25px_rgba(40,233,140,0.3)]
          "
        >
          Download CV →
        </Button>

      </NavbarContent>

      {/* 🔥 PREMIUM MOBILE MENU */}
      <NavbarMenu className="pt-10 px-6 bg-white/95 backdrop-blur-xl">

        <div className="flex flex-col gap-6">

          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                href="#"
                className="
                text-xl font-semibold 
                text-black/80
                transition-all duration-300
                hover:text-main
                "
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </NextLink>
            </NavbarMenuItem>
          ))}

          {/* Divider */}
          <div className="border-t border-gray-200 my-4" />

          {/* Button */}
          <Button
            className="
            w-full bg-main text-white 
            rounded-full py-3
            text-base font-medium
            transition-all duration-300
            hover:scale-[1.02]
            hover:shadow-[0_10px_25px_rgba(40,233,140,0.3)]
            "
          >
            Download CV →
          </Button>

        </div>

      </NavbarMenu>

    </HeroUINavbar>
  );
};