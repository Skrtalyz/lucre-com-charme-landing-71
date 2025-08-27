
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";

const HeroSection = () => {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v2/CiJZ0r1lWDkec0myw3CV";
  
  return (
    <section className="bg-gradient-subtle section-padding overflow-hidden w-full">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="hero-title mb-6">
              Ganhe até R$150 por dia fazendo crochê
              <span className="block">mesmo que hoje você só faça por hobby</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              👉 Mais de 500 mulheres já transformaram suas peças em renda extra real. 
              Agora é sua vez começar o passo a passo e conquistar sua primeira venda em até 15 dias.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-4 mb-8">
              <Button asChild className="btn-primary-lg w-full sm:w-auto text-center text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 leading-tight">
                <a href={checkoutUrl} className="break-words hyphens-auto">
                  🔘 Quero transformar meu crochê em renda hoje
                </a>
              </Button>
            </div>

          </div>

          <div className="relative animate-scale-in px-2 sm:px-4 lg:px-0">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl animate-float">
              <img 
                src="https://i.postimg.cc/8cny51ns/Whisk-d10caa51d2-1.jpg"
                alt="Mulher feliz fazendo crochê"
                className="w-full h-auto object-cover min-h-[350px] sm:min-h-[400px] lg:min-h-0"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-accent text-accent-foreground p-3 sm:p-3 md:p-4 rounded-full shadow-lg animate-pulse-gentle">
              <span className="font-bold text-sm sm:text-sm md:text-sm">💰 R$150/dia</span>
            </div>
            
            <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 bg-secondary text-secondary-foreground p-3 sm:p-3 md:p-4 rounded-full shadow-lg animate-pulse-gentle">
              <span className="font-bold text-sm sm:text-sm md:text-sm">🏆 #1 Preferido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
