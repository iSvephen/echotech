// src/routes/api/generate-pdf/+server.js
import puppeteer from 'puppeteer';

export async function GET() {
  const htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Main Content PDF</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
        .content { padding: 20px; }
        .page-break { page-break-after: always; }
      </style>
    </head>
    <body>
      <div class="content">
        <h1>Page 2</h1>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
        <p>This content is intended to be page 2 of the final PDF.</p>
      </div>
      <div class="page-break"></div>
      <div class="content">
        <h1>Page 3</h1>
        <p>More content on page 3…</p>
      </div>
    </body>
  </html>
  `;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    // Note: These header/footer templates apply on every page of this PDF.
    headerTemplate: `
      <div style="font-size:10px; width:100%; text-align:center; border-bottom:1px solid #ddd; padding-bottom:5px;">
        Main Content Header
      </div>
    `,
    footerTemplate: `
      <div style="font-size:10px; width:100%; text-align:center; border-top:1px solid #ddd; padding-top:5px;">
        Page <span class="pageNumber"></span> of <span class="totalPages"></span>
      </div>
    `,
    margin: {
      top: '80px',
      bottom: '80px',
      right: '20px',
      left: '20px'
    }
  });
  await browser.close();

  return new Response(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="main-content.pdf"'
    }
  });
}
