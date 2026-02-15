import faqList from "@/data/FAQList";
import Accordion from "../common/Accordion";

export default function FaQs() {
	return (
		<>
			<div
				id="faqs"
				className="w-full bg-[#FFF8F6] px-8 md:px-20 py-10 md:py-20 text-black"
			>
				<h1 className="text-2xl md:text-4xl font-semibold">FAQs</h1>
				<p className="mt-5 text-sm md:text-lg">
					Find answers to your most pressing questions about our
					training services and processes.
				</p>
				<div className="mt-10 flex flex-col gap-4">
					{faqList.map((item, i) => (
						<Accordion
							key={i}
							question={item.question}
							answer={item.answer}
							data={item}
						/>
					))}
				</div>
			</div>
		</>
	);
}
