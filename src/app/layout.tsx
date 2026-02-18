import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "GoAssurify | Start your Career Here",
	description:
		"Gain real-world, in-demand skills and step confidently into the global tech industry.",
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
				<Toaster position="top-right" richColors />
			</body>
		</html>
	);
}
