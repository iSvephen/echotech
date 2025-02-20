<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  export let data;

  const { contract, categories } = data;

  async function generatePDF() {
    const response = await fetch(`/contracts/${contract.id}/pdf`);
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `contract-${contract.number}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      console.error('Error generating PDF');
    }
  }

    // Helper function to format price
    function formatPrice(price) {
    if (typeof price === 'number') {
      return `$${price.toFixed(2)}`;
    }
    if (typeof price === 'string' && !isNaN(price)) {
      return `$${parseFloat(price).toFixed(2)}`;
    }
    return price;
  }

  // Group services by category
  $: servicesByCategory = {};
  $: if (contract.services) {
    const contractServices = typeof contract.services === 'string' 
      ? JSON.parse(contract.services) 
      : contract.services;

    contractServices.forEach(service => {
      if (!servicesByCategory[service.categoryId]) {
        servicesByCategory[service.categoryId] = [];
      }
      servicesByCategory[service.categoryId].push(service);
    });
  }


</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Contract Details</h4>
          <button on:click={generatePDF} class="btn btn-echo">Generate PDF</button>
        </div>
        <div class="card-body">
          <p><strong>Client:</strong> <a href="/clients/{contract.expand.clientId.id}/edit">{contract.expand.clientId.name}</a></p>
          <p><strong>Date:</strong> {new Date(contract.date).toLocaleDateString()}</p>
          <p><strong>Terms:</strong> {contract.agreement_term} Months</p>
          <p class="prepared-by"><strong>Prepared By:</strong> 
            {#if contract.expand?.prepared_by}
                <span class="user-name">{contract.expand.prepared_by.name || contract.expand.prepared_by.username}</span>
            {:else}
                <span class="no-user">Not assigned</span>
            {/if}
          </p>
          <p><strong>Services:</strong></p>
          <div class="services-section">
            {#each Object.entries(servicesByCategory) as [categoryId, services]}
                {@const category = categories.find(c => c.id === categoryId)}
                <div class="category-section mb-4">
                    <h6 class="category-title">{category?.name || 'Other Services'}</h6>
                    <div class="table-responsive">
                        <table class="table custom-table">
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Unit</th>
                                    <th class="price-column">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each services as service}
                                    <tr>
                                        <td>{service.service}</td>
                                        <td>{service.unit}</td>
                                        <td class="price-column">{formatPrice(service.price)}</td>
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                </div>
            {/each}
        </div>

          {#if contract.remark}
            <div class="remarks mt-4">
              <h5 class="mb-3">Remarks</h5>
              <p>{contract.remark}</p>
            </div>
          {/if}

        </div>
      </div>
    </div>
  </div>
</div>



<style>
    /* Category Styles */
    .category-title {
        color: #224335;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        padding-left: 0.5rem;
        border-left: 4px solid #224335;
    }

    .category-section {
        background-color: white;
        border-radius: 10px;
        padding: 1.5rem;
        margin-bottom: 2rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .services-section {
        display: grid;
        gap: 2rem;
    }

    /* Table Base Styles */
    .custom-table {
        width: 100%;
        margin-bottom: 1rem;
        background-color: white;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        table-layout: fixed;
    }

    /* Table Header Styles */
    .custom-table thead th {
        background-color: #224335;
        color: white;
        font-weight: 500;
        padding: 1rem;
        border: none;
    }

    .custom-table thead th:first-child {
        border-radius: 15px 0 0 15px;
    }

    .custom-table thead th:last-child {
        border-radius: 0 15px 15px 0;
    }

    /* Table Body Styles */
    .custom-table tbody tr {
        transition: all 0.2s ease;
    }

    .custom-table tbody tr:hover {
        background-color: #f8f9fa;
        cursor: default;
    }

    .custom-table td {
        padding: 0.75rem 1rem;
        border: none;
        border-bottom: 1px solid #dee2e6;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .custom-table tbody tr:last-child td {
        border-bottom: none;
    }

    /* Column Widths */
    .custom-table th:nth-child(1),
    .custom-table td:nth-child(1) {
        width: 80%;
    }

    .custom-table th:nth-child(2),
    .custom-table td:nth-child(2) {
        width: 10%;
    }

    .custom-table th:nth-child(3),
    .custom-table td:nth-child(3) {
        width: 10%;
    }

    /* Special Columns */
    .price-column {
        text-align: right;
        font-family: monospace;
        font-size: 1.1em;
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
        .custom-table {
            font-size: 0.9rem;
        }

        .custom-table td, 
        .custom-table th {
            padding: 0.5rem;
        }

        .custom-table th:first-child,
        .custom-table td:first-child {
            width: 70%;
        }

        .custom-table th:nth-child(2),
        .custom-table td:nth-child(2),
        .custom-table th:nth-child(3),
        .custom-table td:nth-child(3) {
            width: 15%;
        }
    }

    /* Print Styles */
    @media print {
        .custom-table {
            box-shadow: none;
        }

        .custom-table thead th {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }
    }

    .prepared-by {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .user-name {
        color: #224335;
        font-weight: 500;
    }
    .no-user {
        color: #6c757d;
        font-style: italic;
    }

</style>