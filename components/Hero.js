"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Star, Award, CheckCircle2, Zap } from "lucide-react";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const coursesElement = document.getElementById("courses");
      if (coursesElement) {
        coursesElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="bg-brand-blue text-white relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
      
      {/* Floating Decorative 3D Shapes (SVG Graphics matching Figma) */}
      <div className="absolute top-10 left-6 sm:left-12 opacity-80 animate-float-slow pointer-events-none">
        {/* Yellow Zigzag */}
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-brand-lime">
          <path d="M10 10L25 25L10 40L25 55" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 10L45 25L30 40L45 55" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="absolute bottom-16 left-10 opacity-70 animate-float-reverse pointer-events-none hidden md:block">
        {/* White Donut / Torus */}
        <div className="w-16 h-16 rounded-full border-8 border-white/40 border-t-white shadow-2xl"></div>
      </div>

      <div className="absolute top-16 right-8 sm:right-16 opacity-90 animate-float-reverse pointer-events-none">
        {/* Lime Cylinder / Cone shape */}
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <polygon points="35,5 65,60 5,60" fill="#C6FF00" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-12 opacity-80 animate-float-slow pointer-events-none hidden md:block">
        {/* White Wavy Star */}
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-white">
          <path d="M25 0L31 19L50 25L31 31L25 50L19 31L0 25L19 19L25 0Z" fill="currentColor" opacity="0.8"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none">
            Get Access to Hundreds <br className="hidden sm:inline" />
            <span className="text-white relative inline-block">
              Courses Available
              <span className="absolute bottom-1 left-0 w-full h-2 bg-brand-lime/40 -z-10 rounded-full"></span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 font-normal max-w-2xl mx-auto">
            Learn high-demand skills from industry professionals. Master Web Development, UI/UX Design, Data Science, and Marketing with interactive projects.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="pt-2 max-w-xl mx-auto">
            <div className="bg-white rounded-full p-2 pl-6 shadow-2xl flex items-center justify-between border-2 border-white/20 focus-within:ring-4 focus-within:ring-brand-lime/50 transition-all">
              <div className="flex items-center space-x-3 flex-1">
                <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="What do you want to learn today?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-slate-800 text-sm sm:text-base font-medium placeholder-slate-400 bg-transparent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-lime hover:bg-brand-lime-hover text-brand-dark font-extrabold text-sm sm:text-base px-6 py-3 rounded-full transition-all flex items-center space-x-2 flex-shrink-0 shadow-md hover:scale-105"
              >
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>

        {/* Hero Visual Area with Student & Floating Badges */}
        <div className="mt-14 relative max-w-2xl mx-auto">
          
          {/* Lime Circle Backdrop */}
          <div className="w-72 h-72 sm:w-96 sm:h-96 bg-brand-lime rounded-full mx-auto relative flex items-center justify-center shadow-2xl">
            
            {/* Student Image */}
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 overflow-hidden rounded-b-full -mt-10">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="ByteSpace Learning Student"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Badge Left: 98% Success */}
            <div className="absolute top-12 -left-4 sm:-left-12 bg-white text-slate-800 p-3 sm:p-4 rounded-2xl shadow-2xl flex items-center space-x-3 border border-slate-100 animate-float-slow">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Job Placement</p>
                <p className="text-sm sm:text-base font-bold text-slate-900">98% Success Rate</p>
              </div>
            </div>

            {/* Floating Badge Right: ⭐ 4.9 Rating */}
            <div className="absolute top-28 -right-4 sm:-right-12 bg-white text-slate-800 p-3 sm:p-4 rounded-2xl shadow-2xl flex items-center space-x-3 border border-slate-100 animate-float-reverse">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-500">
                <Star className="w-6 h-6 fill-amber-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Top Rated</p>
                <p className="text-sm sm:text-base font-bold text-slate-900">4.9 / 5.0 Stars</p>
              </div>
            </div>

            {/* Floating Badge Bottom Left: Live Mentorship */}
            <div className="absolute bottom-6 -left-2 sm:-left-8 bg-brand-dark text-white p-3 sm:p-4 rounded-2xl shadow-2xl flex items-center space-x-3 border border-slate-800 animate-float-reverse">
              <div className="w-10 h-10 rounded-xl bg-brand-lime flex items-center justify-center text-brand-dark">
                <Zap className="w-6 h-6 fill-brand-dark" />
              </div>
              <div>
                <p className="text-xs text-slate-300 font-medium">1-on-1 Support</p>
                <p className="text-sm font-bold text-brand-lime">Live Mentorship</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
