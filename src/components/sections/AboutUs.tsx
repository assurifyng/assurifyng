"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { AboutUsImage } from "@/assets";

const AboutUs = () => {
	return (
		<div
			id="about-us"
			className="bg-white px-8 md:px-20 py-10 md:py-30 flex flex-col md:flex-row gap-10 md:gap-20"
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

				<div className="">
					<p className="mt-3 md:mt-4 text-[12px] md:text-[14px]">
						GoAssurify has evolved into a premier educational
						powerhouse dedicated to bridging the gap between
						ambition and technical mastery.
						<br />
						<span className="bg-assurify-orange text-white px-1">
							Our mission is to empower individuals at every stage
							of their journey—from tech novices to seasoned
							professionals looking to specialize in Cyber
							Security, Software Testing, and Web Development.
						</span>
					</p>
					<br />
					<p className="text-[12px] md:text-[14px]">
						At GoAssurify, we don’t just teach code; we build
						careers. By breaking down industry barriers, we provide
						high-impact training programs meticulously designed to
						meet the demands of the modern digital landscape.
					</p>
				</div>
			</motion.div>
		</div>
	);
};

export default AboutUs;
