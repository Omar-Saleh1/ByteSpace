"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />

      {/* Main 404 Section */}
      <section className="bg-[#0052FF] text-white pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden flex-1 flex items-center justify-center">
        
        {/* White Square Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          
          {/* Giant Gradient 404 */}
          <div className="select-none">
            <span
              className="text-[140px] sm:text-[220px] lg:text-[280px] font-black tracking-tighter leading-none block font-sans"
              style={{
                background: "linear-gradient(180deg, #C6FF00 0%, rgba(198, 255, 0, 0.75) 45%, rgba(0, 82, 255, 0.1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              404
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-2xl mx-auto -mt-8 sm:-mt-14 leading-tight">
            The page you are looking <br className="hidden sm:inline" /> for doesn’t exist
          </h1>

          {/* Subtitle */}
          <p className="text-blue-100 text-xs sm:text-sm max-w-md mx-auto font-normal leading-relaxed pt-1">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home Button */}
          <div className="pt-4">
            <Link
              href="/"
              className="inline-block bg-[#C6FF00] hover:bg-[#b8f000] text-slate-900 font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-xl transition-all hover:scale-105"
            >
              Back to Home
            </Link>
          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}
