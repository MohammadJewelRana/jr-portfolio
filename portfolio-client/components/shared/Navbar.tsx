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
import image from "@/assets/logo/logo.png";

import { useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
      
      bg-[linear-gradient(90deg,#0c0f14_0%,#0c0f14_40%,rgba(0,255,150,0.08)_100%)]
      
      shadow-[0_6px_25px_rgba(0,0,0,0.4)]
      
      before:absolute before:top-0 before:left-0 before:w-full before:h-[1px]
      before:bg-gradient-to-r before:from-transparent before:via-main/40 before:to-transparent
      
      transition-all duration-300
      "
    >
      {/* 🔹 LOGO */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <NextLink href="/" className="flex items-center gap-2">
            <Image
              src={image}
              alt="logo"
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* 🔹 DESKTOP MENU */}
      <NavbarContent justify="center" className="hidden md:flex gap-10">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <NavbarItem key={item.name}>
              <NextLink
                href={item.href}
                className={`
relative text-sm font-semibold tracking-wide
transition-all duration-300

${isActive ? "text-main" : "text-white/70 hover:text-main"}

after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0
after:bg-main
after:shadow-[0_0_10px_rgba(0,255,150,0.6)]
after:transition-all after:duration-300

hover:after:w-full
`}
              >
                {item.name}
              </NextLink>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      {/* 🔹 RIGHT SIDE */}
      <NavbarContent justify="end" className="gap-3">
        {/* 🔥 HAMBURGER */}
        <NavbarMenuToggle
          className="
          md:hidden 
          text-white
          p-2.5
          rounded-md
          transition-all duration-300
          hover:bg-white/10
          "
        />

        {/* CTA */}
        <Button
          className="
          hidden md:flex
          bg-main
          text-white 
          rounded-full px-6 py-2
          text-sm font-semibold
          
          transition-all duration-300
          hover:scale-105
          hover:shadow-[0_10px_25px_rgba(0,255,150,0.3)]
          "
        >
          Download CV
        </Button>
      </NavbarContent>

      {/* 🔹 MOBILE MENU */}
      <NavbarMenu
        className="
        pt-20 px-6 
        
        bg-[#0c0f14]
        
        min-h-screen
      "
      >
        <div className="flex flex-col gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <NavbarMenuItem key={item.name}>
                <NextLink
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                  text-lg font-medium
                  
                  ${isActive ? "text-main" : "text-white/80 hover:text-main"}
                  `}
                >
                  {item.name}
                </NextLink>
              </NavbarMenuItem>
            );
          })}

          <Button
            className="
            w-full 
            bg-main
            text-white 
            rounded-full py-2
            font-medium
            
            transition-all duration-300
            hover:scale-[1.05]
            "
          >
            Download CV
          </Button>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
