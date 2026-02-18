import { useEffect, useMemo, useState } from "react";
import ListCategories from "./components/ListCategories";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import SidebarFilter from "./components/SidebarFilter";
import SortDropdown from "./components/SortDropdown";

export default function App() {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [products, setProducts] = useState([]);
	const categories = useMemo(() => {
		if (!products.length) return ["All"];

		const uniqueCategories = [
			...new Set(products.map((product) => product.category)),
		];

		const formatted = uniqueCategories.map(
			(cat) => cat.charAt(0).toUpperCase() + cat.slice(1),
		);

		return ["All", ...formatted];
	}, [products]);

	const [selectedSort, setSelectedSort] = useState("Relevance");

	const sortOptions = [
		"Relevance",
		"Price: Low to High",
		"Price: High to Low",
		"A-Z",
		"Z-A",
	];

	const [search, setSearch] = useState("");

	const maxPrice = 500;
	const [priceRange, setPriceRange] = useState(maxPrice);

	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	};

	// Fetch Data
	useEffect(() => {
		async function fetchData() {
			const response = await fetch("https://dummyjson.com/products");
			const data = await response.json();
			const productsData = await data.products;

			setProducts(productsData);
		}

		fetchData();
	}, []);

	// Filtering Memo
	const filteredData = useMemo(() => {
		let result = products;

		if (search) {
			result = result.filter((product) =>
				product.title.toLowerCase().includes(search.toLowerCase()),
			);
		}

		if (priceRange) {
			result = result.filter((product) => product.price <= priceRange);
		}

		return result;
	}, [products, search, priceRange]);

	return (
		<div className="min-h-screen pb-20 lg:pb-0">
			{/* ================= Mobile Foo ================= */}
			<div className="fixed bottom-0 left-0 right-0 flex justify-around items-center p-5 bg-white shadow-lg lg:hidden text-xl z-1000">
				<i className="fa-regular fa-house"></i>
				<i className="fa-regular fa-list"></i>
				<i className="fa-regular fa-cart-arrow-down"></i>
				<i className="fa-regular fa-heart"></i>
				<i className="fa-regular fa-user"></i>
			</div>

			{/* ================= Desktop Nav ================= */}
			<nav className="hidden lg:flex sticky top-0 z-50 items-center justify-between px-10 py-4 bg-white shadow-sm">
				{/* Logo */}
				<h1 className="font-bold text-3xl text-zinc-800">SonoProd</h1>

				{/* Search */}
				<div className="w-1/2">
					<SearchBar value={search} onChange={handleSearchChange} />
				</div>

				{/* Icons */}
				<div className="flex items-center gap-6 text-2xl text-zinc-700">
					<i className="fa-regular fa-cart-arrow-down hover:scale-110 transition"></i>
					<i className="fa-regular fa-heart hover:scale-110 transition"></i>
					<button className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition">
						<i className="fa-solid fa-user leading-none"></i>
					</button>
				</div>
			</nav>

			<main className="p-5 lg:p-10 bg-gray-50 min-h-screen">
				{/* Mobile Search */}
				<div className="lg:hidden mb-6 sticky top-0 bg-gray-50 z-40 py-3">
					<SearchBar value={search} onChange={handleSearchChange} />
				</div>

				{/* ===== Desktop Layout ===== */}
				<div className="max-w-7xl mx-auto">
					{/* Header Section */}
					<div className="hidden lg:block bg-gray-50 pb-6">
						<h2 className="text-2xl font-semibold mb-4 pt-4">
							Categories
						</h2>

						<div className="flex justify-between items-center">
							<ListCategories list={categories} />

							<div className="flex items-center gap-6">
								{/* SORT DROPDOWN */}
								<SortDropdown
									selectedSort={selectedSort}
									setSelectedSort={setSelectedSort}
									options={sortOptions}
								/>

								<span className="text-gray-500">
									{products.length} products
								</span>
							</div>
						</div>
					</div>

					<div className="lg:grid lg:grid-cols-12 lg:gap-10">
						{/* ===== SideBar Filter (Desktop) ===== */}
						<SidebarFilter
							priceRange={priceRange}
							setPriceRange={setPriceRange}
							maxPrice={maxPrice}
						/>

						{/* ===== Product Section ===== */}
						<section className="col-span-12 lg:col-span-9">
							{/* Mobile Category & Filter */}
							<div className="lg:hidden mb-6">
								<h2 className="text-2xl font-semibold mb-4">
									Categories
								</h2>

								<ListCategories list={categories} />

								<div className="flex justify-between items-center mt-6">
									<span className="font-medium">
										Filters (0)
									</span>
									<button
										onClick={() => setIsFilterOpen(true)}
									>
										<i className="fa-solid fa-plus"></i>
									</button>
								</div>

								{/* Sort + Product Count */}
								<div className="flex justify-between items-center mt-6 pt-4">
									<SortDropdown
										selectedSort={selectedSort}
										setSelectedSort={setSelectedSort}
										options={sortOptions}
									/>
									<span className="text-sm text-gray-500">
										{products.length} products
									</span>
								</div>
							</div>

							{/* Product Grid */}
							<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
								{filteredData.map((product) => (
									<ProductCard
										key={product.id}
										image={product.thumbnail}
										title={product.title}
										category={product.category}
										price={product.price}
									/>
								))}
							</div>
						</section>
					</div>
				</div>

				{/* ===== Mobile Filter Bottom Sheet ===== */}
				<div
					className={`fixed inset-0 bg-black/40 z-40 transition ${
						isFilterOpen
							? "opacity-100 visible"
							: "opacity-0 invisible"
					}`}
					onClick={() => setIsFilterOpen(false)}
				></div>

				<div
					className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 z-50 transition-transform duration-300 ${
						isFilterOpen ? "translate-y-0" : "translate-y-full"
					}`}
				>
					<div className="flex justify-between items-center mb-6">
						<h3 className="text-lg font-semibold">Filters</h3>
						<button onClick={() => setIsFilterOpen(false)}>
							✕
						</button>
					</div>

					<div className="space-y-4">
						<p className="flex justify-between">
							Artist <span>+</span>
						</p>
						<p className="flex justify-between">
							Genre <span>+</span>
						</p>

						<label className="flex items-center gap-2 mt-4">
							<input type="checkbox" />
							Pre-Order Only
						</label>
					</div>
				</div>
			</main>
		</div>
	);
}
