import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
    quote: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    quote: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    quote: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-24 relative overflow-hidden font-sans"
      style={{
        background: `
          radial-gradient(ellipse at 100% 0%, rgba(190, 255, 60, 0.55) 0%, transparent 55%),
          radial-gradient(ellipse at 0% 100%, rgba(170, 185, 255, 0.70) 0%, transparent 55%),
          #ffffff
        `
      }}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Row: Title Left, Paragraph Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Discover What Our <br className="hidden sm:inline" /> Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[28px] p-8 shadow-sm border border-slate-100/80 hover:shadow-xl transition-all duration-300 flex flex-col space-y-3"
            >
              {/* Avatar */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-100 shadow-inner mb-2">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name & Role */}
              <div>
                <h4 className="text-base font-bold text-slate-900">{item.name}</h4>
                <p className="text-xs font-semibold text-[#0052FF]">{item.role}</p>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-2">
                {item.quote}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
