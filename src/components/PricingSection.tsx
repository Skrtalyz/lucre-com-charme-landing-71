
import { Button } from "@/components/ui/button";
import { Check, Crown, Zap } from "lucide-react";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";
import pricingVideo from "@/assets/pricing-video.mp4";
import pricingVideoThumbnail from "@/assets/pricing-video-thumbnail.png";

const plans = [
  {
    name: "",
    price: "12,90",
    description: "A escolha das alunas que mais lucram",
    features: [
      "40 vídeo-aulas + bônus exclusivos",
      "Kit completo de materiais digitais",
      "Acesso vitalício",
      "Suporte prioritário por 6 meses",
      "Receitas avançadas e lucrativas",
      "Planilha automática de precificação",
      "Grupo VIP no WhatsApp"
    ],
    buttonText: "Quero Ganhar Dinheiro com Crochê",
    popular: true,
    gradient: "bg-gradient-primary"
  }
];

const PricingSection = () => {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v2/CiJZ0r1lWDkec0myw3CV";
  
  return (
    <section id="precos" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Como Obter o Acesso
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            💡 O treinamento se paga em 1 semana de vendas.
          </p>
        </div>

        {/* Video Player Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <CustomVideoPlayer 
            src={pricingVideo}
            poster={pricingVideoThumbnail}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="max-w-lg mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card-pricing relative animate-fade-in h-full flex flex-col ${
                plan.popular ? 'lg:scale-105 ring-4 ring-primary ring-opacity-50 shadow-2xl bg-gradient-to-br from-card via-card to-primary/10 border-primary/30 animate-pulse-glow' : ''
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                boxShadow: plan.popular ? '0 20px 60px -15px hsl(var(--primary) / 0.4), 0 0 100px -10px hsl(var(--primary) / 0.2)' : undefined
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 md:px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Crown className="w-4 h-4" />
                    <span className="font-semibold text-xs md:text-sm">MAIS POPULAR</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{plan.description}</p>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-4xl md:text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">única</span>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {plan.popular ? "ou 3x" : "pagamento único"}
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

                <Button
                  asChild
                  className={`w-full text-sm sm:text-base md:text-lg py-3 px-4 sm:py-4 sm:px-6 md:py-6 md:px-8 leading-tight ${
                    plan.popular 
                      ? 'btn-primary-lg' 
                      : 'btn-secondary'
                  }`}
                >
                  <a href={checkoutUrl} className="break-words hyphens-auto flex items-center justify-center gap-2">
                    {plan.popular && <Zap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
                    <span>🔘 {plan.buttonText}</span>
                  </a>
                </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
