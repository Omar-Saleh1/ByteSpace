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
    <section className="bg-[#0052FF] text-white relative overflow-hidden pt-12 pb-0 font-sans">
      
      {/* White Square Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />


      {/* ===================== LEFT SIDE 3D ELEMENTS & WIREFRAME BOXES ===================== */}

      {/* 1. Far Top-Left Lime 3D Spring Coil */}
      <div className="absolute top-24 -left-10 z-10 pointer-events-none drop-shadow-2xl">
        <svg width="150" height="170" viewBox="0 0 150 170" fill="none">
          <path
            d="M15 25 C 85 -15, 140 35, 45 85 C -35 130, 125 155, 95 155"
            stroke="#C6FF00"
            strokeWidth="30"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 2. Middle-Left Wireframe Box + White 3D Zigzag Spring */}
      <div className="absolute top-80 left-12 w-44 h-44 border border-white/20 rounded-none pointer-events-none hidden lg:block z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
            <path
              d="M15 15 L 85 35 L 20 75 L 90 100"
              stroke="white"
              strokeWidth="20"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="drop-shadow(0px 8px 12px rgba(0,0,0,0.15))"
            />
          </svg>
        </div>
      </div>

      {/* 3. Bottom-Left Wireframe Box + Large White 3D Torus Ring */}
      <div className="absolute -bottom-10 -left-6 w-72 h-72 border border-white/20 rounded-none pointer-events-none hidden md:block z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
            <ellipse cx="110" cy="110" rx="90" ry="65" stroke="white" strokeWidth="40" transform="rotate(-25 110 110)" />
            <ellipse cx="110" cy="110" rx="90" ry="65" stroke="#e2e8f0" strokeWidth="6" strokeDasharray="60 90" transform="rotate(-25 110 110)" />
          </svg>
        </div>
      </div>



      {/* ===================== RIGHT SIDE 3D ELEMENTS & WIREFRAME BOXES ===================== */}

      {/* 1. Top-Right Lime 3D Slanted Cylinder / Capsule */}
      <div className="absolute top-16 -right-10 z-10 pointer-events-none drop-shadow-2xl hidden md:block">
        <svg width="180" height="240" viewBox="0 0 180 240" fill="none" transform="rotate(-15)">
          <rect x="35" y="45" width="115" height="165" rx="55" fill="#C6FF00" />
          <ellipse cx="92" cy="45" rx="55" ry="28" fill="#D8FF4D" />
        </svg>
      </div>

      {/* 2. Middle-Right Wireframe Box + White 3D Cone/Pyramid */}
      <div className="absolute top-64 right-16 w-52 h-52 border border-white/20 rounded-none pointer-events-none hidden lg:block z-10">
        {/* White 3D Pyramid inside */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="130" height="140" viewBox="0 0 130 140" fill="none">
            <polygon points="65,10 10,125 120,125" fill="white" />
            <polygon points="65,10 120,125 65,125" fill="#e2e8f0" />
          </svg>
        </div>
      </div>

      {/* 3. Bottom-Right Wireframe Box + White 3D Spring */}
      <div className="absolute bottom-4 right-8 w-64 h-64 border border-white/20 rounded-none pointer-events-none hidden md:block z-10">
        {/* White 3D Spring inside */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="150" height="170" viewBox="0 0 150 170" fill="none">
            <path
              d="M20 20 L 125 50 L 35 100 L 130 140"
              stroke="white"
              strokeWidth="28"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="drop-shadow(0px 12px 18px rgba(0,0,0,0.2))"
            />
          </svg>
        </div>
      </div>



      {/* ===================== MAIN CENTER CONTENT & HEADLINE ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="text-center max-w-4xl mx-auto space-y-4">
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white">
            Get Access to Hundreds <br /> Courses Available
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-blue-100 font-normal max-w-xl mx-auto leading-relaxed pt-1">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="pt-3 max-w-lg mx-auto">
            <div className="bg-white rounded-full p-2 pl-6 pr-2 shadow-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Course, topic, creator"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-slate-800 text-xs sm:text-sm font-medium placeholder-slate-400 bg-transparent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#C6FF00] hover:bg-[#b8f000] text-slate-900 font-extrabold text-xs px-7 py-3 rounded-full transition-all flex-shrink-0 shadow-md hover:scale-105"
              >
                Search
              </button>
            </div>
          </form>

        </div>



        {/* ===================== HERO VISUAL: LIME CIRCLE + STUDENT + 3 BADGES ===================== */}
        <div className="mt-8 relative max-w-3xl mx-auto flex justify-center">
          
          {/* Giant Lime Circle Backdrop */}
          <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] lg:w-[560px] lg:h-[560px] bg-[#C6FF00] rounded-full flex items-end justify-center shadow-2xl overflow-visible">
            
            {/* Student Portrait Image */}
            <div className="relative w-[320px] h-[380px] sm:w-[450px] sm:h-[530px] lg:w-[520px] lg:h-[600px] -mt-16 z-20">
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1200"
                alt="ByteSpace Student"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Badge 1 (Left): UI/UX Design */}
            <div className="absolute top-20 -left-6 sm:-left-16 bg-white text-slate-900 px-4 py-3 rounded-2xl shadow-2xl border border-slate-100 z-30 min-w-[150px]">
              <p className="text-xs font-bold text-slate-900">UI/UX Design</p>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">200 Courses • 1000+ Students</p>
            </div>

            {/* Badge 2 (Right): Learning Progress 55% - Aligned on exact same top-20 baseline */}
            <div className="absolute top-20 -right-6 sm:-right-16 bg-white text-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-100 z-30 min-w-[170px]">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Learning Progress</p>
              <p className="text-3xl font-black text-slate-900 mt-0.5">55%</p>
              <div className="w-full bg-slate-100 rounded-full h-2 mt-2 overflow-hidden">
                <div className="bg-[#C6FF00] h-full rounded-full w-[55%]"></div>
              </div>
            </div>

            {/* Badge 3 (Bottom-Left): Happy Students */}
            <div className="absolute bottom-10 -left-8 sm:-left-20 bg-white text-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-100 z-30 min-w-[180px]">
              <p className="text-xs font-bold text-slate-900">Happy Students</p>
              <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-700 mt-0.5">
                <span>4.5 (240)</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>
              <div className="flex items-center space-x-[-6px] mt-2.5">
                <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="user" />
                <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
                <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" />
                <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="user" />
                <span className="w-6 h-6 rounded-full bg-[#C6FF00] text-slate-900 font-extrabold text-[9px] flex items-center justify-center border-2 border-white">2K+</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
