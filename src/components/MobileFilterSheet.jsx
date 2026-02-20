import { useState } from "react";
import PriceFilterSection from "./FilterComponents/PriceFilterSection";
import RatingFilterSection from "./FilterComponents/RatingFilterSection";
import StockFilterSection from "./FilterComponents/StockFilterSection";

export default function MobileFilterSheet({
	isFilterOpen,
	setIsFilterOpen,
	priceRange,
	setPriceRange,
	maxPrice,
	selectedRatings,
	onRatingToggle,
}) {
	const step = 50;
	const [expandedSections, setExpandedSections] = useState({
		price: true,
		rating: false,
		stock: false,
	});

	const toggleSection = (section) => {
		setExpandedSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	return (
		<>
			{/* ===== Mobile Filter Bottom Sheet ===== */}
			<div
				className={`fixed inset-0 bg-black/40 z-40 transition ${
					isFilterOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				onClick={() => setIsFilterOpen(false)}
			></div>

			<div
				className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-1000 transition-transform duration-300 max-h-[80vh] overflow-y-auto 
                ${isFilterOpen ? "translate-y-0" : "translate-y-full"}`}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="sticky top-0 bg-white flex justify-between items-center p-6 border-b border-gray-200 rounded-t-3xl">
					<h3 className="text-xl font-semibold text-zinc-800">
						Filters
					</h3>
					<button
						onClick={() => setIsFilterOpen(false)}
						className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition"
					>
						<i className="fa-solid fa-xmark text-lg"></i>
					</button>
				</div>

				{/* Content */}
				<div className="p-6 space-y-4">
					<PriceFilterSection
						isExpanded={expandedSections.price}
						onToggle={() => toggleSection("price")}
						priceRange={priceRange}
						setPriceRange={setPriceRange}
						maxPrice={maxPrice}
						step={step}
					/>

					<RatingFilterSection
						isExpanded={expandedSections.rating}
						onToggle={() => toggleSection("rating")}
						selectedRatings={selectedRatings}
						onRatingToggle={onRatingToggle}
					/>

					<StockFilterSection
						isExpanded={expandedSections.stock}
						onToggle={() => toggleSection("stock")}
					/>
				</div>

				{/* Footer CTA */}
				<div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex gap-3">
					<button
						onClick={() => {
							setPriceRange(0);
							// Reset all selected ratings
							selectedRatings.forEach((rating) => {
								onRatingToggle?.(rating);
							});
							setExpandedSections({
								price: true,
								rating: false,
								stock: false,
							});
						}}
						className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-medium text-zinc-800 hover:bg-gray-50 transition"
					>
						Reset
					</button>
					<button
						onClick={() => setIsFilterOpen(false)}
						className="flex-1 px-4 py-3 bg-black text-white rounded-lg font-medium hover:bg-zinc-800 transition"
					>
						Apply
					</button>
				</div>
			</div>
		</>
	);
}
