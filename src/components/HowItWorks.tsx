const steps = [
	{
		number: "01",
		title: "Copy a URL",
		description: "When you find something meaningful online, copy the link. Any URL, anywhere.",
	},
	{
		number: "02",
		title: "Klip parses it",
		description: "We extract the essence — title, image, description — so you can save it beautifully.",
	},
	{
		number: "03",
		title: "Save to your Klipboard",
		description: "It's yours forever. Organize into Pages, pick your Daily Klip, share with friends.",
	},
];

export default function HowItWorks() {
	return (
		<section className="min-h-[80vh] flex flex-col items-center justify-center py-24">
			<div className="w-full max-w-6xl px-4">
				<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-20 text-center">
					How Klip Works
				</h2>
				<div className="grid md:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
					{steps.map((step, index) => (
						<div
							key={index}
							className="w-full max-w-sm bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
						>
							<div className="text-6xl font-extralight text-gray-200 dark:text-gray-800 mb-6 tracking-tight">
								{step.number}
							</div>
							<h3 className="text-2xl font-semibold mb-4 leading-tight">{step.title}</h3>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

