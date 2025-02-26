<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { toast } from '$lib/utils/toast';
    import { page } from '$app/stores';

    export let data;
    let error = null;
    
    $: ({ clients, services, categories, units } = data);
    
    let selectedClient = '';
    let columnSelections = {};
    let individualSelections = {};
    let customValues = {};

    $: {
        // Initialize selections when categories change
        if (categories) {
            categories.forEach(category => {
                if (!customValues[category.id]) {
                    customValues[category.id] = services
                        .filter(service => service.categoryId === category.id)
                        .map(() => ({ custom: '' }));
                }
                if (!individualSelections[category.id]) {
                    individualSelections[category.id] = {};
                }
                if (!columnSelections[category.id]) {
                    columnSelections[category.id] = null;
                }
            });
        }
    }

    function selectColumn(categoryId, column) {
        console.log('Selecting column:', { categoryId, column });
        if (columnSelections[categoryId] === column) {
            columnSelections[categoryId] = null;
        } else {
            columnSelections[categoryId] = column;
        }
        individualSelections[categoryId] = {};
        columnSelections = { ...columnSelections };
    }

    function toggleCell(categoryId, rowIndex, column) {
        console.log('Toggling cell:', { categoryId, rowIndex, column });
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

    $: selectedJson = categories?.flatMap(category => {
        const categoryId = category.id;
        const categoryServices = services.filter(service => service.categoryId === categoryId);
        
        if (columnSelections[categoryId]) {
            return categoryServices.map(service => ({
                serviceId: service.id,
                categoryId: category.id,
                service: service.name,
                unit: units.find(unit => unit.id === service.unitId)?.name,
                column: columnSelections[categoryId],
                price: columnSelections[categoryId] === 'Custom' 
                    ? parseFloat(customValues[category.id][categoryServices.indexOf(service)].custom) || 0
                    : parseFloat(service[columnSelections[categoryId].toLowerCase()]) || 0
            }));
        } else {
            return Object.entries(individualSelections[categoryId])
                .filter(([_, col]) => col)
                .map(([rowIndex, col]) => {
                    const service = categoryServices[parseInt(rowIndex)];
                    return {
                        serviceId: service.id,
                        categoryId: category.id,
                        service: service.name,
                        unit: units.find(unit => unit.id === service.unitId)?.name,
                        column: col,
                        price: col === 'Custom'
                            ? parseFloat(customValues[category.id][parseInt(rowIndex)].custom) || 0
                            : parseFloat(service[col.toLowerCase()]) || 0
                    };
                });
        }
    }) || [];

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('Form submitted');
        
        const formData = new FormData(event.target);
        
        // Ensure agreement_term is a number
        const agreementTerm = formData.get('agreement_term');
        formData.set('agreement_term', Number(agreementTerm));
        
        // Filter out services with empty or zero prices
        const validServices = selectedJson.filter(service => service.price && service.price !== 0);
        formData.set('services', JSON.stringify(validServices));

        console.log('Form data:', Object.fromEntries(formData));
        console.log('Selected services:', validServices);

        try {
            const response = await fetch('?/create', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            console.log('Response:', result);
            
            if (response.ok) {
                if (result.type === 'redirect') {
                    goto(result.location);
                }
            } else {
                error = result.error || 'Error creating contract';
                toast.error(error);
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            error = 'Error creating contract';
            toast.error(error);
        }
    }

    onMount(() => {
        console.log('Component mounted');
        // Show success message if client was just created
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'client-created') {
            toast.success('Client created successfully');
        }
        
        // Pre-select client if provided in URL
        const clientId = urlParams.get('client');
        if (clientId) {
            selectedClient = clientId;
            console.log('Pre-selected client:', clientId);
        }

        // Initialize select2
        if (typeof globalThis.$ !== 'undefined') {
            globalThis.$('#single-select').select2().on('change', (e) => {
                selectedClient = e.target.value;
                console.log('Selected client changed:', selectedClient);
            });
        }
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
                        <form class="form-valide" on:submit={handleSubmit}>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="inputClient">
                                        Clients
                                        <a href="/clients/add" style="color: #224335;">+ Add Client</a>
                                    </label>
                                    <select id="single-select" class="form-control" name="clientId" required>
                                        <option value="">Select Client</option>
                                        {#each clients as client}
                                            <option value={client.id} selected={selectedClient === client.id}>{client.name}</option>
                                        {/each}
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputContractNumber">Contract Number</label>
                                    <input type="number" class="form-control" id="inputContractNumber" name="number" required />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="contractDate">Contract Date</label>
                                    <input type="date" class="form-control" id="contractDate" name="date" required />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="agreementTerm" style="color: #224335;">Agreement Term</label>
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-input" id="term12Months" name="agreement_term" value="12" required />
                                    <label class="form-check-label" for="term12Months">12 Months</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-input" id="term24Months" name="agreement_term" value="24" />
                                    <label class="form-check-label" for="term24Months">24 Months</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-input" id="term36Months" name="agreement_term" value="36" />
                                    <label class="form-check-label" for="term36Months">36 Months</label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="remark">Remark</label>
                                <textarea class="form-control" id="remark" name="remark" style="height: 200px"></textarea>
                            </div>
                            <!-- Display the selected items as JSON -->
                            <!-- <div style="margin-top: 1rem;">
                              <h3>Selected Prices JSON</h3>
                              <pre>{JSON.stringify(selectedJson, null, 2)}</pre>
                            </div> -->
                            <div class="form-group">
                                {#each categories as category}
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h4 class="card-title">{category.name}</h4>
                                            </div>
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-bordered table-responsive-sm">
                                                        <thead style="background-color: #224335">
                                                            <tr style="color: white">
                                                                <th>Service</th>
                                                                <th>Unit</th>
                                                                <th on:click={() => selectColumn(category.id, "T1")}>T1</th>
                                                                <th on:click={() => selectColumn(category.id, "T2")}>T2</th>
                                                                <th on:click={() => selectColumn(category.id, "T3")}>T3</th>
                                                                <th on:click={() => selectColumn(category.id, "T4")}>T4</th>
                                                                <th on:click={() => selectColumn(category.id, "Custom")}>Custom</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {#each services.filter((service) => service.categoryId === category.id) as service, i}
                                                                <tr>
                                                                    <td>{service.name}</td>
                                                                    <td>{units.find((unit) => unit.id === service.unitId)?.name}</td>
                                                                    <td
                                                                        class:selected={columnSelections[category.id] === "T1" || individualSelections[category.id][i] === "T1"}
                                                                        on:click={() => toggleCell(category.id, i, "T1")}>
                                                                        {service.t1}
                                                                    </td>
                                                                    <td
                                                                        class:selected={columnSelections[category.id] === "T2" || individualSelections[category.id][i] === "T2"}
                                                                        on:click={() => toggleCell(category.id, i, "T2")}>
                                                                        {service.t2}
                                                                    </td>
                                                                    <td
                                                                        class:selected={columnSelections[category.id] === "T3" || individualSelections[category.id][i] === "T3"}
                                                                        on:click={() => toggleCell(category.id, i, "T3")}>
                                                                        {service.t3}
                                                                    </td>
                                                                    <td
                                                                        class:selected={columnSelections[category.id] === "T4" || individualSelections[category.id][i] === "T4"}
                                                                        on:click={() => toggleCell(category.id, i, "T4")}>
                                                                        {service.t4}
                                                                    </td>
                                                                    <td class:selected={columnSelections[category.id] === "Custom" || individualSelections[category.id][i] === "Custom"}>
                                                                        <input type="number" 
                                                                            class="form-control custom-price" 
                                                                            bind:value={customValues[category.id][i].custom}
                                                                            on:click|stopPropagation
                                                                            on:focus={() => toggleCell(category.id, i, "Custom")} />
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
                                    <button type="submit" class="add-menu-sidebar">Submit</button>
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