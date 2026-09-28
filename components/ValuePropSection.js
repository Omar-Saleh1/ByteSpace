import Image from "next/image";
import { CheckCircle2, Award, Users, BookOpen, Star } from "lucide-react";

export default function ValuePropSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Block 1: Fast Track Your Learning (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-extrabold tracking-wider px-4 py-1.5 rounded-full uppercase">
              Proven Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Fast Track Your Learning with Expert Guidance
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our structured curriculum eliminates fluff and focuses on real-world engineering skills. Build portfolio-ready projects mentored by industry professionals from top tech companies.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-brand-lime text-brand-dark flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Interactive Coding Challenges & Labs</h4>
                  <p className="text-sm text-slate-500">Practice live code in your browser with instant automated feedback.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-brand-lime text-brand-dark flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Real-World Portfolio Projects</h4>
                  <p className="text-sm text-slate-500">Graduate with production-ready code repositories ready for recruiters.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-brand-lime text-brand-dark flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Dedicated 1-on-1 Mentor Code Reviews</h4>
                  <p className="text-sm text-slate-500">Get detailed feedback and career coaching from senior engineers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side with Floating Badge */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                alt="Students collaborating at ByteSpace"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 flex items-center space-x-4 max-w-xs animate-float-slow">
              <div className="w-12 h-12 rounded-xl bg-brand-lime text-brand-dark flex items-center justify-center font-black text-xl shadow-md">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">98%</p>
                <p className="text-xs font-semibold text-slate-500">Course Completion & Hiring Rate</p>
              </div>
            </div>
          </div>

        </div>


        {/* Block 2: Join A Growing Community (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side with Floating Badges */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000"
                alt="ByteSpace Global Community"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Community Badge */}
            <div className="absolute -top-6 -right-4 sm:right-4 bg-brand-dark text-white p-5 rounded-2xl shadow-2xl border border-slate-800 flex items-center space-x-4 max-w-xs animate-float-reverse">
              <div className="w-12 h-12 rounded-xl bg-brand-lime text-brand-dark flex items-center justify-center font-black text-xl shadow-md">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xl font-black text-brand-lime">Global Network</p>
                <p className="text-xs font-medium text-slate-300">Connect with 10k+ learners worldwide</p>
              </div>
            </div>
          </div>

          {/* Text & Stats Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-extrabold tracking-wider px-4 py-1.5 rounded-full uppercase">
              Global Network
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Join A Growing Community of Future Tech Leaders
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              When you join ByteSpace, you gain access to an active Discord community, weekly live study groups, hackathons, and exclusive hiring partner channels.
            </p>

            {/* Stats Counter Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-blue">10,000+</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Active Students</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-blue">500+</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Top Courses</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-blue">4.9/5</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Average Rating</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
