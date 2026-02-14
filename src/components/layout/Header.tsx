"use client";
import { BrandLogo } from "@/assets";
import { headerLinks } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Header = () => {
	const pathname = usePathname();

	return (
		<header className="w-full fixed z-50 bg-white">
			<div className="flex items-center bg-white px-5 md:px-10 py-3 border-b border-gray-200 justify-between">
				<Link
					href="/"
					className="flex items-center gap-2 hover:opacity-80 active:scale-95 transition-transform"
				>
					<Image
						src={BrandLogo}
						alt="GoAssurify Logo"
						height={40}
						width={40}
						className="object-contain"
					/>
					<span className="text-assurify-orange text-lg font-bold tracking-tight">
						GoAssurify
					</span>
				</Link>

				<div className="hidden md:flex items-center gap-20">
					<nav className="flex items-center gap-8">
						{headerLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className={cn(
									"relative font-semibold text-gray-600 transition-colors duration-300",
									"after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-assurify-orange",
									"after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
									"hover:text-assurify-orange hover:after:scale-x-100",
									pathname === href &&
										"text-assurify-orange after:scale-x-100",
								)}
							>
								{label}
							</Link>
						))}
					</nav>

					<Button className="bg-assurify-orange hover:bg-assurify-orange/90 text-white font-bold px-6 h-10 cursor-pointer shadow-md transition-all active:scale-95">
						Get Started
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
