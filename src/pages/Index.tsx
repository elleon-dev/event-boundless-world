import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import ServicesSection from "@/components/ServicesSection";
import InspirationSection from "@/components/InspirationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <ServicesSection />
      <InspirationSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
