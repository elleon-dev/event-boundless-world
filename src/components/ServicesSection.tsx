import {
  Heart, Camera, Plane, Hotel, UtensilsCrossed, Landmark, Sparkles
} from "lucide-react";

const services = [
  { icon: Heart, title: "Planificación Integral", desc: "De tu boda, pedida de mano, luna de miel, aniversario, cumpleaños, viajes de incentivos, otros." },
  { icon: Camera, title: "Profesionales", desc: "Y proveedores de bodas y eventos sociales." },
  { icon: Plane, title: "Agencias de viaje", desc: "Operadores de turismo, y turismo de aventuras." },
  { icon: Hotel, title: "Hoteles y hospedaje", desc: "Música y espectáculos que fusionan tradición peruana con elegancia moderna." },
  { icon: UtensilsCrossed, title: "Gastronomía", desc: "Restaurantes fundos para producción de pisco y vino." },
  { icon: Landmark, title: "Atracciones culturales", desc: "Museos, moda peruana, shows, festivales, conciertos y más." },
  { icon: Sparkles, title: "Servicios especiales", desc: "Asesoría completa para que tu matrimonio, estética facial, consultorios dentales." },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display italic font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos servicios integrales para que tu boda sea perfecta en cada detalle.
            Nuestro equipo de expertos se encarga de todo para que vivas tu día
            especial sin preocupaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-brown-light flex items-center justify-center">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display italic text-base font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;