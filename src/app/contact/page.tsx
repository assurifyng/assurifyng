import type { Metadata } from "next";
import ContactUs from "@/components/sections/ContactUs";
import PageHero from "@/components/layout/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { pageMetadata } from "@/lib/seo";
import { buildBreadcrumb } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
	title: "Contact Us",
	description:
		"Get in touch with GoAssurify in Ikeja, Lagos, Nigeria. Reach us by phone, WhatsApp or email for course enrollment, consulting and talent outsourcing enquiries.",
	path: "/contact",
});

const breadcrumb = buildBreadcrumb([
	{ name: "Home", path: "/" },
	{ name: "Contact Us", path: "/contact" },
]);

const contactPage = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	name: "Contact GoAssurify",
	url: `${siteConfig.url}/contact`,
	mainEntity: {
		"@type": "Organization",
		name: siteConfig.name,
		email: siteConfig.email,
		telephone: siteConfig.phone,
		address: {
			"@type": "PostalAddress",
			addressLocality: siteConfig.address.locality,
			addressRegion: siteConfig.address.region,
			addressCountry: siteConfig.address.country,
		},
	},
};

export default function ContactPage() {
	return (
		<main>
			<JsonLd data={breadcrumb} />
			<JsonLd data={contactPage} />
			<PageHero
				title="Get in Touch"
				subtitle="Questions about a course, consulting or outsourcing? We usually respond within 24 hours."
				crumbs={[
					{ name: "Home", path: "/" },
					{ name: "Contact Us", path: "/contact" },
				]}
			/>
			<ContactUs />
		</main>
	);
}
