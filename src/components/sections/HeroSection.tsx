import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-athlete.jpg';

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Atleta preparando nutrição esportiva"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4 animate-fade-in">
            Nutrição Esportiva de Alta Performance
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            SUPERE SEUS{' '}
            <span className="text-gradient">LIMITES</span>{' '}
            COM NUTRIÇÃO ESTRATÉGICA
          </h1>
          <p className="text-base md:text-xl text-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Maximize sua performance, acelere sua recuperação e alcance a composição corporal ideal com um plano alimentar 100% personalizado para o seu treino e objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#contato">Agendar Avaliação</a>
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#metodo">Conhecer Método</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#metodo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
