export default function SidebarFilter() {
	return (
		<aside className="hidden lg:block col-span-3">
			<div className="sticky top-30 space-y-6">
				<h3 className="text-xl font-semibold">Filters</h3>

				<div className="border-b pb-4">
					<p className="flex justify-between">
						Artist <span>+</span>
					</p>
				</div>

				<div className="border-b pb-4">
					<p className="flex justify-between">
						Genre <span>+</span>
					</p>
				</div>

				<div>
					<label className="flex items-center gap-2 mt-3">
						<input type="checkbox" />
						Pre-Order Only
					</label>
				</div>
			</div>
		</aside>
	);
}
