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
        
        {/* Left Side: Headline & Card Visual Stack */}
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

          {/* Graphic Stack Container */}
          <div className="relative w-full max-w-md pt-4">
            
            {/* 3D Shapes */}
            {/* Top Left Lime Ring Torus */}
            <div className="absolute -top-6 left-12 z-30 pointer-events-none animate-float-slow">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="22" stroke="#C6FF00" strokeWidth="12" />
              </svg>
            </div>

            {/* Bottom Left Lime Cone Shape */}
            <div className="absolute -bottom-10 -left-6 z-30 pointer-events-none animate-float-reverse">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                <polygon points="10,60 35,10 60,60" fill="#C6FF00" />
              </svg>
            </div>

            {/* Right Side White Ribbon Shape */}
            <div className="absolute top-24 -right-8 z-30 pointer-events-none hidden sm:block">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M10 10 C 20 20, 40 10, 50 30 C 60 50, 40 50, 30 40" stroke="white" strokeWidth="10" strokeLinecap="round" />
              </svg>
            </div>

            {/* Back Card (Build Digital Asset) */}
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-slate-100 max-w-[280px] -rotate-6 transform transition-all duration-500 opacity-90">
              <div className="relative h-24 rounded-2xl overflow-hidden bg-slate-100 mb-3">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" 
                  alt="Build Digital Asset" 
                  fill 
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-white/90 text-[9px] font-bold text-slate-700 px-2 py-0.5 rounded-full">
                  17 Lessons
                </span>
              </div>
              <h4 className="text-xs font-bold text-slate-900">Build Digital Asset</h4>
              <p className="text-[10px] text-slate-400">by purepearl studio</p>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-black text-[#0052FF]">$25 <span className="text-[9px] text-slate-400 font-normal">/lifetime</span></span>
                <span className="bg-slate-100 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded">Beginner</span>
              </div>
            </div>

            {/* Front Card (the Power of Big Data) */}
            <div className="bg-white rounded-3xl p-5 shadow-2xl border border-slate-100 max-w-[340px] relative z-20 -mt-16 ml-8 rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="relative h-36 rounded-2xl overflow-hidden bg-slate-900 mb-3">
                <Image 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500" 
                  alt="the Power of Big Data" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] font-semibold text-slate-700 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full">
                  <span>17 Lessons</span>
                  <span>•</span>
                  <span>2 hours 16 mins</span>
                  <span>•</span>
                  <span>59 Comments</span>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">the Power of Big Data</h4>
                  <p className="text-[11px] text-slate-400">by purepearl studio</p>
                </div>
                <div className="flex items-center space-x-1 text-xs font-bold text-slate-800">
                  <span>4.5</span>
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </div>
              </div>

              <div className="flex items-center justify-between mt-3">
                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-md">
                  Beginner
                </span>
                <div className="flex items-center space-x-[-6px]">
                  <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="user" />
                  <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
                  <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" />
                  <span className="w-5 h-5 rounded-full bg-[#C6FF00] text-slate-900 font-extrabold text-[9px] flex items-center justify-center border border-white">26+</span>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-black text-[#0052FF]">$25 <span className="text-[10px] text-slate-400 font-normal">/lifetime</span></span>
              </div>
            </div>

            {/* Bottom Lime Card (Happy Students) */}
            <div className="bg-[#C6FF00] text-slate-900 rounded-2xl p-4 shadow-xl max-w-[240px] relative z-30 -mt-10 ml-28 rotate-[-3deg]">
              <h5 className="text-xs font-extrabold">Happy Students</h5>
              <div className="flex items-center space-x-1 text-[11px] font-bold mt-0.5">
                <span>4.5 (240)</span>
                <Star className="w-3 h-3 fill-slate-900 text-slate-900" />
              </div>
              <div className="flex items-center space-x-[-6px] mt-2">
                <img className="w-5 h-5 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
                <img className="w-5 h-5 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" />
                <img className="w-5 h-5 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="user" />
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-extrabold text-[8px] flex items-center justify-center">2K+</span>
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
