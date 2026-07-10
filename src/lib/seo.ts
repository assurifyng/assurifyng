import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

type PageMetaInput = {
	title: string;
	description: string;
	path: string;
};

export function pageMetadata({
	title,
	description,
	path,
}: PageMetaInput): Metadata {
	const url = `${siteConfig.url}${path}`;

	return {
		title,
		description,
		alternates: {
			canonical: path,
		},
		openGraph: {
			type: "website",
			locale: siteConfig.locale,
			url,
			siteName: siteConfig.name,
			title: `${title} | ${siteConfig.name}`,
			description,
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | ${siteConfig.name}`,
			description,
		},
	};
}
