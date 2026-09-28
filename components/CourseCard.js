import Image from "next/image";
import { Star, Clock, BookOpen, ArrowRight } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      
      {/* Thumbnail Container */}
      <div className="relative w-full h-48 sm:h-52 bg-slate-100 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-md text-brand-lime text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
          {course.category}
        </span>

        {/* Price Tag Badge */}
        <span className="absolute top-4 right-4 bg-brand-lime text-brand-dark text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg">
          {course.price}
        </span>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Metadata Row: Rating & Lessons */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <div className="flex items-center space-x-1 text-amber-500">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="font-bold text-slate-800">{course.rating}</span>
              <span className="text-slate-400">({course.reviewsCount})</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{course.duration}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-brand-blue transition-colors">
            {course.title}
          </h3>
        </div>

        {/* Instructor & Enroll Action Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200">
              <Image
                src={course.instructorAvatar}
                alt={course.instructor}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-semibold text-slate-700">
              {course.instructor}
            </span>
          </div>

          <button className="bg-slate-100 group-hover:bg-brand-lime text-slate-900 group-hover:text-brand-dark font-bold text-xs px-3.5 py-2 rounded-full flex items-center space-x-1.5 transition-all">
            <span>Enroll</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
