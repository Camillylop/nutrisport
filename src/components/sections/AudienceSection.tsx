import { Dumbbell, Flame, TrendingDown, Battery } from 'lucide-react';

const audiences = [
  {
    icon: Dumbbell,
    title: 'Quer Melhorar Performance',
    description: 'Atletas e praticantes que buscam atingir seu potencial máximo em treinos e competições.',
  },
  {
    icon: Flame,
    title: 'Busca Hipertrofia ou Definição',
    description: 'Quem deseja ganhar massa muscular com qualidade ou conquistar uma definição corporal marcante.',
  },
  {
    icon: TrendingDown,
    title: 'Treina Mas Não Evolui',
    description: 'Pessoas dedicadas ao treino que sentem que a nutrição está limitando seus resultados.',
  },
  {
    icon: Battery,
    title: 'Precisa de Recuperação',
    description: 'Atletas que enfrentam fadiga excessiva, lesões recorrentes ou recuperação lenta.',
  },
];

const AudienceSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Para Quem É
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ESSE PROGRAMA É PARA <span className="text-gradient">VOCÊ?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Se você se identifica com alguma dessas situações, a nutrição esportiva pode ser o diferencial que falta para você alcançar o próximo nível.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="flex items-start gap-5 p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <audience.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
