import { ReactNode } from "react";

type FAQProps = {
	id: number;
	question: string;
	answer: ReactNode;
	active?: number | undefined;
};

const faqList: FAQProps[] = [
	{
		id: 0,
		question: "What is the Free February Training Campaign?",
		answer: (
			<>
				<p>
					It’s a free 4-week program offering foundational tech
					training with 1-hour weekly sessions led by industry
					experts.
				</p>
			</>
		),
	},
	{
		id: 1,
		question: "How do I apply?",
		answer: (
			<>
				Applying is simple!{" "}
				<a
					href="https://forms.gle/MJ1iNDnCoD9HKVj9A"
					target="_blank"
					className="text-blue-700 underline"
				>
					Click here
				</a>{" "}
				to submit your application online. Our team will review your
				submission and get back to you promptly.
			</>
		),
	},
	{
		id: 2,
		question: "Do you offer one-on-one tutoring?",
		answer: (
			<>
				Yes, you can request a personal tutor to guide you. Details are
				available on our registration page.
			</>
		),
	},
	{
		id: 3,
		question: "Will I get a certificate for the free program?",
		answer: (
			<>Yes, if you attend all sessions and pass the final assessment.</>
		),
	},
	{
		id: 4,
		question: "What does the paid program include?",
		answer: (
			<>
				The 3-month program offers hands-on projects, mentorship,
				certifications, and in-depth learning.
			</>
		),
	},
	{
		id: 5,
		question: "How do I register for any program?",
		answer: (
			<>
				Fill out the form, follow us on Instagram, subscribe to our
				YouTube channel, and use the secret code from our videos.
			</>
		),
	},
];

export default faqList;
