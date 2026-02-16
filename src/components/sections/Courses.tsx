"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { COURSE_DATA } from "@/data";

const Courses = () => {
	return (
		<section
			id="courses"
			className="w-full bg-[#FFF8F6] px-2 md:px-20 py-10 md:py-20 overflow-hidden"
		>
			<div className="container mx-auto px-6 md:px-0">
				<div className="space-y-2 mb-5 md:mb-8">
					<p className="text-assurify-orange text-sm md:text-base font-semibold tracking-wider">
						TECH COURSES
					</p>
					<h2 className="text-3xl md:text-4xl font-bold text-[#333]">
						Our Popular Career Courses
					</h2>
				</div>

				<Carousel
					opts={{ align: "start", loop: true }}
					className="w-full relative"
				>
					<CarouselContent className="-ml-4 pt-0 md:py-10 md:px-5">
						{COURSE_DATA.map((course, index) => (
							<CarouselItem
								key={index}
								className="basis-full md:basis-1/2 lg:basis-1/3"
							>
								<div className="bg-white border border-gray-300 hover:border-assurify-orange cursor-pointer rounded-[32px] p-5  hover:shadow-md transition-shadow h-full flex flex-col">
									<div className="relative aspect-video w-full mb-6 overflow-hidden rounded-2xl">
										<Image
											src={course.image}
											alt={course.title}
											fill
											className="object-cover"
										/>
									</div>

									<div className="flex gap-2 mb-4">
										<Badge className="bg-assurify-orange hover:bg-assurify-orange text-white px-4 py-1.5 rounded-full font-medium border-none whitespace-nowrap">
											{course.tag}
										</Badge>
									</div>

									<div className="space-y-3 grow">
										<h3 className="text-2xl font-bold text-[#111] leading-tight">
											{course.title}
										</h3>
										<p className="text-gray-600 leading-relaxed">
											{course.description}
										</p>
									</div>

									<div className="mt-4 md:mt-8">
										<Button
											disabled={course.isComingSoon}
											className={`w-full py-6 text-lg font-semibold cursor-pointer rounded-xl transition-all ${
												course.isComingSoon
													? "bg-gray-300 text-gray-500 cursor-not-allowed"
													: "bg-assurify-orange text-white hover:bg-assurify-orange/90 active:scale-95"
											}`}
										>
											{course.isComingSoon
												? "Coming Soon"
												: "Enroll Now"}
										</Button>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					<div className="flex">
						<CarouselPrevious className="-left-6 md:-left-12 bg-white text-black border-gray-200 shadow-md h-10 w-10 cursor-pointer" />
						<CarouselNext className="-right-6 md:-right-12 bg-white text-black border-gray-200 shadow-md h-10 w-10 cursor-pointer" />
					</div>
				</Carousel>
			</div>
		</section>
	);
};

export default Courses;
