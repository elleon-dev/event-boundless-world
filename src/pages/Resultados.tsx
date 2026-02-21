import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ResultCard from "@/components/ResultCard";
import CategoryFilter from "@/components/CategoryFilter";
import ResultsFilterSidebar, { FilterState } from "@/components/ResultsFilterSidebar";
import { mockResults } from "@/data/mockResults";

const Resultados = () => {
  const [searchParams] = useSearchParams();
  const categoriaParam = searchParams.get("categoria") || "";
  const destinoParam = searchParams.get("destino") || "";

  const [selectedCategory, setSelectedCategory] = useState(
    categoriaParam || "todos"
  );

  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 15000],
    locations: [],
    minRating: 0,
    onlyOffers: false,
  });

  const filtered = useMemo(() => {
    return mockResults.filter((item) => {
      const matchCategory =
        selectedCategory === "todos" ||
        item.category.toLowerCase() === selectedCategory;
      const matchDestino =
        !destinoParam ||
        item.location.toLowerCase().includes(destinoParam);
      const matchPrice =
        !item.price ||
        (item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1]);
      const matchLocation =
        filters.locations.length === 0 ||
        filters.locations.some((loc) => item.location.toLowerCase().includes(loc.toLowerCase()));
      const matchRating = item.rating >= filters.minRating;
      const matchOffer = !filters.onlyOffers || item.hasOffer;
      return matchCategory && matchDestino && matchPrice && matchLocation && matchRating && matchOffer;
    });
  }, [selectedCategory, destinoParam, filters]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Search bar */}
      <section className="bg-card border-b border-border py-6 pt-28">
        <div className="max-w-7xl mx-auto px-4">
          <SearchBar />
        </div>
      </section>

      {/* Filters + Results */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <ResultsFilterSidebar filters={filters} onChange={setFilters} />

          {/* Results */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-muted-foreground mb-6">
              {filtered.length} resultado{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
            </p>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((item) => (
                  <ResultCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">No se encontraron resultados.</p>
                <p className="text-sm text-muted-foreground mt-2">Intenta con otros filtros o categorías.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resultados;
