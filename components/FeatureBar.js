import { BookOpen, Users, Clock, Calendar, Headphones } from "lucide-react";

export default function FeatureBar() {
  const features = [
    {
      icon: BookOpen,
      title: "Over 10k Courses",
      desc: "Explore top technologies",
    },
    {
      icon: Users,
      title: "Expert Mentors",
      desc: "Learn from lead engineers",
    },
    {
      icon: Clock,
      title: "Lifetime Access",
      desc: "Study at your own pace",
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      desc: "24/7 self-paced learning",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Instant community help",
    },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-3 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-normal">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
