<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    export let data;
    let { contract, clients, services, categories, units } = data;
    let error = null;

    let selectedData = [];
    let columnSelections = {};
    let individualSelections = {};
    let customValues = {};
    // Format date to YYYY-MM-DD for input field
    $: formattedDate = contract.date ? new Date(contract.date).toISOString().split('T')[0] : '';

    // Convert agreement_term to number for proper binding
    $: contract.agreement_term = Number(contract.agreement_term);

    categories.forEach(category => {
        customValues[category.id] = services.filter(service => service.categoryId === category.id).map(() => ({ custom: '' }));
        individualSelections[category.id] = {};
        columnSelections[category.id] = null;
    });

    function selectColumn(categoryId, column) {
        if (columnSelections[categoryId] === column) {
            columnSelections[categoryId] = null;
        } else {
            columnSelections[categoryId] = column;
        }
        individualSelections[categoryId] = {};
    }

    function toggleCell(categoryId, rowIndex, column) {
        if (columnSelections[categoryId] !== null) {
            columnSelections[categoryId] = null;
        }
        if (individualSelections[categoryId][rowIndex] === column) {
            delete individualSelections[categoryId][rowIndex];
        } else {
            individualSelections[categoryId][rowIndex] = column;
        }
        individualSelections = { ...individualSelections };
    }

    $: selectedJson = categories.flatMap(category => {
        const categoryId = category.id;
        return columnSelections[categoryId]
            ? services.filter(service => service.categoryId === categoryId).map((service, rowIndex) => ({
                    serviceId: service.id,
                    categoryId: category.id,
                    service: service.name,
                    unit: units.find((unit) => unit.id === service.unitId)?.name,
                    column: columnSelections[categoryId],
                    price: columnSelections[categoryId] === 'custom' ? customValues[categoryId][rowIndex].custom : service[columnSelections[categoryId].toLowerCase()]
                }))
            : Object.entries(individualSelections[categoryId]).map(([rowIndex, col]) => {
                    const service = services.filter(service => service.categoryId === categoryId)[rowIndex];
                    return {
                        serviceId: service.id,
                        categoryId: category.id,
                        service: service.name,
                        unit: units.find((unit) => unit.id === service.unitId)?.name,
                        column: col,
                        price: col === 'custom' ? customValues[categoryId][rowIndex].custom : service[col.toLowerCase()]
                    };
                });
    });

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append('services', JSON.stringify(selectedJson));

        const response = await fetch(`/contracts/${contract.id}/edit`, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            goto(`/contracts/${contract.id}`);
        } else {
            error = 'Error updating contract';
        }
    }

    // Initialize selections based on contract data
    function initializeSelections() {
        if (contract.services) {
            // Parse services if it's a string
            const contractServices = typeof contract.services === 'string' 
                ? JSON.parse(contract.services) 
                : contract.services;

            categories.forEach(category => {
                customValues[category.id] = services
                    .filter(service => service.categoryId === category.id)
                    .map(() => ({ custom: '' }));
                individualSelections[category.id] = {};
                columnSelections[category.id] = null;

                // Find services for this category
                const categoryServices = contractServices.filter(cs => cs.categoryId === category.id);
                
                categoryServices.forEach(contractService => {
                    const serviceIndex = services
                        .filter(s => s.categoryId === category.id)
                        .findIndex(s => s.id === contractService.serviceId);
                    
                    if (serviceIndex !== -1) {
                        if (contractService.column === 'custom') {
                            customValues[category.id][serviceIndex].custom = contractService.price;
                            individualSelections[category.id][serviceIndex] = 'custom';
                        } else {
                            individualSelections[category.id][serviceIndex] = contractService.column;
                        }
                    }
                });
            });
        } else {
            // Initialize empty selections if no services
            categories.forEach(category => {
                customValues[category.id] = services
                    .filter(service => service.categoryId === category.id)
                    .map(() => ({ custom: '' }));
                individualSelections[category.id] = {};
                columnSelections[category.id] = null;
            });
        }
    }

    onMount(() => {
        globalThis.$('#single-select').select2();
        initializeSelections();
    });
</script>

