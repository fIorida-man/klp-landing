import Image from "next/image";

export default function Hero() {
	return (
		<section className="relative min-h-[90vh] flex items-center justify-center px-6 sm:px-8 lg:px-12">
			{/* Subtle background pattern */}
			<div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05]">
				<div className="absolute inset-0" style={{
					backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
					backgroundSize: '48px 48px'
				}} />
			</div>

			<div className="relative z-10 max-w-4xl mx-auto text-center pt-8 sm:pt-12 md:pt-16">
				{/* Logo with flowy background */}
				<div className="mb-16 sm:mb-20 md:mb-24 flex justify-center relative">
					{/* Modern flowy background shape - adjusted for wide logo */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="relative w-[280px] h-[100px] sm:w-[340px] sm:h-[125px] md:w-[400px] md:h-[147px]">
							{/* Animated gradient blob - more white */}
							<div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/80 via-white/60 to-white/80 dark:from-white/20 dark:via-white/15 dark:to-white/20 opacity-90 dark:opacity-50 blur-3xl animate-pulse" />
							{/* Secondary blob for depth - more white */}
							<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/70 via-white/40 to-white/60 dark:from-white/25 dark:via-transparent dark:to-white/20 blur-2xl" 
								style={{
									transform: 'translate(20%, -20%) scale(0.8)',
									animation: 'pulse 3s ease-in-out infinite'
								}}
							/>
							{/* Enhanced glow effect - more white */}
							<div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 to-white/20 dark:from-white/15 dark:to-white/5 blur-xl" />
						</div>
					</div>
					{/* Logo - maintaining 2716:1000 aspect ratio */}
					<div className="relative z-10">
						<Image
							src="/logo.png"
							alt="Klip Logo"
							width={2716}
							height={1000}
							className="h-20 sm:h-24 md:h-28 w-auto drop-shadow-lg"
							priority
							style={{ objectFit: 'contain' }}
						/>
					</div>
				</div>
				<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 leading-tight">
					The internet as you feel it
				</h1>
				<p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
					Your life on the internet, saved as you feel it.
				</p>
				<a
					href="#waitlist"
					className="inline-block px-20 py-10 bg-white text-black rounded-full font-semibold text-2xl hover:scale-105 active:scale-95 transition-transform shadow-lg hover:shadow-xl border border-gray-300 dark:bg-white dark:text-black dark:border-gray-600"
					style={{ color: "#000000" }}
				>
					Join the Waitlist
				</a>
			</div>
		</section>
	);
}

