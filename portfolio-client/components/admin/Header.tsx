"use client";

import { FaBars, FaBell } from "react-icons/fa";
import { HiOutlineMoon } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

interface Props {
  setOpen: (value: boolean) => void;
}

export default function Header({ setOpen }: Props) {
  return (
    <header className="sticky top-0 z-30 
    backdrop-blur-md bg-[#0F172A]/80 
    border-b border-white/5 
    px-6 py-4 flex items-center justify-between">
      
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-slate-400 hover:text-white"
        >
          <FaBars size={20} />
        </button>

        <h1 className="text-lg font-semibold tracking-wide">
          Dashboard
        </h1>
      </div>

      {/* Center */}
      <div className="hidden md:flex items-center 
      bg-[#111C2D] border border-white/5 
      rounded-lg px-3 py-2 w-72">
        <IoSearch className="text-slate-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full 
          placeholder:text-slate-500"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <HiOutlineMoon
          className="cursor-pointer text-slate-400 hover:text-white"
          size={20}
        />

        <div className="relative">
          <FaBell
            className="cursor-pointer text-slate-400 hover:text-white"
            size={18}
          />
          <span className="absolute -top-2 -right-2 
          bg-indigo-600 text-xs w-5 h-5 
          flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        <div className="w-9 h-9 rounded-full 
        bg-gradient-to-r from-indigo-500 to-purple-600
        flex items-center justify-center font-semibold shadow-lg">
          A
        </div>
      </div>
    </header>
  );
}