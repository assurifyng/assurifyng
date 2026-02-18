"use client";
import { motion, Variants } from "framer-motion";
import { BookOpen, Laptop, Users } from "lucide-react";

const WhyUs = () => {
	const features = [
		{
			title: "Indepth Training & Quality Mentorship.",
			description:
				"With experienced tutors who will not only teach you practically, but would also mentor you through.",
			icon: <BookOpen className="text-[#D14D4D] w-6 h-6" />,
			bgColor: "bg-[#FDEEEE]",
		},
		{
			title: "Internship placement.",
			description:
				"At the end of the training you would be placed into an internship program where you get to use your skills in a product team.",
			icon: <Laptop className="text-[#4D56D1] w-6 h-6" />,
			bgColor: "bg-[#EEEEFD]",
		},
		{
			title: "A Supportive Tech Community Built for Growth.",
			description:
				"Join a collaborative network of cybersecurity professionals, QA engineers, and web developers committed to sharing knowledge, solving real-world challenges, and helping one another grow in today’s fast-evolving tech industry.",
			icon: <Users className="text-[#D19D4D] w-6 h-6" />,
			bgColor: "bg-[#FDF7EE]",
		},
	];

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants: Variants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	return (
		<section className="w-full bg-white px-8 md:px-20 py-10 md:py-20 text-black overflow-hidden">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="space-y-4 mb-12 text-center"
			>
				<h1 className="text-sm md:text-base font-bold text-assurify-orange uppercase tracking-wider">
					WHY CHOOSE US?
				</h1>
				<p className="text-2xl md:text-5xl font-bold text-[#333333]">
					Get Started With Us Today
				</p>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
			>
				{features.map((feature, index) => (
					<motion.div
						key={index}
						variants={cardVariants}
						whileHover={{
							y: -10,
							scale: 1.02,
							boxShadow: "0px 20px 40px rgba(0,0,0,0.05)",
						}}
						whileTap={{ scale: 0.98 }}
						className="bg-[#FFF8F6] p-8 rounded-2xl border border-assurify-orange/30 flex flex-col items-start gap-4 cursor-pointer"
					>
						<motion.div
							whileHover={{ rotate: 15, scale: 1.1 }}
							className={`p-4 rounded-full ${feature.bgColor} flex items-center justify-center`}
						>
							{feature.icon}
						</motion.div>

						<div className="space-y-3">
							<h3 className="text-xl font-bold leading-tight text-[#333333]">
								{feature.title}
							</h3>
							<p className="text-gray-500 text-sm md:text-base leading-relaxed">
								{feature.description}
							</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default WhyUs;
