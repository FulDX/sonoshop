export default function ListCategories({ list }) {
	return (
		<div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
			{" "}
			{list.map((cat) => (
				<button
					key={cat}
					className="px-4 py-2 border rounded-full text-sm whitespace-nowrap hover:bg-black hover:text-white transition"
				>
					{" "}
					{cat}{" "}
				</button>
			))}{" "}
		</div>
	);
}
