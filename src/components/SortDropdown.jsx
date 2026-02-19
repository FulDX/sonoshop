import { useEffect, useRef, useState } from "react";

export default function SortDropdown({
	selectedSort,
	setSelectedSort,
	options,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Close when click outside
	useEffect(() => {
		function handleClickOutside(e) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target)
			) {
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className="relative" ref={dropdownRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 text-sm font-medium"
			>
				Sort by {selectedSort}
				<i
					className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 ${
						isOpen ? "rotate-180" : ""
					}`}
				></i>
			</button>

			<div
				className={`absolute left-0 lg:left-auto lg:right-0 mt-3 w-52 bg-white shadow-lg rounded-xl overflow-hidden z-50 transition-all duration-200 ${
					isOpen
						? "opacity-100 translate-y-0 visible"
						: "opacity-0 -translate-y-2 invisible"
				}`}
			>
				{options.map((option) => (
					<button
						key={option}
						onClick={() => {
							setSelectedSort(option);
							setIsOpen(false);
							console.log(option);
						}}
						className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-100 transition ${
							selectedSort === option
								? "bg-gray-50 font-medium"
								: ""
						}`}
					>
						{option}
					</button>
				))}
			</div>
		</div>
	);
}
