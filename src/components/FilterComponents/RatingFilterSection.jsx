export default function RatingFilterSection({
	isExpanded,
	onToggle,
	selectedRatings = [],
	onRatingToggle,
}) {
	return (
		<div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
			<button
				onClick={onToggle}
				className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
			>
				<div className="flex items-center gap-3">
					<i className="fa-solid fa-star text-base text-yellow-400"></i>
					<p className="font-semibold text-zinc-800">Rating</p>
				</div>
				<i
					className={`fa-solid fa-chevron-down text-sm text-gray-600 transition-transform ${
						isExpanded ? "rotate-180" : ""
					}`}
				></i>
			</button>

			{isExpanded && (
				<div className="border-t border-gray-100 px-6 py-4 space-y-3">
					{[5, 4, 3, 2, 1].map((rating) => (
						<label
							key={rating}
							className="flex items-center gap-3 cursor-pointer group"
						>
							<input
								type="checkbox"
								checked={selectedRatings.includes(rating)}
								onChange={() => onRatingToggle?.(rating)}
								className="w-4 h-4 rounded border-gray-300 text-black cursor-pointer accent-black"
							/>
							<div className="flex items-center gap-1">
								{[...Array(rating)].map((_, i) => (
									<i
										key={i}
										className="fa-solid fa-star text-xs text-yellow-400"
									></i>
								))}
								{[...Array(5 - rating)].map((_, i) => (
									<i
										key={i}
										className="fa-regular fa-star text-xs text-gray-300"
									></i>
								))}
							</div>
							<span className="text-sm text-gray-600 group-hover:text-zinc-800 transition">
								{rating}+
							</span>
						</label>
					))}
				</div>
			)}
		</div>
	);
}
