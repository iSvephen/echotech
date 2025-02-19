import puppeteer from 'puppeteer';
import { pb } from '$lib/pocketbase';

export async function GET({ params }) {
  const { id } = params;

  try {
    const contract = await pb.collection('contracts').getOne(id, { expand: ['clientId', 'prepared_by'] });
    const ServiceOverviewAndRequirements = await pb.collection('policies').getOne('w0z90zj72w5cule');

    // Define categories, services, and allServices for testing
    const services = [
      { serviceId: 'srv1', price: 100 },
      { serviceId: 'srv2', price: 200 }
    ];




    const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Contract ${contract.number}</title>
    <style>
      :root {
      --forest: #224335;
      --pine: #4c896b;
      --sky: #829ba9;
      }

      @font-face {
      font-family: "ABCRepro-Regular";
      src: url("ABCRepro-Regular.otf");
      }

      @font-face {
      font-family: "ABCRepro-Medium";
      src: url("ABCRepro-Medium.otf");
      }

      body {
      font-family: "ABCRepro-Regular";
      line-height: 1.6;
      margin: 20px;
      font-size: 12px;
      }
      h1,
      h2,
      h3,
      h4 {
      margin-top: 20px;
      margin-bottom: 10px;
      color: var(--forest);
      }
      p {
      margin-bottom: 10px;
      }
      b {
      font-family: "ABCRepro-Medium";
      }
      ul {
      margin: 10px 0 10px 20px;
      }
      address {
      font-style: normal;
      line-height: 1.5;
      }
      .section {
      margin-bottom: 40px;
      }
      .page-break {
      page-break-after: always;
      }
    </style>
    </head>
    <body>
    <div class="section">
      <h1>Contract ${contract.number}</h1>
      <p><strong>Client:</strong> ${contract.expand.clientId.name}</p>
      <p><strong>Date:</strong> ${new Date(contract.date).toLocaleDateString()}</p>
      <p><strong>Terms:</strong> ${contract.agreement_term}</p>
      <p><strong>Prepared By:</strong> ${contract.expand.prepared_by?.name}</p>
      <p><strong>Services:</strong></p>
      <ul>
      ${services.map(service => `<li>Service ID: ${service.serviceId}, Price: $${service.price}</li>`).join('')}
      </ul>
      <p><strong>Remark:</strong> ${contract.remark}</p>
    </div>
    <div class="page-break"></div>
    <div class="section">
      <h2>Services</h2>
    </div>
    <!-- Include the policies and other details here -->
    <div class="section">
      <h2>Terms & Conditions</h2>
      <!-- Add the terms and conditions content here -->
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
        'Content-Disposition': `attachment; filename="contract-${contract.number}.pdf"`
      }
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return new Response('Error generating PDF', { status: 500 });
  }
}
