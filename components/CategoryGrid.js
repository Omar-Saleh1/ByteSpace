import { Palette, Code2, TrendingUp, Briefcase, Server, BarChart3 } from "lucide-react";

export default function CategoryGrid() {
  const categories = [
    {
      icon: Palette,
      title: "UI/UX Design",
      count: "120+ Courses",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Code2,
      title: "Web Development",
      count: "240+ Courses",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      count: "85+ Courses",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: Briefcase,
      title: "Business & Finance",
      count: "150+ Courses",
      color: "bg-amber-50 text-amber-600",
    },
    {
      icon: Server,
      title: "Cloud & DevOps",
      count: "95+ Courses",
      color: "bg-sky-50 text-sky-600",
    },
    {
      icon: BarChart3,
      title: "Data Science & AI",
      count: "180+ Courses",
      color: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h3 className="text-2xl font-extrabold text-slate-900">
          Explore Popular Categories
        </h3>
        <p className="text-sm text-slate-500 mt-2">
          Discover specialized learning tracks designed to get you hired in top tech roles.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-brand-blue rounded-2xl p-5 text-center flex flex-col items-center justify-center space-y-3 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-lime flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform shadow-md">
                <Icon className="w-7 h-7 stroke-[2.2]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                  {cat.title}
                </h4>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  {cat.count}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
