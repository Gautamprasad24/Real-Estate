"use client";

import Link from "next/link";

export default function Navbar() {
  const menu = [
    "City",
    "Developers",
    "Projects",
    "About Us",
    "Home Loan",
    "Blogs",
    "Contact"
  ];

  return (
    <nav className="bg-[#001D4A] text-white px-8 py-4 flex justify-between items-center">

      {/* Logo */}
      <div className="text-yellow-400 font-bold text-xl">
        KEYSTONE
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-sm uppercase">
        {menu.map((item) => (
          <li key={item}>
            <Link href="#" className="hover:text-yellow-400 transition">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
