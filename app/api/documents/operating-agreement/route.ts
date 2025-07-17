import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

const docx = require('@nativedocuments/docx-wasm');

const TEMPLATE_PATH = path.join(process.cwd(), 'operating agreement.docx');

const ND_DEV_ID = process.env.ND_DEV_ID || '';
const ND_DEV_SECRET = process.env.ND_DEV_SECRET || '';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Read the .docx template
    const content = fs.readFileSync(TEMPLATE_PATH, 'binary');
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
    // Fill all placeholders
    doc.setData({
      fullName: data.fullName || '',
      businessName: data.businessName || '',
      state: data.state || '',
      email: data.email || '',
      businessAddress: data.businessAddress || '',
      isSoloOwner: data.isSoloOwner || '',
      partnerName: data.partnerName || '',
      today: new Date().toLocaleDateString(),
    });
    try {
      doc.render();
    } catch (error) {
      return NextResponse.json({ error: 'Template rendering error', details: error }, { status: 500 });
    }
    const buf = doc.getZip().generate({ type: 'nodebuffer' });
    // Initialize docx-wasm
    await docx.init({
      ND_DEV_ID,
      ND_DEV_SECRET,
      ENVIRONMENT: 'NODE',
      LAZY_INIT: true,
    });
    // Convert .docx buffer to PDF
    const pdfBuffer = await docx.convertHelper(new Uint8Array(buf), 'exportPDF');
    return new NextResponse(Buffer.from(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Operating_Agreement.pdf"',
      },
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to generate PDF', details: err }, { status: 500 });
  }
} 
 
 
 
 