import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Mail, MapPin, Instagram, Send } from 'lucide-react';
import { toast } from 'sonner';
import nutritionistImage from '@/assets/nutritionist-portrait.jpg';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mensagem enviada! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma avaliação nutricional esportiva.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Contato
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            VAMOS <span className="text-gradient">CONVERSAR?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha a melhor forma de entrar em contato. Responderei o mais rápido possível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            {/* Nutritionist Card */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 mb-8">
              <div className="flex items-center gap-6 mb-6">
                <img
                  src={nutritionistImage}
                  alt="Nutricionista Esportiva"
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-display text-2xl font-bold">
                    Dra. Carolina Silva
                  </h3>
                  <p className="text-primary font-medium">
                    Nutricionista Esportiva
                  </p>
                  <p className="text-muted-foreground text-sm">
                    CRN-3 12345
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Especialista em nutrição esportiva com mais de 8 anos de experiência atendendo atletas de diversas modalidades. Minha missão é ajudar você a alcançar seu máximo potencial através da alimentação estratégica.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="space-y-4">
              <Button
                variant="cta"
                size="lg"
                className="w-full justify-start gap-4"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
                Falar pelo WhatsApp
              </Button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:contato@nutrisport.com.br"
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground/80">contato@nutrisport.com.br</span>
                </a>
                <a
                  href="https://instagram.com/nutrisport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground/80">@nutrisport</span>
                </a>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-card border border-border/50">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/80">
                  Av. Paulista, 1000 - Bela Vista<br />
                  São Paulo - SP, 01310-100
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
            <h3 className="font-display text-2xl font-bold mb-6">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome completo
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    WhatsApp
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-me sobre seus objetivos..."
                  rows={4}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              <Button variant="cta" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
