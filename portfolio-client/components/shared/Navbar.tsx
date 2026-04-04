"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import Image from "next/image";
import image from "@/assets/logo/logo1.jpg";

export const Navbar = () => {
  const navItems = ["Home", "About Us", "Pages", "Blog", "Contact Me"];

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-white/70 backdrop-blur-xl border-b border-gray-200"
    >
      {/* Logo */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <NextLink href="/" className="flex items-center gap-2">
            <Image src={image} alt="logo" width={30} height={30} />
            <span className="font-bold text-xl">Xiomi</span>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Center Menu */}
      <NavbarContent justify="center" className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <NavbarItem key={item}>
            <NextLink
              href="#"
              className="text-gray-600 hover:text-main transition"
            >
              {item}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Button */}
      <NavbarContent justify="end">
        <Button className="bg-black text-white rounded-full px-6">
          Hire Me →
        </Button>
      </NavbarContent>
    </HeroUINavbar>
  );
};