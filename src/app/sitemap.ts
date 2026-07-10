import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { courseSlugs } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	const staticRoutes = [
		{ path: "/", priority: 1 },
		{ path: "/courses", priority: 0.9 },
		{ path: "/about", priority: 0.8 },
		{ path: "/faqs", priority: 0.7 },
		{ path: "/contact", priority: 0.7 },
	].map((route) => ({
		url: `${siteConfig.url}${route.path}`,
		lastModified,
		changeFrequency: "weekly" as const,
		priority: route.priority,
	}));

	const courseRoutes = courseSlugs.map((slug) => ({
		url: `${siteConfig.url}/courses/${slug}`,
		lastModified,
		changeFrequency: "monthly" as const,
		priority: 0.8,
	}));

	return [...staticRoutes, ...courseRoutes];
}
