<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  export let data;

  const { contract } = data;

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
          <p><strong>Prepared By:</strong> {contract.expand.prepared_by?.name}</p>
          <p><strong>Services:</strong></p>
          {#each contract.services as service}
            <p>{service.service}</p>
          {/each}
          <p><strong>Remark:</strong> {contract.remark}</p>
        </div>
      </div>
    </div>
  </div>
</div>
