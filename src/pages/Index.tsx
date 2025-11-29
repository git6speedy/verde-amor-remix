import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { RecognitionSection } from "@/components/RecognitionSection";
import { ImpactSection } from "@/components/ImpactSection";
import { BusinessModelSection } from "@/components/BusinessModelSection";
import { PartnershipsSection } from "@/components/PartnershipsSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { TeamSection } from "@/components/TeamSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { LanguageSelector } from "@/components/LanguageSelector";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <RecognitionSection />
      <ImpactSection />
      <BusinessModelSection />
      <PartnershipsSection />
      <RoadmapSection />
      <TeamSection />
      <FAQSection />
      <Footer />
      <LanguageSelector />
    </div>
  );
};

export default Index;
