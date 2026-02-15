import { Search } from "lucide-react";

export default function SearchBar() {
	return (
		<div className="w-full max-w-2xl mx-auto">
			<div className="flex items-center bg-gray-100 rounded-full px-6 py-3 shadow-sm">
				<input
					type="text"
					placeholder="Search"
					className="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-500"
				/>

				<button className="ml-4 bg-black text-white p-3 rounded-full hover:scale-105 transition">
					<Search size={18} />
				</button>
			</div>
		</div>
	);
}
