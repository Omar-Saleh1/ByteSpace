import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "UI/UX Student",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    quote: "ByteSpace completely transformed my learning journey. The course editor and practical projects allowed me to build a professional portfolio in just weeks.",
  },
  {
    id: 2,
    name: "James L.",
    role: "Full-Stack Creator",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "As a creator, publishing my courses on ByteSpace has allowed me to reach over 5,000 students globally and build a steady revenue stream.",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Data Science Student",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    quote: "The interactive exercises and vibrant community forums kept me motivated throughout my career transition into data science.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/50 via-lime-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid: Title Left, Description Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Discover What Our <br className="hidden sm:inline" /> Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1"
            >
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                "{item.quote}"
              </p>

              <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-semibold text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
