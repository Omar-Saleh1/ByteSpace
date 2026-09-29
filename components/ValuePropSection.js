import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";

export default function ValuePropSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative overflow-hidden font-sans"
      style={{
        background: `
          radial-gradient(ellipse 900px 700px at 100% 15%, rgba(210, 255, 60, 0.35) 0%, transparent 70%),
          radial-gradient(ellipse 900px 700px at 0% 50%, rgba(180, 200, 255, 0.45) 0%, transparent 70%),
          radial-gradient(ellipse 900px 700px at 100% 85%, rgba(210, 255, 60, 0.30) 0%, transparent 70%),
          #ffffff
        `
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 relative z-10">

        {/* =================== BLOCK 1: Your Path to Professional Growth =================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
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

            {/* Floating Mini Course Card */}
            <div className="absolute top-4 -left-4 sm:-left-8 bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 max-w-[210px] hidden sm:block">
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
            <div className="absolute top-28 -right-4 sm:-right-8 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 min-w-[150px]">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Learning Progress</p>
              <p className="text-2xl font-black text-slate-900 mt-1">55%</p>
              <div className="w-full bg-slate-100 rounded-full h-2 mt-2 overflow-hidden">
                <div className="bg-[#0052FF] h-full rounded-full w-[55%]"></div>
              </div>
            </div>
          </div>

        </div>


        {/* =================== BLOCK 2: Create & Manage Courses Easily =================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Image Composition */}
          <div className="lg:col-span-7 relative flex justify-center order-2 lg:order-1">
            
            {/* Main portrait image — woman with headphones holding tablet */}
            <div className="relative w-full max-w-lg h-[500px]">
              <Image
                src="/images/creator-female.png"
                alt="Female creator with headset"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>

            {/* Floating Revenue Cards - Top Left */}
            <div className="absolute top-6 -left-6 sm:-left-10 space-y-2.5 hidden sm:block">
              {/* Total Revenue */}
              <div className="bg-[#0052FF] text-white p-4 rounded-2xl shadow-2xl min-w-[170px]">
                <p className="text-[10px] text-blue-200 font-semibold">Total Revenue</p>
                <p className="text-[10px] text-blue-300 font-medium">July 1-28</p>
                <p className="text-2xl font-black text-white mt-1">$120.29</p>
                <div className="w-full bg-blue-400/40 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div className="bg-[#C6FF00] h-full rounded-full w-[55%]"></div>
                </div>
              </div>
              {/* Year to Date */}
              <div className="bg-[#0043D6] text-white p-4 rounded-2xl shadow-2xl min-w-[170px]">
                <p className="text-[10px] text-blue-300 font-semibold">Year to Date</p>
                <p className="text-[10px] text-blue-300 font-medium">2023</p>
                <p className="text-2xl font-black text-white mt-1">$1,200.38</p>
                <div className="mt-2 inline-flex items-center bg-[#C6FF00] text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full">
                  +12$
                </div>
              </div>
            </div>

            {/* Lime 3D Spring/Coil shape beside woman */}
            <div className="absolute top-16 right-4 sm:right-0 pointer-events-none">
              <svg width="90" height="120" viewBox="0 0 90 120" fill="none">
                <path
                  d="M20 15 C 80 5, 70 50, 30 60 C -5 70, 75 100, 60 115"
                  stroke="#C6FF00"
                  strokeWidth="22"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Floating Bottom-Right Card: Happy Students */}
            <div className="absolute bottom-6 right-0 sm:-right-4 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 min-w-[170px]">
              <p className="text-sm font-bold text-slate-900">Happy Students</p>
              <div className="flex items-center space-x-1 text-[11px] font-bold mt-0.5">
                <span className="text-slate-700">4.5 (240)</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>
              <div className="flex items-center mt-2 space-x-[-6px]">
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="user" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="user" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100" alt="user" />
                <span className="w-7 h-7 rounded-full bg-[#C6FF00] text-slate-900 font-extrabold text-[9px] flex items-center justify-center border-2 border-white">2K+</span>
              </div>
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
            <div className="space-y-4 pt-2">
              {["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#0052FF] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
