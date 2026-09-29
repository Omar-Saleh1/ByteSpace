"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Star, Users, Share2, Play, CheckCircle2, Video, 
  BookOpen, Award, MessageCircle, FileText, Check 
} from "lucide-react";

export default function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState("About"); // "About", "Lesson", "Reviews"
  const [reviewFilter, setReviewFilter] = useState("All rating");

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Top Blue Hero Banner */}
      <section className="bg-[#0052FF] text-white py-12 relative overflow-hidden">
        
        {/* Grid Lines Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Row: Title & Share Button */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="text-sm sm:text-base text-blue-100 font-normal">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="text-xs text-blue-200 font-medium">
                by <span className="font-semibold text-[#C6FF00]">purepearl studio</span>
              </p>

              {/* Badges Row */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <span className="bg-white text-slate-800 text-xs font-semibold px-4 py-1.5 rounded-full flex items-center space-x-2 shadow-sm">
                  <BarChart2Icon className="w-3.5 h-3.5 text-[#0052FF]" />
                  <span>Intermediate</span>
                </span>

                <span className="bg-white text-slate-800 text-xs font-semibold px-4 py-1.5 rounded-full flex items-center space-x-2 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-[#0052FF] text-[#0052FF]" />
                  <span>4.8 (172 reviews)</span>
                </span>

                <span className="bg-white text-slate-800 text-xs font-semibold px-4 py-1.5 rounded-full flex items-center space-x-2 shadow-sm">
                  <Users className="w-3.5 h-3.5 text-[#0052FF]" />
                  <span>199 Students</span>
                </span>
              </div>
            </div>

            {/* Share Button */}
            <div>
              <button className="bg-[#C6FF00] hover:bg-[#b8f000] text-slate-900 font-bold text-xs px-4 py-2 rounded-full flex items-center space-x-1.5 shadow-md transition-all hover:scale-105">
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Video Player & Sidebar Card Grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Video Player Container */}
            <div className="lg:col-span-8 bg-slate-200 rounded-3xl overflow-hidden relative aspect-video flex items-center justify-center shadow-2xl group border-4 border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                alt="Course Video Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                <button className="w-16 h-16 rounded-2xl bg-white/90 text-slate-900 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-slate-900 ml-1" />
                </button>
              </div>
            </div>

            {/* Right Sticky Purchase Sidebar Card */}
            <div className="lg:col-span-4 bg-white text-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-100 space-y-6">
              
              {/* Lessons Header */}
              <div>
                <h3 className="text-base font-bold text-slate-900">112 Lessons (24 hours)</h3>
                <div className="space-y-2.5 mt-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">01 Introduction to Digital Assets</span>
                    <span className="text-blue-600 font-medium">12 mins</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">02 Design Principles for Impact</span>
                    <span className="text-blue-600 font-medium">21 mins</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">03 Advanced Techniques in Digital Creation</span>
                    <span className="text-blue-600 font-medium">16 mins</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">99 more videos</p>
                </div>
              </div>

              {/* Ready to Dive Subtext */}
              <p className="text-xs text-slate-500 font-medium">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
              </p>

              {/* Price & Enroll Button */}
              <div className="space-y-3 pt-1">
                <div>
                  <span className="text-2xl font-black text-[#0052FF]">$25</span>
                  <span className="text-xs text-slate-400 font-medium ml-1">/lifetime</span>
                </div>
                
                <button className="w-full bg-[#C6FF00] hover:bg-[#b8f000] text-slate-900 font-extrabold text-sm py-3.5 rounded-full shadow-lg transition-all hover:scale-105">
                  Enroll Now
                </button>
              </div>

              {/* Course Includes Checklist */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                <p className="font-bold text-slate-900 text-xs mb-2">This course include</p>
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Learning Resources</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Video className="w-4 h-4 text-blue-600" />
                  <span>Quality Lesson Videos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>Certificate of Completion</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Private Consultation</span>
                </div>
              </div>

              {/* PurePearl Studio Profile Box */}
              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                  <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="creator" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">PurePearl Studio</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Professional Creator</p>
                </div>
              </div>

              <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2 rounded-full transition-colors">
                See Full Profile
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1 w-full">
        
        {/* Tab Pills Row: About, Lesson, Reviews */}
        <div className="flex items-center space-x-3 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab("About")}
            className={`px-6 py-2 rounded-full text-xs font-extrabold transition-all ${
              activeTab === "About"
                ? "bg-[#C6FF00] text-slate-900 shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            About
          </button>

          <button
            onClick={() => setActiveTab("Lesson")}
            className={`px-6 py-2 rounded-full text-xs font-extrabold transition-all ${
              activeTab === "Lesson"
                ? "bg-[#C6FF00] text-slate-900 shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Lesson
          </button>

          <button
            onClick={() => setActiveTab("Reviews")}
            className={`px-6 py-2 rounded-full text-xs font-extrabold transition-all ${
              activeTab === "Reviews"
                ? "bg-[#C6FF00] text-slate-900 shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Reviews
          </button>
        </div>

        {/* TAB 1: ABOUT CONTENT */}
        {activeTab === "About" && (
          <div className="max-w-3xl space-y-8 animate-in fade-in duration-300">
            
            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Description</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Asset: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
              </p>
            </div>

            {/* Sneak Peak Gallery */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900">Sneak Peak</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div className="relative h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=300" alt="sneak" fill className="object-cover" />
                </div>
                <div className="relative h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300" alt="sneak" fill className="object-cover" />
                </div>
                <div className="relative h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300" alt="sneak" fill className="object-cover" />
                </div>
                <div className="relative h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300" alt="sneak" fill className="object-cover" />
                </div>
                <div className="relative h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300" alt="sneak" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Key Points</h3>
              <div className="space-y-2.5">
                {[
                  "Foundational Concepts",
                  "Design Principles Mastery",
                  "Advanced Techniques in Digital Creation",
                  "Project Showcase and Critique",
                  "Optimizing for Various Platforms",
                  "Digital Asset Management Best Practices",
                  "Monetization Strategies",
                  "Capstone Project: Building Your Portfolio",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#0052FF] text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: LESSON CONTENT */}
        {activeTab === "Lesson" && (
          <div className="max-w-3xl space-y-8 animate-in fade-in duration-300">
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Explore the Modules</h3>
              <p className="text-xs text-slate-500">
                Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
              </p>
            </div>

            {/* Lesson List Modules */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900">Lesson List</h4>
              
              {[
                { title: "Module 1: Introduction to Digital Assets", desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation." },
                { title: "Module 2: Design Principles for Impact", desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials'. Elevate your visual communication skills." },
                { title: "Module 4: User-Centric Design Strategies", desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials'. Craft digital assets with a focus on user-centric design." },
                { title: "Module 5: Interactive Media and Engagement", desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements'. Master the art of creating immersive digital experiences." },
                { title: "Module 6: Project Showcase and Critique", desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration'. Showcase your work with confidence." },
                { title: "Module 7: Optimizing Digital Assets for Various Platforms", desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media'. Ensure widespread accessibility and engagement across diverse digital landscapes." },
              ].map((mod, idx) => (
                <div key={idx} className="flex items-start space-x-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-[#C6FF00] text-slate-900 flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900">{mod.title}</h5>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Lesson Progress Tracking */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h4 className="text-sm font-bold text-slate-900">Lesson Progress Tracking</h4>
              <p className="text-xs text-slate-500">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
              
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl max-w-lg">
                <p className="text-xs text-slate-400 font-semibold uppercase">Learning Progress</p>
                <p className="text-2xl font-black text-slate-900 mt-1">55%</p>
                <div className="w-full bg-slate-200 rounded-full h-2 mt-2 overflow-hidden">
                  <div className="bg-[#C6FF00] h-full rounded-full w-[55%]"></div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: REVIEWS CONTENT */}
        {activeTab === "Reviews" && (
          <div className="max-w-3xl space-y-8 animate-in fade-in duration-300">
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">What Learners Are Saying</h3>
              <p className="text-xs text-slate-500">
                Discover what our learners have to say about their experience with "Build Digital Asset: A Comprehensive Guide." Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
              </p>
            </div>

            {/* Rating Breakdown Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="bg-[#C6FF00] text-slate-900 p-6 rounded-2xl text-center min-w-[120px]">
                <p className="text-[11px] font-bold uppercase">Ratings</p>
                <p className="text-3xl font-black mt-1">4.7</p>
              </div>

              <div className="flex-1 space-y-1.5 w-full text-xs">
                <div className="flex items-center space-x-2">
                  <div className="flex text-amber-400"><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /></div>
                  <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-[#C6FF00] h-full w-[85%]"></div></div>
                  <span className="text-slate-500 text-[10px]">720</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex text-amber-400"><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-slate-300" /></div>
                  <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-[#C6FF00] h-full w-[40%]"></div></div>
                  <span className="text-slate-500 text-[10px]">120</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex text-amber-400"><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-slate-300" /><Star className="w-3 h-3 fill-slate-300" /></div>
                  <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-[#C6FF00] h-full w-[15%]"></div></div>
                  <span className="text-slate-500 text-[10px]">21</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex text-amber-400"><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-slate-300" /><Star className="w-3 h-3 fill-slate-300" /><Star className="w-3 h-3 fill-slate-300" /></div>
                  <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-[#C6FF00] h-full w-[8%]"></div></div>
                  <span className="text-slate-500 text-[10px]">12</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex text-amber-400"><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-slate-300" /><Star className="w-3 h-3 fill-slate-300" /><Star className="w-3 h-3 fill-slate-300" /><Star className="w-3 h-3 fill-slate-300" /></div>
                  <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-[#C6FF00] h-full w-[10%]"></div></div>
                  <span className="text-slate-500 text-[10px]">16</span>
                </div>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900">Individual Reviews:</h4>
              <div className="flex items-center space-x-2 flex-wrap">
                {["All rating", "★ 5", "★ 4", "★ 3", "★ 2", "★ 1"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setReviewFilter(f)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      reviewFilter === f
                        ? "bg-[#C6FF00] text-slate-900 shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Reviews Cards List */}
            <div className="space-y-4">
              {[
                { name: "PurePearl Studio", role: "UI/UX Designer", time: "a year ago", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", quote: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!" },
                { name: "Albert Flores", role: "UI/UX Designer", time: "a year ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", quote: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!" },
                { name: "Cody Fisher", role: "UI/UX Designer", time: "a year ago", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", quote: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process." },
                { name: "Brooklyn Simmons", role: "UI/UX Designer", time: "a year ago", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face", quote: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout." },
              ].map((rev, idx) => (
                <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200">
                        <Image src={rev.avatar} alt={rev.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-900">{rev.name}</h5>
                        <p className="text-[10px] text-slate-400 font-medium">{rev.role}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400">{rev.time}</span>
                  </div>

                  <div className="flex text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{rev.quote}"
                  </p>
                </div>
              ))}
            </div>

          </div>
        )}

      </section>

      <Footer />
    </main>
  );
}

function BarChart2Icon(props) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
