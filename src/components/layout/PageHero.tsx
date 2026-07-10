import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = {
	name: string;
	path: string;
};

type PageHeroProps = {
	title: string;
	subtitle?: string;
	crumbs: Crumb[];
};

export default function PageHero({ title, subtitle, crumbs }: PageHeroProps) {
	return (
		<section className="relative overflow-hidden bg-[#FFF8F6] px-6 md:px-20 pt-32 md:pt-40 pb-12 md:pb-16">
			<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orange-100 opacity-50 blur-3xl" />
			<div className="relative z-10 container mx-auto">
				<nav aria-label="Breadcrumb" className="mb-4">
					<ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
						{crumbs.map((crumb, index) => {
							const isLast = index === crumbs.length - 1;
							return (
								<li
									key={crumb.path}
									className="flex items-center gap-1"
								>
									{isLast ? (
										<span className="text-assurify-orange font-medium">
											{crumb.name}
										</span>
									) : (
										<>
											<Link
												href={crumb.path}
												className="hover:text-assurify-orange transition-colors"
											>
												{crumb.name}
											</Link>
											<ChevronRight className="w-4 h-4 text-gray-400" />
										</>
									)}
								</li>
							);
						})}
					</ol>
				</nav>

				<h1 className="text-4xl md:text-6xl font-extrabold text-[#333] leading-tight">
					{title}
				</h1>

				{subtitle && (
					<p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl border-l-4 border-assurify-orange pl-6">
						{subtitle}
					</p>
				)}
			</div>
		</section>
	);
}
