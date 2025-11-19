const points = [
	{
		title: "The internet is noisy",
		description: "Klip makes it meaningful. Save what resonates, not what algorithms push.",
	},
	{
		title: "Shared moments",
		description: "Gen Z communicates through shared online moments. Your Daily Klip tells your story.",
	},
	{
		title: "Digital journaling",
		description: "Saving URLs is digital journaling. Your Klipboard becomes a reflection of who you are.",
	},
	{
		title: "Your internet identity",
		description: "A personal archive that grows into your unique internet identity over time.",
	},
];

export default function WhyKlip() {
	return (
		<section className="flex justify-center py-24 sm:py-32 bg-gray-50 dark:bg-gray-950">
			<div className="w-full max-w-6xl px-4">
				<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-20 text-center">
					Why Klip
				</h2>
				<div className="space-y-16">
					{points.map((point, index) => (
						<div key={index} className="text-center">
							<h3 className="text-2xl font-semibold mb-4 leading-tight text-center">{point.title}</h3>
							<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed text-center">
								{point.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

