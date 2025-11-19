import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import DailyKlipPreview from "@/components/DailyKlipPreview";
import KlipboardPreview from "@/components/KlipboardPreview";
import WhyKlip from "@/components/WhyKlip";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="min-h-screen w-full">
			<Hero />
			<HowItWorks />
			<DailyKlipPreview />
			<KlipboardPreview />
			<WhyKlip />
			<WaitlistCTA />
			<Footer />
		</main>
	);
}
