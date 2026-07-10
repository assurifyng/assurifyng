import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COURSE_DATA } from "@/data";
import { Badge } from "@/components/ui/badge";
import PageHero from "@/components/layout/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { buildBreadcrumb, coursesItemList } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
	title: "Tech Courses — Cybersecurity, QA & Web Development",
	description:
		"Explore GoAssurify's hands-on tech courses and services: Cyber Security, Software QA/Testing, Web Development, DevOps, plus QA consulting and talent outsourcing in Nigeria.",
	path: "/courses",
});

const breadcrumb = buildBreadcrumb([
	{ name: "Home", path: "/" },
	{ name: "Courses", path: "/courses" },
]);

export default function CoursesPage() {
	return (
		<main>
			<JsonLd data={breadcrumb} />
			<JsonLd data={coursesItemList} />
			<PageHero
				title="Our Courses & Services"
				subtitle="Practical, project-based training and services built to launch and advance your tech career."
				crumbs={[
					{ name: "Home", path: "/" },
					{ name: "Courses", path: "/courses" },
				]}
			/>

			<section className="w-full bg-white px-6 md:px-20 py-14 md:py-20">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{COURSE_DATA.map((course) => (
						<Link
							key={course.slug}
							href={`/courses/${course.slug}`}
							className="group bg-white border border-gray-300 hover:border-assurify-orange rounded-[32px] p-5 hover:shadow-md transition-all h-full flex flex-col"
						>
							<div className="relative aspect-video w-full mb-6 overflow-hidden rounded-2xl">
								<Image
									src={course.image}
									alt={`${course.title} training at GoAssurify`}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>

							<div className="flex gap-2 mb-4">
								<Badge className="bg-assurify-orange text-white px-4 py-1.5 rounded-full font-medium border-none">
									{course.tag}
								</Badge>
								{course.isComingSoon && (
									<Badge className="bg-gray-200 text-gray-600 px-4 py-1.5 rounded-full font-medium border-none">
										Coming Soon
									</Badge>
								)}
							</div>

							<div className="space-y-3 grow">
								<h2 className="text-2xl font-bold text-[#111] leading-tight">
									{course.title}
								</h2>
								<p className="text-gray-600 leading-relaxed">
									{course.description}
								</p>
							</div>

							<span className="mt-6 inline-flex items-center gap-2 font-semibold text-assurify-orange">
								View course
								<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
							</span>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
