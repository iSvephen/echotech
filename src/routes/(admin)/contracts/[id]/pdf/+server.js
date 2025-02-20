import puppeteer from 'puppeteer-core';
import chrome from '@sparticuz/chromium';
import { pb } from '$lib/pocketbase';

export async function GET({ params }) {
	const { id } = params;

	try {
		const contract = await pb
			.collection('contracts')
			.getOne(id, { expand: ['clientId,prepared_by'] });
      const services = await pb.collection('services').getFullList({ sort: '-created' });
      const categories = await pb.collection('service_category').getFullList({ sort: '-created' });
      const company_info = await pb.collection('company_info').getOne('42bdrgj33m496a7');
      const units = await pb.collection('units').getFullList({ sort: '-created' });
		const ServiceOverviewAndRequirements = await pb
			.collection('policies')
			.getOne('r637mn910m9k975');
		const StatementOfWork = await pb.collection('policies').getOne('w0z90zj72w5cule');
		const TermsAndConditionsOfService = await pb.collection('policies').getOne('a036c1mqmthn8w8');

		// Helper function to format price
    function formatPrice(price) {
      if (typeof price === 'number') {
        return `$${price.toFixed(2)}`; // Adds $ and ensures 2 decimal places
      }
      if (typeof price === 'string' && !isNaN(price)) {
        return `$${parseFloat(price).toFixed(2)}`;
      }
      return price;
    }

		// Generate pricing summary HTML
		let pricingSummaryHtml = '';
if (contract.services) {
    const contractServices = typeof contract.services === 'string' 
        ? JSON.parse(contract.services) 
        : contract.services;

    // Group services by category
    const servicesByCategory = {};
    contractServices.forEach(service => {
        if (!servicesByCategory[service.categoryId]) {
            servicesByCategory[service.categoryId] = [];
        }
        servicesByCategory[service.categoryId].push(service);
    });

    pricingSummaryHtml = `
        <div class="section">
            <h2>5.0 Pricing Summary</h2>
            ${Object.entries(servicesByCategory).map(([categoryId, services]) => {
                const category = categories.find(c => c.id === categoryId);
                return `
                    <h3>${category?.name || 'Other Services'}</h3>
      <ul>
      ${services.map(service => `
      <li>
      <div style="font-size:10px; color: black; width:100%; text-align:left; padding:0px; display: flex; justify-content: space-between; align-items: center;">

        <p>${service.service}</p>
        <p>${formatPrice(service.price)} ${service.unit}</p>
        
        </div>
        </li>
        `).join('')}
        </ul>
      </div>
                `;
            }).join('')}
        </div>
    `;
}


		const htmlContent = `
<!DOCTYPE html>
  <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ECHO Service Contract and T&C T1 V1 15.4.24</title>
    <style>
      :root {
      --forest: #224335;
      --pine: #4c896b;
      --sky: #829ba9;
      }

      @font-face {
      font-family: "ABCRepro-Regular";
      src: url("https://echo.stephen.vip/css/ABCRepro-Regular.otf");
      }

      @font-face {
      font-family: "ABCRepro-Medium";
      src: url("https://echo.stephen.vip/css/ABCRepro-Medium.otf");
      }

      /* 2,480 x 3,508 pixels */
      body {
      font-family: "ABCRepro-Regular";
      line-height: 1.6;
      /* width: 2480px;
      height: 3508px; */
      margin: 20px;
      /* color: #333; */
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
      a {
      color: black;
        text-decoration: none;
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

      #rectangle{
        width:20px;
        height:20px;
        border: 1px solid black;
    }
      .section {
      margin-bottom: 5px;
      }
      .page-break {
      page-break-after: always;
      }
    </style>
    </head>
    <body>
    <!-- Cover / Header Section -->
    <div class="section">
      <h1 style="font-size: 50px">Echo Service Contract</br>
      Terms &amp; Conditions</h1></br></br>

      <div style="font-size:10px; color: black; width:100%; text-align:left; padding:0px; display: flex; align-items: center;">
        <p style="padding-right: 150px"><strong>Contract Date</strong></br>${new Date(contract.date).toLocaleDateString()}</p>
        <p><strong>Contract No</strong></br>${contract.number}</p>
      </div>

      </br></br>

      <hr style="width:30%;text-align:left;margin-left:0">
      <p>Service Request for </br><strong> ${contract.expand.clientId.name}</strong></p>

      </br></br>
      <hr style="width:30%;text-align:left;margin-left:0">
      <p>Prepared by </br><strong> ${contract.expand.prepared_by?.name || ''}</strong></p>



      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div style="font-size:10px; color: black; width:100%; text-align:left; padding:0px; display: flex; justify-content: space-between; align-items: center;">
        <b>
        This is a confidential document <br> presenting Echo e-waste recycling <br> quotation and agreement.
        </b>

        <b>
        ${company_info?.address_auckland || ''}<br />
        ${company_info?.address_wellington || ''}<br />
        ${company_info?.address_christchurch || ''}
        </b>

        <b>
        0800 E WASTE <br>
        <a href="mailto:info@echotech.co.nz">info@echotech.co.nz</a><br />
        <a href="http://echotech.co.nz">echotech.co.nz</a>
        </b>
      </div>
    </div>
    <div class="page-break"></div>

    <!-- 1.0 Introduction -->
    <div class="section">
      <h2>1.0 Introduction</h2>
      <p>
      <b>${contract.expand.clientId.name}</b> (NZBN ${contract.expand.clientId.nzbn}) (“Customer”) requests ECHO TECH Ltd (NZBN
      ${contract.expand.clientId.nzbn}) to provide the services set out in sections 3 and 4 of
      this Service Request Agreement (“Services”) for the fees set out in
      section 5 of this agreement (“Fees”) within the scope and limitations
      set out in this agreement.
      </p>
    </div>

    <!-- 2.0 Customer Details -->
    <div class="section">
      <h2>2.0 Customer Details</h2>
      <hr />
      <div style="font-size:10px; color: black; width:100%; text-align:left; padding:0px; display: flex; align-items: center;">
      <p style="padding-right: 150px">Client</p>
      <p><b>${contract.expand.clientId.name}</b></p>
      </div>
      <hr />

      <div style="font-size:10px; color: black; width:100%; text-align:left; padding:0px; display: flex; align-items: center;">
      <p style="padding-right: 108px">Client Contact</p>
      <p>${contract.expand.clientId.contact_name}</p>
      </div>
      <hr />

      <div style="font-size:10px; color: black; width:100%; text-align:left; padding:0px; display: flex; align-items: center;">
      <p style="padding-right: 138px">Address</p>
      <p>${contract.expand.clientId.address}</p>
      </div>
      <hr />

      <div style="font-size:10px; color: black; width:100%; text-align:left; padding:0px; display: flex; align-items: center;">
      <p style="padding-right: 100px">Agreement Term</p>
      <p>${contract.agreement_term} Months</p>
      </div>
      <hr />

    </div>
    <div class="page-break"></div>
    
    <!-- 3.0 Service Overview and Requirements -->
    <div class="section">
      ${ServiceOverviewAndRequirements.content}
    </div>
    <div class="page-break"></div>

    <!-- 4.0 Statement Of Work -->
    <div class="section">
      ${StatementOfWork.content}
    </div>
    <div class="page-break"></div>

    <!-- 5.0 Pricing Summary -->
    ${pricingSummaryHtml}

    <div class="page-break"></div>

    <!-- Agreement Execution -->
    <div class="section">
      <h2>Executed as an Agreement</h2>
      <p>
        By signing this document, ECHO TECH and Customer indicates their
        acceptance and agree to be bound by the Service Agreement as set out
        above and incorporating the ECHO TECH Ltd Terms & Conditions set out
        below.
      </p>
      </br></br></br>
      <p>
        <strong>Signed for and on behalf of the Customer by its authorised representatives:</strong> 
        </br></br></br>_____________________________________________________________
        </br></br></br>_____________________________________________________________
        </br></br></br>_____________________________________________________________
        </br></br></br>Date:</br></br></br>
      </p>
      <p>
        <strong>Signed for and on behalf of ECHO TECH by its authorised representatives:</strong> 
        </br></br></br>_____________________________________________________________
        </br></br></br>_____________________________________________________________
        </br></br></br>_____________________________________________________________
        </br></br></br>Date:
      </p>
    </div>
    <div class="page-break"></div>

    <div class="section">
        <h2>ACCOUNT APPLICATION FORM &amp; AGREEMENT</h2>
        <H3>CUSTOMER DETAILS</H3>
        <p>Company Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${contract.expand.clientId?.name || ''}</p>
        <p>Trading As (if applicable):</p>
        <p>Address (Physical): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${contract.expand.clientId?.address || ''}</p>
        <p>Address (Postal):</p>

        <h3>ACCOUNTS PAYABLE CONTACT DETAILS</h3>
        <p>Name:</p>
        <p>Email:</p>
        <p>Phone:</p>
        <p>Remittance Email:</p>

        <h3>PAYMENT TERMS (Please select one)</h3>
        <div style="display: flex;">
            <div style="display: flex;">
                <div id="rectangle"></div> &nbsp; COD (Eftpos/Credit Card/Bank Transfer)
            </div>
            <div style="display: flex; margin-left: 25px;">
                <div id="rectangle"></div> &nbsp; 20<sub>th</sub> &nbsp; of Month Following Invoice Date
            </div>
        </div>
        <br>
        <div style="display: flex;">
            <div style="display: flex;">
                Do you require POs on invoice?
            </div>
            <div style="display: flex; margin-left: 110px;">
                <div id="rectangle"></div> &nbsp; Yes
                <div id="rectangle" style="margin-left: 10px;"></div> &nbsp; No
            </div>
        </div>

        <h3>FINANCE DETAILS</h3>
        <p>GST Number:</p>
        <p>Bank Name:</p>
        <p>Bank Acc. Number:</p>
        <p>NZBN: ${contract.expand.clientId?.nzbn || ''}</p>

        <br>

        <div style="display: flex;">
            <div id="rectangle"></div> &nbsp;&nbsp; <b>THE AGREEMENT TERMS PROVIDED WITH THIS APPLICATION HAVE BEEN READ AND UNDERSTOOD</b>
        </div>

        
        <P>By signing this account application you agree to service contracts terms &amp; conditions.</P>
        <br><br>
        <p>Signed</p>
        <p>Name &amp; Position</p>
        <p>Date</p>
    </div>
    <div class="page-break"></div>

    <!-- Terms and Conditions -->
    <div class="section">
      ${TermsAndConditionsOfService.content}
    </div>
    <div class="page-break"></div>
  </body>
</html>
    `;

		let browser;
		try {
			// Configure Chrome with more specific settings
			browser = await puppeteer.launch({
				args: [
					...chrome.args,
					'--no-sandbox',
					'--disable-setuid-sandbox',
					'--disable-gpu',
					'--disable-dev-shm-usage',
					'--single-process'
				],
				defaultViewport: {
					width: 1920,
					height: 1080,
					deviceScaleFactor: 1,
				},
				executablePath: await chrome.executablePath(),
				headless: true,
				ignoreHTTPSErrors: true,
				timeout: 30000
			});

			const page = await browser.newPage();
			
			// Set content with a timeout
			await Promise.race([
				page.setContent(htmlContent),
				new Promise((_, reject) => 
					setTimeout(() => reject(new Error('Content loading timeout')), 25000)
				)
			]);

			// Generate PDF with a timeout
			const pdfBuffer = await Promise.race([
				page.pdf({
					format: 'A4',
					printBackground: true,
					displayHeaderFooter: true,
					headerTemplate: `
						<div style="font-size:10px; width:100%; text-align:left; padding:10px 20px; display: flex; align-items: center; justify-content: space-between;">
							<div>
								<div>ECHO SERVICE CONTRACT</div>
								<div>NO. ${contract.number}</div>
							</div>
							<img width="40px" src="${HEADER_LOGO}" alt="Header Logo" style="margin-left: 10px;">
						</div>
					`,
					footerTemplate: `
						<div style="font-size:10px; width:100%; text-align:right; padding:10px 20px; display: flex; justify-content: space-between; align-items: center;">
							<img width="50px" src="${FOOTER_LOGO}" alt="Footer Logo" style="margin-right: 10px;">
							<span style="font-size: 15px" class="pageNumber"></span>
						</div>
					`,
					margin: {
						top: '100px',
						bottom: '100px',
						right: '20px',
						left: '20px'
					}
				}),
				new Promise((_, reject) => 
					setTimeout(() => reject(new Error('PDF generation timeout')), 25000)
				)
			]);

			return new Response(pdfBuffer, {
				headers: {
					'Content-Type': 'application/pdf',
					'Content-Disposition': `attachment; filename="contract-${contract.number}.pdf"`
				}
			});

		} catch (pdfError) {
			console.error('PDF Generation Error:', pdfError);
			throw pdfError;
		} finally {
			if (browser) {
				try {
					await browser.close();
				} catch (closeError) {
					console.error('Error closing browser:', closeError);
				}
			}
		}

	} catch (error) {
		console.error('Error in PDF endpoint:', error);
		return new Response(`Error generating PDF: ${error.message}`, { 
			status: 500,
			statusText: error.message
		});
	}
}
