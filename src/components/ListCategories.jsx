export default function ListCategories({
	list,
	selectedCategories = [],
	onCategoryToggle = () => {},
}) {
	return (
		<div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
			{" "}
			{list.map((cat) => {
				const isSelected =
					selectedCategories.length === 0 && cat === "all"
						? true
						: selectedCategories.includes(cat);

				return (
					<button
						key={cat}
						onClick={() => onCategoryToggle(cat)}
						className={`px-4 py-2 border rounded-full text-sm whitespace-nowrap font-semibold transition-all duration-300 ease-in-out ${
							isSelected
								? "bg-black text-white border-black"
								: "border-gray-300 text-gray-700 hover:text-black hover:border-[#1c1c1c]"
						}`}
					>
						{" "}
						{cat}{" "}
					</button>
				);
			})}{" "}
		</div>
	);
}
