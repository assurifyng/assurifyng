"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactAddress, ContactMail, ContactPhone } from "@/assets";
import { Button } from "../ui/button";
import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "sonner";

const schema = z.object({
	fullName: z.string().min(1, { message: "Full name is required" }),
	email: z.email({ message: "Invalid email address" }),
	subjectOfMail: z.string().min(1, { message: "Subject is required" }),
	message: z.string().min(1, { message: "Message is required" }),
});

type ContactFormData = z.infer<typeof schema>;

export default function ContactUs() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		const result = await sendEmail(data);
		setIsSubmitting(false);

		if (result.success) {
			toast.success("Email sent successfully!");
			reset();
		} else {
			toast.error("Failed to send email. Please try again.");
			console.error(result.error);
		}
	};

	return (
		<div
			id="contact-us"
			className="bg-white h-auto w-full px-8 md:px-14 py-8 md:py-14 text-assurify-orange relative"
		>
			<div className="w-full flex flex-col md:flex-row gap-2">
				<div className="w-full md:w-1/2">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="h-auto bg-white rounded-xl md:px-14 md:py-10"
					>
						<h1 className="text-[40px] md:text-[50px] text-assurify-orange font-semibold">
							Contact Us
						</h1>

						<div className="mt-5">
							<input
								{...register("fullName")}
								type="text"
								placeholder="Full name"
								className="text-sm rounded-3xl w-full h-10 border border-assurify-orange px-5 bg-[#F9F9F9]"
							/>
							{errors.fullName && (
								<p className="text-red-500 mt-1 text-sm">
									{errors.fullName.message}
								</p>
							)}
						</div>

						<div className="mt-8">
							<input
								{...register("email")}
								type="email"
								placeholder="Email address"
								className="text-sm rounded-3xl w-full h-10 border border-assurify-orange px-5 bg-[#F9F9F9]"
							/>
							{errors.email && (
								<p className="text-red-500 mt-1 text-sm">
									{errors.email.message}
								</p>
							)}
						</div>

						<div className="mt-8">
							<input
								{...register("subjectOfMail")}
								type="text"
								placeholder="Subject"
								className="text-sm rounded-3xl w-full h-10 border border-assurify-orange px-5 bg-[#F9F9F9]"
							/>
							{errors.subjectOfMail && (
								<p className="text-red-500 mt-1 text-sm">
									{errors.subjectOfMail.message}
								</p>
							)}
						</div>

						<div className="mt-8">
							<textarea
								{...register("message")}
								placeholder="Write a brief description of your request"
								className="text-sm rounded-3xl w-full h-60 border border-assurify-orange px-5 py-3 bg-[#F9F9F9] resize-none"
							></textarea>
							{errors.message && (
								<p className="text-red-500 mt-1 text-sm">
									{errors.message.message}
								</p>
							)}
						</div>

						<div className="mt-5 md:mt-10">
							<Button
								disabled={isSubmitting}
								className="w-full py-6 text-lg font-semibold cursor-pointer rounded-3xl transition-all bg-assurify-orange text-white hover:bg-assurify-orange/90 active:scale-95 disabled:opacity-50"
								type="submit"
							>
								{isSubmitting ? "Sending..." : "Send"}
							</Button>
						</div>
					</form>
				</div>

				<div className="w-full md:w-1/2 flex md:justify-around mt-10 md:mt-28 text-assurify-orange">
					<div className="flex flex-col gap-5">
						<div className="flex items-center gap-3">
							<ContactMail />
							<p className="text-sm md:text-lg">
								assurifyng@gmail.com
							</p>
						</div>
						<div className="flex items-center gap-3">
							<ContactPhone />
							<p className="text-sm md:text-lg">
								0705 144 1713, 0810 165 4620
							</p>
						</div>
						<div className="flex items-center gap-3">
							<ContactAddress />
							<p className="text-sm md:text-lg">
								Yaba, Lagos, Nigeria.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
