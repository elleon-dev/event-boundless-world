import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, CalendarDays, Users, MapPin } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const categories = [
  "Bodas",
  "Reuniones",
  "Destinos",
  "Profesionales",
  "Agencias de Viaje",
];

const destinos = [
  "Cusco",
  "Lima",
  "Arequipa",
  "Máncora",
  "Ica",
  "Puno",
  "Trujillo",
];

const SearchBar = () => {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState("");
  const [destino, setDestino] = useState("");
  const [fecha, setFecha] = useState<Date>();
  const [invitados, setInvitados] = useState("");
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (categoria) params.set("categoria", categoria.toLowerCase());
    if (destino) params.set("destino", destino.toLowerCase());
    if (fecha) params.set("fecha", format(fecha, "yyyy-MM-dd"));
    if (invitados) params.set("invitados", invitados);
    navigate(`/resultados?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Desktop */}
      <div className="hidden md:flex items-center bg-card rounded-full shadow-lg border border-border overflow-hidden">
        {/* Categoría */}
        <div className="relative flex-1">
          <button
            onClick={() => setActiveField(activeField === "categoria" ? null : "categoria")}
            className={cn(
              "w-full px-6 py-4 text-left hover:bg-muted/50 transition-colors rounded-l-full",
              activeField === "categoria" && "bg-muted/50"
            )}
          >
            <span className="block text-xs font-semibold text-foreground">¿Qué buscas?</span>
            <span className="block text-sm text-muted-foreground truncate">
              {categoria || "Tipo de evento"}
            </span>
          </button>
          {activeField === "categoria" && (
            <div className="absolute top-full left-0 mt-2 bg-card rounded-2xl shadow-xl border border-border p-2 min-w-[220px] z-50">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setCategoria(cat); setActiveField(null); }}
                  className={cn(
                    "w-full text-left px-4 py-2.5 rounded-xl text-sm hover:bg-muted transition-colors",
                    categoria === cat && "bg-primary text-primary-foreground hover:bg-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="w-px h-10 bg-border" />

        {/* Destino */}
        <div className="relative flex-1">
          <button
            onClick={() => setActiveField(activeField === "destino" ? null : "destino")}
            className={cn(
              "w-full px-6 py-4 text-left hover:bg-muted/50 transition-colors",
              activeField === "destino" && "bg-muted/50"
            )}
          >
            <span className="block text-xs font-semibold text-foreground">¿Dónde?</span>
            <span className="block text-sm text-muted-foreground truncate">
              {destino || "Destino"}
            </span>
          </button>
          {activeField === "destino" && (
            <div className="absolute top-full left-0 mt-2 bg-card rounded-2xl shadow-xl border border-border p-2 min-w-[200px] z-50">
              {destinos.map((d) => (
                <button
                  key={d}
                  onClick={() => { setDestino(d); setActiveField(null); }}
                  className={cn(
                    "w-full text-left px-4 py-2.5 rounded-xl text-sm hover:bg-muted transition-colors flex items-center gap-2",
                    destino === d && "bg-primary text-primary-foreground hover:bg-primary"
                  )}
                >
                  <MapPin className="h-4 w-4" />
                  {d}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="w-px h-10 bg-border" />

        {/* Fecha */}
        <div className="flex-1">
          <Popover>
            <PopoverTrigger asChild>
              <button className="w-full px-6 py-4 text-left hover:bg-muted/50 transition-colors">
                <span className="block text-xs font-semibold text-foreground">¿Cuándo?</span>
                <span className="block text-sm text-muted-foreground truncate">
                  {fecha ? format(fecha, "d MMM yyyy", { locale: es }) : "Fecha del evento"}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50" align="start">
              <Calendar
                mode="single"
                selected={fecha}
                onSelect={setFecha}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="w-px h-10 bg-border" />

        {/* Invitados */}
        <div className="flex-1">
          <button
            onClick={() => setActiveField(activeField === "invitados" ? null : "invitados")}
            className="w-full px-6 py-4 text-left hover:bg-muted/50 transition-colors"
          >
            <span className="block text-xs font-semibold text-foreground">Invitados</span>
            <span className="block text-sm text-muted-foreground">
              {invitados ? `${invitados} personas` : "Cantidad"}
            </span>
          </button>
          {activeField === "invitados" && (
            <div className="absolute mt-2 bg-card rounded-2xl shadow-xl border border-border p-4 min-w-[200px] z-50">
              <input
                type="number"
                min="1"
                placeholder="Número de invitados"
                value={invitados}
                onChange={(e) => setInvitados(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
            </div>
          )}
        </div>

        {/* Botón buscar */}
        <div className="pr-2">
          <button
            onClick={handleSearch}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-brown-dark transition-colors shadow-md"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-card rounded-2xl shadow-lg border border-border p-4 space-y-3">
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1">¿Qué buscas?</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Tipo de evento</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-foreground mb-1">¿Dónde?</label>
          <select
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Destino</option>
            {destinos.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-foreground mb-1">¿Cuándo?</label>
          <Popover>
            <PopoverTrigger asChild>
              <button className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-sm text-left flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                {fecha ? format(fecha, "d MMM yyyy", { locale: es }) : <span className="text-muted-foreground">Fecha del evento</span>}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50" align="start">
              <Calendar
                mode="single"
                selected={fecha}
                onSelect={setFecha}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label className="block text-xs font-semibold text-foreground mb-1">Invitados</label>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-border bg-background">
            <Users className="h-4 w-4 text-muted-foreground" />
            <input
              type="number"
              min="1"
              placeholder="Cantidad"
              value={invitados}
              onChange={(e) => setInvitados(e.target.value)}
              className="w-full text-sm bg-transparent focus:outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-brown-dark transition-colors"
        >
          <Search className="h-4 w-4" />
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
