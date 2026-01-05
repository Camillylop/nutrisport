import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Comece Agora
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            PRONTO PARA{' '}
            <span className="text-gradient">TRANSFORMAR</span>{' '}
            SUA PERFORMANCE?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Dê o primeiro passo em direção aos seus melhores resultados. Agende sua avaliação e descubra como a nutrição estratégica pode impulsionar seu desempenho.
          </p>
          <Button variant="hero" size="xl" className="group" asChild>
            <a href="#contato">
              Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
