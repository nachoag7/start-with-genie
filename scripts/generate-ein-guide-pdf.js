const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateEINGuidePDF() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport for consistent rendering
  await page.setViewport({ width: 1200, height: 800 });

  // Create the HTML content with premium design
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Get Your Free EIN Guide</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
      <style>
        @page {
          margin: 1in;
          size: letter;
        }
        body {
          font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #374151;
        }
        h1 {
          color: #000;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        h2 {
          color: #000;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
        }
        .icon {
          width: 20px;
          height: 20px;
          color: #6B7280;
          margin-right: 0.5rem;
        }
        p {
          margin-bottom: 1rem;
          color: #374151;
        }
        ul, ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
        }
        .li-icon {
          color: #6B7280;
          margin-right: 6px;
          margin-top: 2px;
          flex-shrink: 0;
        }
        a {
          color: #2563eb;
          text-decoration: underline;
        }
        .checklist-bg {
          background: #F8F9FA;
          padding: 1rem;
          border-radius: 8px;
          margin: 1rem 0;
        }
        .cta-bg {
          background: #F1F5F9;
          padding: 1.5rem;
          border-radius: 8px;
          margin-top: 1rem;
        }
        .cta-button {
          background: #000;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          display: inline-block;
          text-decoration: none;
          margin-top: 1rem;
        }
      </style>
    </head>
    <body class="bg-white p-8">
      <div class="max-w-4xl mx-auto" style="font-family: Inter, sans-serif; line-height: 1.6; max-width: 700px; margin: auto; padding: 2rem;">
        
        <h1 style="font-size: 2rem; font-weight: 600;">Get Your Free EIN in Minutes</h1>
        <p>Your official guide to getting your business ID the right way — fast, safe, and free.<br />
        Made by <strong>Start With Genie</strong>, your $49 personal LLC assistant.</p>

        <h2 style="margin-top: 2rem; display: flex; align-items: center;">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2H2a1 1 0 0 0-1 1v4c0 5 3 8 6 10a22 22 0 0 0 5 3c0-1.5-1-3-1-3H2"/>
            <path d="M22 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Z"/>
          </svg>
          What's an EIN?
        </h2>
        <p>An EIN (Employer Identification Number) is like a Social Security Number, but for your business.</p>
        <ul>
          <li>
            <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
            Open your business bank account
          </li>
          <li>
            <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
            Use Stripe, Shopify, or PayPal
          </li>
          <li>
            <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
            Pay taxes and hire employees
          </li>
        </ul>
        <p><strong>It's free</strong> if you apply directly with the IRS.</p>

        <h2 style="margin-top: 2rem; display: flex; align-items: center;">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          How to Get Your EIN — Step by Step
        </h2>
        <p>This is the fastest, safest way to get your EIN — directly from the IRS.</p>
        <ol>
          <li>Go to <a href="https://irs.gov/ein" target="_blank">irs.gov/ein</a></li>
          <li>Click "Apply Online Now" (desktop only)</li>
          <li>Select "Limited Liability Company (LLC)"</li>
          <li>Enter your state, number of members, and SSN for identity check</li>
          <li>Pick "Started a new business"</li>
          <li>Get your EIN immediately and download the PDF</li>
        </ol>
        <p><strong>IRS hours:</strong> Monday–Friday, 7AM–10PM EST</p>

        <h2 style="margin-top: 2rem; display: flex; align-items: center;">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Z"/>
            <polyline points="9,12 15,12 19,12"/>
            <polyline points="9,16 15,16 19,16"/>
            <polyline points="9,20 15,20 19,20"/>
            <line x1="15" y1="2" x2="15" y2="22"/>
          </svg>
          EIN Checklist — Before You Start
        </h2>
        <div class="checklist-bg">
          <ul>
            <li>
              <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Your LLC is already formed
            </li>
            <li>
              <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              You're using a desktop (not a phone)
            </li>
            <li>
              <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              You have your SSN ready
            </li>
            <li>
              <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              You can finish in one sitting (no save option)
            </li>
            <li>
              <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              You're applying during IRS open hours
            </li>
          </ul>
        </div>

        <h2 style="margin-top: 2rem; display: flex; align-items: center;">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Common Mistakes to Avoid
        </h2>
        <ul>
          <li>
            <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
            Don't pay — EINs are always free
          </li>
          <li>
            <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
            Don't apply before your LLC is approved
          </li>
          <li>
            <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
            Only use <a href="https://irs.gov/ein" target="_blank">irs.gov/ein</a>
          </li>
        </ul>

        <h2 style="margin-top: 2rem; display: flex; align-items: center;">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          After You Get Your EIN
        </h2>
        <ul>
          <li>
            <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
            Open your business bank account
          </li>
          <li>
            <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
            Connect Stripe or Shopify
          </li>
          <li>
            <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
            File taxes, apply for business credit
          </li>
        </ul>
        <p>
          <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline;">
            <line x1="6" y1="3" x2="6" y2="15"/>
            <circle cx="6" cy="15" r="3"/>
            <line x1="18" y1="3" x2="18" y2="15"/>
            <circle cx="18" cy="15" r="3"/>
            <line x1="6" y1="9" x2="18" y2="9"/>
          </svg>
          <strong>Keep your EIN letter safe — you'll use it often.</strong>
        </p>

        <h2 style="margin-top: 2rem; display: flex; align-items: center;">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 4V2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2"/>
            <path d="M10 4V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2"/>
            <path d="M4 7h16"/>
            <path d="M9 14l6 6"/>
            <path d="M15 14l-6 6"/>
            <path d="M3 7v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/>
          </svg>
          Want Help With the Rest?
        </h2>
        <div class="cta-bg">
          <p><strong>Start With Genie</strong> is your $49 personal LLC assistant. We give you everything you need to launch your business the right way:</p>
          <ul>
            <li>
              <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
              State-specific filing instructions
            </li>
            <li>
              <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
              Customizable operating agreement
            </li>
            <li>
              <svg class="li-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
              Clean dashboard that walks you through everything
            </li>
          </ul>
          <p style="margin-top: 1rem;">
            <a href="https://www.startwithgenie.com" target="_blank" class="cta-button">Start My LLC</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Set the HTML content
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  // Ensure the public/pdfs directory exists
  const pdfsDir = path.join(__dirname, '../public/pdfs');
  if (!fs.existsSync(pdfsDir)) {
    fs.mkdirSync(pdfsDir, { recursive: true });
  }

  // Generate PDF
  const pdfPath = path.join(pdfsDir, 'ein-guide.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'Letter',
    margin: {
      top: '1in',
      right: '1in',
      bottom: '1in',
      left: '1in'
    },
    printBackground: true
  });

  console.log(`✅ EIN Guide PDF generated successfully at: ${pdfPath}`);
  console.log(`📄 PDF will be available at: https://www.startwithgenie.com/pdfs/ein-guide.pdf`);

  await browser.close();
}

// Run the script
generateEINGuidePDF().catch(console.error); 