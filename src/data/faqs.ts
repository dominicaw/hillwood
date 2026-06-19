export interface FAQ {
	id: string;
	question: string;
	answer: string;
}

export const faqs: FAQ[] = [
	{
		id: "contact",
		question: "How do I contact the managing agent?",
		answer: "Add your answer here.",
	},
	{
		id: "levies",
		question: "How and when are levies paid?",
		answer: "Add your answer here.",
	},
	{
		id: "pets",
		question: "How do I apply to keep a pet?",
		answer: "Add your answer here.",
	},
	{
		id: "repairs",
		question: "Who do I contact for maintenance or repairs?",
		answer: "Add your answer here.",
	},
	{
		id: "visitors",
		question: "Where can visitors park?",
		answer: "Add your answer here.",
	},
];
