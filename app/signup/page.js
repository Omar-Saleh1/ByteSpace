"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Star } from "lucide-react";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
  };

  return (
    <main className="min-h-screen bg-[#0052FF] relative flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden text-white font-sans">
      
      {/* White Square Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Top Header: ByteSpace Logo */}
      <header className="relative z-10">
        <Link href="/" className="inline-flex items-center space-x-2 group">
          <div className="w-9 h-9 rounded-xl bg-[#C6FF00] flex items-center justify-center text-slate-900 shadow-md">
            <Sparkles className="w-5 h-5 fill-slate-900" />
          </div>
          <span className="text-2xl font-black tracking-tight text-white">
            Byte<span className="text-white">Space</span>
          </span>
        </Link>
      </header>

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto py-8">
        
        {/* Left Side: Headline & Exact Figma Graphic Stack */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Text Section */}
          <div className="space-y-3 max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Sign up and come in
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 font-normal leading-relaxed">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </p>
          </div>

          {/* Figma Graphic Stack Container */}
          <div className="relative w-full max-w-lg pt-6 pb-6">
            
            {/* 3D Shapes */}
            
            {/* 1. Lime 3D Torus Ring (Top Left of main card) */}
            <div className="absolute top-0 left-10 z-30 pointer-events-none drop-shadow-xl animate-float-slow">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="24" stroke="#C6FF00" strokeWidth="14" />
                <circle cx="36" cy="36" r="24" stroke="#a0e000" strokeWidth="4" strokeDasharray="30 60" />
              </svg>
            </div>

            {/* 2. Lime 3D Cone / Pyramid (Bottom Left) */}
            <div className="absolute -bottom-6 -left-4 z-30 pointer-events-none drop-shadow-2xl animate-float-reverse">
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                {/* 3D Pyramid Facets */}
                <polygon points="45,10 10,75 45,85" fill="#C6FF00" />
                <polygon points="45,10 45,85 80,75" fill="#aee600" />
                <polygon points="45,10 10,75 80,75" fill="#9bd100" opacity="0.4" />
              </svg>
            </div>

            {/* 3. White 3D Zig-Zag Ribbon / Spring (Right Side) */}
            <div className="absolute top-28 -right-4 z-30 pointer-events-none drop-shadow-2xl hidden sm:block">
              <svg width="70" height="110" viewBox="0 0 70 110" fill="none">
                <path 
                  d="M10 15 C 40 5, 60 25, 35 45 C 10 65, 60 75, 45 100" 
                  stroke="white" 
                  strokeWidth="16" 
                  strokeLinecap="round"
                  filter="drop-shadow(0px 8px 12px rgba(0,0,0,0.15))"
                />
              </svg>
            </div>


            {/* CARD 1: BACK CARD (Build Digital Asset) */}
            <div className="bg-white rounded-3xl p-5 shadow-xl border border-slate-100 max-w-[320px] relative z-10 transform -rotate-3 transition-all duration-500">
              <div className="relative h-32 rounded-2xl overflow-hidden bg-slate-100 mb-3">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500" 
                  alt="Build Digital Asset" 
                  fill 
                  className="object-cover"
                />
                <span className="absolute bottom-2.5 left-2.5 bg-slate-200/90 text-[10px] font-semibold text-slate-700 px-3 py-1 rounded-full backdrop-blur-sm">
                  17 Lessons
                </span>
              </div>
              
              <h4 className="text-base font-bold text-slate-900">Build Digital Asset</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                by <span className="text-[#0052FF] font-semibold">purepearl studio</span>
              </p>

              <div className="flex items-center space-x-2 mt-3">
                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1">
                  <BarChartIcon className="w-3 h-3 text-slate-500" />
                  <span>Beginner</span>
                </span>
                
                <div className="flex items-center space-x-[-6px]">
                  <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="user" />
                  <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
                  <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" />
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-extrabold text-[9px] flex items-center justify-center border border-white">26+</span>
                </div>
              </div>

              <div className="mt-3 pt-2 flex items-center">
                <span className="text-sm font-black text-[#0052FF]">$25</span>
                <span className="text-xs text-slate-400 font-medium ml-1">/lifetime</span>
              </div>
            </div>


            {/* CARD 2: FRONT CARD (the Power of Big Data) */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-100 max-w-[380px] relative z-20 -mt-28 ml-10 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              
              {/* Image with 3 overlay pills */}
              <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-900 mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" 
                  alt="the Power of Big Data" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-2.5 left-2 right-2 flex items-center justify-center space-x-1.5 text-[10px] font-semibold text-slate-700">
                  <span className="bg-slate-200/80 backdrop-blur-md px-2.5 py-1 rounded-full">17 Lessons</span>
                  <span className="bg-slate-200/80 backdrop-blur-md px-2.5 py-1 rounded-full">2 hours 16 mins</span>
                  <span className="bg-slate-200/80 backdrop-blur-md px-2.5 py-1 rounded-full">59 Comments</span>
                </div>
              </div>

              {/* Title & Rating */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-extrabold text-slate-900 leading-snug">the Power of Big Data</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    by <span className="text-[#0052FF] font-semibold">purepearl studio</span>
                  </p>
                </div>
                <div className="flex items-center space-x-1 text-sm font-extrabold text-slate-800">
                  <span>4.5</span>
                  <Star className="w-4 h-4 fill-[#C6FF00] text-[#C6FF00]" />
                </div>
              </div>

              {/* Level + Avatars + Floating Avatar Bubble Pin */}
              <div className="flex items-center justify-between mt-4">
                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center space-x-1">
                  <BarChartIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>Beginner</span>
                </span>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-[-6px]">
                    <img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="user" />
                    <img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
                    <img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" />
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-extrabold text-[9px] flex items-center justify-center border border-white">26+</span>
                  </div>

                  {/* Floating Avatar Tooltip Bubble */}
                  <div className="relative w-9 h-9 rounded-full border-2 border-white shadow-xl overflow-hidden flex-shrink-0 animate-bounce">
                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="pin" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mt-4 pt-2 border-t border-slate-100 flex items-center">
                <span className="text-base font-black text-[#0052FF]">$25</span>
                <span className="text-xs text-slate-400 font-medium ml-1">/lifetime</span>
              </div>

            </div>


            {/* CARD 3: BOTTOM LIME CARD (Happy Students) */}
            <div className="bg-[#C6FF00] text-slate-900 rounded-2xl p-4 shadow-xl max-w-[260px] relative z-30 -mt-12 ml-36 transform -rotate-2">
              <h5 className="text-xs font-black">Happy Students</h5>
              <div className="flex items-center space-x-1 text-xs font-extrabold mt-0.5">
                <span>4.5 (240)</span>
                <Star className="w-3.5 h-3.5 fill-[#0052FF] text-[#0052FF]" />
              </div>
              <div className="flex items-center space-x-[-6px] mt-2.5">
                <img className="w-6 h-6 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="user" />
                <img className="w-6 h-6 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
                <img className="w-6 h-6 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" />
                <img className="w-6 h-6 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="user" />
                <img className="w-6 h-6 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100" alt="user" />
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-extrabold text-[9px] flex items-center justify-center">2K+</span>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side: Sign Up White Box Form */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl text-slate-900 w-full max-w-lg border border-white/20">
            
            <div className="mb-6 space-y-1">
              <span className="text-xs font-semibold text-slate-400">
                Create an Account
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Welcome to ByteSpace
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent bg-slate-50/50"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#C6FF00] hover:bg-[#b8f000] text-slate-900 font-extrabold text-sm px-8 py-3 rounded-full transition-all shadow-md hover:scale-105 cursor-pointer"
                >
                  Continue
                </button>
              </div>

            </form>

            <div className="mt-8 text-center text-xs font-medium text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-[#0052FF] hover:underline">
                Login
              </Link>
            </div>

          </div>
        </div>

      </div>

      {/* Footer copyright line */}
      <footer className="relative z-10 text-center text-xs text-blue-200/70 pt-4">
        © 2026 ByteSpace. All rights reserved.
      </footer>

    </main>
  );
}

function BarChartIcon(props) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
