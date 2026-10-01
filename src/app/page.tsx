import HeroLanding from "@/components/landing/HeroLanding";
import PartnersLogoStrip from "@/components/landing/PartnersLogoStrip";
import CourseDiscoverySection from "@/components/landing/CourseDiscoverySection";
import CategoryPathsSection from "@/components/landing/CategoryPathsSection";
import ProfessionalGrowthSection from "@/components/landing/ProfessionalGrowthSection";
import CreatorCtaBanner from "@/components/landing/CreatorCtaBanner";
import TestimonialsSection from "@/components/landing/TestimonialsSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col">
      {/* 1. Hero Banner with Navigation */}
      <HeroLanding />

      {/* 2. Trusted Partners Logo Strip */}
      <PartnersLogoStrip />

      {/* 3. Discover Your Passion, Build Your Skills (Course Catalog & Filters) */}
      <CourseDiscoverySection />

      {/* 4. Explore Diverse Learning Paths at Bytespace */}
      <CategoryPathsSection />

      {/* 5. Professional Growth & Course Management (Frames 11 & 12) */}
      <ProfessionalGrowthSection />

      {/* 7. Unlock Your Potential as a Creator with ByteSpace */}
      <CreatorCtaBanner />

      {/* 8. Discover What Our Community Is Saying (Testimonials) */}
      <TestimonialsSection />
    </main>
  );
}
