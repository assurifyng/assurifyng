import {
	CyberSecurity,
	DevOps,
	HR,
	Outsourcing,
	QAEngineering,
	WebDevelopment,
} from "@/assets";

export const headerLinks = [
	{ href: "/", label: "Home" },
	{ href: "/#about-us", label: "About Us" },
	{ href: "/#courses", label: "Courses" },
	{ href: "/#contact-us", label: "Contact Us" },
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
		title: "Software QA / Testing",
		description:
			"Learn automated and manual testing to ensure software quality and reliability in production.",
		image: QAEngineering,
		tag: "Testing",
		isComingSoon: false,
	},
	{
		title: "QA & Cyber Security Consulting",
		description:
			"Ensure robust digital ecosystems through comprehensive manual and automated testing paired with proactive threat assessment and security audits.",
		image: Outsourcing,
		tag: "Consulting",
		isComingSoon: false,
	},
	{
		title: "Talent Outsourcing",
		description:
			"Bridge the skill gap by connecting your projects with vetted, high-performing technical talent tailored to your specific industry needs and company culture.",
		image: HR,
		tag: "Outsourcing",
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
