export default function ProductCard({
	image,
	title,
	category,
	price,
	onAddToCart,
}) {
	return (
		<div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden group">

			{/* Image */}
			<div className="relative aspect-square overflow-hidden">
				<img
					src={image}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>

			{/* Content */}
			<div className="p-4">
				<h2 className="font-semibold text-base text-zinc-800 line-clamp-2">
					{title}
				</h2>

				<p className="text-xs text-gray-500 uppercase tracking-wide mt-1">
					{category}
				</p>

				<div className="flex justify-between items-center mt-4">
					<p className="font-bold text-lg text-zinc-900">
						${price}
					</p>

					<button
						onClick={onAddToCart}
						className="bg-black text-white p-2 rounded-full hover:scale-110 transition"
					>
						<i className="fa-solid fa-cart-plus text-sm"></i>
					</button>
				</div>
			</div>

		</div>
	);
}
