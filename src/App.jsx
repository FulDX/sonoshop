import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

export default function App() {
	return (
		<div className="min-h-screen pb-20 lg:pb-0">
			{/* ================= MOBILE & TABLET ================= */}
			<div className="fixed bottom-0 left-0 right-0 flex justify-around items-center p-5 bg-white shadow-lg lg:hidden text-xl z-1000">
				<i className="fa-regular fa-house"></i>
				<i className="fa-regular fa-list"></i>
				<i className="fa-regular fa-cart-arrow-down"></i>
				<i className="fa-regular fa-heart"></i>
				<i className="fa-regular fa-user"></i>
			</div>

			{/* ================= DESKTOP NAV ================= */}
			<nav className="hidden lg:flex items-center justify-between px-10 py-4 bg-white shadow-sm">
				{/* Logo */}
				<h1 className="font-bold text-3xl text-zinc-800">SonoProd</h1>

				{/* Search */}
				<div className="w-1/2">
					<SearchBar />
				</div>

				{/* Icons */}
				<div className="flex items-center gap-6 text-2xl text-zinc-700">
					<i className="fa-regular fa-cart-arrow-down hover:scale-110 transition"></i>
					<i className="fa-regular fa-heart hover:scale-110 transition"></i>
					<i className="fa-regular fa-user hover:scale-110 transition"></i>
				</div>
			</nav>

			{/* ================= MAIN ================= */}
			<main className="p-5 lg:p-10 bg-gray-50 min-h-screen">
				{/* Search tampil di mobile & tablet */}
				<div className="lg:hidden mb-6">
					<SearchBar />
				</div>

				{/* ================= CATEGORY + FILTER (Mobile & Tablet) ================= */}
				<div className="lg:hidden mb-6">
					{/* Categories Title */}
					<h2 className="text-2xl font-semibold mb-4">Categories</h2>

					{/* Horizontal Category Scroll */}
					<div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
						{[
							"Clothing",
							"Music",
							"Accessories",
							"Collab",
							"Home",
						].map((cat) => (
							<button
								key={cat}
								className="px-4 py-2 border rounded-full text-sm whitespace-nowrap hover:bg-black hover:text-white transition"
							>
								{cat}
							</button>
						))}
					</div>

					{/* Filter & Sort Row */}
					<div className="flex justify-between items-center mt-6">
						<div className="flex items-center gap-2">
							<span className="font-medium">Filters</span>
							<span className="w-6 h-6 flex items-center justify-center border rounded-full text-xs">
								0
							</span>
						</div>

						<div className="text-lg text-gray-600">
							<button>
								<i class="fa-light fa-plus"></i>
							</button>
						</div>
					</div>

					<div className="flex justify-between items-center mt-6">
						<div className="flex items-center gap-2">
							<span className="font-medium">Sort by Relevance</span>
							
						</div>

						<div className="text-sm text-gray-600">
							<button>
								2000 products
							</button>
						</div>
					</div>
				</div>

				{/* Product List */}
				<div className="mt-4 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
					<ProductCard
						image="https://picsum.photos/seed/1/600/600"
						title="Oversized Hoodie"
						category="Men Clothing"
						price="299.000"
						onAddToCart={() => alert("Added to cart!")}
					/>
					<ProductCard
						image="https://picsum.photos/seed/2/600/600"
						title="Minimalist Sneakers"
						category="Footwear"
						price="499.000"
						onAddToCart={() => alert("Added to cart!")}
					/>
					<ProductCard
						image="https://picsum.photos/seed/3/600/600"
						title="Streetwear Jacket"
						category="Outerwear"
						price="699.000"
						onAddToCart={() => alert("Added to cart!")}
					/>
					<ProductCard
						image="https://picsum.photos/seed/4/600/600"
						title="Canvas Backpack"
						category="Accessories"
						price="399.000"
						onAddToCart={() => alert("Added to cart!")}
					/>
				</div>
			</main>
		</div>
	);
}
