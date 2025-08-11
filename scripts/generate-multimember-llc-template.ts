import PDFDocument from "pdfkit";
import fs from "fs";

const outputPath = "public/templates/multi-member-llc-operating-agreement-example.pdf";
fs.mkdirSync("public/templates", { recursive: true });

const doc = new PDFDocument({ margins: { top: 54, bottom: 54, left: 54, right: 54 }});
doc.pipe(fs.createWriteStream(outputPath));

// Title
doc.fontSize(18).text("Multi-Member LLC Operating Agreement", { align: "center" });
doc.moveDown(1);

// Intro
doc.fontSize(12).text(
  "This Operating Agreement (the \"Agreement\") is made on [Date] by and between the following Members of [LLC Name], a limited liability company formed under the laws of the State of [State].",
  { align: "left" }
);
doc.moveDown(1);
doc.text("Member 1: ________________________________   Percentage: ____%");
doc.text("Member 2: ________________________________   Percentage: ____%");
doc.text("Member 3: ________________________________   Percentage: ____%");
doc.moveDown(1);

// Article I
doc.fontSize(14).text("Article I — Formation", { underline: true });
doc.fontSize(12).text(
  "The Members agree that the LLC was formed by filing the Articles of Organization with the State of [State] on [Date]. The principal office shall be at [Address] or any other place as determined by the Members."
);
doc.moveDown(1);

// Article II
doc.fontSize(14).text("Article II — Name and Purpose", { underline: true });
doc.fontSize(12).text(
  "The name of the LLC is [LLC Name]. The purpose of the LLC is to engage in any lawful business activity for which a limited liability company may be organized in the State of [State]."
);
doc.moveDown(1);

// Article III
doc.fontSize(14).text("Article III — Capital Contributions", { underline: true });
doc.fontSize(12).text(
  "Each Member has contributed the property or services set forth in the LLC records. Additional contributions may be made as agreed in writing by all Members."
);
doc.moveDown(1);

// Article IV
doc.fontSize(14).text("Article IV — Profits, Losses, and Distributions", { underline: true });
doc.fontSize(12).text(
  "Profits and losses shall be allocated among the Members in proportion to their respective Percentage Interests unless otherwise agreed in writing. Distributions shall be made as determined by the Members."
);
doc.moveDown(1);

// Article V
doc.fontSize(14).text("Article V — Management", { underline: true });
doc.fontSize(12).text(
  "The LLC shall be [Member-managed / Manager-managed]. If Manager-managed, the Manager shall have authority for day-to-day operations as specified by the Members."
);
doc.moveDown(1);

// Article VI
doc.fontSize(14).text("Article VI — Voting", { underline: true });
doc.fontSize(12).text(
  "Unless otherwise required by law or this Agreement, decisions shall be made by Members holding more than fifty percent (50%) of the Percentage Interests."
);
doc.moveDown(1);

// Article VII
doc.fontSize(14).text("Article VII — Admission, Withdrawal, and Transfers", { underline: true });
doc.fontSize(12).text(
  "No Member may transfer their interest without written consent of the other Members. Procedures for the admission of new Members, voluntary withdrawal, and buyout shall be as agreed by all Members in writing."
);
doc.moveDown(1);

// Article VIII
doc.fontSize(14).text("Article VIII — Records and Banking", { underline: true });
doc.fontSize(12).text(
  "Proper books and records shall be maintained at the principal office. All LLC funds shall be deposited in a separate bank account and not commingled with personal funds."
);
doc.moveDown(1);

// Article IX
doc.fontSize(14).text("Article IX — Dissolution", { underline: true });
doc.fontSize(12).text(
  "The LLC may be dissolved upon the occurrence of events stated in this Agreement or upon unanimous written consent of the Members. Upon dissolution, assets shall be distributed according to law and this Agreement."
);
doc.moveDown(1);

// Article X
doc.fontSize(14).text("Article X — Miscellaneous", { underline: true });
doc.fontSize(12).text(
  "This Agreement shall be governed by the laws of the State of [State]. Amendments require written consent of all Members."
);
doc.moveDown(2);

// Signatures
doc.fontSize(14).text("Signatures", { underline: true });
doc.moveDown(0.5);
doc.fontSize(12).text("Member 1: ________________________________   Date: __________");
doc.text("Member 2: ________________________________   Date: __________");
doc.text("Member 3: ________________________________   Date: __________");

doc.end();
console.log(`PDF template created at ${outputPath}`); 