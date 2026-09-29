import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";

export default function ValuePropSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-50/50 via-purple-50/20 to-lime-50/30 relative overflow-hidden">
      
      {/* Background radial glow spots */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-lime-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 relative z-10">
        
        {/* ================= Block 1: Your Path to Professional Growth Starts Here! ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Divider Line */}
            <div className="pt-2 border-t border-slate-200/80">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#0052FF]">12K</p>
                  <p className="text-[11px] font-semibold text-slate-400 mt-0.5">Students</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#0052FF]">70+</p>
                  <p className="text-[11px] font-semibold text-slate-400 mt-0.5">Courses</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#0052FF]">16</p>
                  <p className="text-[11px] font-semibold text-slate-400 mt-0.5">Creators</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-7 relative flex justify-center">
            
            {/* Student Portrait Image */}
            <div className="relative w-full max-w-lg h-[440px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1200"
                alt="Male student with laptop"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Floating Top-Left Mini Course Card: Learn Figma from Basic */}
            <div className="absolute top-4 -left-4 sm:-left-8 bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 max-w-[210px] animate-float-slow hidden sm:block">
              <div className="relative w-full h-24 rounded-xl overflow-hidden mb-2 bg-slate-100">
                <Image 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400" 
                  alt="Figma course preview" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute bottom-1 left-1 bg-white/90 text-[9px] font-bold text-slate-700 px-2 py-0.5 rounded-full">
                  17 Lessons • 2h 16m
                </div>
              </div>
              <p className="text-xs font-bold text-slate-900 line-clamp-1">Learn Figma from Basic</p>
              <p className="text-[10px] text-slate-400 font-medium">by purepixel studio</p>
              <div className="mt-1.5 flex items-center justify-between">
                <span className="bg-slate-100 text-slate-600 text-[9px] font-semibold px-2 py-0.5 rounded">Beginner</span>
                <span className="text-xs font-black text-[#0052FF]">$25 <span className="text-[9px] text-slate-400 font-normal">/lifetime</span></span>
              </div>
            </div>

            {/* Floating Right Card: Learning Progress 55% */}
            <div className="absolute top-28 -right-4 sm:-right-8 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 min-w-[150px] animate-float-reverse">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Learning Progress</p>
              <p className="text-2xl font-black text-slate-900 mt-1">55%</p>
              <div className="w-full bg-slate-100 rounded-full h-2 mt-2 overflow-hidden">
                <div className="bg-[#0052FF] h-full rounded-full w-[55%]"></div>
              </div>
            </div>

            {/* Floating Yellow 3D Spring Vector beside student on right */}
            <div className="absolute -top-4 right-8 animate-float-slow pointer-events-none">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#C6FF00]">
                <path d="M10 10L25 25L10 40L25 55" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 10L45 25L30 40L45 55" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

          </div>

        </div>


        {/* ================= Block 2: Create & Manage Courses Easily. ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Image Composition */}
          <div className="lg:col-span-7 relative flex justify-center order-2 lg:order-1">
            
            {/* Student Portrait Image */}
            <div className="relative w-full max-w-lg h-[440px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                alt="Female student with headset"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Floating Revenue Badges Top-Left */}
            <div className="absolute top-6 -left-6 sm:-left-10 space-y-2.5 animate-float-slow hidden sm:block">
              <div className="bg-[#0052FF] text-white p-3.5 rounded-2xl shadow-2xl min-w-[150px]">
                <p className="text-[10px] text-blue-200 font-semibold">Total Revenue July 1-28</p>
                <p className="text-xl font-black text-white mt-0.5">$120.29</p>
              </div>
              <div className="bg-[#0043D6] text-white p-3.5 rounded-2xl shadow-2xl min-w-[150px]">
                <p className="text-[10px] text-blue-200 font-semibold">Year to Date 2024</p>
                <p className="text-xl font-black text-white mt-0.5">$1,200.38</p>
              </div>
            </div>

            {/* Floating Bottom-Right Card: Happy Students */}
            <div className="absolute bottom-6 -right-4 sm:-right-8 bg-white p-3.5 rounded-2xl shadow-2xl border border-slate-100 animate-float-reverse min-w-[140px]">
              <p className="text-xs font-bold text-slate-900">Happy Students</p>
              <div className="flex items-center space-x-1 text-amber-500 text-xs font-bold mt-0.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.8</span>
              </div>
              <div className="flex items-center space-x-[-6px] mt-2">
                <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="user" />
                <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
                <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" />
                <span className="w-5 h-5 rounded-full bg-[#C6FF00] text-slate-900 font-extrabold text-[9px] flex items-center justify-center border border-white">2k+</span>
              </div>
            </div>

            {/* Floating Yellow 3D Spring Vector beside student on right */}
            <div className="absolute top-10 right-4 animate-float-reverse pointer-events-none">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#C6FF00]">
                <path d="M10 10L25 25L10 40L25 55" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 10L45 25L30 40L45 55" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Create & Manage <br className="hidden sm:inline" /> Courses Easily.
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              <strong className="text-slate-900 font-bold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* 4 Blue Checkmark Items */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#0052FF] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-bold text-slate-900">Share Your Expertise</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#0052FF] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-bold text-slate-900">Monetize Your Passion</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#0052FF] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-bold text-slate-900">Flexibility and Autonomy</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#0052FF] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-bold text-slate-900">Build a Community</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
