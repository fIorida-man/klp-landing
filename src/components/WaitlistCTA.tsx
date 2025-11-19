"use client";

import { useState } from "react";

export default function WaitlistCTA() {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	const validateEmail = (email: string) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (!validateEmail(email)) {
			setError("Please enter a valid email address");
			return;
		}

		// TODO: Integrate with waitlist API
		setSubmitted(true);
		setTimeout(() => {
			setSubmitted(false);
			setEmail("");
		}, 3000);
	};

	return (
		<section id="waitlist" className="min-h-[80vh] flex flex-col items-center justify-center py-24">
			<div className="w-full max-w-6xl px-4">
			<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4 text-center">
				Be first to use Klip
			</h2>
			<div className="w-full flex justify-center mb-12">
				<div className="text-center max-w-xl space-y-2 mx-auto">
					<p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
						Join the waitlist and get early access when we launch.
					</p>
				</div>
			</div>
			<div className="w-full flex justify-center">
				<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md justify-center items-center">
					<div className="flex-1 relative w-full sm:w-auto">
						<input
							type="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								setError("");
							}}
							placeholder="Enter your email"
							required
							disabled={submitted}
							className={`w-full px-6 py-4 border rounded-full bg-white dark:bg-black transition-all ${
								error
									? "border-red-400 dark:border-red-600 focus:ring-2 focus:ring-red-400 dark:focus:ring-red-600"
									: "border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
							} ${submitted ? "opacity-50 cursor-not-allowed" : ""}`}
						/>
						{error && (
							<p className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 text-sm text-red-500 dark:text-red-400 whitespace-nowrap">
								{error}
							</p>
						)}
					</div>
					<button
						type="submit"
						disabled={submitted}
						className={`px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium whitespace-nowrap transition-all ${
							submitted
								? "opacity-75 cursor-not-allowed"
								: "hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
						}`}
					>
						{submitted ? (
							<span className="flex items-center gap-2">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
								Joined!
							</span>
						) : (
					"Join Waitlist"
				)}
			</button>
		</form>
			</div>
			</div>
		</section>
	);
}

