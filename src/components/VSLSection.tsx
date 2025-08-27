import { PlayCircle, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    result: "R$ 3.200 no primeiro mês",
    text: "Em apenas 30 dias consegui faturar mais de R$ 3 mil vendendo peças que aprendi no treinamento. O método de precificação mudou minha vida!",
    image: "https://images.unsplash.com/photo-1494790108755-2616c6106452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    name: "Ana Carolina", 
    location: "Rio de Janeiro, RJ",
    result: "Saiu do zero para R$ 2.500/mês",
    text: "Nunca tinha vendido nada online. Com as técnicas do treinamento, criei minha loja no Instagram e agora tenho uma renda fixa de crochê!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    name: "Jessica Santos",
    location: "Belo Horizonte, MG",
    result: "R$ 1.800 trabalhando 2h por dia",
    text: "Trabalho apenas 2 horas por dia e já consigo uma renda extra incrível. As receitas são muito fáceis de seguir e vendem super bem!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

const VSLSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Veja o que minhas alunas estão dizendo sobre:
          </h2>
        </div>

        {/* VSL Container */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative aspect-video bg-card rounded-2xl shadow-2xl overflow-hidden border border-border animate-fade-in">
            {/* Placeholder for VSL */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-primary/5">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4 hover:bg-primary/20 transition-all duration-300 cursor-pointer group">
                  <PlayCircle className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Vídeo de Depoimentos
                </p>
                <p className="text-sm text-muted-foreground">
                  [Espaço reservado para VSL - adicione o código embed do vídeo aqui]
                </p>
              </div>
            </div>

            {/* Optional: Add iframe for VSL when ready */}
            {/* <iframe 
              src="YOUR_VSL_URL_HERE" 
              className="absolute inset-0 w-full h-full"
              title="Depoimentos das alunas"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-testimonial animate-fade-in hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary/30" />
              </div>

              <div className="bg-gradient-primary text-white text-center py-3 px-4 rounded-lg mb-4 font-semibold">
                {testimonial.result}
              </div>

              <p className="text-muted-foreground italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-gradient-subtle rounded-full px-8 py-4">
            <div className="text-center">
              <div className="font-semibold text-primary">+500 alunas satisfeitas</div>
              <div className="text-sm text-muted-foreground">Nota média: 4.9/5.0</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;