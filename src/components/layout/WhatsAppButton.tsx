import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
    const handleClick = () => {
        const message = encodeURIComponent('Olá! Vi seu site e gostaria de agendar uma avaliação.');
        window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
            <Button
                onClick={handleClick}
                className="rounded-full w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center p-0"
                aria-label="Falar no WhatsApp"
            >
                <MessageCircle className="w-8 h-8 md:w-9 md:h-9 text-white fill-current" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                </span>
            </Button>
        </div>
    );
};

export default WhatsAppButton;
