import Image from "next/image";
import { Star } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      
      {/* Image with 3 Overlay Badges */}
      <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay Tags at Bottom of Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-slate-700 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md">
          <span>{course.lessons || "17 Lessons"}</span>
          <span>•</span>
          <span>{course.duration || "2 hours 16 mins"}</span>
          <span>•</span>
          <span>{course.comments || "60 Comments"}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        
        <div className="space-y-1.5">
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-[#0052FF] transition-colors">
              {course.title}
            </h3>
            <div className="flex items-center space-x-1 text-xs font-bold text-slate-700 flex-shrink-0">
              <span>{course.rating}</span>
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
          </div>

          {/* Author Subtitle */}
          <p className="text-xs text-slate-400 font-medium">
            by <span className="text-slate-600 font-semibold">{course.author || "purepixel studio"}</span>
          </p>
        </div>

        {/* Level & Avatars Row */}
        <div className="flex items-center justify-between pt-2">
          <span className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-1 rounded-md">
            {course.level || "Beginner"}
          </span>

          <div className="flex items-center space-x-[-6px]">
            <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="user" />
            <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
            <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" />
            <span className="w-5 h-5 rounded-full bg-[#C6FF00] text-slate-900 font-extrabold text-[9px] flex items-center justify-center border border-white">25+</span>
          </div>
        </div>

        {/* Price Tag Row */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-lg font-black text-[#0052FF]">{course.price || "$25"}</span>
            <span className="text-xs text-slate-400 font-medium ml-1">/lifetime</span>
          </div>
          <button className="text-xs font-bold text-[#0052FF] hover:underline">
            View Details
          </button>
        </div>

      </div>

    </div>
  );
}
