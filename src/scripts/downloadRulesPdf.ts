import { jsPDF } from "jspdf";
import { ruleSections, rulesMeta } from "../data/rules";

const MARGIN = 20;
const LINE_HEIGHT = 5;

export function downloadRulesPdf() {
	const doc = new jsPDF();
	const pageWidth = doc.internal.pageSize.getWidth();
	const pageHeight = doc.internal.pageSize.getHeight();
	const maxWidth = pageWidth - MARGIN * 2;
	let y = MARGIN;

	function ensureSpace(height: number) {
		if (y + height > pageHeight - MARGIN) {
			doc.addPage();
			y = MARGIN;
		}
	}

	function addLines(
		text: string,
		fontSize: number,
		options: { bold?: boolean; indent?: number; spacing?: number } = {},
	) {
		const indent = options.indent ?? 0;
		const spacing = options.spacing ?? 2;

		doc.setFontSize(fontSize);
		doc.setFont("helvetica", options.bold ? "bold" : "normal");

		const lines = doc.splitTextToSize(text, maxWidth - indent) as string[];

		for (const line of lines) {
			ensureSpace(LINE_HEIGHT);
			doc.text(line, MARGIN + indent, y);
			y += LINE_HEIGHT;
		}

		y += spacing;
	}

	addLines(rulesMeta.title, 18, { bold: true, spacing: 4 });
	addLines(rulesMeta.subtitle, 11, { spacing: 2 });
	addLines(`Issued ${rulesMeta.issued}`, 10, { spacing: 8 });

	for (const section of ruleSections) {
		ensureSpace(LINE_HEIGHT * 2);
		addLines(`${section.number}. ${section.title}`, 12, { bold: true, spacing: 2 });

		for (const [index, item] of section.items.entries()) {
			addLines(`${index + 1}. ${item}`, 10, { indent: 6, spacing: 2 });
		}

		y += 4;
	}

	doc.save("hillwood-conduct-rules.pdf");
}
