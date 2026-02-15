"use client";
import { Hero1, Hero2 } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

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
		hidden: { opacity: 0, x: -30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	return (
		<section className="relative w-full flex items-center bg-[#FFF8F6] overflow-hidden px-6 md:px-20 pt-30 pb-10">
			<div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="text-center space-y-3 lg:text-left md:mt-20"
				>
					<motion.h1
						variants={itemVariants}
						className="text-4xl md:text-6xl font-extrabold text-[#333] leading-tight"
					>
						Transition Into Tech <br />
						In Just{" "}
						<span className="text-assurify-orange">3 Months</span>
					</motion.h1>

					<motion.p
						variants={itemVariants}
						className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 border-l-4 border-assurify-orange pl-4"
					>
						Your global tech journey begins here. Master the skills
						you need to start a successful career.
					</motion.p>

					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start"
					>
						<Button
							size="lg"
							className="bg-assurify-orange hover:bg-[#a33d36] text-white px-8 py-6 text-lg rounded-md transition-transform hover:scale-105 active:scale-95 cursor-pointer"
						>
							Enroll Now
						</Button>
					</motion.div>
				</motion.div>

				<div className="relative flex justify-start items-start h-100 md:h-150">
					<motion.div
						initial={{ opacity: 0, scale: 0.8, y: 20 }}
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
						className="absolute top-0 right-2 md:right-10 w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-white shadow-2xl overflow-hidden z-20"
					>
						<Image
							src={Hero2}
							alt="Tech Student"
							width={400}
							height={400}
							className="w-full h-full object-cover"
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
						className="absolute bottom-5 left-5 md:left-10 w-56 h-72 md:w-72 md:h-96 rounded-[100px] border-8 border-white shadow-2xl overflow-hidden z-10"
					>
						<Image
							src={Hero1}
							alt="Learning Tech"
							width={400}
							height={500}
							className="w-full h-full object-cover"
						/>
					</motion.div>

					<motion.div
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.1, 0.2, 0.1],
						}}
						transition={{ duration: 8, repeat: Infinity }}
						className="absolute w-100 h-100 bg-[#C54B43]/5 rounded-full blur-3xl -z-10"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
