import {
	IgIcon,
	LocationIcon,
	MailIcon,
	PhoneIcon,
	TikTokIcon,
	WhatsappIcon,
	BrandLogo,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="w-full px-10 md:px-20 pt-10 pb-5 bg-[#FFF8F6]">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
				<div className="">
					<div className="flex items-center gap-2 text-assurify-orange">
						<Image
							src={BrandLogo}
							width={50}
							height={50}
							alt="assurify-logo"
						/>
						<p className="text-2xl font-bold">GoAssurify</p>
					</div>

					<div className="mt-10 flex flex-col gap-4">
						<div className="flex items-center gap-3">
							<PhoneIcon />
							<p>0705 144 1713</p>
						</div>
						<div className="flex items-center gap-3">
							<WhatsappIcon />
							<p>0817 344 8113</p>
						</div>
						<div className="flex items-center gap-3">
							<MailIcon />
							<p>assurifyng@gmail.com</p>
						</div>
						<div className="flex items-center gap-3">
							<LocationIcon />
							<p>Ikeja, Lagos, Nigeria</p>
						</div>
					</div>
				</div>
				<div className="mt-4 md:mt-8 ">
					<p className="font-semibold text-2xl">Help</p>

					<div className="mt-3  flex flex-col gap-4">
						<Link href={"/#contact-us"} className="hover:underline">
							Contact Us
						</Link>
						<Link href={"/#faqs"} className="hover:underline">
							FAQs
						</Link>
					</div>
				</div>
				<div className="mt-4 md:mt-8 ">
					<p className="font-semibold text-2xl">Our Courses</p>

					<div className="mt-3  flex flex-col gap-4">
						<Link href={"/#courses"}>Cyber Security</Link>
						<Link href={"/#courses"}>Software Testing</Link>
						<Link href={"/#courses"}>Web Development</Link>
					</div>
				</div>
				<div className="mt-4 md:mt-8">
					<p className="font-semibold text-2xl">Connect with Us</p>

					<div className="mt-3  flex flex-col gap-4">
						<Link
							href={"https://www.linkedin.com/company/goassurify"}
							target="_blank"
							className="flex items-center gap-3"
						>
							<svg
								fill="#000000"
								width="17px"
								height="17px"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								data-name="Layer 1"
							>
								<path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
							</svg>
							<p>LinkedIn</p>
						</Link>
						<Link
							href={"https://www.instagram.com/goassurify"}
							target="_blank"
							className="flex items-center gap-3"
						>
							<IgIcon />
							<p>Instagram</p>
						</Link>
						<Link
							href={"https://www.tiktok.com/@goassurify"}
							target="_blank"
							className="flex items-center gap-3"
						>
							<TikTokIcon />
							<p>TikTok</p>
						</Link>
					</div>
				</div>
			</div>
			<div className="mt-10 flex flex-col gap-4 items-center">
				<span className="bg-gray-300 h-px w-full"></span>
				<p className="text-sm">© 2026 Assurify. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
