import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutUs from "@/components/sections/AboutUs";
import ContactUs from "@/components/sections/ContactUs";
import Courses from "@/components/sections/Courses";
import FAQs from "@/components/sections/FAQs";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
	return (
		<main className="h-auto w-full flex flex-col">
			<Header />
			<Hero />
			<Courses />
			<AboutUs />
			<WhyUs />
			<FAQs />
			<ContactUs />
			<Footer />
		</main>
	);
}
