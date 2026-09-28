import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Frontend Developer at Vercel",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    quote: "ByteSpace completely transformed my career path. The project-based learning and 1-on-1 mentor code reviews helped me land my dream Frontend Engineer job within 3 months of graduation!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Designer at Figma",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "The UI/UX design track is hands-down the best online curriculum available. The mentors don't just teach software, they teach systems thinking and design psychology.",
  },
  {
    id: 3,
    name: "Alex Rivera",
    role: "Data Analyst at Stripe",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    quote: "As a career changer with zero coding background, ByteSpace made technical concepts so accessible. The community and live study groups kept me motivated every day!",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="instructors" className="py-20 bg-gradient-to-b from-amber-50/40 via-lime-50/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block bg-amber-100 text-amber-900 text-xs font-extrabold tracking-wider px-4 py-1.5 rounded-full uppercase">
            Student Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Discover What Our Students Have to Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real stories from real graduates who mastered new skills and achieved their career goals with ByteSpace.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
