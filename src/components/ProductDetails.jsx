import { useState } from "react";

export default function ProductDetails({ product, onClose }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	if (!product) return null;

	const images = product.images || [product.thumbnail];
	const rating = product.rating || 0;
	const reviews = product.reviews?.length || 0;

	return (
		<div className="fixed inset-0 bg-black/50 z-50 flex items-end lg:items-center lg:justify-center p-0 lg:p-6 animate-fade-in">
			{/* Backdrop */}
			<div className="absolute inset-0" onClick={onClose}></div>

			{/* Modal */}
			<div className="relative w-full lg:max-w-5xl bg-white rounded-t-3xl lg:rounded-3xl max-h-[95vh] overflow-hidden shadow-2xl animate-slide-up lg:animate-scale-in flex flex-col lg:flex-row">
				{/* ================= Image Section ================= */}
				<div className="lg:w-1/2 bg-gray-100 relative flex items-center justify-center p-6">
					<img
						src={images[currentImageIndex]}
						alt={product.title}
						className="max-h-[400px] lg:max-h-[500px] object-contain"
					/>

					{/* Arrows */}
					{images.length > 1 && (
						<>
							<button
								onClick={() =>
									setCurrentImageIndex((prev) =>
										prev === 0
											? images.length - 1
											: prev - 1,
									)
								}
								className="absolute left-4 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow"
							>
								<i className="fa-solid fa-chevron-left"></i>
							</button>

							<button
								onClick={() =>
									setCurrentImageIndex((prev) =>
										prev === images.length - 1
											? 0
											: prev + 1,
									)
								}
								className="absolute right-4 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow"
							>
								<i className="fa-solid fa-chevron-right"></i>
							</button>
						</>
					)}
				</div>

				{/* ================= Info Section ================= */}
				<div className="lg:w-1/2 flex flex-col overflow-y-auto p-6 lg:p-10">
					{/* Header */}
					<div className="flex justify-between items-start">
						<h2 className="text-xl lg:text-2xl font-bold text-zinc-800">
							{product.title}
						</h2>
						<button
							onClick={onClose}
							className="p-2 hover:bg-gray-100 rounded-full w-10 h-10"
						>
							<i className="fa-solid fa-xmark text-xl"></i>
						</button>
					</div>

					{/* Category & Brand */}
					<div className="mt-3 text-sm text-gray-500 uppercase tracking-wide">
						{product.category}
						{product.brand && ` • ${product.brand}`}
					</div>

					{/* Rating */}
					<div className="flex items-center gap-2 mt-4">
						<div className="flex gap-1">
							{[...Array(5)].map((_, i) => (
								<i
									key={i}
									className={`${
										i < Math.round(rating)
											? "fa-solid fa-star text-yellow-400"
											: "fa-regular fa-star text-gray-300"
									}`}
								></i>
							))}
						</div>
						<span className="font-semibold">
							{rating.toFixed(1)}
						</span>
						{reviews > 0 && (
							<span className="text-gray-500 text-sm">
								({reviews} reviews)
							</span>
						)}
					</div>

					{/* Price */}
					<div className="mt-6">
						<span className="text-3xl font-bold text-zinc-900">
							${product.price}
						</span>

						{product.discountPercentage && (
							<span className="ml-3 px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
								-{product.discountPercentage}%
							</span>
						)}
					</div>

					{/* Stock */}
					<div className="mt-4">
						{product.stock > 0 ? (
							<span className="text-green-600 text-sm font-medium">
								In Stock ({product.stock})
							</span>
						) : (
							<span className="text-red-600 text-sm font-medium">
								Out of Stock
							</span>
						)}
					</div>

					{/* Divider */}
					<div className="border-t my-6"></div>

					{/* Description */}
					<div>
						<h3 className="font-semibold mb-2">
							About this product
						</h3>
						<p className="text-gray-600 text-sm leading-relaxed">
							{product.description}
						</p>
					</div>

					{/* Spacer */}
					<div className="flex-grow"></div>

					{/* Actions */}
					<div className="flex gap-3 mt-8">
						<button className="flex-1 py-3 bg-black text-white font-semibold rounded-xl hover:bg-zinc-800 transition">
							Add to Cart
						</button>
						<button className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition">
							<i className="fa-regular fa-heart"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
