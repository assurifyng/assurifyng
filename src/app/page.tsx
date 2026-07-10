import AboutUs from "@/components/sections/AboutUs";
import ContactUs from "@/components/sections/ContactUs";
import Courses from "@/components/sections/Courses";
import FAQs from "@/components/sections/FAQs";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import JsonLd from "@/components/seo/JsonLd";
import { coursesItemList, faqPage } from "@/lib/structuredData";

export default function Home() {
	return (
		<main className="h-auto w-full flex flex-col">
			<JsonLd data={coursesItemList} />
			<JsonLd data={faqPage} />
			<Hero />
			<Courses />
			<AboutUs />
			<WhyUs />
			<FAQs />
			<ContactUs />
		</main>
	);
}