<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Edit Contract Form</h4>
                </div>
                <div class="card-body">
                    <div class="form-validation">
                        <form class="form-valide" method="POST">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="inputClient">
                                        Clients
                                        <a href="/clients/add" style="color: #224335;">+ Add Client</a>
                                    </label>
                                    <select id="single-select" class="form-control" name="clientId" bind:value={contract.clientId}>
                                        <option value="">Select Client</option>
                                        {#each clients as client}
                                            <option value={client.id}>{client.name}</option>
                                        {/each}
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputContractNumber">Contract Number</label>
                                    <input type="number" class="form-control" id="inputContractNumber" name="number" bind:value={contract.number} />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="contractDate">Contract Date</label>
                                    <input type="date" class="form-control" id="contractDate" name="date" bind:value={formattedDate} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="agreementTerm" style="color: #224335;">Agreement Term</label>
                                <div class="form-check form-check-inline">
                                    <input 
                                        type="radio" 
                                        class="form-check-input" 
                                        id="term12Months" 
                                        name="agreement_term" 
                                        value={12} 
                                        bind:group={contract.agreement_term} 
                                    />
                                    <label class="form-check-label" for="term12Months">12 Months</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                        type="radio" 
                                        class="form-check-input" 
                                        id="term24Months" 
                                        name="agreement_term" 
                                        value={24} 
                                        bind:group={contract.agreement_term} 
                                    />
                                    <label class="form-check-label" for="term24Months">24 Months</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                        type="radio" 
                                        class="form-check-input" 
                                        id="term36Months" 
                                        name="agreement_term" 
                                        value={36} 
                                        bind:group={contract.agreement_term} 
                                    />
                                    <label class="form-check-label" for="term36Months">36 Months</label>
                                </div>
                            </div>
                            

                            <input type="hidden" name="services" value={JSON.stringify(selectedJson)} />

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
                                                            <th on:click={() => selectColumn(category.id, "T1")}>T1</th>
                                                            <th on:click={() => selectColumn(category.id, "T2")}>T2</th>
                                                            <th on:click={() => selectColumn(category.id, "T3")}>T3</th>
                                                            <th on:click={() => selectColumn(category.id, "T4")}>T4</th>
                                                            <th on:click={() => selectColumn(category.id, "custom")}>Custom</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {#each services.filter((service) => service.categoryId === category.id) as service, i}
                                                            <tr>
                                                                <td>{service.name}</td>
                                                                <td>{units.find((unit) => unit.id === service.unitId)?.name}</td>
                                                                <td
                                                                    class:selected={columnSelections[category.id]
                                                                        ? columnSelections[category.id] === 'T1'
                                                                        : individualSelections[category.id][i] === 'T1'}
                                                                    on:click={() => toggleCell(category.id, i, 'T1')}
                                                                >
                                                                    {service.t1}
                                                                </td>
                                                                <td
                                                                    class:selected={columnSelections[category.id]
                                                                        ? columnSelections[category.id] === 'T2'
                                                                        : individualSelections[category.id][i] === 'T2'}
                                                                    on:click={() => toggleCell(category.id, i, 'T2')}
                                                                >
                                                                    {service.t2}
                                                                </td>
                                                                <td
                                                                    class:selected={columnSelections[category.id]
                                                                        ? columnSelections[category.id] === 'T3'
                                                                        : individualSelections[category.id][i] === 'T3'}
                                                                    on:click={() => toggleCell(category.id, i, 'T3')}
                                                                >
                                                                    {service.t3}
                                                                </td>
                                                                <td
                                                                    class:selected={columnSelections[category.id]
                                                                        ? columnSelections[category.id] === 'T4'
                                                                        : individualSelections[category.id][i] === 'T4'}
                                                                    on:click={() => toggleCell(category.id, i, 'T4')}
                                                                >
                                                                    {service.t4}
                                                                </td>
                                                                <!-- For the "custom" column, which uses an input -->
                                                                <td 
                                                                  class:selected={ columnSelections[category.id] ? (columnSelections[category.id] === "custom") : (individualSelections[category.id][i] === "custom") }>
                                                                  <input 
                                                                  class="form-control"
                                                                    type="number" 
                                                                    bind:value={customValues[category.id][i].custom} 
                                                                    on:click={(e) => {
                                                                      e.stopPropagation();
                                                                      toggleCell(category.id, i, "custom");
                                                                    }}/>
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
                                    <button type="submit" class="add-menu-sidebar">Update Contract</button>
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
    .selected {
        background-color: #829BA9;
        color: white;
    }
    th,
    td {
        cursor: pointer;
    }
    input {
        cursor: default;
    }
</style> 