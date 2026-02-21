import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Users, Calendar, Check, Heart, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { mockResults } from "@/data/mockResults";

const costBreakdown: Record<string, { label: string; amount: number }[]> = {
  Bodas: [
    { label: "Venue y decoración", amount: 0.4 },
    { label: "Catering y bebidas", amount: 0.25 },
    { label: "Fotografía y video", amount: 0.15 },
    { label: "Música y entretenimiento", amount: 0.1 },
    { label: "Coordinación del evento", amount: 0.1 },
  ],
  Reuniones: [
    { label: "Alquiler de sala", amount: 0.5 },
    { label: "Equipamiento audiovisual", amount: 0.2 },
    { label: "Coffee break y catering", amount: 0.2 },
    { label: "Servicio técnico", amount: 0.1 },
  ],
  Destinos: [
    { label: "Alojamiento", amount: 0.4 },
    { label: "Actividades y tours", amount: 0.25 },
    { label: "Transporte", amount: 0.2 },
    { label: "Alimentación", amount: 0.15 },
  ],
  Profesionales: [
    { label: "Honorarios profesionales", amount: 0.6 },
    { label: "Materiales e insumos", amount: 0.2 },
    { label: "Transporte y logística", amount: 0.1 },
    { label: "Edición y entrega", amount: 0.1 },
  ],
  "Agencias de Viaje": [
    { label: "Paquete de viaje", amount: 0.4 },
    { label: "Alojamiento", amount: 0.25 },
    { label: "Actividades incluidas", amount: 0.2 },
    { label: "Seguro de viaje", amount: 0.05 },
    { label: "Coordinación", amount: 0.1 },
  ],
};

const features: Record<string, string[]> = {
  Bodas: [
    "Decoración floral personalizada",
    "Menú degustación para novios",
    "Coordinador de bodas dedicado",
    "Música en vivo o DJ incluido",
    "Sesión de fotos pre-boda",
    "Suite nupcial cortesía",
  ],
  Reuniones: [
    "WiFi de alta velocidad",
    "Proyector y pantalla HD",
    "Pizarra y material de oficina",
    "Coffee break ilimitado",
    "Estacionamiento gratuito",
    "Soporte técnico en sitio",
  ],
  Destinos: [
    "Transporte desde aeropuerto",
    "Guía turístico bilingüe",
    "Seguro de viaje incluido",
    "Actividades exclusivas",
    "Alimentación completa",
    "WiFi en todas las áreas",
  ],
  Profesionales: [
    "Portfolio personalizado",
    "Reunión previa sin costo",
    "Entrega digital en alta resolución",
    "Álbum impreso de cortesía",
    "Cobertura completa del evento",
    "Edición profesional incluida",
  ],
  "Agencias de Viaje": [
    "Asesoría personalizada",
    "Reservas garantizadas",
    "Soporte 24/7 durante el viaje",
    "Seguro de cancelación",
    "Itinerario personalizable",
    "Precios grupales especiales",
  ],
};

const DetalleResultado = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = mockResults.find((r) => r.id === Number(id));

  if (!item) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 text-center">
          <p className="text-lg text-muted-foreground">Resultado no encontrado.</p>
          <Link to="/resultados" className="text-primary hover:underline mt-4 inline-block">
            Volver a resultados
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const breakdown = costBreakdown[item.category] || costBreakdown["Destinos"];
  const featureList = features[item.category] || features["Destinos"];
  const basePrice = item.price || 0;
  const serviceFee = Math.round(basePrice * 0.08);
  const total = basePrice + serviceFee;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 pt-28 pb-12">
        {/* Back + Title */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a resultados
        </button>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {item.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-gold text-gold" />
                <b className="text-foreground">{item.rating}</b> ({item.reviews} reseñas)
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" /> {item.location}
              </span>
              <Badge variant="secondary">{item.category}</Badge>
              {item.hasOffer && (
                <Badge className="bg-gold text-foreground border-none">Oferta</Badge>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm hover:bg-muted transition-colors">
              <Share2 className="h-4 w-4" /> Compartir
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm hover:bg-muted transition-colors">
              <Heart className="h-4 w-4" /> Guardar
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden mb-10">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Content + Price card */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Details */}
          <div className="flex-1 min-w-0">
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              Acerca de este servicio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {item.description}
              {" "}Disfruta de una experiencia única con atención personalizada y los más altos estándares de calidad.
              Nuestro equipo se encargará de cada detalle para que tu evento sea inolvidable.
            </p>

            {/* Features */}
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              Lo que incluye
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {featureList.map((feat) => (
                <div key={feat} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{feat}</span>
                </div>
              ))}
            </div>

            {/* Cost breakdown */}
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              Desglose del costo
            </h2>
            <div className="bg-card rounded-2xl border border-border p-5 space-y-3">
              {breakdown.map((line) => {
                const amount = Math.round(basePrice * line.amount);
                return (
                  <div key={line.label} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{line.label}</span>
                    <span className="text-foreground font-medium">S/ {amount.toLocaleString()}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Price card (sticky) */}
          <div className="lg:w-80 shrink-0">
            <div className="sticky top-28 bg-card rounded-2xl border border-border shadow-lg p-6">
              {/* Price header */}
              <div className="mb-5">
                {item.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through mr-2">
                    S/ {item.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-2xl font-bold text-foreground">
                  S/ {basePrice.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground ml-1">/ servicio</span>
              </div>

              {/* Quick info */}
              <div className="space-y-3 mb-5 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {item.location}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" /> Capacidad flexible
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" /> Disponibilidad inmediata
                </div>
              </div>

              {/* Price summary */}
              <div className="border-t border-border pt-4 space-y-2 text-sm mb-5">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Precio del servicio</span>
                  <span className="text-foreground">S/ {basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tarifa de servicio</span>
                  <span className="text-foreground">S/ {serviceFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-base border-t border-border pt-3 mt-3">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">S/ {total.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-brown-dark transition-colors">
                Reservar ahora
              </button>

              <p className="text-xs text-muted-foreground text-center mt-3">
                No se hará ningún cargo aún
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DetalleResultado;
