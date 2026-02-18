import { ReactNode } from "react";

type FAQProps = {
	id: number;
	question: string;
	answer: ReactNode;
	active?: number | undefined;
};

const faqList: FAQProps[] = [
	{
		id: 1,
		question: "How do I apply?",
		answer: (
			<>
				Applying is simple!{" "}
				<a href="/" target="_blank" className="text-blue-700 underline">
					Click here
				</a>{" "}
				to submit your application online. Our team will review your
				submission and get back to you promptly with next steps. Be sure
				to provide accurate contact information so we can guide you
				through the enrollment process.
			</>
		),
	},
	{
		id: 2,
		question: "Do you offer one-on-one tutoring?",
		answer: (
			<>
				Yes! You can request a personal tutor to guide you through your
				learning journey. One-on-one sessions are tailored to your skill
				level and goals, covering Cybersecurity, QA, Web Development, or
				any area of focus. Details and scheduling options are available
				on our registration page.
			</>
		),
	},
	{
		id: 3,
		question: "Will I get a certificate after the program?",
		answer: (
			<>
				Yes. Students who attend all sessions and pass the final
				assessment will receive a certificate of completion, which can
				be shared with employers or added to your professional portfolio
			</>
		),
	},
	{
		id: 4,
		question: "What does the paid program include?",
		answer: (
			<>
				Our paid program offers a comprehensive learning experience,
				including: Hands-on projects and real-world scenarios,
				One-on-one mentorship from industry professionals,
				Certifications upon successful completion, Access to our tech
				community for networking and collaboration, Guidance in QA,
				Cybersecurity, and Web Development best practices and Real world
				job offer sharing/placements
			</>
		),
	},
	{
		id: 5,
		question: "Do you provide consulting or talent outsourcing services?",
		answer: (
			<>
				Yes. In addition to training, GoAssurify offers QA and
				Cybersecurity consulting to help organizations optimize their
				digital products. We also provide talent outsourcing solutions,
				connecting businesses with skilled, industry-ready professionals
				trained through our programs.
			</>
		),
	},
	{
		id: 6,
		question: "Can beginners join the program?",
		answer: (
			<>
				Absolutely. Our programs are designed for learners at every
				stage — from complete beginners to experienced professionals
				looking to specialize in QA, Cybersecurity, or Web Development.
			</>
		),
	},
	{
		id: 7,
		question: "How flexible is the program schedule?",
		answer: (
			<>
				We offer flexible schedules to accommodate different time zones
				and work commitments. Both live sessions and recorded materials
				are available to ensure you never miss critical content.
			</>
		),
	},
];

export default faqList;
