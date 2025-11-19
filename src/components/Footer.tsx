export default function Footer() {
	return (
		<footer className="py-16 px-6 sm:px-8 lg:px-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-8 pb-8 border-b border-gray-200 dark:border-gray-800">
					<div className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
						Klip
					</div>
					<nav className="flex gap-8 text-sm text-gray-600 dark:text-gray-400">
						<a
							href="#privacy"
							className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
						>
							Privacy
						</a>
						<a
							href="#terms"
							className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
						>
							Terms
						</a>
						<a
							href="#contact"
							className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
						>
							Contact
						</a>
					</nav>
				</div>
				<div className="pt-8 text-center text-sm text-gray-500 dark:text-gray-500">
					© {new Date().getFullYear()} Klip. All rights reserved.
				</div>
			</div>
		</footer>
	);
}

