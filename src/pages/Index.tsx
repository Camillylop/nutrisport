import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import HeroSection from '@/components/sections/HeroSection';
import MethodSection from '@/components/sections/MethodSection';
import AudienceSection from '@/components/sections/AudienceSection';
import ServicesSection from '@/components/sections/ServicesSection';
import DifferentialsSection from '@/components/sections/DifferentialsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';
import FAQSection from '@/components/sections/FAQSection';
import CalorieCalculator from '@/components/tools/CalorieCalculator';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MethodSection />
      <AudienceSection />
      <ServicesSection />
      <CalorieCalculator />
      <DifferentialsSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
