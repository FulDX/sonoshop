import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
	return (
		<div className="w-full max-w-2xl mx-auto">
			<div className="flex items-center bg-gray-100 rounded-full px-6 py-3 shadow-sm">
				<input
					value={value}
					onChange={onChange}
					type="text"
					placeholder="Search"
					className="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-500"
				/>

				<div className="ml-4 text-slate-400 p-3">
					<Search size={18} />
				</div>
			</div>
		</div>
	);
}
