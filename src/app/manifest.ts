import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: `${siteConfig.name} — ${siteConfig.tagline}`,
		short_name: siteConfig.name,
		description: siteConfig.shortDescription,
		start_url: "/",
		display: "standalone",
		background_color: "#FFF8F6",
		theme_color: "#cc4a20",
		lang: "en",
		categories: ["education", "technology", "business"],
		icons: [
			{
				src: "/icon.png",
				sizes: "243x256",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/apple-icon.png",
				sizes: "243x256",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
