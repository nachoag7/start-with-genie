const { generateLLCFilingInstructions } = require('./lib/pdf-generator.ts');

async function testPDFGeneration() {
  try {
    console.log('Testing PDF generation...');
    
    const testData = {
      fullName: 'Test User',
      businessName: 'Test Business LLC',
      state: 'California',
      email: 'test@example.com'
    };
    
    const url = await generateLLCFilingInstructions(testData);
    console.log('PDF generated successfully:', url);
  } catch (error) {
    console.error('PDF generation failed:', error);
  }
}

testPDFGeneration(); 
 
 
 
 
 
 
 
 
 
 
 
 