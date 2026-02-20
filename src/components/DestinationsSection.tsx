import dest1 from "@/assets/dest-1.jpg";
import dest2 from "@/assets/dest-2.jpg";
import dest3 from "@/assets/dest-3.jpg";
import dest4 from "@/assets/dest-4.jpg";
import dest5 from "@/assets/dest-5.jpg";
import dest6 from "@/assets/dest-6.jpg";

const destinations = [
  { name: "Casa perfecta", desc: "Los mejores haciendas entre ríos, valles y fuentes históricas.", img: dest1 },
  { name: "Casco Colonial", desc: "Déjate envolver en un espíritu del antiguo imperio Inca.", img: dest2 },
  { name: "Valle Sagrado", desc: "Paisajes que enmarcan el momento más especial de tu vida.", img: dest3 },
  { name: "Playas del Norte", desc: "Hermosas playas con olas de ensueño en la costa Peruana.", img: dest4 },
  { name: "Arequipa", desc: "La ciudad blanca con escenarios de la más alta categoría.", img: dest5 },
  { name: "Lima Metropolitana", desc: "Sofisticación y cultura con el encanto del océano Pacífico.", img: dest6 },
];

const DestinationsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Destinos Únicos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre los lugares más extraordinarios de Perú, para celebrar tu boda.
            Cada destino ofrece una forma auténtica de ser extraordinario, un pedazo de lujo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{dest.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{dest.desc}</p>
                <a href="#" className="text-sm font-medium text-accent hover:underline">
                  Ver Más →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
