import puppeteer from 'puppeteer';
import { pb } from '$lib/pocketbase';

export async function GET({ params }) {
  const { id } = params;

  try {
    const contract = await pb.collection('contracts').getOne(id, { expand: ['clientId', 'prepared_by'] });
    const ServiceOverviewAndRequirements = await pb.collection('policies').getOne('r637mn910m9k975');
    const StatementOfWork = await pb.collection('policies').getOne('w0z90zj72w5cule');
    const TermsAndConditionsOfService = await pb.collection('policies').getOne('a036c1mqmthn8w8');

    console.log(ServiceOverviewAndRequirements)

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
      <p><strong>Contract No: ${contract.number}</strong></p>

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
    <div class="page-break"></div>

    <!-- 1.0 Introduction -->
    <div class="section">
      <h2>1.0 Introduction</h2>
      <p>
        (NZBN ${contract.expand.clientId.nzbn}) (“Customer”) requests ECHO TECH Ltd (NZBN
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
      Client Name ${contract.expand.clientId.name}<br /><br />
      <hr />
      <br />
      Client Contract __________________________<br /><br />
      <hr />
      <br />
      Address ${contract.expand.clientId.address}<br /><br />
      <hr />
      <br />
      Agreement Term: ${contract.agreement_term} Months<br /><br />
      <hr />

      <!-- Customer details can be filled in as needed -->
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
        <strong>Signed for and on behalf of the Customer by its authorised representatives:</strong> 
        </br></br></br>______________________________________________________
        </br></br></br>______________________________________________________
        </br></br></br>______________________________________________________
        </br></br></br>Date:</br></br></br>
      </p>
      <p>
        <strong>Signed for and on behalf of ECHO TECH by its authorised representatives:</strong> 
        </br></br></br>______________________________________________________
        </br></br></br>______________________________________________________
        </br></br></br>______________________________________________________
        </br></br></br>Date:
      </p>
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
      // Note: These header/footer templates apply on every page of this PDF.
      headerTemplate: `
        <div style="font-size:10px; width:100%; text-align:left; padding:10px 10px 10px 10px;">
        ECHO SERVICE CONTRACT </br>
          NO. ${contract.number}
          </div>
          <img width="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAGACAYAAACkx7W/AAAKFmlDQ1BpY2MAAHictVZnWFPZFj333vRCS+gt9GaoAgFEeldBpItKSAKEEiAkNLEjKjiiiEhREWRUwAHHAsigIqJYGBQbKugEGQSUcbBgQ+XdwA+d772f89b3nXPXXd/e++yz74+7ACCPAxQwulIEImGwjzsjIjKKgX8EEKAOFIE+0GZzMtLAfwP6Tt8/mH+7y5TuJh+dnza/CW3Kdv/8540tDtT/kfsj5Li8DA5azhPlObHo4SjvRDk9NiTYA+X3ACBQuClcLgBECapvj5+LISVIY+J/iEkWp/BRPU+qp/DYGSjfjXL92KQ0EcrPSHXhfO61Of5DrojHQeuRhlCdkinmoWeRpHPZliWS5pKl96dz0oRSno9ye04CG40hd6B8wXz/c9DOkA7Qz8vDzsrBzo5pzbRixCazOUmMDA47WVr134b0W80z/cMAyKK9tdziiIWZ8xpGumEBCcgCOlAFWkAPGAMmsAb2wAm4Ai/gDwJBCIgEqwEHJIAUIARZIA9sAgWgCOwG+0AlqAZ1oB40gVOgFXSAS+AquAlug/tgEEjAKHgJpsB7MANBEB6iQjRIFdKGDCAzyBpiQYshL2gJFAxFQjFQPCSAxFAetAUqgkqgSqgGqod+hc5Bl6DrUD/0CBqGJqA30GcYgSkwHdaEDWELmAW7wQFwCLwKjofT4Vw4H94Fl8O18Am4Bb4E34TvwxL4JTyNAISMKCE6CBNhIR5IIBKFxCFCZD1SiJQhtUgT0o70IHcRCTKJfMLgMDQMA8PEOGF8MaEYDiYdsx6zE1OJOY5pwXRj7mKGMVOYb1gqVgNrhnXE+mEjsPHYLGwBtgx7FHsWewV7HzuKfY/D4ZRwRjh7nC8uEpeIW4vbiTuIa8Z14vpxI7hpPB6vijfDO+MD8Wy8CF+Ar8CfwF/E38GP4j8SyARtgjXBmxBFEBA2E8oIDYQLhDuEMcIMUY5oQHQkBhK5xBxiMbGO2E68RRwlzpDkSUYkZ1IIKZG0iVROaiJdIQ2R3pLJZF2yA3k5mU/eSC4nnyRfIw+TP1EUKKYUD0o0RUzZRTlG6aQ8orylUqmGVFdqFFVE3UWtp16mPqV+lKHJmMv4yXBlNshUybTI3JF5JUuUNZB1k10tmytbJnta9pbspBxRzlDOQ44tt16uSu6c3IDctDxN3ko+UD5Ffqd8g/x1+XEFvIKhgpcCVyFf4YjCZYURGkLTo3nQOLQttDraFdooHUc3ovvRE+lF9F/offQpRQXFhYphitmKVYrnFSVKiJKhkp9SslKx0imlB0qflTWV3ZR5yjuUm5TvKH9QUVdxVeGpFKo0q9xX+azKUPVSTVLdo9qq+kQNo2aqtlwtS+2Q2hW1SXW6upM6R71Q/ZT6Yw1Yw1QjWGOtxhGNXo1pTS1NH800zQrNy5qTWkparlqJWqVaF7QmtGnai7X52qXaF7VfMBQZboxkRjmjmzGlo6HjqyPWqdHp05nRNdIN1d2s26z7RI+kx9KL0yvV69Kb0tfWX6qfp9+o/9iAaMAySDDYb9Bj8MHQyDDccJthq+G4kYqRn1GuUaPRkDHV2MU43bjW+J4JzoRlkmRy0OS2KWxqa5pgWmV6yww2szPjmx0061+AXeCwQLCgdsEAk8J0Y2YyG5nD5krmS8w3m7eav7LQt4iy2GPRY/HN0tYy2bLOctBKwcrfarNVu9Uba1NrjnWV9T0bqo23zQabNpvXC80W8hYeWvjQlma71HabbZftVzt7O6Fdk92Evb59jP0B+wEWnRXE2sm65oB1cHfY4NDh8MnRzlHkeMrxbyemU5JTg9P4IqNFvEV1i0acdZ3ZzjXOksWMxTGLDy+WuOi4sF1qXZ656rlyXY+6jrmZuCW6nXB75W7pLnQ/6/7Bw9FjnUenJ+Lp41no2eel4BXqVen11FvXO9670XvKx9ZnrU+nL9Y3wHeP74Cfph/Hr95vyt/ef51/dwAlYEVAZcCzJaZLhEval8JL/ZfuXTq0zGCZYFlrIAj0C9wb+CTIKCg96LfluOVBy6uWPw+2Cs4L7llBW7FmRcOK9yHuIcUhg6HGoeLQrjDZsOiw+rAP4Z7hJeGSCIuIdRE3I9Ui+ZFtUfiosKijUdMrvVbuWzkabRtdEP1gldGq7FXXV6utTl59fo3sGvaa0zHYmPCYhpgv7EB2LXs61i/2QOwUx4Ozn/OS68ot5U7wnHklvLE457iSuPF45/i98RMJLgllCZN8D34l/3Wib2J14oekwKRjSbPJ4cnNKYSUmJRzAgVBkqA7VSs1O7U/zSytIE2S7pi+L31KGCA8mgFlrMpoE9HRH0yv2Fi8VTycuTizKvNjVljW6Wz5bEF2b45pzo6csVzv3J/XYtZy1nbl6eRtyhte57auZj20PnZ91wa9DfkbRjf6bDy+ibQpadPvmy03l2x+tyV8S3u+Zv7G/JGtPlsbC2QKhAUD25y2VW/HbOdv79ths6Nix7dCbuGNIsuisqIvOzk7b/xk9VP5T7O74nb1FdsVH9qN2y3Y/WCPy57jJfIluSUje5fubSlllBaWvtu3Zt/1soVl1ftJ+8X7JeVLytsq9Ct2V3ypTKi8X+Ve1XxA48COAx8Ocg/eOeR6qKlas7qo+vNh/uGHNT41LbWGtWVHcEcyjzyvC6vr+Zn1c/1RtaNFR78eExyTHA8+3l1vX1/foNFQ3Ag3ihsnTkSfuP2L5y9tTcymmmal5qKT4KT45ItfY359cCrgVNdp1ummMwZnDpylnS1sgVpyWqZaE1olbZFt/ef8z3W1O7Wf/c38t2MdOh1V5xXPF18gXci/MHsx9+J0Z1rn5KX4SyNda7oGL0dcvte9vLvvSsCVa1e9r17uceu5eM35Wsd1x+vnbrButN60u9nSa9t79nfb38/22fW13LK/1Xbb4XZ7/6L+C3dc7ly663n36j2/ezfvL7vf/yD0wcOB6AHJQ+7D8UfJj14/znw8M7hxCDtU+ETuSdlTjae1f5j80Syxk5wf9hzufbbi2eAIZ+Tlnxl/fhnNf059XjamPVY/bj3eMeE9cfvFyhejL9NezkwW/CX/14FXxq/O/O36d+9UxNToa+Hr2Tc736q+PfZu4buu6aDpp+9T3s98KPyo+vH4J9anns/hn8dmsr7gv5R/Nfna/i3g29BsyuzsD97EHLUljO++xJMXxxYnixhSw+KRmpwqFjJWpLE5PAaTITUx/zefElsBQOtWAFQef9dQBM0/5n3bHH7wl/8A/D0PUUKXDSrVfddSawFgTaP67gx+/JzmERzC+GEOzGBeHE/IE6BXDePzsviCePT+Ai5fxE8VMPgCxj/G9G/c/Ud87/O7ZxbxskVzfaam5Qj58Qkihp9AxBMK2NKO2MlzX0co7TEjVSjii1MWMKwtLR0AyIizsZ4rBVFQ74z9Y3b2rSEA+FIAvhbPzs7UzM5+RWeBDALQKf4PCj/Z9pUcTOcAAAAJcEhZcwAACxIAAAsSAdLdfvwAACAASURBVHic7X13uGVFlX0jWeIAkmnoQw4OSXIYkoQBJTRIlCAOIIKChCbZ5DQgI0GigqRWGhBEBhokNBmJDUgWkCY13TQNSBDFn7+9+tZhjo/3Xr9779q169TZ6/vWf+97d+86VbWqdu3aNeif//znIKfT6XQ2j+YGOJ1Op9OG5gY4nU6n04bmBjidTqfThuYGOJ1Op9OG5gY4nU6n04bmBjidTqfThuYGOJ1Op9OG5gY4nU6n04bmBjidTqfThuYGOJ1Op9OG5gY4nU6n04bmBjidTqfThuYGOJ1Op9OGbf3x+PHjBzkcsTH1tNMMKjZcZXrhIsI1hN8Q7i08SniG8GLhdcI7hY8LnxO+Kpwo/FD4z374/8LfTBK+JnxF+KTwfuEo4VXCi4SnCA8W7ircTLiKcN6F11lxauv2cTg6hguAwxphgp9GWAg3Fu4TJvZrhA8Jx4WJur+J3Ip/C8IBwfiV8AThd4TrCweLQHzJun0djj7hAuCICZnsp5aJcQnhUOHwsMJ+SvhpApM5mxCtvwgfFV4hPLJo7V4WFmGYyvpbOBwuAA41hMl+KeFuwrOE9wo/SGBitiaE4V3haOFPhNsLF3NRcESHC4CDAZnsp5JJbGbhBsJjhLeESc56sq0LIQoThDcKDxOuLYIwo/V3dWQOFwBHJwhx+5mEGwlPEt5X5BnGseQnwruLlqCuK4IwvfV3d2QGFwDHQBFCOssVrWwYZMh8lMAk2RSW5wk3CX8gYrCkdX9wZAAXAEdfCKv8Lws3EZ4tfCmBidDZ4mfCF4RnCjcSQZjOur84aggXAEcVIZY/i3Bb4ZVFKz/eerJz9s/y/OBS4dYiBjNZ9yNHTeAC4KjE87cuWmmZnqlTX0IM3i9aaaffEDGYwbp/ORKGC0BzIRP/tEUra+cXRevWrPXk5eSLAb7rBcJ1/FKa4wtwAWgWZNL/UtG6cYvMEo/pN4f/KFpnBsNFCIZY90NHInAByB8hxDODcDvhrWEysJ6QnHZE+Yr/FW7jh8cNhwtAvgir/YWFxxetejXWE48zLWIh8LrwWBGChaz7q8MALgD5QSZ+FFZbq2gd6P4tgYnGmT5x6WxE0Tor8JIUTYELQB6ohHl2Ej6QwITirCf/LnxQuJ0IwbTW/dqhDBeAeiNM/LMK9xO+mMAE4syD5aHx9/1eQcZwAagnwoWtfxMeLnwzgQnDmSeRSvqGcJgIwWzW/d5BhgtAvVCZ+I8Qvp3ABOFsBiEE6G9II53Dehw4SHABqAcaPvHjIPvlolU///Ki9TzjgUWrjj4usi0vXEi4oPCPCdibM0sh8B1BDnABSBshxo86+/sXrZQ96wlAiyhu9ifhDcLThXsJ1xMuNNB3d6WtIJAuAHEIIUDo8YdebqLGcAFIFzKh4SH0XYq8DnfLssbIVDpHuKdwFZlEZiG0lwtAfJaHxTsPVKgdCcEFID2EPP71ijzSObGyf054SdFa1a8gE8U0Su3GFIBUH6FPlUgf/YN82w01vq1DCS4A6SDc3MWD6SNrPAFhwn+6aL0fsK1MCPNHbD+WAKDtcXMauxN/5aw9or1GyndfLNZ3d3QBFwB7hDj/bEWrQNuHCQzidifL8UXr7YDdZOAvaNiONAEQP/4UqqWiRPbHCbRz3YiS4sczQnsORbgA2EImmenCJFOnOD9W+U8JTxaulcqNUbYAhP8JEdi0aJVKsG73uhHnAy9KWw617huOPuACYIMQ7llUeG0CA3UgRIz3EeGhMqCXtm6/3qAhAOH/QqTxQprXVeqMaLcbpE0Xt+wfjl7gAhAXIdwzY9HKY38vgcHZH7HSx4R6ZB0Gr5YAhP+NOkvfT+Cb1Jl4XvTgVHaMjkEuADEhk8jUMgBWKlrFtqwHY5+Tn3Cc8HQZqCtat1k70BSA8P/xbOZPE/hGdSZ2kg9I+65k0UccPeACoI/Km7tHFunGkv9atC5hbVXXR0IiCAC+4xzCu5W+AcS3bkkAnRJ+4h2C6S36iiPABUAXYdW/ovDhBAZdT+KQbqzwGBmIC1u3VbfQFoDwGzi7WbpoZT6xvweyjbDDwAW5zxLoH9qEjw/7bsAQLgA6qMT6DxJ+lMBgqxLb8HuFO9R1td8bYghA+B0cCg9V+C7l/YMFhGsLxyTQV2IQKaNH+NmAAVwA+AirxMWK1vu71oOrSoSfrpSBtpp1G2kglgCE30J9posVvtHH8tunhQXELMJji2ZcRsOi5HbxfdFY/cUxyAWAjUrK4IQEBtXkyaxoZRv9NPfBFVkAUJ0VFUjHKnyzceWFulAWZM2idbvaui/F6KvwfZc4PcbhAkBCWLHNXrTit9YDqRxMSLs7SQbUPNbtEwMxBSD8XnlTmP3tPpHfP73yOxAbHD7/LIF+FYNISLhI2mBm3R7jcAEgIIR8vip8LIHBg4kfu4/GPdwRWwDCbyJMM1LhO36+C6j8FnaXePP53QT6mTZxQPyotMG/6/QWx2S4AHSHMCjxMMmkBAYNQj2NWfH3hJEAQPyXKVolrpnfEmcBJ/Txe8sWaSw2YnCitMMe/N7imAwXgM5QOaTD4yXWlTuRPniOZSG2FGAhAOF3ke01nPxN0adeFTtm7+X3EBKaU3hFAhN0DH4S+rc/PMOGC0D7CANwYeHtxgMD2SHXysBYxrpNUoChAGAxMHfBL+j3odhxYD+/C+EZVrTuc1hP0tpEltBd0h6DOb3FMRkuAO0hXOxaXfiS4WAoL9Csb90eKcFKAMJv4/W23cnfGRP7s/2tfCtZZ+9HnIit+j12RX+W9lin+97imAwXgIEjDDY80Wh1XR8D4A3h3lqvatUZxgKAXQB+/1HyN/9AbNl1Cr+NRcmaoW9o97+JwrOEbxmNAXCSnwuQ4AIwMMgg+3LRerDFaruNOOi50vHnsm6LVGEpAOH3NdJCsdt7UOz50hR+uzwcfka5H/4jtPG/F62UZ6sS2RgPp/vt4S7hAtA/Kiu7y4w6OiYAvLW6hnVbpA5rAQg24GW30eQ+8N5A3toNZ1ODC/26UwgD/b5oJUGsWti9XY0zsGukbWbt5Fs5BrkA9IfKbc+7jDo4UksP8VXOwJCIAGAXsBW5H/xV7LlsgL+PPjtvwRehnsRltXN71Lz6wGCMTK5r1fQMuI7hAtA7KvndFlfwsa2+RTr1ktbtUCekIADBDtwIZ7/5MEFsWmCAv49JeS7hKOV++hexae/wmxgvSwhvMhgvCEs9J7Z8tdNv1li4AHwR4VBtDeHrkTtyeci235Rivo4vIiEBKC8HMvvGR2LToW3YEEsEcFFr7crvIhtqzyL+beXJlVQ9Q6hNuAD8K8IWfpMi/nON2MreUYenF1NFKgJQseVJYv/AKvepdrK/IolAufqet/K72A0sKbwt8hgC3xFbvtnNt2sUXAD+D5U677Ff7UIZgcM8tbM7JCYAWAnvQ+4n74tdm7dpB0TgK4XeK2YgQpa/Fdum7vG7Vu9hoJ126+b7NQYuAC2EAbtHETetDRk+T0pnXdXa/xyQmABgApyn4ObLfyp2jezAFhwMz1fovkWNENXhvfw2wqkrC5+ILAK4Rb1fN9+wEXAB+JfVWswcf5S8vcRT2HhISQCCPbg7chK534yvhlvasAUisIjwWcU+jQta6/Xx2yhnfWFkEYAoDev2O2aNpguAdM4ZpKP8IOLkj8MqxCm/Y+17bkhQABALX6poiT2r/2Bl+/0u7FmuaD07qdG3MYaeEfvm7OP3LcpZQwR+3N2XzBhNFoBQTOuQiJ0RIZ8xnq6mg9QEINiEy1IjiH3o72Lb6C7sKTPctGoH9XtnoSJCj7sIJICmCoDB5I9bi1f1Vt7XwUGiAoAnHTcm96V3xb6lu7AJmW7bFHrnXahf9O1+ft+inLWLQG9oogCEsM9+MTufcJjn9usiRQGo2MWMvWMyO7pLmzAGfqjU38uc/GIANhxQxHv03kWgJ5omAJEPfMtHrrew9rsJSFgAsNs8nNiv0Hef7HZBIXbNLP/nfKW+j93F7wZQxA47pI2Eb0cUAT8YLtEkAQiT/26RJv9ykC5n7XdTkLAAIOSxaMFd6b7X7a3XkKqK7BytWlefl4qYgh3lm9pPRRIBHKT/oJu2ywZNEYBKqd4Yef6TqyVKJ/uKtd9NQqoCEGzDYfDVxD6GYmynE+wqxWmswjiY/H6F2DlkgHbgrsLNkUTgA78sNqgZAlA5iIvxkAtS/n4pnWtGa7+bhsQFACmQ3yL2s/K1sKmn/OtTtK0Mw2jE4rHg+o3YOdUA7Cjf2T4nkghManzZiNwFoPKE48QIHQqPsx/vh702SFwAyneDx5MnsDVJ9uFA9kdK4wKr7R3bsAVnJkcWrR2E9pid0OgCcjkLQOUijsb2tic7vqDj4CBlAQj24dD1AmKf+1jsPJlo36zyP69VGBuYyF9s5zW7cF73nUI/ZAvbxopt/85qx1ohVwGoPObCrMjYF1ESd3trn5uOGggAQi1fJ/a7skIoZcdZeVHsZYUxgjOLM9u0B+d23yz0H5opbzA371GZHAWgkt1wh3LHweoBtVk2tfbZkb4ABBvRL18k9kGEgVYm2geR2rBoJTKwxwsusK3UgT3rFfoh3PJlsWbV5spUALDVvjjC5P9Go+OHiaEmAjCT/P+fEPsh8tqPItuIInYnKE2yv293xxJEYG3hm8pjGofg1zbqCdbcBCAcIB0WYfIf2+5qxqGLmggAJrN1mZOq2Ho32UbsoFGqQaN8dL9lIvqxCckcXxO+oTy2Kem1tUFOAlBJtdO86OWTf6KogwAEOxEGeoXYJyey49dhwl2p4D+OhLH5Qic1sSqF5Jht1xtxgW1PZnsmi1wEIHTYVQvdpxx98k8YNRIAhIHOIk9Y9PLiYTd9lMI4QvbSqR3aFEsEIKrrsts0OeQgAJWMn+d98m8uaiQA5cUrVt/ES2G/UrCzTKZ4RGE8If9+yQ7tKsNBmmcCGO8viY2D2e2aFOouAKGTzia8SbkzvCWdYRVrfx19o0YCUMbYXyf2z9c1bp9X3g9g3xL+tL93AwZol7YI4NB6tNg5A7NNk0IGAoCMhROVJ/9xnu2TPuoiAMFWZKpdQuynKA73dSVbNZ62BCd18x52JeyrmSKKQ+Fzme2ZFOosAOGiyFaF7qHvJM/zrwdqJgBIWNiR2E8RVz9ByVbsWL5S8Kt1/k1s/t8ubSvvLWheFsv3ULiuAhAOg5YpuLVVehIpaztY++oYGGomADi3WrDgZdkgHfQeRXux2NpMYYy93+0Cq1LpV/NhmbfFzuVZ7ZkM6igAlRjq/YofHLV99rP21TFw1EkAgr04u7qF2GffEbvnVbQXlTpHkscZ3sm+T+yepkvbUDto90IvGgA7H8nupnBNBQAxyVMVJ39sp0+x9tPRHmooAKjAeRCx32LH+i1Fe7HrXrrgh1tg984E+5C2OkxxXsCD979gtGUyqJsAhO3eFoWe0qOe/6WMOuuOuKihAGBCXYHYd9UPLMMkO5w85srVdVe7gGAfDtfPVRQBiNWujLZMAnUSgMrrRVrXwZH2dZs/5lJP1E0Ags3M4nD/ELv/qGxveSDMfOS+nFi7Pm8L9qEfaKWFlym3izHa0xw1EwDUK79e6cOWpXXVYqgOXdRUALBi/TmxH+MG6+LKNiODaSh5/GEX8AdGaeuwUJxf+LjSXIGF4h1ZFI2riwCEQ559lD4oVP3Nxj4KkQlqKgCYTL9N7MtYSe8SwW4cYI8mj0NkBG1Nsq/MEnxbac5AFdYjGbaaog4CUKn/oVXnBx1vKxPnHDTUVACwWh1StFbAjL6Mg8rzItiN/PsNCu6zjWVGEOuBmzJ1VSs9dCLzLQYTpC4AIaY3e8FfbVSV/OjojjnoqKMABLvRvx8i9WecAzweyW6EZK8hj0csxjYn2ohMqwOU5o4ybFXfM8MaCAA+4IFKHxArg6s94ycP1FgAUB30NGK/xsp0oQh2l/V4mO/24kLbHWQ7cc7yC6U5RO0GdhSkLACV0M/7Ch8Oh75PyMebI6pTDjXUWAAQqtiG2LdV7wP0sB2T60Xksfkes/ZWiCLMXehUNQXx1OXXWPZGReICgIOm3yt9tPFe2jkv1FgAysfYWStp3Ac4I5LtWKQtKfyIODZRKfRKBTuXF05SmEvKs4vpmDZHQaoCELJ+9lKa/FHcaa9ozjiioK4CEGzHOQBrhapaF6gX2xHCOoc8RlHWYlGynci42kVpTsFZ4jCmvVGQogCEFVFR6BR6Q9z/cvlYU0VxxhENNRcA9ith2OHOEsl2rK6XLVq36Fn2d/xq2BRsZbdzlW93+siNGRIVAHat9JLlZa9/i+KIIypqLgDs8tCIo/9HRPsxZi8g2o/00lc7eTt4CnbiPGAu4WMK8wtCeNfXanGZmgCEA7FNC25+cUkc1qyl7oTDBDUXgHLXy6pxhWq2P4pof1nXiJkRpFKRt/KQDPPcoiQO4Ldn26yGlASgUuZ5jMKHQYxuuKoDDlPUWQAq9j9D6u84SB0R2X7sAn5JHLMQwzGMInG92Ir08h8pzDOw+Tn2zkUNiQkAuzxuyfJtz/qd0jsGjAwEAPX2L2NNROLD85Htx8p6pYJ3qxnExbDNlOzFRTaNonE4vzhRw2Y6UhGASqVPjfc98abv0mrGO5JABgKABdAPif0eF8KKyD6wCzbSU0IrtpYprBpzzoRaHAgnJAAaF0pAxBEPVDPckQwyEACsoNci9n1acbU2fNB4OhKT6QJK9iLdfE+FeQfCdY2GzVSkIACh469WtEI1zI+A/3e7RgzRkR4yEICy1j7r5rvJuVe40/AocRxjEXewor3YtdyoIALvdfvesToSEQDc+L1Z4QMgF3o5FaMdyaHuAhB8YJZZNlmFKlzixMHq46wqob3YWz51+S55/sFZyANJL0CtBSBsGbdUmPzzqNftGDAyEQBcVPoJaQzAjxcMfChr7zBf7sNqekNFm3H+sq/CPISqA7tp2d01LAWg8nwb+1JG+cboDFSDHUkjEwFgPxCDg+DBBn58WX77OKIfeOfgEkV7y7Lz95DnIuxenhHbZ9KyvSsYCwC2irspqC5WC+tSjXUkj0wEgP1QPLW+fht+IKtv8YL7GAuy+eZUtBlnkWuQbQYRjThEy+6uYCUAlUtfz5MbGyuFC2mGOmqDHAQg+IFxwUpNxORzhJEfuNdwNXFsI5yyu7LNCMH9D3lOQlWDl5O8HGYoAIi57a/Q0K9ppYw50kZGAoCD4DtIYwIHwVcY+YHzva2I4/tv4suNyjaXD8q/Sp6bIMQ/1rS9I1gIQOWQ6BVyIyNd7AcUIx21Q0YCwKxY+Zn48piRH+Uu/yXiGMeZxoLKdiM0vSt5bioXp/No2t42jARAY/WPg9+HpYGnpRjpqB0yEgD25aQJsUpD9+ILDoOPJfoSZZEX7jLcR56jUCLiWG3b20JsAVBc/ZscdjnSQUYCgMPIVYhjY5L4s4qRL2WOPeuSJx67uSuC3dPIb61fcKsS43+NTeoZWgMB0Fj9IzZ4A6E5HDVGRgJQLpJY5YpRonhXQ3/YN23fjVFnJxxiX06eq9I6C4gpAIqZP+gQK5CaxFFT5CIAFV9Y92MQejjZ0Bf2U4xRMpsquxfmuwEqD910jMgCwL7kAiLt8+ek5nDUGJkJAFafV5LGCHbI1xv6goXffAXvQXYcbD8QyXbmzeyS6RSojCwAOFh5mNyY42OXvHWkicwEYEax4yjSGMHbAM8Z+8N86wBENtDiEewuX2pj1gnC7eBnxf7pte2fImIJQMgJ/gZ58v9EGvF0YnM4aozMBADjZRviWHnHMuygcCcAq+j9I9nOzmQCTc9lPkdEAdB4fWecdk6woz7ITAAQf16GOFaQCbSaoT9lqeu3SP4grHVzJNuxC1gA8w3xeyBt/UGtCqcDRgwBCGltKxfclCpf/Tv+BTkJQPCHWRICK86djP1BPP1nxDkA9xvmjmQ7QnJHEG0HUbNsoxj294lIAoDXvs4nNhyE5E1pvPnJzeGoMTIUAJyZPUAaM8icOdrYH+TWb0ScByBq345ke7kLeJtoP8p0XBXD/j6hLQCh4RbBxyI2nK/+HV9AhgKAg9MriJPNZQn4NIfYMpbo04iItmMXcDRxHgOjHGb3iQgCgEY7mNxoyPxZWKE5HDVGhgKAsTOcNGaipU5OwSdEAy4g+YRIwBvi15cj2Y7F7OCCmxGEOxqnxrC/V0QQANagLIm8//MUmsJRc2QoAOwLVG9Z18oK2UBbE31CHH3jiPYjI+hEov0QsVdiidgXoCkA4WNvRmwsELd+l1ZqDkeNkaEAIHliVeLYmWh9Z6ZS5oJ1KQwr6BMj2l8+dPMx8bvgLGPnWD78C5QFADHMXxMbCjG/kUpN4ag5MhQATJbzCv9GGj9YLa+fgF+YF0aSfEJo697I9iOMdTFxXkOBu1ti+vA5tAQgKOUQ4SfEhkqiAzvSRG4CAIRDU1btLLyotUcCPqHc9e7EeQGX3OaLaD92ZqsV3LR2RDaWjeXD51AUAFT9PJCpksK7pZGmUmwOR42RqQDgdbBRpDGEcMkxCfiExeHCwr+S/EIIZcfIPrAvtuLbnBDTh8lQFAB23R+sXnZTbApHzZGpADCzZpBAcam1T0AQttFEv6ImhoTzzS2J8xvqAz0X/ZBeQwDCFml1YuOUjyrPpNwcjhojUwFg3kBFrHm0tU8AOcW1LK4WNTpADs+BeNRqs5g+aAkAu4Rq1JN+Rz2RqQAgFXQn0jiCX69Y+wSEW8HrEecIxNCXi+wDuzxE/B2akgBAGf9M/rjqLwA56o1MBQC76bWIYwkHpnMm4BcynOYSTiD5hRDxdyP7gLOMRQtuogtK3MwazQm2AARl34TYIKj6d2OEpnDUHJkKQFmDhrmYWtHaLyCkg15N8gur5wuNfBhB/D5xi/YpCAAOrS4kN8gOEZrCUXPkKABAqAr6Bmk8Ic68hbVPQMgU3I/kFx69edLABxwGb0qc7+LedWIKQKXmN6tudnlNesZIzeGoMTIWAGTUPUgaUwiV7G3tExDePPgqcfKcaPE+SAh5/4noB2qdzRXFeLIAsNUQVT/PjNIQjtojYwFAzvm1pDGFhIpjrX0qESbPF0m+YXcz1MAHdn0gRD12iWI8WQAQ/jmX2BB4xWitKA3hqD0yFgBk1Z1FGlOIlf/C2qcSIYZ+OVHc/tvAB+xkVih4N4MRBvp1FOPJAgA1f5XUCMjtfdz8yTRHbZCxACDd8FDSuEJSxShrn0qQzwFwz+EuIz8QpruH5AcYJxuIJQAKeb14wejH6g3gyAYZCwDuAuxMGlc4LP2jtU8lKnV1WPMG4uezGPgBITuA6EeccBZRABAHO4nYAEhXW169ARzZIGMBYC+uxlu/C1BFyHJi3QdA2HgdAx/KMtF/J/mBUN356oYTBQBboEdIzqPE68PqzjuyQsYCgMllMaIAmGTL9IVwyH0jybcPxbfvG/mB+kZ3kPzAecKL4svUqkYzBCAcgixV8A5BEP45XNVxR3bIVQAA8Q23ZlmPkGCVvJK1TyXIdYHMXgxUCAPhO62uajRJAOD4vkTHEf5ZQdVxR3bIXACYuebxi471A3L1AEQP7jfygx0GwkL4KFWjSQLAfOEH2T9jvO6/o11kLgAIsd5PGmNJlVavlLtgTZzjrd7YDWGgu0h+IKvpdlWDSQKAQ5y3SU4jl/cUVacdWSJzAUCc/DrSGMPKcpi1T1UQvx2I0MmqRn4gnHUUyQ9wgvgyh5rB3QpA2L6tS3TYn310dITMBQCXLM8njTHcsD/d2qcqyEXVolcGrfiBtNZVifMhwnVbqhlMEACm4uEQeaw4PL2aw45skbkAIM36ONI4w03TK619qiLMI8OIAmdWQoZ8XgNfzlAzliAAzLcxk+uYjvogcwFgJlogtnyLtU9VhDpimxP9042d9+8LsyQODrUfUjO2GwGoPOrwLslZbN32VHPWkTUyFwDcBt6ONM5wG3iMtU9VVB6K/wfj+wlftUokCd9qKOlbgXjEZ24VY7sUAMT/1yE6igsqQ1QcdWSPzAWA+TIY/HvN2qeeCKGTF4hziclltyBmCwk/JfmCc4CtVIztUgCYcbvkViWOeiFzAcBly2VIYw2ckNo7G+Sy16bJJCFt9z6SL3qZkV0KAD7YNSQncdhxtoqTjkYgcwFAuHU+ogAgrLCAtV9VhIPuU0j+mT58E3w5meQLzjTuVDG0SwHAlu0VkpN4BOFbKk46GoGcBQAI920mkcZbcrftxb/pxa49SP6ZprqSD7XBcSqX2zoVgLAlXZLoIGJ2g+kOOhqDBggAFlwvkcZbcvdtyGeKePfgt4a+YMc2b8Gt38SvC9SFAOCke0eScyYPOjvyQgMEgFlx1+T5xP4QJs35hZ+R5pRnjf1hngPoVDntQgAQ4/pvknOo4Hch3TlHo9AAAUCdmVtIYw4x8r2sfeqJsMt5meQjzjlmN/QFT3n+lDhH8p/y7EIA0BlvzrkzOuqFBggAyiVcSRpzydUDAsK8Morko+mjUuSX3HQuhHUhAFDq10nOIb61Mt05R6PQAAHAivJs0phDauFJ1j71BNlHhLk2N/SFfU6K1N2ZqUZ2IgDBsSWIjr3l9X8c3aIBAoCw6wmkMYcsmXOsfeqJUPLihyQfEVn4nrE/zJAWFsqrUQ3sUACQ4rQ1ySnkuN5GdcrRSDRAAHDx8lDSuEPdrcusfeqJMLdsQ/IRu5wTjf3BXanriYLGrXLaoQCgIx5BcgorkZ9QnXI0Eg0QAOTJ70Mad6Zpkn2BXE75r9YiF3ZtxxPnSu7dhg4FANXufklUNS8A5+gaDRAAHCruRBp3erdLu0AlFZTxvri5j+GbbU/6ZhDtG6gGdigAyG99gOQUP67laCQaIADM26XIKnnM2qfeEG48v0X6ji8a+4Lz0mVJ3wz+vEA1sEMBYF5Jx8n2LFSnHI1EAwQA4ZG1iZNJcj4CYYH5cC7zS5gvskJsBgAAIABJREFUx5P8wd2GOWnGtSsA5Awg3NZ7nOaMo9FogABg7C1PGnv/FB97f+TbGOSqoLgLsKSxPxC0u0n+IGKyBs24DgQA9To2JjmDTISrac44Go0GCADqzC/CEoBCI6+cgHAX4EySj6h5tI6xPzgz/QXJHxTN3JFmXAcCwMxEQJrWCTRnHI1G7gIAiI9fIQoAwglzWfvUEyHL8BCSj7gMtnUC/rCyJnGD+3CacR0IANKaTiU5gwyg3WnOOBqNhggAnmD9kDT+UIF3IWufeiIsMr9DnGP+y9gf5nOe3LppHQgA6pH8muQMtmfr0pxxNBoNEQAcKL5DGn+Ijy9r7VNPkLOdsGI+0tgfnN2sSPIHqa230IzrQACYBxpYgSxMc8bRaDREAFBaYCxp/CVZgytkO61B8tH8omm424DQHeONYCTOPE0zrgMBYNa2wCs309CccTQaDREA+Pg0UQDWtvapJ8Jh92IkH5FocnkCPjFfT8Th/bQUwzoQgLlISoaLKI9QnHA4BjVGALADf5Q0keCAdDNrn3oDcZ7B7dlRCfjDjpwsQjGsHQGY+N67iGUtTXIiyVokjvqiQQJwL1EAknoVrATxNjAWmg8n4A/OTn9F+m7Yua1JMaxNAcAdgHVJTuA0+3yKEw7HoMYIAC5J3UQag8gp38Hap94QvuWYXL4l+QVFXmprmwLATGfC6fxwihMOx6BGCcBvSWPQPEWyL4SXwe5g+JnCjefwzsEByX23NgWAeQnMn4F0UNEQAWCmYWMM7m3tU28IQncDyU8cms5k7A8WzzuS/OGltrYpALjRNpzkhPkNPUdecAFomx+Kn/tb+9Qbgp8jSH7ixvM8xv4wS+ggtfUMimFtCgC7RodfAnPQ0BABQF2ZC0hjECvJQ6x96g1kP5E1s6ixP8zLYLzX3NoUAHyUS0hOmFfpc+QFF4COBOBQa596QygIdxpxrlne2B/cbViI5A/vYZg2BQBxuetITphvyxx5oSECwNyFJ1uMMRRQO5rkJ9Im10rAJ9xt+JjgD8pBjKYY1aYA0E7mi9bBzAwUJxyOQY0RAGY6YcoCgKyZg0h+4rxx0wR8wm3g1wj+8N5RaVMAaLcQxYE3KA44HAENEoBTSBOjeZ2cvkAuO4/7Dtsm4BP653Ok/vkSxag2BYBVhwQK9izFAYcjoCECgNDIUUQBONvap94QBGBXogCYX3hjlvGg3W1oUwBYlQiTfZDaUV+4AGQlAMibH0ryE/cd9kjAJ4TQ7yL5hBD6dF0b1aYAoD7HOILxOMS4k9CmDsfncAHISgDwJsBWRAEwv/BGLuMBAZita6PaFACcYr9PEoBbCW3qcHwOFwAXgMQFgHmJD1mU83dtVJsCgEcNPiMYjzzW6wlt6nB8DheA7ATgm0QB2CcBn5gCwHnOswMBYBjvAuCgo0ECcBhpHKIi76XWPvWGUDphfZKfSdx4DgJwKVEAun9N0UgAeFeZHY6AhggA8uP3JwpAkuMwUwFg3uLG7eblujbKSACS7XiO+sIFIJ9x6ALgAuBwtAUXgHzGIflheAjAUQn45AKQesdz1BcuAPmMQxcAFwCHoy24AOQzDj0ElLcA+CGwgw4XABcAF4A24WmgjlzQEAFAGujhRAHwNNB4PmWRBuoXwRxJokEC4BfB2qNfBOsLXgrCkQtcALITAC8F0TdNSkF4MThHsnABcAFIXABqXwzOy0E7koULQFYC4OWgpywA0ctB+4MwjmThApCVAPiDMP3Q6kEYfxLSkSwaIgB4EvJUogD4k5DxfKr9k5D+KLwjWTRIAPxR+PaIR+E3S8Cn2j8Kj0OM35A+Ck6x56E44XAMaowAzCT2ndUAAUCo62iSn5PEz7US8AlZlB8T/EESzWiKUW0KAG6yXUL6KLjJtiTFCYdjUGMEgHmbFBekDrX2qTcEoTuNONcsb+zPVGLHQiR/cI/qtxTD2hQAfJQzSU68J06sS3HC4RjUKAG4kCgA5jdkewNZ6HBpalFjf1DcbiWSP7wSHm0KALZlw0lOIC63NcUJh2NQYwSAeZnoQ/Fzf2ufekPwcwTJT/NwcyhtsTHJH97hfZsCwDyZR27uXhQnHI5BLgAdjkHzC1K9IVyauoHkJxJOZjL2B/cadiT5g53bkRTD2hQAOLEd0YnhFCccjkGNEQDmxAgB+C9rn3pDuDRFyTik5cx35w+ymg5M7ru1KQDYxqxLcgJxrPMpTjgcgxolAKxyAklckOoN4VuOyeVbktN3eeHzNgXgS/LjS5Oc4J1kOxyDGiMAuIx5H3Ei2cbap94gfqLu2FsEH1F25pEE/EHo7lek74a01jUphrUjAOPHjy9zWT/N5cM48kGDBIByG79I5IJUbyDOM1hojkrAH3y3e0jfjfMWANCBAOA228skR8aJI9NQHHE0Hg0RAPj4DGn8JXFBqidCzvxiJB/x+uAVCfiEefMVkk841J6WYlgHAgAluzs5JXM0Hg0RAFZF3lIAVrb2qSfID8IjZfIMY38GiR1zF5wdDcpAPE0zrgMBYKah+WUwBw0NEQDExieSxh9uyC5r7VNPhLcANif5yEuZ7Nwf5iUwlIG4hWZcBwLArEaIdKbdac44Go2GCABi4x+Rxh/nWUEyQiXQ7xDnGNP7RuEOwLdI/iB78gKacR0IAPMyWLLFqBz1Q0ME4CuksQfihuxc1j71RCgEdwjJR/NMp+DPkSR/sKM5jGZcBwLAvNKMA5qrac44Go3cBSAcjg4hCgAOE2e29qsnQiG4bGqOhbpGl5D8wd2NHWnGdSAAuAuwBMkZXl1rR+PRAAHA2FuBJQAp3JDtDeGy27UkP82rDpNTQHFwvzrNuHYFIDiEg6hJJIewCpmF5pCjsWiAAGD3vQ5p3MHHF6196g1hwnw4l/klzJfjSf4gbDcnzbgOBQAf6AGioq1Gc8jRWDRAAJAdswVp3OEi5mPWPvUG4i1g8+8Ydm3Lkr4ZIibPUw3sUAAQ0/olySmc0u9JdcrRSDRAAJBNsjNp3CGd8E5rn3oi5MzPj2+Qg4/hm+1A+ma41XwD1cAOBQCn2keQnEr2YWpHvdAAAWBm4GEyud7ap54IOfOrknzkPZzSuT9Imz+BOFeeTjWwQwHAVnRrklNQ6duoTjkaiQYIABZew0jj7lPrybE3hLllG5KPSDM/ydgfHGhfT/KHHy3pUACYmUDgW+LY9FTHHI1DAwQAq8kTSWMOq8lzrH3qiVA3/4fECfN7xv4wa6fxz0s7EYCKY68THUuuJomjXmiAACA//hzSmMPq+ERrn3oi+Hg2yUdcAtvC0BcslJck+QKOp9/b6EIA8GLPzSTHzK9rO+qPBggAs6Y8bpQOs/apJ8K8MorkI+4ArGDoCw6AdyH5gqytP9CN7EIAmC/c4LDmQrpzjkahAQKAyfFW0pjDouu71j71BDlkgpz52Q19Yd5oxhz5c7qRXQgA85Fj5Lc+SXfO0Sg0QADYj8EMtfapikoK6GekOeVZY3+Yr7d9KP7sSzeyCwFgx7dQmXAw3UFHY9AAAWCujlEjZ31rn6og33Q2fXI2iNm8wo9J/uhcmO1UAIKTzA6JIkfb0R10NAYNEACUgn6fNN4QH1/e2qcqwj2HPUj+8XPm2/OFeWsbxOuJM9IN7VIAkON6DfGDnU130NEY5CwAYUU5H3FCQXx8AWu/qgjniqeQ/MMZx96Z+IK7UrerGNqlADAvpnhlUEdXyFwAmDVlQBRJm8HaryrIVUAR4trA0Bdm/B8pu6eoGNqlADBjdiDOAYaoOOrIHpkLAMbauqRxBv/GWvvUEyGk/AJxLjF57Sy82zC44LwBDOLAfksVY7sUAGxLEZd8l+Qotm17qDjqyB6ZCwDzWcHkdtth0lwYtjG+n3Cs+DiVkS/4VkNJ3wpEuG5uFWO7EYDgLLZtN5EcRX2Sy1UcdWSPzAUAJRL2I40z7sPiBJAfgod/dxj6gmrJ55F8wQWwB9WMJQgAzgGOIjkL5X5VHJ5OzWFHtshcAHCoeDxpnCW30ArzyGEk/5BQcpahLwhlvUT0Ra9aMkEAmLFJEIc3/6HmsCNbZC4AWFVeSJxUzFIke0MoczGC5B9Cyf9l5AfKWa9GnA8R//+mmsHdCkBwGi/4vE1yWO/E25E1MhcAZllh1AE6xNqnKojfDsSlqVWN/GBGREBka/2bmsEkAYB6jyQ5jEOgMVYHOI76InMBQFrhg6QxhhXybtY+lQgHwAsI/07yj181c+C+4DvdTfJD/60UkgDggGpfouold0vRkT4yFwBmXBlh1k2tfSoRwsibkHzDoen9Rn5AyBYnChl2akeqGk0SAFxSWargvONZOn6YquOO7JC5ACDd+q+k8YUQyUrWPpUIYZPhJN9QNfMCIz+wED6A5Ef5nXRDWQwBCM5j6/MwyXGd2teOrJGrACgUXkRe+fzWfpUI5xs3knxD1czvG/mBct13kPzAYvoF8WVqVaOJAoA0tZOIndTDQI62kLEAIESyAXFsIUY+rbVfJUISyQSSbwhvrWPgAzv8g53MeeqGEwUAnXQ9YidFGOjH6g3gyAYZCwBuln6bNK6SentDIW0S4jabgR/s8A/SP7dWN5wlAKERcFD1KqujCh+XRviSeiM4skDGAsC8JIU6+aOsfSqhcMP5biM/EAK/hygAb4ovs6obThYAXFY5l9gIOARZS70RHFkgYwFgPpSO0MJF1j6VCCnkl5N8wx2i0wx8wBnNigUvCQY3tUdEMZ4sAKjnsSlRAHBj8adRGsJRe2QsADgkvY44SR5j7VOJEDV4keSbyTOXCuefeBxr5yjGkwWgrA46jtQQUNRXVF7CcWSHjAUA4YWHSGMKl8D2svYJCCvnrxInTpNnZcl3NMC3xY85oxjPFACAXLOkVMMdIjSFo+bIWACQJcNaVGGV/J/WPgHk+D8Ot58y8IEd9UD456poDigIAPNWH4hDq99FaApHzZGjAIT0woWI4wnp1StY+wWE+P/VJL9wtvFzIx9+Rfw+WPBuH80BtgAAYUv0Z2KjYGu3uHJTOGqOTAUAaZJrE8cSLoHNkYBfZbiYlf8fvQJoEOdFhZ8Qv0+c7J8SSgKArIWfEBsFB1cnKDeFo+bIVACYdwDg18vWPgEK94aws1kusg/syp/YxVwc0wctAcCqZXViw+Aw+GVpnC8rN4ejxshUAJiTDPLk77T2CSDX/8Gdoedi3hkKOxhEOp4nznPxi/RpCABArg0EfpBSCVtHeshUAJBUcRFpDGGFeYm1T0ComzOa6Nf5ke3H4e/WxPkNIvZM9BIdigKAE/4DiQ2EGht3+zsBjr6QqQBgovw9aQx9lMIdgMoD8J+S/MLicKfIPuC7jCLObwhzHxfTh8lQFAB85CEF94DEn4t09IlMBQBhhj+Rxg8OSndPwKfpxZY9iPMCDrYXiGh/GeJm3fwFcYaxTCwfPoeWAAAhRerXxEZCjuxIpaZw1By5CUCIM89X8CpMJrGAIr8giNLx90W2H2G5i4nzml19JmUBQJxsM2JDlUq5lFJzOGqMDAUAK801iGMH6dSLGPsEUZtbOInkE0InJ0W0H7eXl8DvEr+L3WVXTQEAyI89g6gPdK5CUzhqjgwFgJkCCr4lfk1j7BP78BS7mk0i2o+6PycT7UcY6SWzcjcRBADpXgcTGwwcb1Hzw5E2MhQATDbHksZM9FBJHz4hfHIBcS54M9YD8OFcc7DwXaL9UXcwX0AEAUCjLSL8gNxo0cu+OtJGhgKAWPkI0phBquRlCfiEQ+2xJJ9wJviriLZDkI8jzmMgwnKLxfLhC9AWACCo/nnERsO26Q1puHnIzeGoMTIUAOZdGqSAHmXsD27/bkScB6LdDQoL2QWEbxPtjypgvSKSAOAwa+WCmzaFXcCp5OZw1BgZCgCqgLIOS82r6io8GDVBfJo3ku3ssg8gzi82iGF/n4ghAEB41OImcgOOkwZckNgcjhojJwFQqJWP1/W+ZugPsn++InyL5M/fY6VOKq3+PxPeb36xNaIA4PT/G2QBQEbQ6cTmcNQYmQkAMoC2I44VrJZnN/SHnf3zofjzw0i2a8T+sSPbJYb9/SKWAAAK9YFAZAQNITWHo8bITACoxdLEn2eN/cGB9mXEcY/7QEtGsBur/6LgheImfw/h02L/dNr2TxGRBYCd1wwm9ci1ww6ZCQDzFj1umv7G0JfyRjNrEkVK6x8i2Y7S9v9DnrOi7V6miMgCgI6Agy1mCdVyNbA8qUkcNUVmAgBfniCNDyRMnGjoC3vhh4ymH0ewG+cwy+D3iLaXpe1n07Z/QIgpAECoEro/WQCwwrme0ByOGiMXAQgLpXmEfyWND9N4c0gAuZE43rHgWzqC3diFXUmeqyBeR2rbPmAYCEBZC+QVcsMm89i1wwYZCQD7QSVkAK1s5Eu5imYVtEP2z90R7MadhfULbuo6/tfYFJ7k/ByxBQBQ2gUgreqh6A8qOJJBRgKAcsl7EccGMoBmMvKFWc4CjBI/Dwkr95HnqCihq7ZgJABauwB0jv0pRjpqh4wEAAeP55DGBA5MHzHyozzze5k4xidq1wELArw7eW5Kb/UPWAgAoLQLQCO/Ko08H81QR22QkQDgtam7SGPiU6saQCH3fyvi+MZZ303KNpeXvlj1ikqmFfsvYSgAWhlBSAu9kGaoozbISACYJSAw8Qwz8gOHv9cSxzZeNNtT2Wbsvn5KnpPSyvypwkoAgLDV2o3c2CBqbKxLNdaRPHIQgHAA/DXiWDBJjggr6cUL3ru/IEq/zKVoM9p+TeHfyPMRQtMHatndFYwFALsADNrHyA2OA+GHpdGnpxrsSBqZCAA7/jzRol6WQvkE1XLWlbnoXvJcVN76NTmEnyIsBQAIccItyY0OYut7BN1gR7LIRACYIQiUgHjOwIcyyeNN4njGrn4jRZtxJvl9hXkIdzC+rWV317AWAECpUig43t8Pbg4yEQCkH95N6v84AB5p4AN2MXsTxzFW0U+IL1Mr2Yu7CksX3Je+QEQi7rV+hrNfJCIAiL2tVvAui5TE/7st6Q/goKHuAlC5Afwhqf+b5J0HEXuUOI7hxyGK9motQLFr+bqW3RSkIABAeCziIoWPkO4BjIOKDAQAt0/XJfZ9HAB/M7IPCOluRh7D72idY4TdyncV5h3svq7SsJmKhAQAWQOLCicqfIxxHgrKHxkIAOLQBxH7PQ6AF47sA1bTvyVPpCrPJobQz5JKcw7Cz0to2E1FKgIAKAyAkggF3ZlE/W2HGjIQABQfu4LU56O/AVBJYf2MOHaxi9lcyV5cuLtZYb5B9dXjNWymIzEBKC+HjVH4KOnV4XBQkYEAzFHwLkZi5Xx5ZPsRxv0lcczi8PdJjfpeiotN2Pys2Dwr22YVpCQAQIghblpwq/CVxJZ4dXUnHCaoswBULk6x+j3Ovg6IaD/CKSsU3EtU8OEHCraWSScfK8wx2LEMZdushtQEAAgriUuU1Pkpy7dRHXqouQCwH01BCeh1ItqPMftzov1l8TTqWK08Tv+4wvyCWkXXMu1VR6ICgNXQEOF4hY+keqPQYYeaCwAugP2M2M/fFh9mjmQ7Vv/LFrwHbEDE0U9TsJXdzlUi2WRxts2qSFEAAIWa6FWqF5VyxEfNBYCZO49HU+6KaDtW/+eRxyjCtYuR7cQuaxelOUX1roIaUhUAIJzS36r0wZCmtVJUhxyqqKsAhB3vIgUve+YTsf/0SLZj9b9UwX03FwfYI8h2Iu6/YsGrslolsgzvqeVjVIkLADrXcsL3FT5aeb3czwMyQY0FACvT7Yh9G/Vnto1kOzv2D+IG7X8QbSxrE7GLTpacWNvFZMoCAIR0rQOVPhxK1V6lVWPEERc1FgDEpc8g9mvcnF0ggt1YVa9ScDN/sJq+Q+yfiminVlIJiLOKY1i2RkcNBADqjfjoaKUPmOZLPY62UWMBYMb/8QTkY5HsZj/4AiKNciuijZoLSITsHqh12fnUBQCohILeU/qQ6HRbmjjnoKGOAhDi/4sVrZAkoy8j/n92BLtRt2hDhQn1PrH/SyQby7pE7AdeSmKntSLDVjPUQQAAhRKz/zLghW/Ix/yqmYOOrlFTAWA/AIP4/y4R7Ga+W1ySdomqsmjUSCUHETk4jGGrKeoiAEDYcl6v9EHLa+fzmDrp6Bg1FQB2fBoHkkOUbcah9bbk8YfV/0OM0u1hVzW/8AmluQLnFL+vZdZPT9RMAPBhC+Hryh92RlNHHR2hpgKA+j8vk/ovCsA9oWxvmVHDqllUEjuXHUj2oR9o1Pef3DeEr2mLbDTUSQCAENfbouDFTHsStxkv8cyg+qFuAhCyaFYm9l3E/89RtnlG+Z3h5DGHsTyGsaIOO6oLlOaGUqh2ZLRlEqibAADhwelTFT8yUrtOsvbT0R5qKACYTIeRJye1/P9KyYe/KEyqXZ9bhPY8THFeQBmZCxltmQxqKgBl2ej7FT82KhHua+2rY+CooQDgIPU2Yp9FVsrcivbivYKryeMMsf/7u439h8P0PQq9yEB5RhGlvlI01FEAgLAaWabQO+UHsTLZ3tpXx8BQJwEI51kLFbwCaqr1fyqhV/YYQ+bPfxJs26bQS/dE3B+F3pZjtWcyqKsAAOHDb1XoqT6IsrqbWvvqmDJqJgDs8s8IWx6nZGt58PsMeWyhfPJNXdqG+wgbFfywVJVYCO7Gas+kUGcBAMJ5wImKHx/q/1bM2uqOzlAzAUA45VJiP0X9nA2VbMUYO1lhbE3q5oGmysMuGm/6loxysc4MGQgAVieIpWqlfZUi8EZtCz41BHURgNBn5xK+SeyfSE2cQcFWTLJrF626WcwxhYqfV3Rp19eIbdgbkRZ+W61LPUwJdRcAoBJPZecm9xxkY10E0kWNBKB89pQ5mV6pYGeZbMGqU1QlDqyX6tCuGJM/wsoviI0Lsts1KeQgAEDoFKsWevWCShF41UUgTdRIAFD98xxiv8QDR7sr2KmR8w92/F5BpcTDG4rjvBSotdltmhxyEQAgHKx9q9A9FPadQKKokQDg9u+fyZMVtfxzZUH1CXn8lCvrtt/hCJP/V4WvKE/+f8n20LcnchIAIMJlEBeBRFEHAahkrbD6ItI/R5NtLEM/DymMnY4yaiKFfUBkU53MbM+kkZsAAOE6+MURROB1zw5KBzURAIR/fkLsh6hKeQTZRmT9nKIwZspaW22Vew6iiYPot5XHNA66RzaqDEymAoAVDLbZd0QQgXF+TyAN1EQA0C9fIvZBpFKuTLQPk+3Xw2TNHi9t21p5d0Az1bMUp9Fi3yystqwFchQAIGQGLSh8UrnjgBNZdcwdnSN1AQiT2SbEfod4+uOs5xMrj9MzzydK4uD3zDbtKS96fqA8ftGOfxT75me0Y62QqwAA4dBoKeHYCCKAg6PvWfvcZNRAABCavIjY56jx6vDexnUKYwM75T+JrXO1YQtq++xZ6JV3qNqGzL5lWe1YK+QsAEA4PFq90N9CTh6QwuOYD1o7Bo6UBSCEJecRvkPsb13dpO1hH5InDlYaFzj43alNW46KMF4x+b8ttq3FaMNaIncBAMLWe2PhhxE6VfmegD8qExmJCwBSlHcg9jOELZ5mvJ9bifuzb/uCWMH/ZiCLoiCS2IWcG2GcghDQzbttv1qjCQIAhHji1oX+lhLEgdKt7Wx5Hd0jcQHAxPYbYh/r+DJVD7sQJsWj9K8pjIOyhMoUX8+qPOM4KtLkH+Xt5OTRFAEAQlxxt0L3olhJ1A9/QjrZMtZ+NwWpCkCY3BYvuCvsSd2mIFfy/e9WGgM4F9t7AHaUF7yejjT5+3ldiSYJABBEYJ9IIlBWEm32NjMSEhYAdkwbffeJbsM/CofSVWKn/bsp2Rh25gjPar7rUSUeejqwm3bLCk0TAEA63QzSEfaL1OHAj4SHMuK1jr6RsADArmeZ/UnsG96lTRgDP1Lq72V10mIANhxU6Jw99NVuP+6m3bJDEwUACKuyQyKKADr5rzupgeIYGFIUgLDC/U9yX3pX7Fu6C5twIL1toXPZC0R8/dv9/D5CYiiHPSLi+PPJvzc0VQAAAxHAucCYLJ+WSwCJCgAefvk1sQ+h9s+dXdiDtOg1C73LVXg4/bJ+fr+M94/xyT8BNFkAgLAN/UER50xg8uRStKo3NqPaYESkJgBhslu64IY4EMPetwt7NEspYww9I/bN0cfv4/wNz2BO8sk/ETRdAIDIB8MlcV/gIumcs1r7nwsSFACNomrjxbZ5O7AFYZchwucU+zQyk9br47dRA+nnEccXCLH8UbffMWu4ALQQRGCPIs49gZJlSGgVa/9zQEoCEFIs5y24FSzx8tfIDmzBBDyf8GHFvoyV9uG9/HZZxpnxXdrhgFJQGw8XgP9DOBwbWvAfwZhiZxUOkw47jXUb1BmJCQBCi98j95P3200pDpM/hOgexf6LRdNvq2WUgwBiB4TyEh9FHk/v9XcI7ajABeBfEbI2ULFR82nJvgYRaqUvbt0GdUUqAlApR/4UsX8gPPlUO4uEyuPzmrdrYddz1bBUpQijdjn2L3y3ohUi83s3A4ULwBcRtq1rCF836MAoWvc9vzPQPhISAHbdHxAhlkPbsCHG5A8ioWHNyu8ilLp3EX8BVb7St0an362RcAHoHWEVs0wR73p6ldgNjPLdQHtISABmL/jx9gkDffc34uT/eZy9suq/2WC8lIXxvOxKu3AB6BshfrqQ8C6DTg0iXe4g6djTWrdFHZCCAFQeMWH2g35z63v8fnngq91nUYzu3B6x/r8YjBFcZrtLbJmvk+/VeLgA9I/QwTGxXGbQucsO/iCr7nvOSEQAsPpnF1fDoeaGA/htTP6DhY9G6JO3ClFLaLVC5/H4gRD3K66Stpm5k2/lGOQCMFCEnO5jirh3BapEZtLPvMR037AWgLD634b83ZEq/OAAiqohBLNswa051Bv/Edp4+aJVt1+rnMSUiMeXTm7UA+4acAEYOMLh3i5vIGDBAAAHfklEQVRFnIdlep2YitbB9F6eMvpFWApAJfPncfI3R12dXafw23jQZS3hmxH6H5IUzim49xva5btTahPHAOEC0B4qT0y+ZDgAsCp8SAbB+tbtkRKMBaC8SMj8zlhtPyu2zNDP72JRsl2h/3B6SasVf9keL1WzjhxdwgWgfYRY68LC2w0HA4gY6DXdVIbMCVYCEFb/cwtfJH/ffmvXh2KGhxd2YcmYhPDcLu2xIKe3OCbDBaAzhEGPSo+nF62tseXgQDz07KYPDkMBwER8NPmbok+92lv58Eo55SsTmJhjEOdfZ0pbTM/tMQ4XgC4RtuDbF3ErHPY1YcCGk2SgzG3dLhawEIDK4Ss7BfJjseGEfn6PfdaQIsvKuV7WQQsuAN2jUuNcO/1uoINmgnB4X2V5c4WRAGAXeLXCdxzXc0cXFhs7FfaLjRgsz7k8vKkJFwAOQkgIOeDnJDB4SiF4t2jtCOaxbp8YiC0AIe1za4Vvh0tWp1d+pyynfG4C/SoGUSr9fGmDmXR7jMMFgIzKc3sTEhhIpRCgLstPZUAtat0+mogpAJVb4mMVvtnnq/9KiqdFSRKLvvqW+L59nB7jcAFQQAgJLVa0bktaD6oqcZh2hQywVa3bSAORBQC3YC9W+EaI/Z9WSTI4roj3aLolUf/qVvF9kUjdxQG4AOggDGBkhxxUxK+HPiUipe5e4Q4y4KazbisWYglAJfee/V2wAn5NuIBw7SLuu7mWxB2GQ/xyowFcAHQRLo6tWOi+xtQpkT+OEMYxMvgWtm6rbhFDACpZOO8ofA+k854p/FnROgS17h/axELkAWnrFWL3FUeAC4A+wm5gJuGRRfzXxgZKHLzdINyqrrsCbQEI33FO4f1K3wA7AKsyI7EJP4+ua1/LBi4A8RB2AysJH0xgAPY3CY0TniGDc0XrNmsHEQQAIn5WAt+ozpwcfvRVfyJwAYiLytnAgUX8V5PaJcIQmFCPqsPjNJoCEN743TeBb1JXlmnJB/j7FgnBBcAGIZa8qPDaBAbnQIiV2yPCw1K9nKMlAOHQd2jRylSx/g51JLKYrpM2LSz7h6MXuADYIkwuuEzELiSmyXJncIpw7VRWdBoCEPLwNynSPbtJmUgyeF7ackvrvuHoAy4A9ghhodmK1oMzdTsELEtPjBDuLoN9sGE7UgWg8rxjrFLLOfF94bH+WlficAFIByEstIRwZGFfYbRTYneAV6mQyri9TADzR2w/mgAUrXz8PQtf+bdLhHtGyHcfEuu7O7qAC0B6CGGH9Qq9dMOYhCA8L7xUuI9wJa2QEVEAwLoKsBVxRnS/fNv1NL6tQwkuAOkivDKFJyjrdD4wEOJmNFJhzxN+V7iaTByzEtqLKQDOgXHyq2XCb03p3WJHgnABSBvhfAB1Z/YvWu8BWw94zYnkFeH/Cs8oWimXXxcuMtAdgwtA9O+FW+T79fdkpSNxuADUA6H6JCa4IwrbB7ktiPDCq8J7itYrWHiF7RDhzkVLJFYWDgl0AdDl5IqdwmF+wJsBXADqhYYLgdOO5cR/hEz8s1mPAwcJLgD1REUI8Cj4mwlMEM48iVAPMqIO8ok/Q7gA1BvhjGBW4X7CFxKYMJx5EBP/c8Lv+ctcGcMFIA8EIUC9mh2FDyQwgTjrSZy33Ccc6vX5GwAXgPxQeUbwqsLr1zgHRqTm4rW4Na37ryMiXADyRbhZvLDw+KIVx7WeZJxpsUzlHF6+QexoGFwA8kclPIRnDG8JA9968nHaEeUacN9iy1QK+TmM4ALQLIRdAfLlUXjupQQmI2ccoiQHDnWPzOH5TwcJLgDNRah2uYHwF8KJCUxSTi6Ruz++aJXcWMtLNTi+ABcAR+XNYrxLgINjL39cX2LSn1S0iu99w9/cdfQLFwBHFeGC2SzCbYtW2YVJCUxqzilP+niT4ZKiFdf3vH3HwOAC4OgLYWfwZeHGwrMLPzNIiWWZbRTO28APcx0dwQXAMVCIIEwtk81ywoOFo4pW7rj1RNgUYpWPV7aQvYMKnEtY9wdHBnABcHSCyrnBRsKTitbt0U8TmChz4sfCu4RHF623l6e3/u6OzOAC4GAgnB3g3QJkFSHFFDsEzywaOMuMnd8Jh4UJf0br7+rIHC4ADi2EkNFSwt2EZxWtev6eYdSa7CGOdxattw22FxYy4U9l/c0cDYMLgCMmgijg4fuhwuFFK+30qSLP8BEm+r8IHxFeXrTecNhCJvrB1t/B4ZgMFwCHNcJ5AgrYFUUr4wiPxyO75RrhQ8JxRbqPtKPYHurp4AxkRNGqu/Qd4XrChXxV70gaLgCO1BEEYnrhIsI1hN8Q7i08KgjFxcLrilZI5fGiVfIAT0gizPLhAFfpuO+AgnmvCJ8Q3i+8uWjtUC4Unly0sp92FW4q/JpwHpngp7ZuH4ejY7QjAE6n0+nMh+YGOJ1Op9OG5gY4nU6n04bmBjidTqfThuYGOJ1Op9OG5gY4nU6n04bmBjidTqfThuYGOJ1Op9OG5gY4nU6n04bmBjidTqfThuYGOJ1Op9OG5gY4nU6n04bmBjidTqfThuYGOJ1Op9OG/x9BCQpFT1mPdwAAAABJRU5ErkJggg==" alt="Italian Trulli">
      `,
      footerTemplate: `
        <div style="font-size:10px; width:100%; text-align:right; padding-right:20px;">
          <span class="totalPages"></span>
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
