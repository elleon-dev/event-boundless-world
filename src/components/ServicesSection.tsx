import {
  Heart, Camera, Plane, Flower2, UtensilsCrossed, Star, Sparkles
} from "lucide-react";

const services = [
  { icon: Heart, title: "Planificación Integral", desc: "De tu boda, pedida de mano, luna de miel, despedidas, cumpleaños, renovación de votos." },
  { icon: Camera, title: "Profesionales", desc: "Fotógrafos, videógrafos y proveedores de bodas y eventos sociales." },
  { icon: Plane, title: "Agencias de viaje", desc: "Operadores de turismo, y primera clase de vuelos y traslados." },
  { icon: Flower2, title: "Flores y banquete", desc: "Arreglos florales y ambientaciones únicas para hacer realidad tu sueño." },
  { icon: UtensilsCrossed, title: "Gastronomía", desc: "Menús personalizados fusión para tu pareja y eventos." },
  { icon: Star, title: "Instrucciones culturales", desc: "Música, danzas, paseos, shows, tradiciones, ceremonias y rituales." },
  { icon: Sparkles, title: "Servicios especiales", desc: "Atenciones adicionales e inéditas para que tu experiencia sea única." },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos servicios integrales para que tu boda sea perfecta en cada detalle.
            Nuestro equipo de expertos se encarga de todo para que vivas tu día con especial tranquilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-coral-light flex items-center justify-center">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
