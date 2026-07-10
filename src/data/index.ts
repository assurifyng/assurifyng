import {
	CyberSecurity,
	DevOps,
	HR,
	Outsourcing,
	QAEngineering,
	WebDevelopment,
} from "@/assets";
import type { StaticImageData } from "next/image";

export const headerLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About Us" },
	{ href: "/courses", label: "Courses" },
	{ href: "/contact", label: "Contact Us" },
];

export type Course = {
	slug: string;
	title: string;
	description: string;
	image: StaticImageData;
	tag: string;
	isComingSoon: boolean;
	level: string;
	duration: string;
	delivery: string;
	overview: string[];
	outcomes: string[];
	metaTitle: string;
	metaDescription: string;
};

export const COURSE_DATA: Course[] = [
	{
		slug: "cybersecurity",
		title: "Cyber Security",
		description:
			"Master the art of protecting systems and networks from digital attacks with practical labs.",
		image: CyberSecurity,
		tag: "Security",
		isComingSoon: false,
		level: "Beginner to Intermediate",
		duration: "8 weeks",
		delivery: "Live online & onsite (Lagos)",
		overview: [
			"Our Cyber Security training takes you from the fundamentals of information security to the hands-on skills employers actually look for. You will work through practical labs that mirror real-world attack and defence scenarios rather than theory alone.",
			"Guided by experienced security professionals, you will learn how to identify vulnerabilities, respond to threats, and help organisations protect their systems, networks and data across the modern digital landscape.",
		],
		outcomes: [
			"Understand core security principles, threats and attack surfaces",
			"Perform vulnerability assessments and basic penetration testing",
			"Secure networks, systems and web applications",
			"Respond to and investigate security incidents",
			"Build a portfolio of hands-on security labs and projects",
		],
		metaTitle: "Cyber Security Training in Nigeria",
		metaDescription:
			"Hands-on Cyber Security training in Lagos, Nigeria. Learn to protect systems and networks through practical labs, mentorship and real-world projects with GoAssurify.",
	},
	{
		slug: "software-qa-testing",
		title: "Software QA / Testing",
		description:
			"Learn automated and manual testing to ensure software quality and reliability in production.",
		image: QAEngineering,
		tag: "Testing",
		isComingSoon: false,
		level: "Beginner to Intermediate",
		duration: "8 weeks",
		delivery: "Live online & onsite (Lagos)",
		overview: [
			"The Software QA / Testing program equips you with both manual and automated testing skills so you can guarantee software quality from development through to production.",
			"You will learn to design test cases, write bug reports that developers love, and build automated test suites using industry-standard tools, preparing you for one of the most in-demand roles in tech.",
		],
		outcomes: [
			"Design effective manual test cases and test plans",
			"Write clear, reproducible bug reports",
			"Build automated tests with modern testing frameworks",
			"Understand the software development and testing life cycle",
			"Test web and API layers for reliability and performance",
		],
		metaTitle: "Software QA & Testing Course in Nigeria",
		metaDescription:
			"Become a QA engineer with GoAssurify. Learn manual and automated software testing through hands-on projects, mentorship and certification in Lagos, Nigeria.",
	},
	{
		slug: "qa-cybersecurity-consulting",
		title: "QA & Cyber Security Consulting",
		description:
			"Ensure robust digital ecosystems through comprehensive manual and automated testing paired with proactive threat assessment and security audits.",
		image: Outsourcing,
		tag: "Consulting",
		isComingSoon: false,
		level: "For businesses & teams",
		duration: "Flexible engagements",
		delivery: "Remote & onsite",
		overview: [
			"GoAssurify partners with organisations to strengthen the quality and security of their digital products. Our consulting combines comprehensive manual and automated testing with proactive threat assessment and security audits.",
			"Whether you are shipping a new product or hardening an existing one, our specialists help you ship faster with confidence, reduce risk and meet quality and compliance standards.",
		],
		outcomes: [
			"End-to-end QA strategy and test automation setup",
			"Security audits, threat assessments and vulnerability testing",
			"Continuous quality and security monitoring",
			"Compliance and best-practice guidance",
			"Dedicated specialists embedded with your team",
		],
		metaTitle: "QA & Cyber Security Consulting for Businesses",
		metaDescription:
			"GoAssurify provides QA and Cyber Security consulting to help organisations secure and scale high-quality digital products through testing, audits and threat assessment.",
	},
	{
		slug: "talent-outsourcing",
		title: "Talent Outsourcing",
		description:
			"Bridge the skill gap by connecting your projects with vetted, high-performing technical talent tailored to your specific industry needs and company culture.",
		image: HR,
		tag: "Outsourcing",
		isComingSoon: false,
		level: "For businesses & teams",
		duration: "Flexible engagements",
		delivery: "Remote & onsite",
		overview: [
			"Bridge your skill gap with vetted, high-performing technical talent. GoAssurify connects your projects with professionals trained and assessed to meet your specific industry needs and company culture.",
			"From QA engineers to security specialists and developers, we help you scale your team quickly with people who are ready to deliver from day one.",
		],
		outcomes: [
			"Access to pre-vetted, industry-ready technical talent",
			"QA engineers, security specialists and developers",
			"Talent matched to your stack, industry and culture",
			"Flexible short-term and long-term engagements",
			"Faster hiring with reduced onboarding time",
		],
		metaTitle: "Tech Talent Outsourcing in Nigeria",
		metaDescription:
			"Hire vetted, high-performing tech talent with GoAssurify. We connect your projects with QA engineers, security specialists and developers matched to your needs.",
	},
	{
		slug: "web-development",
		title: "Web Development",
		description:
			"A beginner-friendly training tailored to help you build your first website with expert guidance.",
		image: WebDevelopment,
		tag: "Introduction",
		isComingSoon: true,
		level: "Beginner",
		duration: "Coming soon",
		delivery: "Live online & onsite (Lagos)",
		overview: [
			"Our beginner-friendly Web Development training is designed to help you build your first real websites and web applications with expert guidance every step of the way.",
			"You will learn modern front-end fundamentals and build a portfolio of projects that showcase your skills to future employers and clients.",
		],
		outcomes: [
			"Build responsive websites with HTML, CSS and JavaScript",
			"Understand modern front-end development workflows",
			"Deploy live projects to the web",
			"Create a portfolio that stands out to employers",
			"Prepare for a junior developer or freelance career",
		],
		metaTitle: "Web Development Training in Nigeria",
		metaDescription:
			"Learn web development from scratch with GoAssurify. A beginner-friendly, project-based program to help you build your first website with expert mentorship.",
	},
	{
		slug: "devops-engineering",
		title: "DevOps Engineering",
		description:
			"Bridge the gap between development and operations with cloud and CI/CD mastery.",
		image: DevOps,
		tag: "Infrastructure",
		isComingSoon: true,
		level: "Intermediate",
		duration: "Coming soon",
		delivery: "Live online & onsite (Lagos)",
		overview: [
			"The DevOps Engineering program bridges the gap between development and operations, teaching you to automate, deploy and scale modern software systems in the cloud.",
			"You will gain hands-on experience with CI/CD pipelines, containers and cloud infrastructure, skills that are in high demand across the global tech industry.",
		],
		outcomes: [
			"Build and manage CI/CD pipelines",
			"Work with containers and orchestration",
			"Deploy and scale applications on the cloud",
			"Automate infrastructure and deployments",
			"Collaborate effectively across dev and ops teams",
		],
		metaTitle: "DevOps Engineering Training in Nigeria",
		metaDescription:
			"Master DevOps with GoAssurify. Learn CI/CD, cloud infrastructure and automation through hands-on, project-based training built for the global tech industry.",
	},
];

export function getCourseBySlug(slug: string): Course | undefined {
	return COURSE_DATA.find((course) => course.slug === slug);
}

export const courseSlugs = COURSE_DATA.map((course) => course.slug);
