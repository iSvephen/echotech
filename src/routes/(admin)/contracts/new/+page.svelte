<script>
    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';

    let error = null;

    export let data;
  
    const { clients, services, categories, units } = data;

    let selectedData = [];
  
    onMount(() => {
        globalThis.$("#single-select").select2();
        
        const tables = document.querySelectorAll('#myTable');

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

        

        // Log the selected cells
        // document.getElementById('logSelection').addEventListener('click', () => {
        //     const selectedCells = document.querySelectorAll('#myTable td.selected');
            
        //     if (selectedCells.length > 0) {
        //         const selectedData = Array.from(selectedCells).map(cell => cell.textContent);
        //         console.log('Selected Cells:', selectedData);
        //     } else {
        //         console.log('No cells selected.');
        //     }
        // });


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
                                {#each categories as category}
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h4 class="card-title">{category.name}</h4>
                                            </div>
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-bordered table-responsive-sm" id="myTable">
                                                        <thead style="background-color: #224335">
                                                            <tr style="color: white">
                                                                <th>Service</th>
                                                                <th>Unit</th>
                                                                <th>T1</th>
                                                                <th>T2</th>
                                                                <th>T3</th>
                                                                <th>T4</th>
                                                                <th>Custom</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {#each services.filter(service => service.categoryId === category.id) as service}
                                                                <tr>
                                                                    <td>{service.name}</td>
                                                                    <td>{units.find(unit => unit.id === service.unitId)?.name}</td>
                                                                    <td>{service.t1}</td>
                                                                    <td>{service.t2}</td>
                                                                    <td>{service.t3}</td>
                                                                    <td>{service.t4}</td>
                                                                    <td>
                                                                      <input type="number" />
                                                                    </td>
                                                                </tr>
                                                            {/each}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {/each}
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

<style>
  td.selected {
      background-color: #224335; /* Highlight color */
  }
</style>