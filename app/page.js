import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import CoursesSection from "@/components/CoursesSection";
import CategoryGrid from "@/components/CategoryGrid";
import ValuePropSection from "@/components/ValuePropSection";
import CtaBanner from "@/components/CtaBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <LogoBar />
      <CoursesSection />
      <CategoryGrid />
      <ValuePropSection />
      <CtaBanner />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
