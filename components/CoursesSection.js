"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import { SlidersHorizontal, BarChart2, Grid, ArrowUpDown } from "lucide-react";

const sampleCourses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "60 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    category: "Featured",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "60 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    category: "Data Science",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "60 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    category: "Productivity",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    category: "Freelance & Entrepreneurship",
    price: "$25",
    rating: "4.6",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "60 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    category: "Marketing",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
];

const categoryPills = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Discover Your Passion, <br className="hidden sm:inline" /> Build Your Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Toolbar Row: Filter Buttons Left, Sort Right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          
          {/* Left Filter Buttons */}
          <div className="flex items-center space-x-3 flex-wrap gap-y-2">
            <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-xs px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
              <span>Filter</span>
            </button>

            <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-xs px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm">
              <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Level</span>
            </button>

            <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-xs px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm">
              <Grid className="w-3.5 h-3.5 text-slate-500" />
              <span>Category</span>
            </button>
          </div>

          {/* Right Sort Button */}
          <div>
            <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-xs px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
              <span>Most relevant</span>
            </button>
          </div>

        </div>

        {/* Category Pills Row */}
        <div className="flex items-center flex-wrap gap-2">
          {categoryPills.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === cat
                  ? "bg-[#C6FF00] text-slate-900 font-extrabold shadow-sm scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {sampleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
}
