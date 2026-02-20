import dest1 from "@/assets/dest-1.jpg";
import dest2 from "@/assets/dest-2.jpg";
import dest3 from "@/assets/dest-3.jpg";
import dest4 from "@/assets/dest-4.jpg";
import dest5 from "@/assets/dest-5.jpg";
import dest6 from "@/assets/dest-6.jpg";

const destinations = [
  { name: "Un oasis perfecto", desc: "Una ceremonia única entre las nubes y dunas misteriosas.", img: dest1 },
  { name: "Cusco Colonial", desc: "Elegancia imperial en la capital del antiguo imperio Inca.", img: dest2 },
  { name: "Valle Sagrado", desc: "Paisajes andinos que enmarcan el momento más especial.", img: dest3 },
  { name: "Lima Histórica", desc: "Sofisticación urbana con el encanto del centro histórico.", img: dest4 },
  { name: "Playas del Norte", desc: "Romance tropical en las costas más hermosas del Pacífico.", img: dest5 },
  { name: "Arequipa", desc: "La ciudad blanca como escenario de tu amor eterno.", img: dest6 },
];

const DestinationsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display italic font-bold text-primary mb-4">
            Destinos Únicos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre los lugares más románticos de Perú para celebrar tu boda.
            Cada destino cuenta una historia única que se convertirá en parte de la tuya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border"
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
                <h3 className="font-display italic text-lg font-semibold text-primary mb-1">{dest.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{dest.desc}</p>
                <a
                  href="#"
                  className="inline-block px-5 py-2 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Ver Más
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