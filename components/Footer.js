"use client";

import { useState } from "react";
import Link from "next/link";
import ByteSpaceLogo from "@/components/ByteSpaceLogo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-white text-slate-800 pt-16 pb-12 border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14">
          
          {/* Left Column: Logo + Newsletter */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Logo */}
            <Link href="/">
              <ByteSpaceLogo textColor="text-slate-900" />
            </Link>

            {/* Tagline */}
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed font-normal">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="pt-2 max-w-md">
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-slate-900 text-xs px-5 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent flex-1 placeholder-slate-400 shadow-sm"
                />
                <button
                  type="submit"
                  className="bg-[#C6FF00] hover:bg-[#b8f000] text-slate-900 font-extrabold text-xs px-6 py-3 rounded-full transition-all flex-shrink-0 shadow-sm hover:scale-105"
                >
                  {subscribed ? "Joined!" : "Search"}
                </button>
              </div>
            </form>

            {/* Disclaimer Text */}
            <p className="text-[10px] text-slate-400 max-w-sm leading-relaxed pt-1">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>

          </div>

          {/* Right Navigation Links (3 Columns matching Figma) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div className="space-y-3">
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-normal">
                <li><Link href="/courses" className="hover:text-slate-900 transition-colors">Featured Courses</Link></li>
                <li><Link href="/courses" className="hover:text-slate-900 transition-colors">Featured Categories</Link></li>
                <li><Link href="/courses" className="hover:text-slate-900 transition-colors">Business</Link></li>
                <li><Link href="/courses" className="hover:text-slate-900 transition-colors">IT</Link></li>
                <li><Link href="/courses" className="hover:text-slate-900 transition-colors">Design</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-normal">
                <li><Link href="/courses" className="hover:text-slate-900 transition-colors">Development</Link></li>
                <li><Link href="/courses" className="hover:text-slate-900 transition-colors">Marketing</Link></li>
                <li><Link href="/courses" className="hover:text-slate-900 transition-colors">Photography</Link></li>
                <li><Link href="/courses" className="hover:text-slate-900 transition-colors">Finance</Link></li>
                <li><Link href="/courses" className="hover:text-slate-900 transition-colors">Sport</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-normal">
                <li><Link href="/signup" className="hover:text-slate-900 transition-colors">Become a Creator</Link></li>
                <li><Link href="/signup" className="hover:text-slate-900 transition-colors">Affiliate Program</Link></li>
                <li><Link href="/#contact" className="hover:text-slate-900 transition-colors">Contact</Link></li>
                <li><Link href="/#help" className="hover:text-slate-900 transition-colors">Help</Link></li>
                <li><Link href="/#about" className="hover:text-slate-900 transition-colors">About</Link></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright Left, Legal Links Right */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-normal">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-600 transition-colors">Cookies Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
