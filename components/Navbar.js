"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-brand-blue text-white sticky top-0 z-50 border-b border-blue-600/30 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-brand-lime flex items-center justify-center text-brand-dark font-black text-xl shadow-lg transition-transform group-hover:scale-105">
              <Sparkles className="w-5 h-5 fill-brand-dark" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Byte<span className="text-brand-lime">Space</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#courses"
              className="text-sm font-medium text-blue-100 hover:text-brand-lime transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-blue-100 hover:text-brand-lime transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#instructors"
              className="text-sm font-medium text-blue-100 hover:text-brand-lime transition-colors"
            >
              Instructors
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-blue-100 hover:text-brand-lime transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-blue-100 hover:text-brand-lime transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm font-semibold text-white hover:text-brand-lime px-4 py-2 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-brand-lime hover:bg-brand-lime-hover text-brand-dark font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-xl hover:scale-105"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-brand-lime hover:bg-blue-700/50 focus:outline-none"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-xl border-b border-blue-700 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            <Link
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-brand-lime px-3 py-2 rounded-md hover:bg-blue-800/40"
            >
              Courses
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-brand-lime px-3 py-2 rounded-md hover:bg-blue-800/40"
            >
              About Us
            </Link>
            <Link
              href="#instructors"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-brand-lime px-3 py-2 rounded-md hover:bg-blue-800/40"
            >
              Instructors
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-brand-lime px-3 py-2 rounded-md hover:bg-blue-800/40"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-brand-lime px-3 py-2 rounded-md hover:bg-blue-800/40"
            >
              Contact
            </Link>
          </nav>
          <div className="pt-4 border-t border-blue-800 flex flex-col space-y-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-white font-semibold py-2.5 rounded-lg border border-blue-500 hover:bg-blue-800/50"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-brand-lime text-brand-dark font-bold py-2.5 rounded-full shadow-lg hover:bg-brand-lime-hover"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
