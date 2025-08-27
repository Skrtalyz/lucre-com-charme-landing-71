import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v2/CiJZ0r1lWDkec0myw3CV";

  return (
    <section className="section-padding bg-gradient-primary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 animate-fade-in">
            Você pode continuar fazendo crochê só como hobby…
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 animate-fade-in opacity-90">
            …ou pode começar hoje a transformar essa paixão em uma fonte de renda extra real.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-6 md:p-8 mb-6 md:mb-8 animate-fade-in">
            <p className="text-base md:text-lg mb-4 font-semibold">
              Mais de 500 mulheres já provaram que funciona. Agora é a sua vez.
            </p>
            <p className="text-base md:text-lg">
              👉 Clique no botão abaixo e garanta seu acesso imediato:
            </p>
          </div>
          
          <Button
            asChild
            className="bg-white text-primary hover:bg-gray-100 font-bold text-sm sm:text-base md:text-xl py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-12 rounded-full shadow-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-gentle w-full sm:w-auto leading-tight"
          >
            <a href={checkoutUrl} className="break-words hyphens-auto">
              🔘 Sim, quero transformar meu crochê em renda agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;