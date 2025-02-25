import puppeteer from 'puppeteer';
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
            <div style="color: #224335; width:100%; text-align:left; padding:0px; display: flex; justify-content: space-between; align-items: center;">
              <h3>Logistics Services – Collection of assets if required </h3>
              <h3>NZD$ ex GST per item</h3>
            </div>
            <ul>
              <li>
                <div style="font-size:10px; color: black; width:100%; text-align:left; padding:0px; display: flex; justify-content: space-between; align-items: center;">
                  <p>Echo Van Transportation - Timberly A Warehouse 10 pallets max - for collection.</p>
                  <p>$200.00</p>
                  </div>
              </li>

              <li>
                <div style="font-size:10px; color: black; width:100%; text-align:left; padding:0px; display: flex; justify-content: space-between; align-items: center;">
                  <p>Echo Truck Transportation</p>
                  <p>POA</p>
                  </div>
              </li>

              <li>
                <div style="font-size:10px; color: black; width:100%; text-align:left; padding:0px; display: flex; justify-content: space-between; align-items: center;">
                  <p>Echo Dangerous Goods Truck Transport</p>
                  <p>POA</p>
                  </div>
              </li>

              <li>
                <div style="font-size:10px; color: black; width:100%; text-align:left; padding:0px; display: flex; justify-content: space-between; align-items: center;">
                  <p>External Freight Providers (arranged by Echo)</p>
                  <p>POA + 15% service fee</p>
                  </div>
              </li>

            </ul>
            
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
      src: url("https://echotech.pages.dev/css/ABCRepro-Regular.otf");
      }

      @font-face {
      font-family: "ABCRepro-Medium";
      src: url("https://echotech.pages.dev/css/ABCRepro-Medium.otf");
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
      font-family: "ABCRepro-Regular";
      margin-top: 20px;
      margin-bottom: 10px;
      color: var(--forest);
      }
      p {
      margin-bottom: 10px;
      font-family: "ABCRepro-Regular";
      }
      a {
      color: black;
      font-family: "ABCRepro-Regular";
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

		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

		const pdfBuffer = await page.pdf({
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
		});
		await browser.close();

		return new Response(pdfBuffer, {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': `attachment; filename="ECHO-Service Contract and TC ${contract.expand.clientId.name}.pdf"`,
				'Cache-Control': 'no-cache, no-store, must-revalidate',
				'Pragma': 'no-cache',
				'Expires': '0'
			}
		});
	} catch (error) {
		console.error('Error generating PDF:', error);
		return new Response('Error generating PDF', { status: 500 });
	}
}


const HEADER_LOGO =
	'data:image/png;base64,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';

const FOOTER_LOGO =
	'data:image/png;base64,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';
