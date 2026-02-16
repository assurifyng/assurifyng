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
					<p className="mt-3 md:mt-4 text-[12px] md:text-[14px] text-customDarkGrey">
						Brightflare Technologies has evolved into a dynamic
						educational platform dedicated to transforming lives
						through technology.
						<br />
						<span className="bg-assurify-orange text-white">
							Our flagship initiative, Brightflare Tech Academy,
							is committed to empowering individuals at all skill
							levels—whether they are stepping into tech for the
							first time or seeking advanced expertise.
						</span>
					</p>
					<br />
					<p className="text-[12px] md:text-[14px] text-customDarkGrey">
						At Brightflare Tech Academy, we believe in breaking down
						barriers to entry in the tech industry. We offer a
						diverse range of programs designed to meet different
						learning needs
					</p>
				</div>
			</motion.div>
		</div>
	);
};

export default AboutUs;
