"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Search, ChevronDown, SlidersHorizontal, BarChart2, Grid, ArrowUpDown } from "lucide-react";

const allCatalogCourses = [
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
    comments: "60 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    title: "Build Digital Asset",
    category: "Featured",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 9,
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
    id: 10,
    title: "Balancing Productivity an...",
    category: "Productivity",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "60 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 11,
    title: "Mastering Money Manage...",
    category: "Freelance & Entrepreneurship",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "60 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 12,
    title: "From Idea to Startup Succ...",
    category: "Marketing",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "60 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 13,
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 14,
    title: "Build Digital Asset",
    category: "Featured",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 15,
    title: "the Power of Big Data",
    category: "Data Science",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepixel studio",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
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

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("Featured");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header Banner: Find Your Next Course */}
      <section className="bg-[#0052FF] text-white py-16 relative overflow-hidden">
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Find Your Next Course
          </h1>

          {/* Search Bar with Courses Dropdown Button */}
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-full p-2 pl-5 shadow-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-slate-800 text-sm font-medium placeholder-slate-400 bg-transparent focus:outline-none"
                />
              </div>

              {/* Lime Button with Dropdown Arrow "Courses v" */}
              <button
                type="button"
                className="bg-[#C6FF00] hover:bg-[#b8f000] text-slate-900 font-bold text-sm px-5 py-2 rounded-full transition-all flex items-center space-x-1 flex-shrink-0 shadow-sm"
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1 w-full">
        
        {/* Toolbar Row: Filter Buttons Left, Sort Right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          
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
        <div className="flex items-center flex-wrap gap-2.5">
          {categoryPills.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === cat
                  ? "bg-[#C6FF00] text-slate-900 font-extrabold shadow-sm scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {allCatalogCourses.map((course, idx) => (
            <CourseCard key={`${course.id}-${idx}`} course={course} />
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}
