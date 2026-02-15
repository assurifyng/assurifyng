import {
	FacebookIcon,
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
					<Image
						src={BrandLogo}
						width={100}
						height={100}
						alt="assurify-logo"
					/>

					<div className="mt-3 flex flex-col gap-4">
						<div className="flex items-center gap-3">
							<PhoneIcon />
							<p>+234 916 987 0900</p>
						</div>
						<div className="flex items-center gap-3">
							<WhatsappIcon />
							<p>+234 916 987 0900</p>
						</div>
						<div className="flex items-center gap-3">
							<MailIcon />
							<p>info@sartorialstore.ng</p>
						</div>
						<div className="flex items-center gap-3">
							<LocationIcon />
							<p>Lagos, Nigeria</p>
						</div>
					</div>
				</div>
				<div className="mt-4 md:mt-8 ">
					<p className="font-semibold text-2xl">Help</p>

					<div className="mt-3  flex flex-col gap-4">
						<Link href={"/contact-us"}>Contact Us</Link>
						<Link href={"/shipping-details"}>Shipping details</Link>
						<Link href={"/refund-and-returns"}>
							Refund & Returns
						</Link>
					</div>
				</div>
				<div className="mt-4 md:mt-8 ">
					<p className="font-semibold text-2xl">Our Company</p>

					<div className="mt-3  flex flex-col gap-4">
						<Link href={"/"}>About Us</Link>
						<Link href={"/faqs"}>FAQs</Link>
						<Link href={"/terms-and-condition"}>
							Terms & Conditions
						</Link>
					</div>
				</div>
				<div className="mt-4 md:mt-8">
					<p className="font-semibold text-2xl">Connect with Us</p>

					<div className="mt-3  flex flex-col gap-4">
						<Link href={"/"} className="flex items-center gap-3">
							<FacebookIcon />
							<p>Facebook</p>
						</Link>
						<Link href={"/"} className="flex items-center gap-3">
							<IgIcon />
							<p>Instagram</p>
						</Link>
						<Link href={"/"} className="flex items-center gap-3">
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
