import puppeteer from 'puppeteer';
import { pb } from '$lib/pocketbase';

export async function GET({ params }) {
  const { id } = params;

  try {
    const contract = await pb.collection('contracts').getOne(id, { 
      expand: ['clientId', 'prepared_by'] 
    });

    // Parse services JSON string to object
    const services = JSON.parse(contract.services);

    // Fetch all categories
    const categoriesResponse = await pb.collection('categories').getList(1, 50, {
      sort: 'name'
    });
    const categories = categoriesResponse.items;

    // Fetch all services for reference
    const servicesResponse = await pb.collection('services').getList(1, 50, {
      expand: 'categoryId'
    });
    const allServices = servicesResponse.items;

    // Generate services HTML grouped by category
    const servicesHtml = categories.map(category => {
      const categoryServices = services.filter(s => 
        allServices.find(as => as.id === s.serviceId)?.expand?.categoryId?.id === category.id
      );

      if (categoryServices.length === 0) return '';

      return `
        <div class="category-section">
          <h3>${category.name}</h3>
          <table class="services-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Unit</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              ${categoryServices.map(service => {
                const serviceDetails = allServices.find(s => s.id === service.serviceId);
                return `
                  <tr>
                    <td>${serviceDetails?.name || 'N/A'}</td>
                    <td>${serviceDetails?.unit || 'N/A'}</td>
                    <td>$${service.price.toFixed(2)}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    }).join('');

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

            .services-table {
        width: 100%;
        border-collapse: collapse;
        margin: 10px 0;
      }
      
      .services-table th,
      .services-table td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }
      
      .services-table th {
        background-color: var(--forest);
        color: white;
      }
      
      .category-section {
        margin-bottom: 20px;
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
      <p><strong>Services:</strong> ${contract.services}</p>
      <p><strong>Remark:</strong> ${contract.remark}</p>
    </div>
    <div class="page-break"></div>
    <div class="section">
      <h2>Services</h2>
      ${servicesHtml}
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
