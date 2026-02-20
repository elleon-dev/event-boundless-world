import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María Elena & Carlos",
    location: "Boda en Cusco",
    text: "Nuestra boda en Machu Picchu fue absolutamente impresionante. El equipo de Eventos sin Fronteras se encargó de cada detalle con una dedicación incomparable.",
    rating: 5,
  },
  {
    name: "Ana y Roberto",
    location: "Boda en Valle Sagrado",
    text: "Los asesores del Valle Sagrado fueron un verdadero equipo profesional y visionario. Están completamente enfocados en sus clientes.",
    rating: 5,
  },
  {
    name: "Sofía & Miguel",
    location: "Boda en Arequipa",
    text: "Conocer nuestra boda fue una experiencia mágica. Todo fue tan perfecto que nuestros invitados quedaron encantados con el destino y la fiesta.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Testimonios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Las palabras de nuestras parejas son nuestro mayor orgullo. Descubre por
            qué elegirnos es la mejor decisión para tu boda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
