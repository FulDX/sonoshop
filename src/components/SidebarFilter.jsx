import { useState } from "react";
import PriceFilterSection from "./FilterComponents/PriceFilterSection";
import RatingFilterSection from "./FilterComponents/RatingFilterSection";
import StockFilterSection from "./FilterComponents/StockFilterSection";

export default function SidebarFilter({
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
		<aside className="hidden lg:block col-span-3">
			<div className="sticky top-28 flex flex-col h-[calc(100vh-7rem)]">
				{/* Header */}
				<div className="flex items-center gap-3 mb-6">
					<i className="fa-solid fa-sliders text-xl text-black"></i>
					<h3 className="text-xl font-bold text-zinc-900">Filters</h3>
				</div>

				{/* Scrollable Filters Container */}
				<div className="sidebar-filters flex-1 overflow-y-scroll pr-2">
					<div className="space-y-4">
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

						{/* Clear Filters */}
						<button
							onClick={() => {
								setPriceRange(0);
								selectedRatings.forEach((rating) => {
									onRatingToggle?.(rating);
								});
							}}
							className="mt-6 w-full py-3 px-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-2"
						>
							<i className="fa-solid fa-arrow-rotate-left text-sm"></i>
							Reset Filters
						</button>
					</div>
				</div>
			</div>
		</aside>
	);
}
