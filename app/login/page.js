"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Star } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
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
              Welcome Back
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 font-normal leading-relaxed">
              Sign in to access your course dashboard, track your learning progress, and connect with expert creators.
            </p>
          </div>

          {/* Graphic Stack Container */}
          <div className="relative w-full max-w-md pt-4">
            
            {/* 3D Shapes */}
            <div className="absolute -top-6 left-12 z-30 pointer-events-none animate-float-slow">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="22" stroke="#C6FF00" strokeWidth="12" />
              </svg>
            </div>

            <div className="absolute -bottom-10 -left-6 z-30 pointer-events-none animate-float-reverse">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                <polygon points="10,60 35,10 60,60" fill="#C6FF00" />
              </svg>
            </div>

            {/* Back Card */}
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
            </div>

            {/* Front Card */}
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
            </div>

            {/* Bottom Lime Card */}
            <div className="bg-[#C6FF00] text-slate-900 rounded-2xl p-4 shadow-xl max-w-[240px] relative z-30 -mt-10 ml-28 rotate-[-3deg]">
              <h5 className="text-xs font-extrabold">Happy Students</h5>
              <div className="flex items-center space-x-1 text-[11px] font-bold mt-0.5">
                <span>4.5 (240)</span>
                <Star className="w-3 h-3 fill-slate-900 text-slate-900" />
              </div>
            </div>

          </div>

        </div>

        {/* Right Side: Login White Box Form */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl text-slate-900 w-full max-w-lg border border-white/20">
            
            <div className="mb-6 space-y-1">
              <span className="text-xs font-semibold text-slate-400">
                Sign In to Account
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Welcome Back
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
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
              Don't have an account?{" "}
              <Link href="/signup" className="font-bold text-[#0052FF] hover:underline">
                Sign Up
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
