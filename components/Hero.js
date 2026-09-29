"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const coursesElem = document.getElementById("courses");
    if (coursesElem) {
      coursesElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#0052FF] text-white relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24">
      
      {/* Blueprint Grid Pattern Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Floating 3D Vector Decorations matching Figma */}
      <div className="absolute top-10 left-6 sm:left-12 animate-float-slow pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#C6FF00]">
          <path d="M10 10L25 25L10 40L25 55" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 10L45 25L30 40L45 55" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="absolute bottom-20 left-10 animate-float-reverse pointer-events-none hidden md:block">
        <div className="w-16 h-16 rounded-full border-8 border-white/50 border-t-white shadow-2xl"></div>
      </div>

      <div className="absolute top-12 right-10 animate-float-reverse pointer-events-none">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <polygon points="35,5 65,60 5,60" fill="#C6FF00" />
        </svg>
      </div>

      <div className="absolute bottom-16 right-12 animate-float-slow pointer-events-none hidden md:block">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M25 0L31 19L50 25L31 31L25 50L19 31L0 25L19 19L25 0Z" fill="white" opacity="0.9"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none">
            Get Access to Hundreds <br className="hidden sm:inline" />
            Courses Available
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-blue-100 font-normal max-w-2xl mx-auto">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="pt-2 max-w-lg mx-auto">
            <div className="bg-white rounded-full p-2 pl-5 shadow-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Course, topic, creator"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-slate-800 text-sm font-medium placeholder-slate-400 bg-transparent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#C6FF00] hover:bg-[#b8f000] text-slate-900 font-bold text-sm px-6 py-2.5 rounded-full transition-all flex-shrink-0 shadow-md"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Hero Visual Area with Lime Circle Backdrop */}
        <div className="mt-14 relative max-w-2xl mx-auto">
          
          <div className="w-72 h-72 sm:w-96 sm:h-96 bg-[#C6FF00] rounded-full mx-auto relative flex items-center justify-center shadow-2xl">
            
            {/* Student Portrait Image */}
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 overflow-hidden rounded-b-full -mt-10">
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
                alt="ByteSpace Student"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Top Left Floating Badge: UI/UX Design */}
            <div className="absolute top-4 -left-4 sm:-left-12 bg-white text-slate-800 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 animate-float-slow hidden sm:block">
              <p className="text-xs font-bold text-slate-900">UI/UX Design</p>
              <p className="text-[10px] text-slate-500 font-medium">200 Courses • 1000+ Students</p>
            </div>

            {/* Top Right Floating Badge: Learning Progress */}
            <div className="absolute top-12 -right-4 sm:-right-10 bg-white text-slate-800 px-4 py-3 rounded-2xl shadow-xl border border-slate-100 animate-float-reverse hidden sm:block min-w-[140px]">
              <p className="text-[10px] text-slate-500 font-semibold uppercase">Learning Progress</p>
              <p className="text-xl font-black text-slate-900 mt-0.5">55%</p>
              <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1.5 overflow-hidden">
                <div className="bg-[#0052FF] h-full rounded-full w-[55%]"></div>
              </div>
            </div>

            {/* Bottom Left Floating Badge: Happy Students */}
            <div className="absolute bottom-6 -left-6 sm:-left-12 bg-white text-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 animate-float-reverse flex items-center space-x-3">
              <div>
                <p className="text-xs font-bold text-slate-900 flex items-center space-x-1">
                  <span>Happy Students</span>
                </p>
                <div className="flex items-center space-x-1 text-amber-500 text-xs font-bold mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>4.8</span>
                </div>
                <div className="flex items-center space-x-[-6px] mt-1.5">
                  <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="user" />
                  <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
                  <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" />
                  <span className="w-5 h-5 rounded-full bg-[#C6FF00] text-slate-900 font-bold text-[9px] flex items-center justify-center border border-white">2k+</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
