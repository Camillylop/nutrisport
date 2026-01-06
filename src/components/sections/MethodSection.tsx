import { ClipboardCheck, Utensils, TrendingUp, Target } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Avaliação Completa',
    description: 'Análise detalhada do seu corpo, rotina de treinos, objetivos e histórico alimentar para entender suas necessidades únicas.',
  },
  {
    icon: Target,
    number: '02',
    title: 'Estratégia Personalizada',
    description: 'Desenvolvimento de um plano alimentar estratégico alinhado com seu tipo de treino, horários e metas de performance.',
  },
  {
    icon: Utensils,
    number: '03',
    title: 'Implementação Guiada',
    description: 'Acompanhamento próximo durante a implementação, com orientações práticas de pré e pós-treino.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Ajustes Contínuos',
    description: 'Monitoramento constante e ajustes baseados na sua evolução, garantindo resultados progressivos.',
  },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Metodologia
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            MEU <span className="text-gradient">MÉTODO</span> DE TRABALHO
          </h2>
          <p className="text-lg text-muted-foreground">
            Um processo estruturado e comprovado para transformar sua alimentação em combustível de alta performance.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative bg-gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <span className="absolute top-6 right-6 font-display text-6xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
