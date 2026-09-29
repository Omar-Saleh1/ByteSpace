import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-[#0052FF] text-white py-20 lg:py-28 relative overflow-hidden font-sans">
      
      {/* White Square Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* FLOATING 3D SHAPES MATCHING FIGMA BANNER SCREENSHOT */}

      {/* Top Left 1: Lime 3D Spring Coil */}
      <div className="absolute -top-10 -left-10 z-10 pointer-events-none drop-shadow-2xl animate-float-slow">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <path d="M15 25 C 80 -15, 140 35, 45 80 C -35 125, 120 150, 90 150" stroke="#C6FF00" strokeWidth="28" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Top Left 2: Glossy White 3D Zigzag Ribbon */}
      <div className="absolute top-4 left-32 sm:left-44 z-10 pointer-events-none drop-shadow-2xl hidden sm:block">
        <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
          <path d="M15 15 L 85 35 L 20 75 L 90 100" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Bottom Left 1: Pure White 3D Cone / Pyramid */}
      <div className="absolute -bottom-8 -left-6 z-10 pointer-events-none drop-shadow-2xl">
        <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
          <polygon points="60,10 10,130 110,130" fill="white" />
          <polygon points="60,10 110,130 60,130" fill="#e2e8f0" />
        </svg>
      </div>

      {/* Bottom Left 2: Large Lime 3D Torus Ring */}
      <div className="absolute -bottom-20 left-12 sm:left-28 z-10 pointer-events-none drop-shadow-2xl animate-float-reverse">
        <svg width="210" height="210" viewBox="0 0 210 210" fill="none">
          <ellipse cx="105" cy="105" rx="85" ry="60" stroke="#C6FF00" strokeWidth="36" transform="rotate(-22 105 105)" />
          <ellipse cx="105" cy="105" rx="85" ry="60" stroke="#a4e000" strokeWidth="6" strokeDasharray="60 90" transform="rotate(-22 105 105)" />
        </svg>
      </div>

      {/* Top Right 1: Lime 3D Pyramid */}
      <div className="absolute top-4 right-36 sm:right-60 z-10 pointer-events-none drop-shadow-2xl">
        <svg width="130" height="150" viewBox="0 0 130 150" fill="none">
          <polygon points="65,10 10,130 65,142" fill="#D2FF1A" />
          <polygon points="65,10 65,142 120,120" fill="#B3EB00" />
        </svg>
      </div>

      {/* Top Right 2: White 3D Slanted Cylinder / Capsule */}
      <div className="absolute -top-10 -right-12 z-10 pointer-events-none drop-shadow-2xl hidden md:block">
        <svg width="170" height="240" viewBox="0 0 170 240" fill="none" transform="rotate(-15)">
          <rect x="30" y="45" width="110" height="165" rx="55" fill="white" />
          <ellipse cx="85" cy="45" rx="55" ry="28" fill="#f1f5f9" />
        </svg>
      </div>

      {/* Bottom Right 1: Lime 3D Coiled Spring */}
      <div className="absolute -bottom-16 right-4 sm:right-20 z-10 pointer-events-none drop-shadow-2xl">
        <svg width="160" height="180" viewBox="0 0 160 180" fill="none">
          <path d="M25 25 C 130 10, 110 80, 35 90 C -25 100, 125 140, 145 165" stroke="#C6FF00" strokeWidth="30" strokeLinecap="round"/>
        </svg>
      </div>


      {/* MAIN CENTER CONTENT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 space-y-6">
        
        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white max-w-3xl mx-auto">
          Unlock Your Potential as a <br /> Creator with ByteSpace
        </h2>

        {/* Subtitle Description */}
        <p className="text-xs sm:text-sm text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* Join as Creator Button */}
        <div className="pt-3 flex justify-center">
          <Link
            href="/signup"
            className="bg-[#C6FF00] hover:bg-[#b8f000] text-slate-900 font-extrabold text-sm px-8 py-3.5 rounded-full transition-all shadow-xl hover:scale-105 inline-block"
          >
            Join as Creator
          </Link>
        </div>

      </div>

    </section>
  );
}
