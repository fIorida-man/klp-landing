const mockKlips = [
	{
		name: "Alex",
		klip: {
			title: "The Art of Slow Reading",
			url: "example.com/article",
			gradient: "from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30",
		},
	},
	{
		name: "Sam",
		klip: {
			title: "Minimalist Workspace Setup",
			url: "example.com/workspace",
			gradient: "from-gray-100 to-slate-100 dark:from-gray-800 dark:to-slate-800",
		},
	},
	{
		name: "Jordan",
		klip: {
			title: "Morning Routines That Stick",
			url: "example.com/routines",
			gradient: "from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30",
		},
	},
];

export default function DailyKlipPreview() {
	return (
		<section className="flex justify-center py-24 sm:py-32 bg-gray-50 dark:bg-gray-950">
			<div className="w-full max-w-6xl px-4">
				<div className="text-center mb-20">
					<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4 text-center">
						Daily Klip Feed
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
						One curated Klip per friend. See what matters to them today.
					</p>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
					{mockKlips.map((item, index) => (
						<div
							key={index}
							className="w-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
						>
							<div className={`aspect-[16/10] bg-gradient-to-br ${item.klip.gradient} flex items-center justify-center relative overflow-hidden`}>
								<div className="absolute inset-0 opacity-10 dark:opacity-5">
									<div className="absolute inset-0" style={{
										backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
										backgroundSize: '24px 24px'
									}} />
								</div>
							</div>
							<div className="p-6">
								<div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-3 font-medium">
									{`${item.name}'s Daily Klip`}
								</div>
								<h3 className="font-semibold text-lg mb-2 leading-tight">{item.klip.title}</h3>
								<div className="text-sm text-gray-500 dark:text-gray-500 truncate">
									{item.klip.url}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

