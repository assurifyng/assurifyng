import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "GoAssurify | Transition Into Tech in 3 Months",
	description:
		"Master the skills you need to start a successful global tech career in just 3 months.",
	openGraph: {
		title: "GoAssurify",
		description: "Your global tech journey begins here.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${poppins.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
