"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Send, Twitter, Github, Linkedin, Disc as Discord, CheckCircle } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="contact" className="bg-brand-dark text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-800">
          
          {/* Brand Logo & Tagline */}
          <div className="lg:col-span-5 space-y-3">
            <Link href="/" className="inline-flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-brand-lime flex items-center justify-center text-brand-dark font-black text-xl shadow-lg">
                <Sparkles className="w-5 h-5 fill-brand-dark" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Byte<span className="text-brand-lime">Space</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm">
              Empowering future tech leaders with world-class curriculum, hands-on projects, and 1-on-1 expert mentorship.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl sm:flex items-center justify-between gap-4">
              <div className="mb-4 sm:mb-0">
                <h4 className="text-base font-bold text-white">Subscribe to our newsletter</h4>
                <p className="text-xs text-slate-400">Get the latest course updates and tech career tips.</p>
              </div>

              {subscribed ? (
                <div className="flex items-center space-x-2 text-brand-lime font-bold text-sm bg-brand-lime/10 px-4 py-2.5 rounded-full border border-brand-lime/30">
                  <CheckCircle className="w-5 h-5" />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center space-x-2 w-full sm:w-auto">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-800 text-white text-sm px-4 py-2.5 rounded-full border border-slate-700 focus:outline-none focus:border-brand-lime w-full sm:w-64"
                  />
                  <button
                    type="submit"
                    className="bg-brand-lime hover:bg-brand-lime-hover text-brand-dark font-extrabold text-sm px-5 py-2.5 rounded-full transition-all flex items-center space-x-1.5 flex-shrink-0 shadow-md"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="#about" className="hover:text-brand-lime transition-colors">About Us</Link></li>
              <li><Link href="#courses" className="hover:text-brand-lime transition-colors">Courses</Link></li>
              <li><Link href="#instructors" className="hover:text-brand-lime transition-colors">Instructors</Link></li>
              <li><Link href="#pricing" className="hover:text-brand-lime transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="#courses" className="hover:text-brand-lime transition-colors">Web Development</Link></li>
              <li><Link href="#courses" className="hover:text-brand-lime transition-colors">UI/UX Design</Link></li>
              <li><Link href="#courses" className="hover:text-brand-lime transition-colors">Data Science</Link></li>
              <li><Link href="#courses" className="hover:text-brand-lime transition-colors">Mobile Apps</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-lime transition-colors">Community Discord</a></li>
              <li><a href="#" className="hover:text-brand-lime transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-lime transition-colors">Student Stories</a></li>
              <li><a href="#" className="hover:text-brand-lime transition-colors">Career Guide</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Connect</h4>
            <p className="text-sm text-slate-400">support@bytespace.com</p>
            <p className="text-sm text-slate-400">+1 (800) 123-4567</p>

            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-brand-lime hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-brand-lime hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-brand-lime hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-brand-lime hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Discord className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© 2026 ByteSpace New. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
