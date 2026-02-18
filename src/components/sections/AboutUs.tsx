"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { AboutUsImage } from "@/assets";

const AboutUs = () => {
	return (
		<div
			id="about-us"
			className="bg-[#FFF8F6] px-8 md:px-20 py-10 md:py-30 flex flex-col md:flex-row gap-10 md:gap-20"
		>
			<motion.div
				className="w-full md:w-1/2"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<Image
					src={AboutUsImage}
					alt="about-image"
					className="rounded-md w-full"
				/>
			</motion.div>
			<motion.div
				className="w-full md:w-1/2"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: 50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<div className="flex justify-between items-center"></div>
				<h1 className="text-3xl md:text-5xl text-assurify-orange font-bold">
					About Us
				</h1>

				<div className="mt-3 md:mt-4">
					<p className="text-sm md:text-base">
						GoAssurify is a leading tech education hub committed to
						transforming ambition into real technical expertise. We
						empower individuals at every stage, from beginners
						entering tech to professionals advancing their skills in
						Cybersecurity, QA, Software Testing, and Web
						Development.
					</p>
					<br />
					<p className="text-sm md:text-base">
						At GoAssurify, we go beyond teaching concepts. We build
						careers and provide expert Cybersecurity and QA
						consulting, as well as talent outsourcing solutions that
						help organizations secure, optimize, and scale
						high-quality digital products. Our high-impact,
						industry-aligned training programs are designed to break
						barriers and prepare learners to thrive in today’s
						digital economy.
					</p>
				</div>
			</motion.div>
		</div>
	);
};

export default AboutUs;
