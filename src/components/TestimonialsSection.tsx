import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Lucas Ferreira',
    sport: 'Crossfit',
    text: 'Minha performance nos WODs melhorou absurdamente. Recuperação mais rápida e energia para treinar pesado todos os dias.',
    rating: 5,
  },
  {
    name: 'Marina Santos',
    sport: 'Corrida',
    text: 'Consegui baixar meu tempo na maratona em 15 minutos. A estratégia de nutrição pré e pós-treino foi um divisor de águas.',
    rating: 5,
  },
  {
    name: 'Rafael Costa',
    sport: 'Musculação',
    text: 'Em 4 meses ganhei 6kg de massa magra sem acumular gordura. Plano prático que encaixou perfeitamente na minha rotina.',
    rating: 5,
  },
  {
    name: 'Juliana Mendes',
    sport: 'Triathlon',
    text: 'A periodização nutricional para competições mudou completamente meus resultados. Me sinto muito mais preparada.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="resultados" className="py-16 lg:py-24 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Resultados
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            ATLETAS QUE <span className="text-gradient">EVOLUÍRAM</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de pessoas que transformaram sua performance através da nutrição estratégica.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-display font-bold text-lg">
                  {testimonial.name}
                </p>
                <p className="text-primary text-sm font-medium">
                  {testimonial.sport}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
