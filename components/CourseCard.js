import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/70 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      
      {/* Image with 3 Overlay Badges */}
      <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay Tags at Bottom of Image */}
        <div className="absolute bottom-3 left-2.5 right-2.5 flex items-center justify-center space-x-1.5 text-[10px] font-semibold text-slate-700">
          <span className="bg-slate-200/80 backdrop-blur-md px-2.5 py-1 rounded-full">{course.lessons || "17 Lessons"}</span>
          <span className="bg-slate-200/80 backdrop-blur-md px-2.5 py-1 rounded-full">{course.duration || "2 hours 16 mins"}</span>
          <span className="bg-slate-200/80 backdrop-blur-md px-2.5 py-1 rounded-full">{course.comments || "59 Comments"}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
        
        <div className="space-y-1">
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-extrabold text-slate-900 line-clamp-1 group-hover:text-[#0052FF] transition-colors">
              {course.title}
            </h3>
            <div className="flex items-center space-x-1 text-xs font-bold text-slate-700 flex-shrink-0">
              <span>{course.rating || "4.5"}</span>
              <Star className="w-3.5 h-3.5 fill-slate-300 text-slate-300" />
            </div>
          </div>

          {/* Author Subtitle */}
          <p className="text-xs text-slate-400 font-medium">
            by <span className="text-[#0052FF] font-semibold">{course.author || "purepearl studio"}</span>
          </p>
        </div>

        {/* Level & Avatars Row */}
        <div className="flex items-center justify-between pt-1">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1">
            <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
            <span>{course.level || "Beginner"}</span>
          </span>

          <div className="flex items-center space-x-[-6px]">
            <img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="user" />
            <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
            <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" />
            <span className="w-6 h-6 rounded-full bg-[#C6FF00] text-slate-900 font-extrabold text-[9px] flex items-center justify-center border border-white">26+</span>
          </div>
        </div>

        {/* Price Tag Row */}
        <div className="pt-2 flex items-center justify-between">
          <div>
            <span className="text-base font-black text-[#0052FF]">{course.price || "$25"}</span>
            <span className="text-xs text-slate-400 font-medium ml-1">/lifetime</span>
          </div>
        </div>

      </div>

    </div>
  );
}
