import type { Metadata } from "next";
import Link from "next/link";
import faqList from "@/data/FAQList";
import Accordion from "@/components/common/Accordion";
import PageHero from "@/components/layout/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { buildBreadcrumb, faqPage } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
	title: "Frequently Asked Questions",
	description:
		"Answers to common questions about GoAssurify's tech training: how to apply, certificates, one-on-one tutoring, program schedules, consulting and talent outsourcing.",
	path: "/faqs",
});

const breadcrumb = buildBreadcrumb([
	{ name: "Home", path: "/" },
	{ name: "FAQs", path: "/faqs" },
]);

export default function FaqsPage() {
	return (
		<main>
			<JsonLd data={breadcrumb} />
			<JsonLd data={faqPage} />
			<PageHero
				title="Frequently Asked Questions"
				subtitle="Find answers to your most pressing questions about our training, consulting and outsourcing services."
				crumbs={[
					{ name: "Home", path: "/" },
					{ name: "FAQs", path: "/faqs" },
				]}
			/>

			<section className="w-full bg-white px-8 md:px-40 py-14 md:py-20 text-black">
				<div className="flex flex-col gap-4">
					{faqList.map((item, i) => (
						<Accordion
							key={i}
							question={item.question}
							answer={item.answer}
							data={item}
						/>
					))}
				</div>

				<div className="mt-12 rounded-2xl bg-[#FFF8F6] border border-assurify-orange/20 p-8 text-center">
					<h2 className="text-2xl font-bold text-[#333]">
						Still have questions?
					</h2>
					<p className="mt-2 text-gray-600">
						Our team is happy to help you choose the right path.
					</p>
					<Link
						href="/contact"
						className="mt-5 inline-block bg-assurify-orange text-white font-semibold px-8 py-3 rounded-xl hover:bg-assurify-orange/90 transition-all"
					>
						Contact Us
					</Link>
				</div>
			</section>
		</main>
	);
}
