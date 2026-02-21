import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ResultItem {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  category: string;
  price?: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  hasOffer: boolean;
}

const ResultCard = ({ item }: { item: ResultItem }) => {
  const discount = item.originalPrice && item.price
    ? Math.round((1 - item.price / item.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/detalle/${item.id}`} className="block group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.hasOffer && (
          <Badge className="absolute top-3 left-3 bg-gold text-foreground border-none font-bold text-xs px-3 py-1">
            {discount > 0 ? `-${discount}% Oferta` : "Oferta"}
          </Badge>
        )}
        <Badge variant="secondary" className="absolute top-3 right-3 text-xs">
          {item.category}
        </Badge>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
          <MapPin className="h-3.5 w-3.5" />
          <span>{item.location}</span>
        </div>

        <h3 className="font-display text-lg font-semibold text-foreground mb-1 line-clamp-1">
          {item.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span className="text-sm font-semibold text-foreground">{item.rating}</span>
            <span className="text-xs text-muted-foreground">({item.reviews})</span>
          </div>

          {item.price && (
            <div className="text-right">
              {item.originalPrice && (
                <span className="text-xs text-muted-foreground line-through mr-1">
                  S/ {item.originalPrice.toLocaleString()}
                </span>
              )}
              <span className="text-lg font-bold text-primary">
                S/ {item.price.toLocaleString()}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;
