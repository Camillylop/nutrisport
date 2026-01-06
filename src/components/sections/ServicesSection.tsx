import { Button } from '@/components/ui/button';
import { Check, Video, MapPin } from 'lucide-react';

const services = [
  {
    title: 'Consulta Nutricional Esportiva',
    description: 'Avaliação completa com análise de composição corporal, histórico alimentar e definição de metas.',
    features: ['Avaliação completa', 'Plano alimentar', 'Orientações de suplementação'],
    highlight: false,
  },
  {
    title: 'Acompanhamento Mensal',
    description: 'Programa completo com consultas mensais, ajustes de plano e suporte contínuo para resultados sustentáveis.',
    features: ['Consultas mensais', 'Ajustes contínuos', 'Suporte via WhatsApp', 'Estratégias pré/pós-treino'],
    highlight: true,
  },
  {
    title: 'Plano de Performance',
    description: 'Para atletas que buscam otimização máxima com periodização nutricional e estratégias avançadas.',
    features: ['Periodização nutricional', 'Estratégia para competição', 'Suporte intensivo', 'Ajustes semanais'],
    highlight: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Serviços
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            ESCOLHA SEU <span className="text-gradient">PLANO</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Opções flexíveis para diferentes objetivos e necessidades. Todos incluem atendimento personalizado.
          </p>

          {/* Modalities */}
          <div className="flex justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Video className="w-5 h-5 text-primary" />
              <span className="text-sm">Online</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm">Presencial</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${service.highlight
                  ? 'bg-gradient-card border-primary/50 shadow-glow'
                  : 'bg-gradient-card border-border/50 hover:border-primary/30'
                }`}
            >
              {service.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Mais Popular
                </span>
              )}

              <h3 className="font-display text-2xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={service.highlight ? 'cta' : 'outline'}
                className="w-full"
                asChild
              >
                <a href="#contato">Quero Evoluir</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
