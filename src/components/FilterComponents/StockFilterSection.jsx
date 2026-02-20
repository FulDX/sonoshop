export default function StockFilterSection({ isExpanded, onToggle }) {
	return (
		<div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
			<button
				onClick={onToggle}
				className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
			>
				<div className="flex items-center gap-3">
					<i className="fa-solid fa-box text-base text-green-600"></i>
					<p className="font-semibold text-zinc-800">Availability</p>
				</div>
				<i
					className={`fa-solid fa-chevron-down text-sm text-gray-600 transition-transform ${
						isExpanded ? "rotate-180" : ""
					}`}
				></i>
			</button>

			{isExpanded && (
				<div className="border-t border-gray-100 px-6 py-4 space-y-3">
					<label className="flex items-center gap-3 cursor-pointer group">
						<input
							type="checkbox"
							defaultChecked={false}
							className="w-4 h-4 rounded border-gray-300 text-black cursor-pointer accent-black"
						/>
						<span className="text-sm text-gray-600 group-hover:text-zinc-800 transition">
							In Stock
						</span>
					</label>
					<label className="flex items-center gap-3 cursor-pointer group">
						<input
							type="checkbox"
							defaultChecked={false}
							className="w-4 h-4 rounded border-gray-300 text-black cursor-pointer accent-black"
						/>
						<span className="text-sm text-gray-600 group-hover:text-zinc-800 transition">
							On Sale
						</span>
					</label>
				</div>
			)}
		</div>
	);
}
