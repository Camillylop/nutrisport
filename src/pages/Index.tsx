import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MethodSection from '@/components/MethodSection';
import AudienceSection from '@/components/AudienceSection';
import ServicesSection from '@/components/ServicesSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CalorieCalculator from '@/components/CalorieCalculator';
import FAQSection from '@/components/FAQSection';

import WhatsAppButton from '@/components/WhatsAppButton';

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
