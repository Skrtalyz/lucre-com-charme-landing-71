
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ResultsSection from "@/components/ResultsSection";
import LearningSection from "@/components/LearningSection";
import ReasonsSection from "@/components/ReasonsSection";

import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <BenefitsSection />
      <ResultsSection />
      <LearningSection />
      <ReasonsSection />
      
      <PricingSection />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
