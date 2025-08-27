import { Shield, Clock, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-6 md:mb-8 animate-fade-in">
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </div>
          
          <h2 className="section-title mb-6 animate-fade-in">
            Garantia Incondicional de 7 Dias
          </h2>
          
          <div className="bg-card rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl border border-border animate-fade-in">
          <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-6 md:mb-8">
            Experimente todo o conteúdo por <span className="font-bold text-primary">7 dias sem risco nenhum</span>.{" "}
            Se você sentir que não é pra você, devolvemos <span className="font-bold text-primary">100% do valor</span> — sem perguntas, sem burocracia.
          </p>
            
            <div className="grid gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg text-primary mb-2">
                    Você entra com confiança
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Experimente todo o conteúdo sem riscos
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg text-primary mb-2">
                    E se não sentir que é pra você
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Sai sem prejuízo nenhum
                  </p>
                </div>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-primary text-white py-3 md:py-4 px-6 md:px-8 rounded-full font-semibold text-sm md:text-base">
              <Shield className="w-4 h-4 md:w-5 md:h-5" />
              <span>Garantia 100% Segura</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;