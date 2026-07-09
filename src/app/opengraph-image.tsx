import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/siteConfig";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					background:
						"linear-gradient(135deg, #FFF8F6 0%, #ffece4 55%, #ffd9c9 100%)",
					padding: "72px 80px",
					fontFamily: "sans-serif",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: 20 }}>
					<div
						style={{
							width: 64,
							height: 64,
							borderRadius: 16,
							background: "#cc4a20",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: "white",
							fontSize: 38,
							fontWeight: 800,
						}}
					>
						G
					</div>
					<div
						style={{ fontSize: 40, fontWeight: 800, color: "#cc4a20" }}
					>
						GoAssurify
					</div>
				</div>

				<div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
					<div
						style={{
							fontSize: 74,
							fontWeight: 800,
							color: "#1f1210",
							lineHeight: 1.05,
							maxWidth: 940,
						}}
					>
						Start Your Tech Career Here
					</div>
					<div
						style={{
							fontSize: 32,
							color: "#5b463f",
							maxWidth: 900,
							lineHeight: 1.35,
						}}
					>
						Hands-on Cybersecurity, Software QA & Web Development
						training with mentorship, certification and internship
						placement.
					</div>
				</div>

				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 28,
						fontSize: 26,
						color: "#cc4a20",
						fontWeight: 600,
					}}
				>
					<div>Cybersecurity</div>
					<div style={{ color: "#e0b6a6" }}>•</div>
					<div>QA / Testing</div>
					<div style={{ color: "#e0b6a6" }}>•</div>
					<div>Web Development</div>
					<div style={{ color: "#e0b6a6" }}>•</div>
					<div>Consulting</div>
				</div>
			</div>
		),
		{ ...size },
	);
}
