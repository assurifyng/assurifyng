import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Clock, GraduationCap, MonitorPlay } from "lucide-react";
import { COURSE_DATA, courseSlugs, getCourseBySlug } from "@/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageHero from "@/components/layout/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { pageMetadata } from "@/lib/seo";
import { buildBreadcrumb, buildCourseSchema } from "@/lib/structuredData";

type Params = { slug: string };

export function generateStaticParams() {
	return courseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}): Promise<Metadata> {
	const { slug } = await params;
	const course = getCourseBySlug(slug);

	if (!course) {
		return pageMetadata({
			title: "Course Not Found",
			description: "The course you are looking for could not be found.",
			path: "/courses",
		});
	}

	return pageMetadata({
		title: course.metaTitle,
		description: course.metaDescription,
		path: `/courses/${course.slug}`,
	});
}

const facts = (course: NonNullable<ReturnType<typeof getCourseBySlug>>) => [
	{ icon: GraduationCap, label: "Level", value: course.level },
	{ icon: Clock, label: "Duration", value: course.duration },
	{ icon: MonitorPlay, label: "Delivery", value: course.delivery },
];

export default async function CoursePage({
	params,
}: {
	params: Promise<Params>;
}) {
	const { slug } = await params;
	const course = getCourseBySlug(slug);

	if (!course) {
		notFound();
	}

	const related = COURSE_DATA.filter((item) => item.slug !== course.slug).slice(
		0,
		3,
	);

	return (
		<main>
			<JsonLd data={buildCourseSchema(course)} />
			<JsonLd
				data={buildBreadcrumb([
					{ name: "Home", path: "/" },
					{ name: "Courses", path: "/courses" },
					{ name: course.title, path: `/courses/${course.slug}` },
				])}
			/>

			<PageHero
				title={course.title}
				subtitle={course.description}
				crumbs={[
					{ name: "Home", path: "/" },
					{ name: "Courses", path: "/courses" },
					{ name: course.title, path: `/courses/${course.slug}` },
				]}
			/>

			<section className="w-full bg-white px-6 md:px-20 py-14 md:py-20">
				<div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-12">
					<div>
						<div className="relative aspect-video w-full mb-8 overflow-hidden rounded-3xl">
							<Image
								src={course.image}
								alt={`${course.title} training at GoAssurify`}
								fill
								className="object-cover"
								priority
							/>
						</div>

						<div className="flex items-center gap-2 mb-6">
							<Badge className="bg-assurify-orange text-white px-4 py-1.5 rounded-full font-medium border-none">
								{course.tag}
							</Badge>
							{course.isComingSoon && (
								<Badge className="bg-gray-200 text-gray-600 px-4 py-1.5 rounded-full font-medium border-none">
									Coming Soon
								</Badge>
							)}
						</div>

						<h2 className="text-3xl font-bold text-[#111] mb-4">
							Overview
						</h2>
						<div className="space-y-4 text-gray-600 leading-relaxed">
							{course.overview.map((paragraph) => (
								<p key={paragraph.slice(0, 24)}>{paragraph}</p>
							))}
						</div>

						<h2 className="text-3xl font-bold text-[#111] mt-12 mb-6">
							What you will learn
						</h2>
						<ul className="space-y-4">
							{course.outcomes.map((outcome) => (
								<li
									key={outcome}
									className="flex items-start gap-3"
								>
									<span className="mt-1 shrink-0 w-6 h-6 rounded-full bg-assurify-orange/10 text-assurify-orange flex items-center justify-center">
										<Check className="w-4 h-4" />
									</span>
									<span className="text-gray-700">
										{outcome}
									</span>
								</li>
							))}
						</ul>
					</div>

					<aside className="lg:sticky lg:top-28 h-fit">
						<div className="rounded-3xl border border-gray-200 bg-[#FFF8F6] p-6 md:p-8 shadow-sm">
							<p className="text-sm font-semibold uppercase tracking-wider text-assurify-orange">
								Course details
							</p>
							<div className="mt-5 flex flex-col gap-5">
								{facts(course).map(
									({ icon: Icon, label, value }) => (
										<div
											key={label}
											className="flex items-start gap-3"
										>
											<span className="shrink-0 w-10 h-10 rounded-xl bg-white text-assurify-orange flex items-center justify-center shadow-sm">
												<Icon className="w-5 h-5" />
											</span>
											<div>
												<p className="text-xs text-gray-500">
													{label}
												</p>
												<p className="font-semibold text-gray-800">
													{value}
												</p>
											</div>
										</div>
									),
								)}
							</div>

							<Button
								disabled={course.isComingSoon}
								className={`mt-8 w-full py-6 text-lg font-semibold rounded-xl transition-all ${
									course.isComingSoon
										? "bg-gray-300 text-gray-500 cursor-not-allowed"
										: "bg-assurify-orange text-white hover:bg-assurify-orange/90 active:scale-95"
								}`}
							>
								{course.isComingSoon ? (
									"Coming Soon"
								) : (
									<Link href={siteConfig.enrollUrl} target="_blank">
										Enroll Now
									</Link>
								)}
							</Button>

							<Link
								href="/contact"
								className="mt-4 block text-center text-sm font-medium text-assurify-orange hover:underline"
							>
								Have questions? Contact us
							</Link>
						</div>
					</aside>
				</div>

				<div className="container mx-auto mt-16 md:mt-24">
					<h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-8">
						Explore other courses
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{related.map((item) => (
							<Link
								key={item.slug}
								href={`/courses/${item.slug}`}
								className="group border border-gray-200 hover:border-assurify-orange rounded-2xl p-5 transition-all"
							>
								<div className="relative aspect-video w-full mb-4 overflow-hidden rounded-xl">
									<Image
										src={item.image}
										alt={`${item.title} training at GoAssurify`}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
								<h3 className="font-bold text-lg text-[#111]">
									{item.title}
								</h3>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
