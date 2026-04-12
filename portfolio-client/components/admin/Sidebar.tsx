"use client";

import Link from "next/link";
import {
  FaTachometerAlt,
  FaBriefcase,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function Sidebar({ open, setOpen }: Props) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static z-50 top-0 left-0 h-screen w-64
        bg-[#0F172A] border-r border-white/5
        flex flex-col justify-between
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Top */}
        <div>
          <div className="px-6 py-5 border-b border-white/5">
            <h2 className="text-lg font-bold tracking-wide">
              QuickHire
            </h2>
          </div>

          <nav className="p-4 space-y-2">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 rounded-lg
              text-slate-400 hover:bg-white/5 hover:text-white transition"
            >
              <FaTachometerAlt />
              Dashboard
            </Link>

            <Link
              href="/admin/project"
              className="flex items-center gap-3 px-4 py-3 rounded-lg
              text-slate-400 hover:bg-white/5 hover:text-white transition"
            >
              <FaBriefcase />
              Project
            </Link>

            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg
              text-slate-400 hover:bg-white/5 hover:text-white transition"
            >
              <FaUsers />
              Users
            </Link>
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 p-4 space-y-3">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5">
            <div className="w-10 h-10 rounded-full 
            bg-gradient-to-r from-indigo-500 to-purple-600
            flex items-center justify-center font-semibold">
              A
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-slate-400">admin@email.com</p>
            </div>
          </div>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg
          text-slate-400 hover:bg-white/5 hover:text-white transition">
            <FaCog />
            Settings
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg
          text-red-400 hover:bg-red-500/10 transition">
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}