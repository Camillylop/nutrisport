import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Preciso tomar suplementos?",
        answer: "Nem sempre. A suplementação é uma ferramenta complementar e só é prescrita se houver necessidade real e comprovada, após ajuste da alimentação base. O foco sempre será comida de verdade."
    },
    {
        question: "Como funciona a avaliação de composição corporal?",
        answer: "Utilizamos o protocolo de dobras cutâneas (adipômetro) ou bioimpedância, dependendo do caso. Ambos são métodos eficazes para estimar percentual de gordura e massa muscular."
    },
    {
        question: "O plano alimentar tem receitas difíceis?",
        answer: "Não! O plano é montado de acordo com a sua rotina e disponibilidade de tempo. Priorizo preparações práticas e acessíveis para garantir que você consiga seguir a dieta."
    },
    {
        question: "Com que frequência devo retornar?",
        answer: "Depende do seu objetivo e plano escolhido. Geralmente, recomendamos retornos mensais ou a cada 45 dias para ajustes finos e avaliação de progresso."
    },
    {
        question: "Atende vegetarianos e veganos?",
        answer: "Sim! É perfeitamente possível ter alta performance esportiva com uma dieta vegetariana ou vegana, desde que haja o aporte correto de proteínas e nutrientes, o que faremos juntos."
    }
]

const FAQSection = () => {
    return (
        <section id="faq" className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-primary font-semibold uppercase tracking-widest mb-4">
                        Dúvidas Frequentes
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                        PERGUNTAS <span className="text-gradient">COMUNS</span>
                    </h2>
                </div>

                <div className="max-w-2xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQSection;
