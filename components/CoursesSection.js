"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import CategoryGrid from "./CategoryGrid";

const sampleCourses = [
  {
    id: 1,
    title: "Complete Web Design & Frontend Development Bootcamp 2026",
    category: "Web Development",
    price: "$49",
    rating: "4.9",
    reviewsCount: "1,420",
    duration: "42 Hours",
    instructor: "Sarah Jenkins",
    instructorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Mastering Figma UI/UX Design System & Prototyping",
    category: "UI/UX Design",
    price: "$59",
    rating: "4.8",
    reviewsCount: "980",
    duration: "28 Hours",
    instructor: "Michael Chen",
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Full-Stack Python & Data Science Specialist Program",
    category: "Data Science",
    price: "$89",
    rating: "4.9",
    reviewsCount: "2,150",
    duration: "65 Hours",
    instructor: "Alex Rivera",
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "React Native & Flutter Cross-Platform Mobile Apps",
    category: "Mobile Apps",
    price: "$69",
    rating: "4.7",
    reviewsCount: "840",
    duration: "34 Hours",
    instructor: "David Vance",
    instructorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "AI-Powered Product Strategy & Modern Digital Marketing",
    category: "Digital Marketing",
    price: "$39",
    rating: "4.8",
    reviewsCount: "1,110",
    duration: "22 Hours",
    instructor: "Emily Stone",
    instructorAvatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "AWS Cloud Architect & DevOps Engineering Masterclass",
    category: "Web Development",
    price: "$79",
    rating: "4.9",
    reviewsCount: "1,890",
    duration: "50 Hours",
    instructor: "James Wilson",
    instructorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
  },
];

const categories = ["All", "Web Development", "UI/UX Design", "Data Science", "Mobile Apps"];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCourses = activeTab === "All" 
    ? sampleCourses 
    : sampleCourses.filter(c => c.category === activeTab);

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block bg-brand-lime text-brand-dark text-xs font-extrabold tracking-wider px-4 py-1.5 rounded-full uppercase">
            Explore Our Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Daily Top-Rated Courses
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Handcrafted curriculum designed to turn beginners into job-ready software engineers and product designers.
          </p>
        </div>

        {/* Category Tabs Pill Navigation */}
        <div className="mt-10 flex items-center justify-center flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeTab === cat
                  ? "bg-brand-dark text-brand-lime shadow-lg scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Categories Icon Grid */}
        <CategoryGrid />

      </div>
    </section>
  );
}
