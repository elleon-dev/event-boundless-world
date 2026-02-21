import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ResultCard from "@/components/ResultCard";
import CategoryFilter from "@/components/CategoryFilter";
import { mockResults } from "@/data/mockResults";

const Resultados = () => {
  const [searchParams] = useSearchParams();
  const categoriaParam = searchParams.get("categoria") || "";
  const destinoParam = searchParams.get("destino") || "";

  const [selectedCategory, setSelectedCategory] = useState(
    categoriaParam || "todos"
  );

  const filtered = useMemo(() => {
    return mockResults.filter((item) => {
      const matchCategory =
        selectedCategory === "todos" ||
        item.category.toLowerCase() === selectedCategory;
      const matchDestino =
        !destinoParam ||
        item.location.toLowerCase().includes(destinoParam);
      return matchCategory && matchDestino;
    });
  }, [selectedCategory, destinoParam]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Search bar */}
      <section className="bg-card border-b border-border py-6 pt-28">
        <div className="max-w-6xl mx-auto px-4">
          <SearchBar />
        </div>
      </section>

      {/* Filters + Results */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          {filtered.length} resultado{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      </main>

      <Footer />
    </div>
  );
};

export default Resultados;
