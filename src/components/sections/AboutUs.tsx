"use client";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { AboutUsImage } from "@/assets";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			delay: i * 0.15,
			ease: [0.22, 1, 0.36, 1],
		},
	}),
};

const slideLeft: Variants = {
	hidden: { opacity: 0, x: -60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
	},
};

const slideRight: Variants = {
	hidden: { opacity: 0, x: 60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
	},
};

const cards = [
	{
		title: "Our Mission",
		body: "To equip aspiring tech professionals with practical, industry-ready skills that launch and advance careers in the digital economy.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				className="w-6 h-6"
				stroke="currentColor"
				strokeWidth={1.8}
			>
				<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
			</svg>
		),
		gradient: "from-orange-500 to-amber-400",
		bg: "from-orange-50 to-amber-50",
	},
	{
		title: "Our Vision",
		body: "To become a leading global hub for developing skilled, innovative, and career-ready tech talent.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				className="w-6 h-6"
				stroke="currentColor"
				strokeWidth={1.8}
			>
				<circle cx="12" cy="12" r="3" />
				<path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" />
			</svg>
		),
		gradient: "from-rose-500 to-orange-400",
		bg: "from-rose-50 to-orange-50",
	},
];

const AboutUs = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<section
			id="about-us"
			ref={ref}
			className="relative overflow-hidden bg-[#FFF8F6] px-6 md:px-20 py-20 md:py-32"
		>
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orange-100 opacity-50 blur-3xl" />
				<div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-amber-100 opacity-40 blur-3xl" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-rose-50 opacity-30 blur-3xl" />
			</div>

			<div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-20 items-center max-w-7xl mx-auto">
				<motion.div
					className="w-full md:w-5/12 shrink-0"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={slideLeft}
				>
					<div className="relative">
						<div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-orange-300 to-amber-200 opacity-40 blur-sm -z-10" />
						<div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-orange-200 -z-10" />

						<Image
							src={AboutUsImage}
							alt="About GoAssurify"
							className="rounded-2xl shadow-2xl w-full object-cover"
						/>

						<motion.div
							className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-orange-100"
							initial={{ opacity: 0, scale: 0.8, y: 10 }}
							animate={
								isInView ? { opacity: 1, scale: 1, y: 0 } : {}
							}
							transition={{
								delay: 0.5,
								duration: 0.5,
								ease: "backOut",
							}}
						>
							<span className="text-3xl font-extrabold text-assurify-orange leading-none">
								6+
							</span>
							<span className="text-xs text-gray-500 leading-tight font-medium">
								Years of
								<br />
								Excellence
							</span>
						</motion.div>
					</div>
				</motion.div>

				<motion.div
					className="w-full md:w-7/12"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={slideRight}
				>
					<motion.p
						className="text-xs font-bold tracking-[0.25em] text-assurify-orange uppercase mb-3"
						custom={0}
						variants={fadeUp}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
					>
						Who We Are
					</motion.p>

					<motion.h2
						className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
						custom={1}
						variants={fadeUp}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
					>
						Turning Ambition Into{" "}
						<span className="relative inline-block">
							<span className="relative z-10 text-assurify-orange">
								Real Expertise
							</span>
							<span className="absolute bottom-1 left-0 w-full h-3 bg-orange-100 rounded-full z-0" />
						</span>
					</motion.h2>

					<motion.div
						className="space-y-4 mb-10"
						custom={2}
						variants={fadeUp}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
					>
						<p className="text-sm md:text-base text-gray-600 leading-relaxed">
							GoAssurify is a leading tech education hub committed
							to transforming ambition into real technical
							expertise. We empower individuals at every stage —
							from beginners entering tech to professionals
							advancing their skills.
						</p>
						<p className="text-sm md:text-base text-gray-600 leading-relaxed">
							At GoAssurify, we go beyond teaching concepts. We
							build careers and provide expert Cybersecurity and
							QA consulting, helping organizations secure and
							scale high-quality digital products.
						</p>
					</motion.div>

					<div className="flex flex-col gap-4">
						{cards.map((card, i) => (
							<motion.div
								key={card.title}
								custom={3 + i}
								variants={fadeUp}
								initial="hidden"
								animate={isInView ? "visible" : "hidden"}
								whileHover={{
									y: -3,
									transition: { duration: 0.2 },
								}}
								className={`relative overflow-hidden bg-linear-to-r ${card.bg} rounded-2xl p-5 border border-white/80 shadow-sm group cursor-default`}
							>
								<div
									className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-linear-to-b ${card.gradient}`}
								/>

								<div className="flex items-start gap-4 pl-3">
									<div
										className={`shrink-0 w-10 h-10 rounded-xl bg-linear-to-br ${card.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}
									>
										{card.icon}
									</div>

									<div>
										<h3 className="font-bold text-gray-900 text-base mb-1">
											{card.title}
										</h3>
										<p className="text-xs md:text-sm text-gray-600 leading-relaxed">
											{card.body}
										</p>
									</div>
								</div>

								<div
									className={`pointer-events-none absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-linear-to-br ${card.gradient} opacity-10`}
								/>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutUs;
