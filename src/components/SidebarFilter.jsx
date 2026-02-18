import { useState } from "react";
import PriceSlider from "./FilterComponents/PriceSlider";

export default function SidebarFilter({priceRange, setPriceRange, maxPrice}) {
	
	const step = 50;

	return (
		<aside className="hidden lg:block col-span-3">
			<div className="sticky top-28 space-y-8">
				<h3 className="text-xl font-semibold">Filters</h3>

				{/* Price Section */}
				<div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
					<p className="font-semibold text-zinc-800 mb-6">Price</p>

					<PriceSlider step={step} priceRange={priceRange} maxPrice={maxPrice} setPriceRange={(e) => setPriceRange(Number(e.target.value))}/>
				</div>
			</div>
		</aside>
	);
}
