import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";

export default function ValuePropSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50/40 via-purple-50/20 to-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        
        {/* Block 1: Your Path to Professional Growth Starts Here! */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* 3 Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200">
              <div>
                <p className="text-3xl font-black text-[#0052FF]">12K</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Students</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#0052FF]">70+</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Courses</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#0052FF]">16</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Creators</p>
              </div>
            </div>
          </div>

          {/* Right Image Side with Floating Badges */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1000"
                alt="Student growth"
                fill
                className="object-cover"
              />
            </div>

            {/* Mini Course Preview Floating Card Top-Left */}
            <div className="absolute top-6 -left-6 sm:-left-10 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] animate-float-slow hidden sm:block">
              <div className="relative w-full h-24 rounded-xl overflow-hidden mb-2">
                <Image src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300" alt="Figma" fill className="object-cover" />
              </div>
              <p className="text-xs font-bold text-slate-900 line-clamp-1">Learn Figma fro...</p>
              <p className="text-[10px] text-[#0052FF] font-bold mt-0.5">$25 <span className="text-slate-400 font-normal">/lifetime</span></p>
            </div>

            {/* Learning Progress Floating Card Right */}
            <div className="absolute bottom-10 -right-4 sm:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 min-w-[150px] animate-float-reverse">
              <p className="text-[10px] text-slate-500 font-semibold uppercase">Learning Progress</p>
              <p className="text-2xl font-black text-slate-900 mt-0.5">55%</p>
              <div className="w-full bg-slate-100 rounded-full h-2 mt-2 overflow-hidden">
                <div className="bg-[#0052FF] h-full rounded-full w-[55%]"></div>
              </div>
            </div>
          </div>

        </div>


        {/* Block 2: Create & Manage Courses Easily */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Image Side with Floating Badges */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                alt="Creator avatar"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Revenue Badges */}
            <div className="absolute top-4 -left-6 sm:-left-10 space-y-2 animate-float-slow hidden sm:block">
              <div className="bg-[#0052FF] text-white p-3 rounded-2xl shadow-xl min-w-[140px]">
                <p className="text-[9px] text-blue-200 font-medium">Total Revenue July 1-28</p>
                <p className="text-lg font-black text-white">$120.29</p>
              </div>
              <div className="bg-[#0043D6] text-white p-3 rounded-2xl shadow-xl min-w-[140px]">
                <p className="text-[9px] text-blue-200 font-medium">Year to Date 2024</p>
                <p className="text-lg font-black text-white">$1,200.38</p>
              </div>
            </div>

            {/* Bottom Right Floating Badge: Happy Students */}
            <div className="absolute bottom-6 -right-4 sm:-right-8 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 animate-float-reverse">
              <p className="text-xs font-bold text-slate-900">Happy Students</p>
              <div className="flex items-center space-x-1 text-amber-500 text-xs font-bold mt-0.5">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>4.8</span>
              </div>
              <div className="flex items-center space-x-[-6px] mt-1.5">
                <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="user" />
                <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
                <span className="w-5 h-5 rounded-full bg-[#C6FF00] text-slate-900 font-extrabold text-[9px] flex items-center justify-center border border-white">2k+</span>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Create & Manage <br className="hidden sm:inline" /> Courses Easily.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-bold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* 4 Checkmark Items */}
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
