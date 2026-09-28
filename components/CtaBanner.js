import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-brand-blue rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          
          {/* Decorative Floating SVG Background Shapes */}
          <div className="absolute top-6 left-8 opacity-70 animate-float-slow hidden sm:block">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#C6FF00" strokeWidth="4" />
            </svg>
          </div>

          <div className="absolute bottom-6 right-8 opacity-80 animate-float-reverse hidden sm:block">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M25 0L31 19L50 25L31 31L25 50L19 31L0 25L19 19L25 0Z" fill="#C6FF00" />
            </svg>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-brand-lime" />
              <span className="text-xs font-bold text-brand-lime uppercase tracking-wider">
                Start Learning Today
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Start Your Journey Today with ByteSpace
            </h2>

            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto font-normal">
              Take the next step in your career. Get instant unlimited access to 500+ courses, real-world projects, and dedicated 1-on-1 mentorship.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto bg-brand-lime hover:bg-brand-lime-hover text-brand-dark font-extrabold text-base px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </Link>
              
              <Link
                href="#courses"
                className="w-full sm:w-auto bg-blue-700/60 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all border border-blue-400/30 hover:border-blue-400"
              >
                Explore All Courses
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
