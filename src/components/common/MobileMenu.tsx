"use client";
import { BrandLogo } from "@/assets";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { headerLinks } from "@/data";
import { cn } from "@/lib/utils";
import { TextAlignEnd, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

const MobileMenu = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="md:hidden">
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<button
						className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
						aria-label="Open menu"
					>
						<TextAlignEnd className="h-6 w-6 text-assurify-orange" />
					</button>
				</SheetTrigger>
				<SheetContent
					side="right"
					className="w-[70%] p-0 bg-white border-r border-gray-200"
					showCloseButton={false}
				>
					<div className="px-6 py-5 border-b border-gray-200 bg-sartorial-offWhite">
						<SheetTitle className="flex items-center justify-between">
							<Link
								href="/"
								onClick={() => setIsOpen(false)}
								className="hover:opacity-80 transition-opacity flex items-center gap-2"
							>
								<Image
									src={BrandLogo}
									alt="Brand Logo"
									width={40}
									height={40}
								/>
								<span className="text-assurify-orange text-lg font-bold tracking-tight">
									GoAssurify
								</span>
							</Link>
							<button
								onClick={() => setIsOpen(false)}
								className="p-2 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
								aria-label="Close menu"
							>
								<X className="h-5 w-5 text-sartorial-green" />
							</button>
						</SheetTitle>
					</div>

					<nav className="py-6 px-4">
						<div className="flex flex-col space-y-1">
							{headerLinks.map(({ href, label }) => (
								<Link
									key={href}
									href={href}
									onClick={() => setIsOpen(false)}
									className={cn(
										"group relative px-4 py-3 rounded-lg font-semibold text-base",
										"transition-all duration-200",
										"hover:bg-assurify-orange/5",
										pathname === href
											? "bg-assurify-orange/10 text-assurify-orange"
											: "text-gray-700 hover:text-assurify-orange",
									)}
								>
									<span className="relative z-10">
										{label}
									</span>

									{pathname === href && (
										<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-assurify-orange rounded-r-full" />
									)}
								</Link>
							))}
						</div>
					</nav>
					<div className="px-4">
						<Button className="bg-assurify-orange hover:bg-assurify-orange/90 text-white font-bold px-6 h-10 md:h-12 cursor-pointer shadow-md transition-all active:scale-95">
							Get Started
						</Button>
					</div>

					<div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-sartorial-offWhite/50">
						<p className="text-xs text-gray-600 text-center">
							© 2026 Assurify
						</p>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileMenu;
