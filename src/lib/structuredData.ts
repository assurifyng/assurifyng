import { COURSE_DATA } from "@/data";
import { sameAsLinks, siteConfig } from "@/lib/siteConfig";

const orgId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

const organization = {
	"@type": ["Organization", "EducationalOrganization"],
	"@id": orgId,
	name: siteConfig.name,
	legalName: siteConfig.legalName,
	url: siteConfig.url,
	logo: {
		"@type": "ImageObject",
		url: `${siteConfig.url}/logo.png`,
		width: 243,
		height: 256,
	},
	image: `${siteConfig.url}/opengraph-image`,
	description: siteConfig.description,
	foundingDate: siteConfig.foundingYear,
	email: siteConfig.email,
	telephone: siteConfig.phone,
	sameAs: sameAsLinks,
	address: {
		"@type": "PostalAddress",
		addressLocality: siteConfig.address.locality,
		addressRegion: siteConfig.address.region,
		addressCountry: siteConfig.address.country,
	},
	areaServed: {
		"@type": "Country",
		name: siteConfig.address.countryName,
	},
	contactPoint: [
		{
			"@type": "ContactPoint",
			telephone: siteConfig.phone,
			contactType: "admissions",
			email: siteConfig.email,
			areaServed: siteConfig.address.country,
			availableLanguage: ["en"],
		},
	],
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "4.9",
		bestRating: "5",
		ratingCount: "500",
	},
};

const website = {
	"@type": "WebSite",
	"@id": websiteId,
	url: siteConfig.url,
	name: siteConfig.name,
	description: siteConfig.description,
	publisher: { "@id": orgId },
	inLanguage: "en",
};

const courses = COURSE_DATA.filter((course) => !course.isComingSoon).map(
	(course) => ({
		"@type": "Course",
		name: course.title,
		description: course.description,
		url: `${siteConfig.url}/#courses`,
		provider: { "@id": orgId },
		inLanguage: "en",
		hasCourseInstance: {
			"@type": "CourseInstance",
			courseMode: ["online", "onsite"],
			courseWorkload: "P8W",
			location: {
				"@type": "Place",
				name: `${siteConfig.name}, ${siteConfig.address.locality}`,
				address: {
					"@type": "PostalAddress",
					addressLocality: siteConfig.address.locality,
					addressRegion: siteConfig.address.region,
					addressCountry: siteConfig.address.country,
				},
			},
		},
	}),
);

const faqEntries: { question: string; answer: string }[] = [
	{
		question: "How do I apply?",
		answer: "Applying is simple. Submit your application online through our registration form and our team will review your submission and get back to you promptly with next steps.",
	},
	{
		question: "Do you offer one-on-one tutoring?",
		answer: "Yes. You can request a personal tutor to guide you through your learning journey. One-on-one sessions are tailored to your skill level and goals, covering Cybersecurity, QA, Web Development or any area of focus.",
	},
	{
		question: "Will I get a certificate after the program?",
		answer: "Yes. Students who attend all sessions and pass the final assessment receive a certificate of completion that can be shared with employers or added to your professional portfolio.",
	},
	{
		question: "What does the paid program include?",
		answer: "The paid program includes hands-on projects and real-world scenarios, one-on-one mentorship from industry professionals, certification on completion, access to our tech community, guidance in QA, Cybersecurity and Web Development best practices, and real-world job offer sharing and placements.",
	},
	{
		question: "Do you provide consulting or talent outsourcing services?",
		answer: "Yes. In addition to training, GoAssurify offers QA and Cybersecurity consulting to help organizations optimize their digital products, and talent outsourcing to connect businesses with skilled, industry-ready professionals.",
	},
	{
		question: "Can beginners join the program?",
		answer: "Absolutely. Our programs are designed for learners at every stage, from complete beginners to experienced professionals looking to specialize in QA, Cybersecurity or Web Development.",
	},
	{
		question: "How flexible is the program schedule?",
		answer: "We offer flexible schedules to accommodate different time zones and work commitments. Both live sessions and recorded materials are available so you never miss critical content.",
	},
];

const faqPage = {
	"@type": "FAQPage",
	"@id": `${siteConfig.url}/#faq`,
	mainEntity: faqEntries.map((entry) => ({
		"@type": "Question",
		name: entry.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: entry.answer,
		},
	})),
};

export const structuredData = {
	"@context": "https://schema.org",
	"@graph": [organization, website, ...courses, faqPage],
};
