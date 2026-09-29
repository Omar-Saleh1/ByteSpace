"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { SlidersHorizontal, BarChart2, Grid, ChevronDown, Check } from "lucide-react";

export default function CreatorProfilePage() {
  const [following, setFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(12);

  const handleFollow = () => {
    if (following) {
      setFollowing(false);
      setFollowerCount(prev => prev - 1);
    } else {
      setFollowing(true);
      setFollowerCount(prev => prev + 1);
    }
  };

  const creatorCourses = [
    {
      id: 1,
      title: "Learn Figma from Basic",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600",
      rating: "4.5",
      author: "purepearl studio",
      level: "Beginner",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      price: "$25"
    },
    {
      id: 2,
      title: "Build Digital Asset",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      rating: "4.5",
      author: "purepearl studio",
      level: "Beginner",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      price: "$25"
    },
    {
      id: 3,
      title: "the Power of Big Data",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      rating: "4.5",
      author: "purepearl studio",
      level: "Beginner",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      price: "$25"
    },
    {
      id: 4,
      title: "Balancing Productivity and Life",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
      rating: "4.5",
      author: "purepearl studio",
      level: "Beginner",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      price: "$25"
    },
    {
      id: 5,
      title: "Mastering Money Management",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600",
      rating: "4.5",
      author: "purepearl studio",
      level: "Beginner",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      price: "$25"
    },
    {
      id: 6,
      title: "From Idea to Startup Success",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      rating: "4.5",
      author: "purepearl studio",
      level: "Beginner",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      price: "$25"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Creator Header Banner */}
      <section className="bg-[#0052FF] text-white pt-28 pb-12 md:pb-16 relative overflow-hidden">
        
        {/* Grid Lines Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Creator Profile Top Row */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            
            {/* Avatar */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
                alt="PurePearl Studio"
                fill
                className="object-cover"
              />
            </div>

            {/* Header info */}
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center space-x-3 flex-wrap gap-y-2">
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  PurePearl Studio
                </h1>
                <span className="bg-[#C6FF00] text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Creator
                </span>
              </div>
              <p className="text-sm font-medium text-blue-100">
                Passionate UI/UX, Web designer
              </p>
            </div>

          </div>

          {/* Bio Text */}
          <div className="space-y-3 max-w-4xl text-xs sm:text-sm text-blue-100 leading-relaxed">
            <p>
              Welcome to the creative world of <span className="font-semibold text-white">[Creator's Name]</span>. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
            </p>
            <p>
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>

          {/* Action Row: Stats & Follow Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            
            {/* Left Stats Pills */}
            <div className="flex items-center space-x-3">
              <div className="bg-white text-slate-900 text-xs font-bold px-5 py-2 rounded-full shadow-sm">
                3 Products
              </div>
              <div className="bg-white text-slate-900 text-xs font-bold px-5 py-2 rounded-full shadow-sm">
                {followerCount} Followers
              </div>
            </div>

            {/* Right Follow Button */}
            <button
              onClick={handleFollow}
              className={`text-xs font-bold px-7 py-2.5 rounded-full transition-all shadow-md flex items-center space-x-2 ${
                following 
                  ? "bg-white text-slate-900 hover:bg-slate-100" 
                  : "bg-[#C6FF00] hover:bg-[#b8f000] text-slate-900 hover:scale-105"
              }`}
            >
              {following && <Check className="w-3.5 h-3.5" />}
              <span>{following ? "Following" : "Follow"}</span>
            </button>

          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-8">
        
        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left Filters */}
          <div className="flex items-center space-x-3 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            <button className="flex items-center space-x-2 border border-slate-200 hover:border-slate-300 rounded-full px-4 py-2 text-xs font-bold text-slate-700 bg-white shadow-sm transition-all">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
              <span>Filter</span>
            </button>

            <button className="flex items-center space-x-2 border border-slate-200 hover:border-slate-300 rounded-full px-4 py-2 text-xs font-bold text-slate-700 bg-white shadow-sm transition-all">
              <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Level</span>
            </button>

            <button className="flex items-center space-x-2 border border-slate-200 hover:border-slate-300 rounded-full px-4 py-2 text-xs font-bold text-slate-700 bg-white shadow-sm transition-all">
              <Grid className="w-3.5 h-3.5 text-slate-500" />
              <span>Category</span>
            </button>
          </div>

          {/* Right Sorting */}
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 border border-slate-200 hover:border-slate-300 rounded-full px-4 py-2 text-xs font-bold text-slate-700 bg-white shadow-sm transition-all">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500 rotate-90" />
              <span>Most relevant</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creatorCourses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <CourseCard course={course} />
            </Link>
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}
