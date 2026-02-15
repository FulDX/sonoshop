export default function ProductCard({
	image,
	title,
	category,
	price,
	onAddToCart,
}) {
	return (
		<div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden group flex flex-col">
			{/* Image */}
			<div className="relative aspect-square overflow-hidden">
				<img
					src={image}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>

			{/* Content */}
			<div className="p-4 flex flex-col flex-1">
				<h2 className="font-semibold text-base text-zinc-800 line-clamp-2 min-h-[48px]">
					{title}
				</h2>

				<p className="text-xs text-gray-500 uppercase tracking-wide mt-1">
					{category}
				</p>

				<div className="flex justify-between items-center mt-auto pt-4">
					<p className="font-bold text-lg text-zinc-900">${price}</p>

					<button
						onClick={onAddToCart}
						className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition"
					>
						<i className="fa-solid fa-cart-plus text-sm leading-none"></i>
					</button>
				</div>
			</div>
		</div>
	);
}
