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

  // Create the HTML content with Tailwind CSS
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>EIN Setup Guide</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        @page {
          margin: 1in;
          size: letter;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #374151;
        }
        h1 {
          color: #000;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        h2 {
          color: #000;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
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
          margin-bottom: 0.25rem;
        }
        hr {
          margin: 2rem 0;
          border: none;
          border-top: 1px solid #d1d5db;
        }
        a {
          color: #2563eb;
          text-decoration: underline;
        }
        .section-bg {
          background-color: #f7f7f7;
          padding: 2rem 1.5rem;
          margin: 1rem 0;
          border-radius: 0.5rem;
        }
      </style>
    </head>
    <body class="bg-white p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold mb-4 text-black">Your EIN Setup Guide</h1>

        <p class="text-base text-gray-700 mb-4">
          An <strong>EIN (Employer Identification Number)</strong> is your business's federal tax ID — like a Social Security Number, but for your LLC.
        </p>

        <h2 class="text-xl font-semibold mt-6 mb-2 text-black">Why you need one</h2>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Open a business bank account</li>
          <li>File taxes</li>
          <li>Hire employees</li>
          <li>Set up Stripe, PayPal, or Shopify</li>
        </ul>

        <p class="text-base text-gray-700 mb-4">
          It's completely free to get directly from the IRS. No lawyers or third-party fees required.
        </p>

        <hr class="my-8 border-t border-gray-300" />

        <h2 class="text-xl font-semibold mt-6 mb-2 text-black">How to Get Your EIN — Step-by-Step</h2>

        <ol class="list-decimal pl-6 text-gray-700 mb-4">
          <li>Go to the official IRS site: <a class="text-blue-600" href="https://www.irs.gov/ein">irs.gov/ein</a></li>
          <li>Click "Apply Online Now" (desktop only)</li>
          <li>Select "Limited Liability Company (LLC)" as entity</li>
          <li>Enter your info:
            <ul class="list-disc pl-6">
              <li>State of LLC</li>
              <li>Number of members</li>
              <li>Your SSN for verification</li>
            </ul>
          </li>
          <li>Choose "Started a new business" as reason</li>
          <li>Receive EIN instantly and download the PDF letter</li>
        </ol>

        <hr class="my-8 border-t border-gray-300" />

        <h2 class="text-xl font-semibold mt-6 mb-2 text-black">Common Mistakes to Avoid</h2>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Never pay for an EIN — it's always free</li>
          <li>Form your LLC first before applying</li>
          <li>Only use the official IRS site (not third-party services)</li>
        </ul>

        <hr class="my-8 border-t border-gray-300" />

        <h2 class="text-xl font-semibold mt-6 mb-2 text-black">After You Get Your EIN</h2>
        <p class="text-base text-gray-700 mb-4">You're now ready to:</p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Open your business bank account</li>
          <li>Connect Stripe or Shopify</li>
          <li>Start managing taxes and expenses</li>
        </ul>

        <hr class="my-8 border-t border-gray-300" />

        <h2 class="text-xl font-semibold mt-6 mb-2 text-black">Need help with the rest?</h2>
        <p class="text-base text-gray-700 mb-4">
          Start With Genie is a $49 personal LLC assistant that gives you:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>State-specific filing instructions</li>
          <li>A customizable operating agreement</li>
          <li>A clean dashboard that guides you step-by-step</li>
        </ul>

        <p class="text-base text-gray-700">
          👉 <a class="text-blue-600 underline" href="https://www.startwithgenie.com">www.startwithgenie.com</a>
        </p>
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