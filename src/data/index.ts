import { CyberSecurity, DevOps, QAEngineering, WebDevelopment } from "@/assets";

export const headerLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about-us", label: "About Us" },
	{ href: "/#courses", label: "Courses" },
	{ href: "/#contact", label: "Contact Us" },
];

export const COURSE_DATA = [
	{
		title: "Cyber Security",
		description:
			"Master the art of protecting systems and networks from digital attacks with practical labs.",
		image: CyberSecurity,
		tag: "Security",
		isComingSoon: false,
	},
	{
		title: "QA Engineering",
		description:
			"Learn automated and manual testing to ensure software quality and reliability in production.",
		image: QAEngineering,
		tag: "Testing",
		isComingSoon: false,
	},
	{
		title: "Web Development",
		description:
			"A beginner-friendly training tailored to help you build your first website with expert guidance.",
		image: WebDevelopment,
		tag: "Introduction",
		isComingSoon: true,
	},
	{
		title: "DevOps Engineering",
		description:
			"Bridge the gap between development and operations with cloud and CI/CD mastery.",
		image: DevOps,
		tag: "Infrastructure",
		isComingSoon: true,
	},
];
