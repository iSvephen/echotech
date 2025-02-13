// src/routes/api/generate-pdf/+server.js
import puppeteer from 'puppeteer';

export async function GET() {
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
        src: url("http://echo.stephen.vip/css/ABCRepro-Regular.otf");
      }

      @font-face {
        font-family: "ABCRepro-Medium";
        src: url("http://echo.stephen.vip/css/ABCRepro-Medium.otf");
      }

      /* 2,480 x 3,508 pixels */
      body {
        font-family: "ABCRepro-Regular";
        line-height: 1.6;
        /* width: 2480px;
        height: 3508px; */
        margin: 20px;
        color: #333;
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
    <!-- Cover / Header Section -->
    <div class="section">
      <h1>Echo Service Contract</h1>
      <h2>Terms &amp; Conditions</h2>

      <p><strong>Contract Date:</strong></p>
      <p><strong>Contract No</strong></p>

      <p><strong>Service Request for:</strong></p>

      <p><strong>Prepared by:</strong></p>

      <p>
        This is a confidential document presenting Echo e-waste recycling
        quotation and agreement.
      </p>
      <address>
        5 Southpark Place, Penrose, Auckland, 1061<br />
        Unit 2/101 Gracefield Rd, Gracefield, Lower Hutt, 5010<br />
        0800 E WASTE<br />
        <a href="mailto:info@echotech.co.nz">info@echotech.co.nz</a><br />
        <a href="http://echotech.co.nz">echotech.co.nz</a>
      </address>
    </div>

    <!-- 1.0 Introduction -->
    <div class="section">
      <h2>1.0 Introduction</h2>
      <p>
        (NZBN __________) (“Customer”) requests ECHO TECH Ltd (NZBN
        9429046467911) to provide the services set out in sections 3 and 4 of
        this Service Request Agreement (“Services”) for the fees set out in
        section 5 of this agreement (“Fees”) within the scope and limitations
        set out in this agreement.
      </p>
    </div>

    <!-- 2.0 Customer Details -->
    <div class="section">
      <h2>2.0 Customer Details</h2>
      <hr />
      <br />
      Client Name _____________________________<br /><br />
      <hr />
      <br />
      Client Contract __________________________<br /><br />
      <hr />
      <br />
      Address ________________________________<br /><br />
      <hr />
      <br />
      Agreement Term __________________________<br /><br />
      <hr />

      <!-- Customer details can be filled in as needed -->
    </div>
    <div class="page-break"></div>

    <!-- 3.0 Service Overview and Requirements -->
    <div class="section">
      <h2>3.0 Service Overview and Requirements</h2>
      <p>
        ECHO TECH LTD provides innovative solutions for the management of
        end-of-life electronics and the recycling of e-waste, in a manner that
        promotes the stewardship of the environment. Our services include, but
        are not limited to:
      </p>
      <ul>
        <li>
          <h3>E-Waste Collection and Recycling Services;</h3>
          A range of tailored e-waste collection and recycling services to
          business and corporations of all sizes. This service can include
          e-waste recycling bin hire & mail-back boxes, on-site collections, as
          well as certification and weight & sustainability reporting on all
          e-waste processed.
        </li>
        <li>
          <h3>IT Asset Disposition (ITAD)</h3>
          ITAD is an industry term and practice built around reusing, recycling,
          repurposing or disposing of unwanted IT equipment in a safe and
          environmentally responsible way. We undertake the full suite of ITAD
          services, including:
          <ul>
            <li>Asset Auditing & Serial Capture</li>
            <li>Blancco© Data Sanitisation</li>
            <li>IT Asset Disposal (via re-use and/or recycling)</li>
            <li>Weight & Sustainability Reporting</li>
          </ul>
        </li>
        <li>
          <h3>Data Security & Sanitisation;</h3>
          Using world-leading data erasure software Blancco© our team of
          technicians will complete the data sanitisation process to ensure your
          company and clients’ sensitive information is securely and sustainably
          destroyed. All Blancco erasures are verified and certified, resulting
          in a tamper-proof audit trail.
        </li>
        <li>
          <h3>Asset Destruction &amp; Recycling</h3>
          We undertake data destruction and physical shredding of IT assets, IP
          equipment, and end-of-life or warranty- returned electronic equipment.
          Defective and expired products expose your company to significant
          liability risk if they’re not properly disposed of. Products and
          equipment no longer meeting govt. regulatory standards, and in some
          cases your own internal standards, should be destroyed. If required,
          we have a fully self-sufficient mobile shredding unit, allowing us to
          destroy your business’s equipment – such as HDDs, phones and laptops –
          efficiently and securely on-site.
        </li>
        <li>
          <h3>IT Asset Purchasing & Resale;</h3>
          We purchase and re-sell unwanted electronic equipment, ensuring our
          clients can benefit from the returned value of their high quality,
          excess IT equipment. Re-purposing electronics keeps unnecessary
          e-waste out of landfill, while providing tech equipment with an
          extended life within the community.
        </li>
        <li>
          <h3>E-Scrap Trading;</h3>
          We work with customers who are interested in trading their e-scrap
          commodities harvested from electronic waste. As a responsible recycler
          with a certified ISO 9001, ISO 14001, and ISO 45001 for e-waste
          recycling, we can export e-scrap to compliant downstream partners,
          allowing for the recovery of base materials and precious metals.
        </li>
      </ul>
    </div>
    <div class="page-break"></div>

    <!-- 4.0 Statement Of Work -->
    <div class="section">
      <h2>4.0 Statement Of Work</h2>

      <h4>Description Of Echo Tech Services</h4>

      <h3>4.1 Project Management</h3>
      <p>
        ECHO TECH will assign a Project Co-ordinator to work with the Client in
        planning and implementing the project. The ECHO TECH Project
        Co-ordinator will:
      </p>
      <ul>
        <li>
          Work with Client and the nominated service location contacts in
          planning the delivery of the services in all service locations.
        </li>
        <li>
          Finalise all on-boarding requirements including account set up
          documentation.
        </li>
        <li>
          Coordinate ECHO TECH’s service activities in accordance with the
          Statement of Works (SOW), Customer’s pre-contract scope, and Schedule
          of activities.
        </li>
        <li>
          Be the primary point of contact for any issues or questions that may
          arise during the agreement.
        </li>
        <li>
          Provide regular project updates via scheduled meetings and progress
          reporting.
        </li>
      </ul>

      <h3>4.2 On-Site Collection Services</h3>
      <h4>4.2.1 Standard Collection Services</h4>
      <ul>
        <li>Coordinate service date and times with the onsite contact.</li>
        <li>Assign assets for on-site collection or count pallets.</li>
        <li>
          Transport assets or pallets from the customer site to the ECHO TECH
          facility.
        </li>
      </ul>

      <h3>4.3 Asset Processing</h3>
      <p>
        Assets collected are put through the ECHO TECH facility process. Extra
        handling and special requirements needed must be first agreed upon in
        pre-contract scope and entered in the SOW. Likewise, these must be
        communicated to the Project Co-ordinator prior to booking the job in the
        system.
      </p>
      <h4>4.3.1 Check In</h4>
      <ul>
        <li>Verify weight or quantity against expected quantities</li>
        <li>
          Battery removal must be made known and agreed in pre-contract scope
          and shall be specified in the SOW.
        </li>
        <li>Check-in and track assets in our system</li>
        <li>Unique identifier labels are applied to each individual lot</li>
        <li>
          Serial numbers will only be recorded when it is agreed in the
          pre-contract scope and shall be specified in the SOW.
        </li>
      </ul>

      <h3>4.4 Responsible Recycling Services</h3>
      <p>
        Any device that either is pre-defined to be Recycled or is of no
        commercial value, will be recycled in an environmentally and socially
        responsible manner at an appropriate facility. A Certificate of
        Responsible Recycling can be provided.
      </p>

      <h3>4.5 Certificates And Reporting</h3>
      <p>
        A range of reports can be made available on the basis of the Customer’s
        needs, these should be discussed with the Project Co-ordinator prior to
        booking the job in the system and will be issued upon completion of the
        job.
      </p>

      <h3>4.6 Invoicing</h3>
      <p>
        Invoices for services performed will be prepared by ECHO TECH at the
        completion of each job performed for the Services completed
      </p>

      <h3>4.7 Change Management</h3>
      <p>
        Any changes to the project scope, assumptions, and / or technical
        changes that impact the project schedule, or cost, will be communicated
        to the Customer via email by ECHO TECH, to be agreed to by both parties.
        <br />
        The reasons for a change can include, but are not limited to, Client
        requirements, or ECHO TECH’s requests, regulatory changes, changes to
        technical scope, or other detailed technical issues. <br />
        The change request will be detailed over email by the ECHO TECH
        representative and sent to Client for approval. If the proposed change
        causes ECHO TECH to increase, or decrease pricing, ECHO TECH will
        increase, or decrease rates in the pricing set out in the pricing
        summary, any such pricing changes will be relayed to the client for
        approval. <br />
        The above changes as contemplated in the herein clause shall likewise
        effectively modify and/or alter the Statement of Works (SOW), Customer’s
        pre-contract scope, and Schedule of activities wherein such changes are
        inconsistent with the prior scope of works and activities. <br />
      </p>

      <h3>Incorporation of standard terms and conditions</h3>
      <p>
        The ECHO TECH Ltd – Terms and Conditions of Service form part of, and
        are incorporated into, this agreement.
      </p>
    </div>
    <div class="page-break"></div>

    <!-- 5.0 Pricing Summary -->
    <div class="section">
      <h2>5.0 Pricing Summary</h2>

      <h3>Logistics Services</h3>
      <p>
        Collection, transportation, and related logistics services are priced on
        a POA (price on application) basis with applicable service fees.
      </p>

      <h3>E-Waste Collection</h3>
      <ul>
        <li>
          <strong>Category 1:</strong> PCs, servers, laptops, tablets, mobile
          phones, network devices, etc. – priced per kg.
        </li>
        <li>
          <strong>Category 2:</strong> Lead acid batteries – $1.05 per kg.
        </li>
        <li>
          <strong>Category 3:</strong> Other loose batteries (including Lithium)
          – $5.25 per kg.
        </li>
        <li>
          <strong>Category 4:</strong> Non-IT equipment, packaging waste – $1.05
          per kg.
        </li>
        <li>
          <strong>Category 5:</strong> Ink and Toner cartridges – $3.15 each.
        </li>
        <li>
          <strong>Category 6:</strong> Fluorescent tubes and halogen lighting –
          $2.10 each.
        </li>
      </ul>

      <h3>IT Asset Purchasing &amp; Resale / ITAD Services</h3>
      <p>
        Service fees for IT Asset Disposition (ITAD) including asset auditing,
        degaussing, shredding, and Blancco wipe are charged per asset or as
        specified by asset volume.
      </p>

      <h3>Reporting &amp; Additional Services</h3>
      <ul>
        <li>Certificates of Destruction and Audit Reports</li>
        <li>Mass Balance and Sustainability Reporting</li>
        <li>
          Data Security &amp; Sanitisation services via mobile shredding and Blu
          Box shredding units
        </li>
        <li>
          Miscellaneous services including phone, tape, USB, and CD/DVD
          shredding
        </li>
      </ul>

      <h3>E-Waste Recycling Services</h3>
      <ul>
        <li>
          Recycling bin hire for various sizes (120L, 240L, 660L, 1100L) –
          one-off or recurring monthly rates apply.
        </li>
        <li>
          Mail-back boxes for e-waste – with pricing including return freight.
        </li>
      </ul>
      <p>All prices are in New Zealand Dollars (NZD) and exclude GST (15%).</p>
    </div>
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
      <p>
        <strong>Customer Signature:</strong> ___________________________
        &nbsp;&nbsp;&nbsp; Date: __________
      </p>
      <p>
        <strong>ECHO TECH Signature:</strong> ___________________________
        &nbsp;&nbsp;&nbsp; Date: __________
      </p>
    </div>
    <div class="page-break"></div>

    <!-- Terms and Conditions -->
    <div class="section">
      <h2>Terms And Conditions Of Service</h2>

      <h3>1. DEFINITION OF TERMS</h3>
      <h4>
        1.1 In the Service Agreement unless the context requires otherwise:
      </h4>
      <p>
        “ECHO TECH LIMITED is the legal entity (NZBN:9429046467911), which
        includes its successors and assigns; <br />

        <b>“Service Request”</b> Services Requested by Customer under section 3
        of the Service Request <br />

        <b>“Service Agreement”</b> Contract between ECHO TECH and the Customer
        for services set out in section 3 of the Service Request, including the
        Terms and Conditions herein set forth. <br />

        <b>“Services”</b> scope of work to be provided by the ECHO TECH
        described in the Service Request, including provisions set forth Service
        Agreement and Terms and Conditions. <br />

        <b>“Commencement Date”</b> the date calculated in accordance with clause
        2.2. <br />

        <b>“Customer”</b> individual or entity to whom ECHO TECH is providing
        the Services whose details are set out in Section 2 above. <br />

        <b>“Accepted Products”</b> Goods possessed by ECHO TECH by reason of
        Service Request, including any parts thereof; and such other assets as
        the parties may agree in writing thereafter; excluding the Excluded
        Products as defined herein. <br />

        <b>“Excluded Products”</b> Products or goods other than accepted
        products which ECHO TECH had accepted, including but not limited to any
        other products considered to be such during the Service Agreement term.
        <br />

        <b>“Fees”</b> sum payable by the Customer with respect to the Services
        set out in section 5 of Services Request, unless otherwise amended in
        writing by the parties. <br />

        <b>“Force Majeure”</b> includes, but not limited to, war, revolution,
        insurrection, or any other unlawful act against public order or
        authority; acts of nature; governmental restraint; or any other events
        reasonably beyond the control of the party claiming suspension of
        obligations hereunder. <br />

        <b>“GST”</b> means the goods and services tax imposed by the GST law as
        defined in the GST Act 1985. <br />

        <b>“Premises”</b> locations/places specified in the Service Request
        where Products delivered or Services performed.
      </p>
      <h4>1.2 In the Service Agreement:</h4>
      <p>
        (a) terms defined in the Service Request shall also apply unless the
        context requires otherwise. <br />

        (b) the singular includes the plural and vice versa; and <br />

        (c) A reference to a party includes that party’s successors, legal
        personal representatives and permitted assigns.
      </p>

      <h3>2. INTRODUCTION</h3>
      <p>
        2.1 ECHO TECH agrees to provide the Services on the terms set forth
        herein. <br />

        2.2 The Service Agreement commences, either: (a) date when Customer
        executed the Service Request; or (b) date when ECHO TECH commenced
        Services and the Customer accepted the same <br />

        2.3 This Service Agreement shall continue until terminated in accordance
        with clause 8.
      </p>

      <h3>3. PROVISION OF SERVICES</h3>
      <p>
        3.1 Upon commencement of the Services Agreement, ECHO TECH shall provide
        Services specified in the Service Request. <br />

        3.2 ECHO TECH shall exercise with due care and skill at a minimum
        standard of a professional and competent person carrying out such
        activities of the same Services. <br />

        3.3 The Customer is responsible for ensuring that the goods or assets
        provided for processing are those which the Customer intends be
        destroyed, recycled, or resold. <br />
      </p>

      <h3>4. FEES AND PRICING</h3>
      <p>
        4.1 Upon completion of services, ECHO TECH shall issue a tax invoice to
        the Customer for the sum payable with respect to the services rendered.
        <br />

        4.2 Subject to Echo Tech complying with its obligations under this
        Agreement and in accordance with this Agreement, , the Customer will pay
        ECHO TECH through electronic funds transfer into the bank account
        specified by ECHO TECH on 30 days from the end of the month in which the
        invoice is received. <br />

        4.3 The above payment shall also include the payment of GST arising from
        services rendered. 4.4 In the event of non-payment, ECHO TECH must
        provide reasonable written notice to the Customer of non-payment and
        provide the Customer a reasonable period to remedy. <br />

        4.5 ECHO TECH will fix the pricing for a period of 24 months. <br />

        4.6 ECHO TECH may adjust the charges at any time, by giving 90 days’
        notice in writing to the Customer, the adjusted changes will take affect
        from the end of the 90 days notice period. With a minimum of 30 days
        prior written notice. If the increase in fees is unacceptable to the
        Customer, the Customer may terminate this Agreement by providing 30 days
        written notice.
      </p>

      <h3>5. RECIPIENT GENERATED TAX INVOICES</h3>
      <p>
        5.1 Where remarketing services are provided by ECHO TECH as part of the
        Services, the Customer will be entitled to a rebate calculated in
        accordance with the Service Request. <br />

        5.2 Whenever there is a rebate, ECHO TECH will notify the Customer of
        the rebate value from remarketing services. The said Customer must issue
        a valid tax invoice for the amount of rebate within 7 days from the
        issuance of settlement report. Such rebate is to be paid by ECHO TECH
        within 30 days from the invoice date or the latter has the option to
        set-off said rebate against monies owed by the said Customer.
      </p>

      <h3>6. GENERAL</h3>
      <p>
        6.1 The Customer acknowledges and agrees that ECHO TECH may sub-contract
        the performance of any part of the Services. <br />

        6.2 If Force Majeure, as described herein, in any ways, precludes ECHO
        TECH to perform its obligation, it shall promptly notify the Customer of
        its nature and extent. For that reason, ECHO TECH shall not be construed
        to be in delayed nor breached its contract to the extent of such delay
        or non-performance. If resumption is feasible, the performance of that
        obligation shall be extended accordingly. <br />

        6.3 If the resumption of obligation is not feasible by reason of Force
        Majeure for a continuous period in excess of 3 (three) months, the
        parties shall enter into bona fide discussions with a view to
        alleviating its effects, or to agreeing upon such alternative
        arrangements as may be fair and reasonable. <br />

        6.4 If the Customer fails to pay any amounts payable under the Service
        Agreement after the date required, and ECHO TECH must provide reasonable
        written notice to the Customer of non-payment and provide the Customer a
        reasonable period to remedy. <br />

        6.5 In the event of non-payment, in full or in part, ECHO TECH may
        deduct or set-off any amount due by the Customer against any money held
        by ECHO TECH in satisfaction of the Customer outstanding balance.
      </p>

      <h3>7. LIABILITY</h3>
      <p>
        7.1 To the extent permissible by law, ECHO TECH renounces and excludes
        all conditions, warranties terms, representations, express or implied,
        in relation to the goods or services supplied pursuant to the Service
        Agreement other than terms expressly stated of the herein Service
        Agreement. <br />

        7.2 Neither of the parties shall be liable to the other for any
        indirect, incidental, special or consequential damages including but not
        limited to loss of profits or revenue, loss of use of the equipment or
        any associated equipment, or costs of substituted goods, facilities,
        equipment or services which arise out of the performance or failure to
        perform any obligation contained within the Service Agreement, whether
        the claim is in contract, tort (including negligence), strict liability
        of otherwise except as expressly provided under the herein Service
        Agreement. <br />

        7.3 While ECHO TECH exercises due diligence in the selection of
        compliant downstream Partners, the former is not liable for any
        liabilities, damages, or claims from third parties against the latter.
        Likewise, ECHO TECH is not responsible of the actions of its downstream
        Partners that may cause injuries, liabilities, or damages against third
        parties.
      </p>

      <h3>8. TERMINATION</h3>
      <p>
        8.1 At any time after the Commencement Date, either party may terminate
        this Services Agreement by giving one (1) month written notice to the
        other. <br />

        8.2 ECHO TECH may upon written notice terminate the Service Agreement,
        or any portion thereof, if the Customer fails to pay when due any
        amounts payable pursuant to the Service Agreement, and such failure
        continues for a period of fifteen (15) days after the day that payment
        became due. <br />

        8.3 Regardless of causes of termination, the Customer agrees to pay ECHO
        TECH the Fees relating to any Services rendered or performed up to the
        date of termination.
      </p>

      <h3>9. CHANGE MANAGEMENT</h3>
      <p>
        9.1 If a party wishes to change services set out in the Service Request,
        changes must be in writing and stated therefrom the relevant changes and
        reasons thereof. Such changes will then be effected only after 10
        business days, at a minimum, unless other period agreed by the parties,
        from the date on which the change is supposed to take effect. <br />

        9.2 Valid changes of services under the preceding clause 9.1 shall be
        the controlling agreement unless otherwise superseded by another valid
        change of services succeeding therefrom.
      </p>

      <h3>10. DATA ERASURE AND HARD DRIVE DESTRUCTION</h3>
      <p>
        10.1 When it is part of the services availed by the Customer is Section
        3, ECHO TECH shall perform necessary procedures, such as, but not
        limited to, data erasure, overwriting, physical destruction, software
        application and other means necessary in order to attain its objective
        to the extent reasonably possible. Thereby, the Customer waives its
        rights to make any claim against and releases ECHO TECH, its officers,
        employees, and agents from all liability whatsoever arising in the event
        that data is retrieved by a third party, or is otherwise disseminated
        where ECHO TECH has acted with reasonable care and skill in performing
        those services.
      </p>

      <h3>11. CUSTODY OF EQUIPMENT</h3>
      <p>
        11.1 ECHO TECH is responsible for the Customer's goods or assets whilst
        the goods or assets are in Echo Techs control and / or possession,
      </p>

      <h3>12. DELIVERY OF PRODUCTS BY CUSTOMER</h3>
      <p>
        12.1 Unless otherwise set out in the Service Request, the Customer is
        obligated to deliver the Products to the Premises as set out in the
        quotation. Only upon after the off-loading of Products at ECHO TECH’s
        premises constitutes “Delivery”. Any other arraignments by the
        customer’s request, ECHO TECH will collect the products on the
        Customer’s behalf; cost chargeable to said Customer. <br />

        12.2 Mere delivery of products does not amount to Accepted Products, as
        herein define. The Products are subject to acceptance as set out in the
        quotation. In no case, ECHO TECH shall be under no obligation to accept
        “excluded products” as herein define, such as but not limited to
        products packaged or presented in any way hazardous or capable of
        causing harm to human health or to the environment. <br />

        12.3 Within a reasonable time from delivery, ECHO TECH will visually
        check and inspect the products delivered as standard procedures. Only
        products that comply with the quotation are considered “Accepted
        products”. <br />

        12.4 Where delivered products are not in compliance with the Service
        Request or its specification, contained “Excluded products”, not
        packaged safely, either whole or in part, ECHO TECH has no obligation to
        accept nor to touch such delivered products. <br />

        12.5 Whenever ECHO TECH does not accept the Products pursuant to this
        clause, ECHO TECH will either dispose of such Products in line with
        applicable regulations or return the same to the said customer at
        customer’s cost. <br />

        12.6 Unless otherwise agreed, ECHO TECH’s recorded weight of “Accepted
        Products” upon acceptance is a conclusive evidence of the weight of the
        Products received, thus, will be the basis for Price calculation.
      </p>

      <h3>13. RISK AND TITLE</h3>
      <p>
        13.1 Save where transportation is provided by ECHO TECH, the Customer
        will bear the risk of loss or damage to the products during their
        delivery to and from the Premises. <br />

        13.2 ECHO TECH will bear the risk of loss or damage to the Products
        whilst the Products are are in Echotechs Possession. ECHO TECH will have
        no liability for the risk of loss or damage to Products in the
        Customer’s possession or under its control. <br />

        13.3 The Customer hereby warrants that it has good and complete title to
        the Products and that no third party has any interest in the Products.
        <br />

        13.4 As to ownership and possession of accepted products, unless
        otherwise specified in writing, accepted products came into possession
        in favour of ECHO TECH by virtue of this Service Agreement are owned and
        controlled by ECHO TECH and can be disposed of by the latter in whatever
        means, reasons and purposes to the greatest extent permitted by law.
      </p>
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
