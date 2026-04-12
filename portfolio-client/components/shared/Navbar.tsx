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
// import image from "@/assets/logo/favicon.png";
import image from "@/assets/logo/logo.png";
 

import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/project" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="
      
      fixed top-0 left-0 w-full z-50
      
      bg-white/10 
      backdrop-blur-xl
      
      border-b border-white/20
      
      shadow-[0_8px_30px_rgba(0,0,0,0.05)]
      
      before:absolute before:inset-0
      before:bg-gradient-to-r 
      before:from-white/20 
      before:via-transparent 
      before:to-white/20
      before:opacity-40
      "
    >
      {/* 🔹 LOGO */}
<NavbarContent justify="start">
  <NavbarBrand>
    <NextLink href="/" className="flex items-center gap-2">
      <Image
        src={image}
        alt="logo"
        width={150}
        height={50}
        className="h-10 w-auto object-contain rounded-sm"
        priority
      />
    </NextLink>
  </NavbarBrand>
</NavbarContent>

      {/* 🔹 DESKTOP MENU */}
      <NavbarContent justify="center" className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <NavbarItem key={item.name}>
            <NextLink
              href={item.href}
              className="
              relative 
            text-main
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
              {item.name}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* 🔹 RIGHT SIDE */}
      <NavbarContent justify="end" className="gap-3">
        {/* MOBILE TOGGLE */}
        <NavbarMenuToggle
          className="
          md:hidden 
          text-black 
          border border-white/30 
          rounded-full 
          p-2
          backdrop-blur-md
          transition-all duration-300
          hover:bg-main hover:text-white
          "
        />

        {/* CTA */}
        <Button
          className="
          hidden md:flex
          bg-main text-white 
          rounded-full px-6
          font-semibold
          transition-all duration-300
          hover:scale-105
          hover:shadow-[0_10px_25px_rgba(40,233,140,0.3)]
          "
        >
          Download CV →
        </Button>
      </NavbarContent>

      {/* 🔹 MOBILE MENU */}
      <NavbarMenu
        className="
        pt-16 px-6 
        
        bg-white/30 
        backdrop-blur-2xl
        
        min-h-screen
      "
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <NavbarMenuItem key={item.name}>
              <NextLink
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="
                text-2xl font-semibold 
                text-black/80
                transition-all duration-300
                hover:text-main
                "
              >
                {item.name}
              </NextLink>
            </NavbarMenuItem>
          ))}

          <div className="border-t border-white/30 my-4" />

          <Button
            className="
            w-full bg-main text-white 
            rounded-full py-3
            text-base font-semibold
            transition-all duration-300
            hover:scale-[1.03]
            "
          >
            Download CV →
          </Button>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
