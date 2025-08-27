
import { Clock, DollarSign, Users, Trophy, BookOpen, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Trophy,
    title: "Existem peças simples que vendem o ano todo",
    description: "Aprenda quais são as peças com maior demanda e lucro garantido"
  },
  {
    icon: DollarSign,
    title: "Você não precisa de grandes investimentos",
    description: "Comece com materiais básicos que você já tem ou pode comprar facilmente"
  },
  {
    icon: BookOpen,
    title: "O segredo está em precificar e divulgar certo",
    description: "Métodos validados por centenas de alunas que já estão faturando"
  }
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Por que este método funciona?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Muita gente faz crochê só como passatempo. O que poucas sabem é que:
          </p>
        </div>

        <div className="space-y-6 lg:space-y-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-xl md:text-2xl text-primary flex-shrink-0">✅</div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            É exatamente isso que você vai aprender no <strong className="text-primary">Coleção Lucre com Charme</strong>: 
            um passo a passo validado por centenas de alunas que já estão faturando.
          </p>
          <Button asChild className="btn-primary-lg w-full sm:w-auto animate-fade-in">
            <a href="https://www.ggcheckout.com/checkout/v2/CiJZ0r1lWDkec0myw3CV">
              🔘 Quero aprender o passo a passo agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
