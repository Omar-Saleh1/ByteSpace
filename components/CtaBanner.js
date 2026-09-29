import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0052FF] rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          
          {/* Blueprint Grid Pattern Background */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Floating 3D Vector Graphics */}
          <div className="absolute top-6 left-8 opacity-90 animate-float-slow hidden sm:block">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="16" stroke="#C6FF00" strokeWidth="6" />
            </svg>
          </div>

          <div className="absolute bottom-6 right-8 opacity-90 animate-float-reverse hidden sm:block">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M25 0L31 19L50 25L31 31L25 50L19 31L0 25L19 19L25 0Z" fill="#C6FF00" />
            </svg>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Unlock Your Potential as a <br className="hidden sm:inline" /> Creator with ByteSpace
            </h2>

            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed font-normal">
              Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
            </p>

            <div className="pt-2 flex justify-center">
              <Link
                href="/signup"
                className="bg-[#C6FF00] hover:bg-[#b8f000] text-slate-900 font-extrabold text-sm px-8 py-3.5 rounded-full transition-all shadow-xl hover:scale-105"
              >
                Join as Creator
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
