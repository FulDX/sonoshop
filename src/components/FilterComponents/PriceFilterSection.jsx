import PriceSlider from "./PriceSlider";

export default function PriceFilterSection({
	isExpanded,
	onToggle,
	priceRange,
	setPriceRange,
	maxPrice,
	step,
}) {
	return (
		<div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition ">
			<button
				onClick={onToggle}
				className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
			>
				<div className="flex items-center gap-3">
					<i className="fa-solid fa-tag text-base text-gray-600"></i>
					<p className="font-semibold text-zinc-800">Price</p>
				</div>
				<i
					className={`fa-solid fa-chevron-down text-sm text-gray-600 transition-transform ${
						isExpanded ? "rotate-180" : ""
					}`}
				></i>
			</button>

			{isExpanded && (
				<div className="border-t border-gray-100 px-6 py-4">
					<PriceSlider
						step={step}
						priceRange={priceRange}
						maxPrice={maxPrice}
						setPriceRange={(e) =>
							setPriceRange(Number(e.target.value))
						}
					/>
				</div>
			)}
		</div>
	);
}
