import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-24">
        <p className="text-secondary font-body text-lg mb-3 tracking-wide">
          Tu boda y eventos de ensueño
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
          Celebra en los destinos más extraordinarios del mundo
        </h1>
        <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-xl mx-auto font-light">
          Desde las alturas de Machu Picchu hasta las playas doradas del norte.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Empieza a planificar
          </a>
          <a
            href="#servicios"
            className="px-8 py-3 rounded-full border-2 border-primary-foreground/60 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Conocenos y Disfruta
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
