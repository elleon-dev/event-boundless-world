import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
      </div>

      <div className="relative z-10 px-4 max-w-2xl ml-8 md:ml-16 lg:ml-24 pt-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display italic font-bold text-primary-foreground leading-tight mb-6">
          Tu boda y eventos
          <br />
          de ensueño
        </h1>
        <p className="text-primary-foreground/90 text-base md:text-lg mb-8 max-w-lg font-light">
          Celebra en los destinos más románticos del mundo. Desde las alturas de Machu Picchu hasta las playas doradas del norte.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#contacto"
            className="px-6 py-2.5 rounded-full bg-card text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
          >
            Empieza a planificar
          </a>
          <a
            href="#servicios"
            className="px-6 py-2.5 rounded-full bg-card text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
          >
            Proveedores
          </a>
          <a
            href="#"
            className="px-6 py-2.5 rounded-full bg-card text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
          >
            Congresos y festivales
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;