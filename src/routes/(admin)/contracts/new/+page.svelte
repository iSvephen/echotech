<script>
    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';

    let error = null;

	  export let data;
  
  const { clients, services, categories, units } = data;



  onMount(() => {

    globalThis.$("#single-select").select2();
        // Add event listener to each table cell to toggle selection
        document.querySelectorAll('#myTable td').forEach(cell => {
            cell.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
        });

        // Add event listener to each header to select the entire column
        document.querySelectorAll('#myTable th').forEach((header, index) => {
            header.addEventListener('click', () => {
                // Select the whole column by toggling 'selected' class on each td in that column
                const columnCells = document.querySelectorAll(`#myTable td:nth-child(${index + 1})`);
                columnCells.forEach(cell => {
                    cell.classList.toggle('selected');
                });
            });
        });
    });



  </script>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">New Contract Form</h4>
          </div>
          <div class="card-body">
            <div class="form-validation">
              <form class="form-valide" action="#" method="post">
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="inputClient">Clients
                      <a href="/clients/add" style="color: #224335;">+ Add Client</a>
                    </label>
                    <select id="single-select" class="form-control">
                      <option value="">Select Client</option>
                      {#each clients as client}
                      <option value={client.id}>{client.name}</option>
                      {/each}
                    </select>
                  </div>
              
                  <div class="form-group col-md-6">
                    <label for="inputContractNumber">Contract Number</label>
                    <input type="number" class="form-control" id="inputContractNumber" />
                  </div>
              
                  <div class="form-group col-md-6">
                    <label for="contractDate">Contract Date</label>
                    <input type="date" class="form-control" id="contractDate" />
                  </div>
                </div>
              
                <div class="form-group">
                  <label for="agreementTerm" style="color: #224335;">Agreement Term</label>
                  <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" id="term12Months" />
                    <label class="form-check-label" for="term12Months">12 Months</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" id="term24Months" />
                    <label class="form-check-label" for="term24Months">24 Months</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" id="term36Months" />
                    <label class="form-check-label" for="term36Months">36 Months</label>
                  </div>
                </div>
              
                <div class="form-group">
                  <label style="color: #224335;">Service Overview and Requirements</label>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="ewasteRecycling" />
                    <label class="form-check-label" for="ewasteRecycling">E-Waste Collection and Recycling Services</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="itAssetDisposition" />
                    <label class="form-check-label" for="itAssetDisposition">IT Asset Disposition (ITAD)</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dataSecurity" />
                    <label class="form-check-label" for="dataSecurity">Data Security & Sanitisation</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="assetDestruction" />
                    <label class="form-check-label" for="assetDestruction">Asset Destruction & Recycling</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="assetPurchasing" />
                    <label class="form-check-label" for="assetPurchasing">IT Asset Purchasing & Resale</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="eScrapTrading" />
                    <label class="form-check-label" for="eScrapTrading">E-Scrap Trading</label>
                  </div>
                </div>

                <div class="table-responsive">
                  <table id="myTable"  class="table table-bordered ">
                    <thead style="background-color: #224335; color: white;">
                      <tr>
                        <th>ITAD - IT Asset Purchasing & Resale</th>
                        <th>Unit</th>
                        <th>T1</th>
                        <th>T2</th>
                        <th>T3</th>
                        <th>T4</th>
                        <th>Custom</th>
                    </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <th>General E-Waste Recycling</th>
                        <td>KG</td>
                        <td>0.948</td>
                        <td>1.106</td>  
                        <td>1.264</td>
                        <td>1.58</td>
                        <td>
                          <input type="number" />
                        </td>
                      </tr>
                      <tr>
                        <th>Smartphone Recycling</th>
                        <td>KG</td>
                        <td>0.541</td>
                        <td>0.623</td>
                        <td>0.712</td>
                        <td>0.803</td>
                        <td>
                          <input type="number" />
                        </td>
                      </tr>
                      <tr>
                        <th>Laptop Recycling</th>
                        <td>KG</td>
                        <td>0.832</td>
                        <td>1.045</td>
                        <td>1.246</td>
                        <td>1.523</td>
                        <td>
                          <input type="number" />
                        </td>
                      </tr>
                      <tr>
                        <th>Desktop Computers Recycling</th>
                        <td>KG</td>
                        <td>1.125</td>
                        <td>1.263</td>
                        <td>1.499</td>
                        <td>1.786</td>
                        <td>
                          <input type="number" />
                        </td>
                      </tr>
                      <tr>
                        <th>CRT Monitors Recycling</th>
                        <td>KG</td>
                        <td>2.003</td>
                        <td>2.352</td>
                        <td>2.598</td>
                        <td>3.009</td>
                        <td>
                          <input type="number" />
                        </td>
                      </tr>
                      <tr>
                        <th>LED/LCD TVs Recycling</th>
                        <td>KG</td>
                        <td>1.002</td>
                        <td>1.134</td>
                        <td>1.381</td>
                        <td>1.579</td>
                        <td>
                          <input type="number" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="table-responsive">
                  <table id="myTable"  class="table table-bordered">
                    <thead style="background-color: #224335; color: white;">
                      <tr>
                            <th>ITAD - IT Asset Purchasing & Resale</th>
                            <th>Unit</th>
                            <th>T1</th>
                            <th>T2</th>
                            <th>T3</th>
                            <th>T4</th>
                            <th>Custom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>General E-Waste Recycling</th>
                            <td>Each</td>
                            <td>0.948</td>
                            <td>1.106</td>
                            <td>1.264</td>
                            <td>1.58</td>
                            <td>
                              <input type="number" />
                            </td>
                          </tr>
                          <tr>
                            <th>Smartphone Recycling</th>
                            <td>Each</td>
                            <td>0.541</td>
                            <td>0.623</td>
                            <td>0.712</td>
                            <td>0.803</td>
                            <td>
                              <input type="number" />
                            </td>
                          </tr>
                          <tr>
                            <th>Laptop Recycling</th>
                            <td>Each</td>
                            <td>0.832</td>
                            <td>1.045</td>
                            <td>1.246</td>
                            <td>1.523</td>
                            <td>
                              <input type="number" />
                            </td>
                          </tr>
                          <tr>
                            <th>Desktop Computers Recycling</th>
                            <td>Each</td>
                            <td>1.125</td>
                            <td>1.263</td>
                            <td>1.499</td>
                            <td>1.786</td>
                            <td>
                              <input type="number" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <div>12 mm non-witnessed</div>
                              <div>Unit price up to 50 drivers</div>
                            </th>
                            <td>Each</td>
                            <td>2.003</td>
                            <td>2.352</td>
                            <td>2.598</td>
                            <td>3.009</td>
                            <td>
                              <input type="number" />
                            </td>
                          </tr>
                    </tbody>
                </table>
                </div>

                <div class="form-group row">
                  <div class="ml-auto">
                    <button type="submit" class="add-menu-sidebar">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>