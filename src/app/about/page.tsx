import type { Metadata } from "next";
import AboutUs from "@/components/sections/AboutUs";
import WhyUs from "@/components/sections/WhyUs";
import PageHero from "@/components/layout/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { buildBreadcrumb } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
	title: "About Us — Our Mission & Vision",
	description:
		"GoAssurify is a Lagos-based tech education hub turning ambition into real technical expertise through hands-on Cybersecurity, QA and Web Development training, mentorship and consulting.",
	path: "/about",
});

const breadcrumb = buildBreadcrumb([
	{ name: "Home", path: "/" },
	{ name: "About Us", path: "/about" },
]);

export default function AboutPage() {
	return (
		<main>
			<JsonLd data={breadcrumb} />
			<PageHero
				title="About GoAssurify"
				subtitle="A leading tech education hub committed to turning ambition into real technical expertise across Cybersecurity, QA and Web Development."
				crumbs={[
					{ name: "Home", path: "/" },
					{ name: "About Us", path: "/about" },
				]}
			/>
			<AboutUs />
			<WhyUs />
		</main>
	);
}
