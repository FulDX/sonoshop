export default function PriceSlider({
	step,
	priceRange,
	maxPrice,
	setPriceRange,
}) {
	const percentage = (priceRange / maxPrice) * 100;

	return (
		<div className="space-y-4">
			<input
				type="range"
				min="0"
				max={maxPrice}
				step={step}
				value={priceRange}
				onChange={setPriceRange}
				style={{
					background: `linear-gradient(to right, #000 ${percentage}%, #e5e7eb ${percentage}%)`,
				}}
				className="custom-slider w-full"
			/>

			<div className="flex justify-between text-sm text-gray-500">
				<span>${priceRange}</span>
				<span>${maxPrice}</span>
			</div>
		</div>
	);
}
