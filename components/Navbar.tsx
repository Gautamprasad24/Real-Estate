"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    "Home",
    "About",
    "Projects",
    "Services",
    "Contact"
  ];

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="bg-[#F26730] text-white px-6 py-4 flex justify-between items-center">

        {/* LOGO IMAGE */}
        <Link href="/">
          <Image
            src="/logo.avif"
            alt="Keystone Logo"
            width={160}
            height={50}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 uppercase text-sm">
          {menu.map((item) => (
            <li key={item}>
              <Link href="#" className="hover:text-yellow-400 transition">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden bg-[#0B263A] px-5 py-2 uppercase tracking-widest"
        >
          Menu
        </button>

      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* SIDE MENU PANEL */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[80%] max-w-sm
          bg-[#001D4A] text-white z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          flex flex-col justify-between
          p-8
        `}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-3xl"
        >
          ×
        </button>

        {/* MENU ITEMS */}
        <ul className="space-y-8 text-2xl mt-16">
          {menu.map((item) => (
            <li key={item}>
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* BOTTOM BUTTON */}
        <button className="border border-yellow-400 text-yellow-400 py-3 text-center hover:bg-yellow-400 hover:text-black transition">
          Enquire Now
        </button>

      </div>
    </>
  );
}