import { Palette, Shirt, Zap, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import pecasAnoTodo from "@/assets/pecas-ano-todo.webp";
import roupasAcessorios from "@/assets/roupas-acessorios.webp";
import tecnicasRapidas from "@/assets/tecnicas-rapidas.webp";
import pecasTematicas from "@/assets/pecas-tematicas.webp";
import amigurumiBonus from "@/assets/amigurumi-bonus.webp";

const learningItems = [
  {
    icon: "🧶",
    text: "Peças que vendem o ano todo – tapetes, sousplats, flores e itens de decoração",
    image: pecasAnoTodo
  },
  {
    icon: "👗", 
    text: "Roupas e acessórios lucrativos – acabamento profissional que valoriza o trabalho",
    image: roupasAcessorios
  },
  {
    icon: "⚡",
    text: "Técnicas rápidas de produção – produza mais gastando menos fio",
    image: tecnicasRapidas
  },
  {
    icon: "🎁",
    text: "Peças temáticas – Natal, Dia das Mães, Dia dos Namorados (altíssima procura)",
    image: pecasTematicas
  },
  {
    icon: "✨",
    text: "Segredos de precificação e vendas – como cobrar mais sem perder clientes"
  }
];

const LearningSection = () => {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v2/CiJZ0r1lWDkec0myw3CV";

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            O que você vai aprender
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Domine as técnicas mais lucrativas do crochê e como cobrar o preço justo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 mb-12">
            {learningItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.text}
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 object-cover rounded-lg flex-shrink-0"
                  />
                )}
                <div className="flex items-start gap-3 flex-1">
                  <span className="text-2xl md:text-3xl flex-shrink-0">{item.icon}</span>
                  <p className="text-base md:text-lg font-medium text-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bônus Destacado */}
          <div className="relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                Bônus Especial
              </span>
            </div>
            
            <div className="bg-gradient-primary p-6 md:p-8 rounded-2xl shadow-xl text-center animate-pulse-gentle">
              <img 
                src={amigurumiBonus}
                alt="Amigurumi - Bônus especial"
                className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-xl mx-auto mb-4 shadow-lg"
              />
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-3">
                🎉 Bônus especial:
              </h3>
              <p className="text-base md:text-lg text-primary-foreground/90 mb-6 md:mb-8 max-w-2xl mx-auto">
                Aprenda Amigurumi (bonequinhos e bichinhos de crochê que explodem de vendas como presente e decoração)
              </p>
              
              <Button
                asChild
                size="lg"
                className="bg-card hover:bg-card/90 text-primary font-bold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <a href={checkoutUrl}>
                  🔘 Quero todos os bônus também
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;