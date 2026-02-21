'use client';

import Link from "next/link";
import { useState } from "react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo / Business Name */}
        <Link href="/" className="font-bold text-xl text-blue-900">
          💧 {BUSINESS_INFO.name}
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex items-center">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <a href="#services" className="hover:text-blue-600 transition">
            Services
          </a>
          <a href="#coverage" className="hover:text-blue-600 transition">
            Coverage
          </a>
          <Link href="/blog" className="hover:text-blue-600 transition">
            Blog
          </Link>
          <a href="#company-profile" className="hover:text-blue-600 transition">
            Company
          </a>
          <a href="#contact" className="hover:text-blue-600 transition font-semibold text-blue-700">
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-900 text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t mt-4 px-4 pb-4 space-y-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Home
          </Link>
          <a href="#services" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Services
          </a>
          <a href="#coverage" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Coverage
          </a>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Blog
          </Link>
          <a href="#company-profile" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Company
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block font-semibold text-blue-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
