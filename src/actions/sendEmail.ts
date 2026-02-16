"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
	fullName: string;
	email: string;
	subjectOfMail: string;
	message: string;
}) {
	try {
		const { data, error } = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: ["assurifyng@gmail.com"],
			replyTo: formData.email,
			subject: `New Contact Form: ${formData.subjectOfMail}`,
			html: `
        <h2>New Message from ${formData.fullName}</h2>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subjectOfMail}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
		});

		if (error) {
			return { success: false, error };
		}

		return { success: true, data };
	} catch (error) {
		return { success: false, error };
	}
}
