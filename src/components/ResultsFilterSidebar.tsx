import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const locations = ["Cusco", "Lima", "Arequipa", "Máncora", "Ica", "Puno", "Trujillo"];
const regions = [
	{ name: "Costa", locations: ["Lima", "Trujillo", "Máncora", "Ica"] },
	{ name: "Sierra", locations: ["Cusco", "Arequipa", "Puno"] },
	{ name: "Selva", locations: ["Iquitos", "Tarapoto", "Puerto Maldonado"] },
];

export interface FilterState {
	priceRange: [number, number];
	locations: string[];
	minRating: number;
	onlyOffers: boolean;
}

interface ResultsFilterSidebarProps {
	filters: FilterState;
	onChange: (filters: FilterState) => void;
	className?: string;
}

const ResultsFilterSidebar = ({ filters, onChange, className }: ResultsFilterSidebarProps) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const updateFilter = (partial: Partial<FilterState>) => {
		onChange({ ...filters, ...partial });
	};

	const toggleLocation = (loc: string) => {
		const next = filters.locations.includes(loc)
			? filters.locations.filter((l) => l !== loc)
			: [...filters.locations, loc];
		updateFilter({ locations: next });
	};

	const clearAll = () => {
		onChange({
			priceRange: [0, 15000],
			locations: [],
			minRating: 0,
			onlyOffers: false,
		});
	};

	const hasActiveFilters =
		filters.priceRange[0] > 0 ||
		filters.priceRange[1] < 15000 ||
		filters.locations.length > 0 ||
		filters.minRating > 0 ||
		filters.onlyOffers;

	const content = (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center justify-between">
				<h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
					<SlidersHorizontal className="h-5 w-5" />
					Filtros
				</h3>
				{hasActiveFilters && (
					<button
						onClick={clearAll}
						className="text-xs text-primary hover:underline"
					>
						Limpiar todo
					</button>
				)}
			</div>

			{/* Precio */}
			<div>
				<h4 className="text-sm font-semibold text-foreground mb-3">Rango de precio</h4>
				<Slider
					min={0}
					max={15000}
					step={100}
					value={filters.priceRange}
					onValueChange={(val) => updateFilter({ priceRange: val as [number, number] })}
					className="mb-2"
				/>
				<div className="flex justify-between text-xs text-muted-foreground">
					<span>S/ {filters.priceRange[0].toLocaleString()}</span>
					<span>S/ {filters.priceRange[1].toLocaleString()}</span>
				</div>
			</div>

			{/* Región */}
			<div>
				<h4 className="text-sm font-semibold text-foreground mb-3">Región</h4>
				<div className="flex gap-2 flex-wrap">
					{regions.map((region) => (
						<button
							key={region.name}
							type="button"
							className={cn(
								"px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
								filters.locations.some((loc) => region.locations.includes(loc))
									? "bg-primary text-primary-foreground border-primary"
									: "bg-card text-foreground border-border hover:border-primary/40"
							)}
							onClick={() => {
								// Si ya están todos los locations de la región, quitarlos; si no, agregarlos
								const allSelected = region.locations.every((loc) => filters.locations.includes(loc));
								const next = allSelected
									? filters.locations.filter((loc) => !region.locations.includes(loc))
									: Array.from(new Set([...filters.locations, ...region.locations]));
								updateFilter({ locations: next });
							}}
						>
							{region.name}
						</button>
					))}
				</div>
			</div>

			{/* Ubicación */}
			<div>
				<h4 className="text-sm font-semibold text-foreground mb-3">Ubicación</h4>
				<div className="space-y-2">
					{locations.map((loc) => (
						<label
							key={loc}
							className="flex items-center gap-2.5 cursor-pointer group"
						>
							<Checkbox
								checked={filters.locations.includes(loc)}
								onCheckedChange={() => toggleLocation(loc)}
							/>
							<span className="text-sm text-foreground group-hover:text-primary transition-colors">
								{loc}
							</span>
						</label>
					))}
				</div>
			</div>

			{/* Rating mínimo */}
			<div>
				<h4 className="text-sm font-semibold text-foreground mb-3">Rating mínimo</h4>
				<div className="flex gap-1 overflow-hidden">
					{[0, 3, 4, 4.5, 4.8].map((rating) => (
						<button
							key={rating}
							onClick={() => updateFilter({ minRating: rating })}
							className={cn(
								"flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
								filters.minRating === rating
									? "bg-primary text-primary-foreground border-primary"
									: "bg-card text-foreground border-border hover:border-primary/40"
							)}
						>
							{rating === 0 ? (
								"Todos"
							) : (
								<>
									<Star className="h-3 w-3 fill-current" />
									{rating}+
								</>
							)}
						</button>
					))}
				</div>
			</div>

			{/* Solo ofertas */}
			<div>
				<label className="flex items-center gap-2.5 cursor-pointer">
					<Checkbox
						checked={filters.onlyOffers}
						onCheckedChange={(checked) => updateFilter({ onlyOffers: !!checked })}
					/>
					<span className="text-sm font-medium text-foreground">Solo ofertas</span>
				</label>
			</div>
		</div>
	);

	return (
		<>
			{/* Desktop sidebar */}
			<aside className={cn("hidden lg:block w-64 shrink-0", className)}>
				<div className="sticky top-28 bg-card rounded-2xl border border-border p-5">
					{content}
				</div>
			</aside>

			{/* Mobile toggle + drawer */}
			<div className="lg:hidden mb-4">
				<button
					onClick={() => setMobileOpen(true)}
					className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium hover:bg-muted transition-colors"
				>
					<SlidersHorizontal className="h-4 w-4" />
					Filtros
					{hasActiveFilters && (
						<span className="w-2 h-2 rounded-full bg-primary" />
					)}
				</button>
			</div>

			{/* Mobile overlay */}
			{mobileOpen && (
				<div className="fixed inset-0 z-50 lg:hidden">
					<div className="absolute inset-0 bg-foreground/30" onClick={() => setMobileOpen(false)} />
					<div className="absolute bottom-0 left-0 right-0 max-h-[80vh] bg-card rounded-t-3xl p-6 overflow-y-auto animate-in slide-in-from-bottom">
						<div className="flex justify-between items-center mb-4">
							<h3 className="font-display text-lg font-semibold">Filtros</h3>
							<button onClick={() => setMobileOpen(false)}>
								<X className="h-5 w-5" />
							</button>
						</div>
						{content}
						<button
							onClick={() => setMobileOpen(false)}
							className="w-full mt-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm"
						>
							Aplicar filtros
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default ResultsFilterSidebar;
