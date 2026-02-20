import inspo1 from "@/assets/inspo-1.jpg";
import inspo2 from "@/assets/inspo-2.jpg";
import inspo3 from "@/assets/inspo-3.jpg";
import inspo4 from "@/assets/inspo-4.jpg";
import inspo5 from "@/assets/inspo-5.jpg";
import inspo6 from "@/assets/inspo-6.jpg";

const inspirations = [
  { img: inspo1, label: "Ceremonia al atardecer" },
  { img: inspo2, label: "Recepción elegante" },
  { img: inspo3, label: "Ramo de novia" },
  { img: inspo4, label: "Salón de recepción" },
  { img: inspo5, label: "Arco floral" },
  { img: inspo6, label: "Pastel de bodas" },
];

const InspirationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Inspiración
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Déjate inspirar por las bodas más hermosas que hemos celebrado en Perú.
            Cada imagen cuenta una historia de amor única en paisajes extraordinarios.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {inspirations.map((item) => (
            <div key={item.label} className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-primary-foreground font-display text-sm font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
