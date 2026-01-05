import { Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Info */}
          <div>
            <a href="#inicio" className="font-display text-2xl font-bold tracking-tight inline-block mb-3">
              <span className="text-foreground">NUTRI</span>
              <span className="text-gradient">SPORT</span>
            </a>
            <p className="text-muted-foreground text-sm">
              Dra. Carolina Silva<br />
              CRN-3 12345<br />
              Especialista em Nutrição Esportiva
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Início
            </a>
            <a href="#metodo" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Método
            </a>
            <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Serviços
            </a>
            <a href="#calculadora" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Calculadora
            </a>
            <a href="#resultados" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Resultados
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contato
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://instagram.com/nutrisport"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@nutrisport"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="mailto:contato@nutrisport.com.br"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              aria-label="E-mail"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} NutriSport. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
