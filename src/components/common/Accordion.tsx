"use client";
import { ChevronRight } from "lucide-react";
import { ReactNode, useState } from "react";

type Data = {
	id: number;
	question: string;
	answer: ReactNode;
	active?: number;
};

type AccordionProps = {
	question: string;
	answer: ReactNode;
	data: Data;
};

const Accordion = ({ question, answer, data }: AccordionProps) => {
	const [isOpen, setIsOpen] = useState(data.active === 1);

	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div
			className={`bg-white w-full px-5 rounded-md py-3 border duration-500 group ${
				isOpen ? "is-active" : ""
			}`}
		>
			<div className="mt-2 flex flex-col gap-4">
				<div className="flex items-center gap-3">
					<p
						className={`w-full text-sm md:text-base duration-300 ${isOpen ? "font-bold" : ""}`}
					>
						{question}
					</p>
					<div
						className={`text-lg transition-transform duration-300 cursor-pointer ${
							isOpen ? "rotate-270" : "rotate-90"
						}`}
						onClick={handleToggle}
					>
						<ChevronRight />
					</div>
				</div>
				<div
					className={`overflow-hidden transition-all duration-300 text-sm md:text-base ${
						isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="pb-4">{answer}</div>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
