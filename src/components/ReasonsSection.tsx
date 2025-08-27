import { GraduationCap, Wallet, TrendingUp, Percent, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: GraduationCap,
    title: "Mesmo que você nunca tenha feito crochê pra vender",
    description: "O treinamento é 100% passo a passo, perfeito para iniciantes"
  },
  {
    icon: Wallet,
    title: "Baixo investimento inicial",
    description: "Materiais simples, sem gastar muito para começar"
  },
  {
    icon: TrendingUp,
    title: "Margens de lucro de até 300%",
    description: "Nas peças certas que você vai aprender a fazer"
  },
  {
    icon: Heart,
    title: "Você aprende a vender no Instagram, WhatsApp e feirinhas",
    description: "Estratégias completas de divulgação e vendas"
  },
  {
    icon: Award,
    title: "Suporte e comunidade exclusiva de alunas",
    description: "Não fica sozinha na jornada, tem apoio total"
  },
  {
    icon: Percent,
    title: "Garantia de 7 dias",
    description: "Se não gostar, devolvemos seu dinheiro sem burocracia"
  }
];

const ReasonsSection = () => {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v2/CiJZ0r1lWDkec0myw3CV";

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            6 Motivos para investir hoje
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            💡 O treinamento se paga em 1 semana de vendas.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 mb-12">
          {reasons.map((reason, index) => {
            const emojis = ["🎯", "💰", "📈", "📱", "👥", "🛡️"];
            return (
              <div
                key={index}
                className="flex items-start gap-3 md:gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-xl md:text-2xl text-primary flex-shrink-0">{emojis[index]}</div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-primary mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            className="btn-primary-lg w-full sm:w-auto animate-fade-in"
          >
            <a href={checkoutUrl}>
              🔘 Quero investir sem risco hoje
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;