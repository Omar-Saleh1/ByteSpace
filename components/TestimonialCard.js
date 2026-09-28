import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ item }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1">
      
      <div className="space-y-4">
        {/* Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <Quote className="w-8 h-8 text-brand-lime stroke-[1.5] opacity-80" />
        </div>

        {/* Quote Text */}
        <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed italic">
          "{item.quote}"
        </p>
      </div>

      {/* Author Footer */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-3.5">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-lime flex-shrink-0 shadow-sm">
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
            {item.name}
          </h4>
          <p className="text-xs font-semibold text-slate-500">
            {item.role}
          </p>
        </div>
      </div>

    </div>
  );
}
