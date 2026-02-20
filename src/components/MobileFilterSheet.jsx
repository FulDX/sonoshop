import PriceSlider from "./FilterComponents/PriceSlider";

export default function MobileFilterSheet({
	isFilterOpen,
	setIsFilterOpen,
	priceRange,
	setPriceRange,
	maxPrice,
}) {
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
                ${
					isFilterOpen ? "translate-y-0" : "translate-y-full"
				}`}
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
				<div className="p-6 space-y-6">
					{/* Price Section */}
					<div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
						<p className="font-semibold text-zinc-800 mb-6">
							Price Range
						</p>

						<PriceSlider
							step={50}
							priceRange={priceRange}
							maxPrice={maxPrice}
							setPriceRange={(e) =>
								setPriceRange(Number(e.target.value))
							}
						/>

						<div className="mt-4 text-sm text-gray-600">
							<p>
								<span className="font-medium">Selected:</span> $
								{priceRange === 0 ? maxPrice : priceRange}
							</p>
						</div>
					</div>
				</div>

				{/* Footer CTA */}
				<div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex gap-3">
					<button
						onClick={() => {
							setPriceRange(0);
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
