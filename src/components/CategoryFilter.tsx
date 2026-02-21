import { cn } from "@/lib/utils";
import { Heart, Users, MapPin, Briefcase, Plane } from "lucide-react";

const categories = [
  { id: "todos", label: "Todos", icon: null },
  { id: "bodas", label: "Bodas", icon: Heart },
  { id: "reuniones", label: "Reuniones", icon: Users },
  { id: "destinos", label: "Destinos", icon: MapPin },
  { id: "profesionales", label: "Profesionales", icon: Briefcase },
  { id: "agencias de viaje", label: "Agencias de Viaje", icon: Plane },
];

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = selected === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200",
              isActive
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-card text-foreground border-border hover:bg-muted hover:border-primary/30"
            )}
          >
            {Icon && <Icon className="h-4 w-4" />}
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
