import { Palette, Code2, Laptop, Building2, TrendingUp, Camera } from "lucide-react";

export default function CategoryGrid() {
  const categories = [
    {
      icon: Palette,
      title: "Design",
    },
    {
      icon: Code2,
      title: "Development",
    },
    {
      icon: Laptop,
      title: "IT & Software",
    },
    {
      icon: Building2,
      title: "Business",
    },
    {
      icon: TrendingUp,
      title: "Marketing",
    },
    {
      icon: Camera,
      title: "Photography",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-[#0052FF] rounded-2xl p-6 text-center flex flex-col items-center justify-center space-y-4 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-[#C6FF00] flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className="w-7 h-7 stroke-[2.2]" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors">
                  {cat.title}
                </h4>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
