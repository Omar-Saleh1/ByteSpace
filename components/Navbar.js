"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0052FF] text-white border-b border-blue-600/30 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 rounded-xl bg-[#C6FF00] flex items-center justify-center text-slate-900 shadow-md">
              <Sparkles className="w-5 h-5 fill-slate-900" />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              Byte<span className="text-white">Space</span>
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-semibold text-blue-100">
            <Link href="/" className="hover:text-[#C6FF00] transition-colors">
              Home
            </Link>
            <Link href="/courses" className="hover:text-[#C6FF00] transition-colors">
              Courses
            </Link>
            <Link href="/creators" className="hover:text-[#C6FF00] transition-colors">
              Creators
            </Link>
          </nav>

          {/* Right Action Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-bold">
            <Link href="/login" className="text-white hover:text-[#C6FF00] transition-colors">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-[#C6FF00] hover:bg-[#b8f000] text-slate-900 px-5 py-2.5 rounded-full transition-all shadow-md hover:scale-105"
            >
              Join Us
            </Link>
            <button className="text-white hover:text-[#C6FF00] p-1 transition-colors" aria-label="Shopping Cart">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button className="text-white p-1" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#C6FF00] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-lg px-4 pt-4 pb-6 space-y-4 border-b border-blue-800">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-white">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C6FF00] py-1">
              Home
            </Link>
            <Link href="#courses" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C6FF00] py-1">
              Courses
            </Link>
            <Link href="#creators" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C6FF00] py-1">
              Creators
            </Link>
          </nav>
          <div className="pt-4 border-t border-blue-800 flex flex-col space-y-3">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="text-center text-white py-2 border border-blue-700 rounded-lg">
              Sign In
            </Link>
            <Link href="/signup" onClick={() => setMobileMenuOpen(false)} className="text-center bg-[#C6FF00] text-slate-900 font-bold py-2.5 rounded-full">
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
