const pages = [
	{ name: "Design", count: 187 },
	{ name: "Tech", count: 234 },
	{ name: "Life", count: 156 },
	{ name: "Reading", count: 98 },
	{ name: "Music", count: 142 },
	{ name: "Travel", count: 89 },
];

export default function KlipboardPreview() {
	return (
		<section className="min-h-[80vh] flex flex-col items-center justify-center py-24">
			<div className="w-full max-w-6xl px-4">
			<div className="text-center mb-20">
				<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4 text-center">
					Your Klipboard
				</h2>
				<div className="w-full flex justify-center">
					<div className="text-center max-w-xl space-y-2 mx-auto">
						<p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
							Your personal archive. Your internet identity.
						</p>
					</div>
				</div>
			</div>
				<div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden">
				{/* Profile Header */}
				<div className="p-10 border-b border-gray-200 dark:border-gray-800">
					<div className="w-full flex justify-center mb-6">
						<div className="flex items-center gap-5">
							<div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center shadow-inner">
								<div className="text-gray-500 dark:text-gray-400 text-2xl font-semibold">K</div>
							</div>
							<div>
								<h3 className="text-2xl font-semibold mb-1">Your Name</h3>
								<div className="text-sm text-gray-500 dark:text-gray-500">
									@yourhandle
								</div>
							</div>
						</div>
					</div>
					<div className="w-full flex justify-center">
						<div className="flex items-center gap-12">
							<div className="text-center">
								<span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-500 font-medium">Daily Streak</span>
								<div className="text-3xl font-semibold mt-2">42 days</div>
							</div>
							<div className="text-center">
								<span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-500 font-medium">Total Klips</span>
								<div className="text-3xl font-semibold mt-2">1,247</div>
							</div>
						</div>
					</div>
				</div>

					{/* Pages */}
					<div className="p-10">
						<h4 className="text-lg font-semibold mb-6">Pages</h4>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
							{pages.map((page, index) => (
								<div
									key={index}
									className="w-full p-5 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200"
								>
									<div className="font-semibold mb-2 text-base">{page.name}</div>
									<div className="text-sm text-gray-500 dark:text-gray-500">
										{page.count.toLocaleString()} Klips
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

