import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { z } from 'zod';
import { withCSRFProtection } from '../../../../lib/csrf';

const docx = require('@nativedocuments/docx-wasm');

// Input validation schema
const documentDataSchema = z.object({
  fullName: z.string().min(1, 'Full name is required').max(100, 'Name is too long').regex(/^[a-zA-Z\s\-'\.]+$/, 'Invalid characters in name'),
  businessName: z.string().min(1, 'Business name is required').max(200, 'Business name is too long').regex(/^[a-zA-Z0-9\s\-'\.&,]+$/, 'Invalid characters in business name'),
  state: z.string().min(1, 'State is required').max(50, 'State name is too long').regex(/^[a-zA-Z\s]+$/, 'Invalid characters in state'),
  email: z.string().email('Please enter a valid email address').min(1).max(255),
  businessAddress: z.string().min(1, 'Business address is required').max(500, 'Address is too long'),
  isSoloOwner: z.string().optional(),
  partnerName: z.string().max(100, 'Partner name is too long').optional(),
});

// Sanitize input data
function sanitizeDocumentData(data: any) {
  return {
    fullName: String(data.fullName || '').trim(),
    businessName: String(data.businessName || '').trim(),
    state: String(data.state || '').trim(),
    email: String(data.email || '').trim(),
    businessAddress: String(data.businessAddress || '').trim(),
    isSoloOwner: String(data.isSoloOwner || '').trim(),
    partnerName: String(data.partnerName || '').trim(),
  };
}

// Validate template file path
function validateTemplatePath(templatePath: string): boolean {
  const normalizedPath = path.resolve(templatePath);
  const allowedDir = path.resolve(process.cwd());
  return normalizedPath.startsWith(allowedDir) && normalizedPath.endsWith('.docx');
}

const TEMPLATE_PATH = path.join(process.cwd(), 'operating agreement.docx');

const ND_DEV_ID = process.env.ND_DEV_ID || '';
const ND_DEV_SECRET = process.env.ND_DEV_SECRET || '';

async function handleDocumentGeneration(req: NextRequest) {
  try {
    // Validate template path
    if (!validateTemplatePath(TEMPLATE_PATH)) {
      console.error('Invalid template path detected');
      return NextResponse.json({ error: 'Template configuration error' }, { status: 500 });
    }

    // Check if template file exists
    if (!fs.existsSync(TEMPLATE_PATH)) {
      console.error('Template file not found');
      return NextResponse.json({ error: 'Template not available' }, { status: 500 });
    }

    const body = await req.json();
    
    // Validate input data
    const validation = documentDataSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input data', details: validation.error.errors },
        { status: 400 }
      );
    }

    // Sanitize the validated data
    const sanitizedData = sanitizeDocumentData(validation.data);

    // Read the .docx template
    const content = fs.readFileSync(TEMPLATE_PATH, 'binary');
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
    
    // Fill all placeholders with sanitized data
    doc.setData({
      fullName: sanitizedData.fullName,
      businessName: sanitizedData.businessName,
      state: sanitizedData.state,
      email: sanitizedData.email,
      businessAddress: sanitizedData.businessAddress,
      isSoloOwner: sanitizedData.isSoloOwner,
      partnerName: sanitizedData.partnerName,
      today: new Date().toLocaleDateString(),
    });

    try {
      doc.render();
    } catch (error) {
      console.error('Template rendering error:', error);
      return NextResponse.json({ error: 'Document generation failed' }, { status: 500 });
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
    console.error('Document generation error:', err);
    return NextResponse.json({ error: 'Failed to generate document' }, { status: 500 });
  }
}

export const POST = withCSRFProtection(handleDocumentGeneration); 
 
 
 
 