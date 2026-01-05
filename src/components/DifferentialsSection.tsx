import { Zap, Users, BarChart3, HeartHandshake, Microscope, Clock } from 'lucide-react';

const differentials = [
  {
    icon: Zap,
    title: 'Foco em Treino Real',
    description: 'Planos baseados na sua rotina de treinos, periodização e objetivos específicos.',
  },
  {
    icon: Microscope,
    title: 'Base Científica',
    description: 'Estratégias fundamentadas em evidências e atualizadas conforme a ciência evolui.',
  },
  {
    icon: BarChart3,
    title: 'Resultados Mensuráveis',
    description: 'Acompanhamento com métricas claras de composição corporal e performance.',
  },
  {
    icon: HeartHandshake,
    title: 'Suporte Contínuo',
    description: 'Comunicação direta para dúvidas e ajustes sempre que você precisar.',
  },
  {
    icon: Users,
    title: 'Experiência com Atletas',
    description: 'Anos de experiência atendendo praticantes de diversas modalidades esportivas.',
  },
  {
    icon: Clock,
    title: 'Praticidade',
    description: 'Planos alimentares adaptados à sua rotina, sem receitas complexas ou irreais.',
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Diferenciais
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            POR QUE <span className="text-gradient">ESCOLHER</span> MEU TRABALHO?
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais do que prescrever dietas, meu foco é construir uma estratégia nutricional que funciona para o seu estilo de vida e seus objetivos.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="text-center p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
