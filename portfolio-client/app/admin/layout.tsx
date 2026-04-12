"use client";

import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { ReactNode, useState } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex min-h-screen 
    bg-gradient-to-br from-[#0B1120] via-[#0E1629] to-[#0B1120] 
    text-slate-100"
    >
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex flex-col flex-1">
        <Header setOpen={setOpen} />
        <main className="flex-1 p-6 md:p-10">{children}</main>
      </div>
    </div>
  );
}
