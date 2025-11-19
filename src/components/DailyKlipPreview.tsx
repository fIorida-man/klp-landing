const mockKlips = [
	{
		name: "Maria",
		klip: {
			title: "The Art of Slow Reading",
			url: "https://archive.org/details/artofslowreading0000newk",
			gradient: "from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30",
		},
	},
	{
		name: "Samuel",
		klip: {
			title: "TikTok Edit - C. Ronaldo 2022",
			url: "https://www.tiktok.com/@g9260fn/video/7554517995570122015?is_from_webapp=1&sender_device=pc&web_id=7570389655071360567",
			gradient: "from-gray-100 to-slate-100 dark:from-gray-800 dark:to-slate-800",
		},
	},
	{
		name: "Axel",
		klip: {
			title: "Snap Out of It - Arctic Monkeys",
			url: "https://open.spotify.com/track/0NdTUS4UiNYCNn5FgVqKQY?si=bb8e407756de4633",
			gradient: "from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30",
		},
	},
];

export default function DailyKlipPreview() {
	return (
		<section className="min-h-[80vh] flex flex-col items-center justify-center py-24 bg-gray-50 dark:bg-gray-950">
			<div className="w-full max-w-6xl px-4">
			<div className="text-center mb-20">
				<h2 className="text-4xl sm:text-5xl text-red-500 dark:text-red-500 font-semibold tracking-tight mb-4 text-center">
					Daily Klip Feed
				</h2><br/>
				<div className="w-full flex justify-center">
					<div className="text-center max-w-xl space-y-2 mx-auto">
						<p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
							One curated Klip per friend. See what matters to them today.
						</p><br/>
					</div>
				</div>
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
								<h3 className="font-semibold text-lg mb-2 leading-tight">{item.klip.title}</h3><br/>
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

