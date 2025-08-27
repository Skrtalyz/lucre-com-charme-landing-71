import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomVideoPlayer from "./CustomVideoPlayer";
import resultsVideoThumbnail from "@/assets/results-video-thumbnail.png";

const results = [
  {
    name: "Maria S.",
    location: "SP",
    result: "R$ 3 mil em 30 dias",
    emoji: "📌"
  },
  {
    name: "Jessica S.",
    location: "MG", 
    result: "R$ 2.500/mês trabalhando 2h/dia",
    emoji: "📌"
  },
  {
    name: "Ana Carolina",
    location: "RJ",
    result: "R$ 2.500/mês do zero",
    emoji: "📌"
  }
];

const ResultsSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Resultados Reais
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossas alunas conseguiram alcançar
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-xl p-4 md:p-6 shadow-lg border border-border">
            <CustomVideoPlayer
              src="https://www.dropbox.com/scl/fi/r61983digl9ym64gz3r4f/Depoimentos-24-90-Feito-com-o-Clipchamp-3-1.mp4?rlkey=9rrkp61tzsifajtj3razxach8&st=240mslpi&raw=1"
              poster={resultsVideoThumbnail}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-4 md:p-8 shadow-lg border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="text-xl md:text-2xl flex-shrink-0">{result.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="font-bold text-primary text-base md:text-lg">
                      {result.name} – {result.location}
                    </h4>
                  </div>
                  <div className="bg-gradient-primary text-white inline-block px-3 md:px-4 py-2 rounded-full font-semibold text-sm md:text-base">
                    {result.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="btn-primary-lg w-full sm:w-auto animate-fade-in">
            <a href="https://www.ggcheckout.com/checkout/v2/CiJZ0r1lWDkec0myw3CV">
              🔘 Quero os mesmos resultados
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;