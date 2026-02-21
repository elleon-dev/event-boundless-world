import heroBg from "@/assets/hero-bg.jpg";
import SearchBar from "@/components/SearchBar";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 w-full px-4 flex flex-col items-center pt-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display italic font-bold text-primary-foreground text-center leading-tight mb-3">
          Encuentra tu evento perfecto
        </h1>
        <p className="text-primary-foreground/85 text-base md:text-lg mb-10 text-center max-w-xl font-light">
          Bodas, reuniones, destinos y más en los mejores lugares del Perú
        </p>
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSection;
