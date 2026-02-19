"use client";
import { Avatar, Hero1, Hero2 } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";

const Hero = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	return (
		<section className="relative w-full min-h-screen flex items-center bg-[#FFF8F6] overflow-hidden px-6 md:px-20 pt-30 pb-10">
			<div className="absolute top-20 left-10 w-32 h-32 bg-assurify-orange/10 rounded-full blur-3xl" />
			<div className="absolute bottom-10 right-10 w-64 h-64 bg-assurify-orange/5 rounded-full blur-3xl" />

			<div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 relative z-10">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="text-center md:mt-12 space-y-6 lg:text-left"
				>
					<motion.div
						variants={itemVariants}
						className="hidden md:inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-orange-100"
					>
						<span className="flex -space-x-2">
							{[1, 2, 3].map((i) => (
								<div key={i} className="w-6 h-6 rounded-full">
									<Image
										src={Avatar}
										alt="User"
										className="w-full h-full object-cover rounded-full"
									/>
								</div>
							))}
						</span>
						<p className="text-xs md:text-sm font-medium text-gray-700">
							Joined by 1,200+ students this month
						</p>
					</motion.div>

					<motion.h1
						variants={itemVariants}
						className="text-5xl md:text-7xl font-extrabold text-[#333] leading-[1.1]"
					>
						Start your Career{" "}
						<span className="text-assurify-orange relative">
							Here
							<svg
								className="absolute -bottom-2 left-0 w-full"
								viewBox="0 0 100 10"
								preserveAspectRatio="none"
							>
								<path
									d="M0 5 Q 50 10 100 5"
									stroke="#C54B43"
									strokeWidth="4"
									fill="transparent"
								/>
							</svg>
						</span>
					</motion.h1>

					<motion.p
						variants={itemVariants}
						className=" text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 border-l-4 border-assurify-orange pl-6 py-1"
					>
						Gain real-world, in-demand skills and step confidently
						into the global tech industry.
						{/* We will equip you with
						in-demand tech skills through practical, project-based
						training built to prepare you for real opportunities in
						the global digital economy. */}
					</motion.p>

					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row items-center gap-6 pt-4 justify-center lg:justify-start"
					>
						<Button
							size="lg"
							className="cursor-pointer bg-assurify-orange hover:bg-[#a33d36] text-white px-10 py-7 text-lg rounded-md shadow-lg shadow-orange-900/20 transition-all hover:scale-105 active:scale-95"
						>
							Enroll Now
						</Button>

						<div className="flex flex-col items-center gap-2 md:gap-1 md:items-start">
							<div className="flex text-yellow-500">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										size={18}
										fill="currentColor"
									/>
								))}
							</div>
							<p className="text-sm text-gray-500 font-semibold">
								4.9/5 Student Rating
							</p>
						</div>
					</motion.div>
				</motion.div>

				<div className="relative flex justify-center items-center h-125 md:h-150">
					<motion.div
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 1 }}
						className="absolute top-1/4 -left-4 z-30 bg-white p-4 rounded-xl shadow-xl hidden md:block"
					>
						<p className="text-xs font-bold text-gray-400">
							NEXT COHORT
						</p>
						<p className="text-sm font-bold text-gray-800">
							2nd March, 2026
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{
							opacity: 1,
							scale: 1,
							y: [0, -15, 0],
						}}
						transition={{
							opacity: { duration: 1 },
							scale: { duration: 1 },
							y: {
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							},
						}}
						className="absolute top-0 right-0 w-56 h-56 md:w-72 md:h-72 rounded-full border-8 border-white shadow-2xl overflow-hidden z-20"
					>
						<Image
							src={Hero2}
							alt="Tech Student"
							fill
							className="object-cover"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{
							opacity: 1,
							x: 0,
							y: [0, 15, 0],
						}}
						transition={{
							opacity: { duration: 1, delay: 0.5 },
							x: { duration: 1, delay: 0.5 },
							y: {
								duration: 5,
								repeat: Infinity,
								ease: "easeInOut",
							},
						}}
						className="absolute bottom-10 left-0 w-64 h-80 md:w-80 md:h-105 rounded-[60px] md:rounded-[100px] border-8 border-white shadow-2xl overflow-hidden z-10"
					>
						<Image
							src={Hero1}
							alt="Learning Tech"
							fill
							className="object-cover"
						/>
					</motion.div>

					<motion.div
						animate={{
							scale: [1, 1.3, 1],
							opacity: [0.1, 0.3, 0.1],
						}}
						transition={{ duration: 8, repeat: Infinity }}
						className="absolute w-full h-full bg-assurify-orange/20 rounded-full blur-[100px] -z-10"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
