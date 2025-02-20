<script>
  import { enhance } from '$app/forms';
  import { onMount } from 'svelte';
    
  export let data;
  
  const { contracts, clients } = data;


  // For create/update actions
  let editingService = null;
  let name = '';

  // For delete confirmation
  let deletingCategory = null;
  let archivingContract = null;

  // Set the contract to be archived and show the modal
  function openArchiveModal(contract) {
    archivingContract = contract;
    globalThis.$('#archiveContractModal').modal('show');
  }


  // Resets the form to "create" mode
  function newCategory() {
    editingService = null;
    name = '';
  }

  // Fill the form for editing an existing unit
  function editUnit(unit) {
    editingService = { ...unit };
    name = unit.name;
  }

  // Set the unit to be deleted and show the modal
  function openDeleteModal(unit) {
    deletingCategory = unit;
    globalThis.$('#deleteServiceModal').modal('show');
  }

  onMount(() => {
    // Initialize DataTable (make sure DataTables & jQuery are loaded)
    globalThis.$('#example3').DataTable();
  });
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div class="card">
        <!-- Beautiful, responsive card header -->
        <div class="card-header d-flex flex-column flex-md-row justify-content-between align-items-md-center">
          <h4 class="card-title mb-2 mb-md-0">Contracts</h4>
          <a href="/contracts/new" class="btn btn-echo">+ New Contract</a>
        </div>

        <!-- Card body with the services table -->
        <div class="card-body">
          <div class="table-responsive">
            <table id="example3" class="display min-w850">
              <thead>
                  <tr>
                      <th>No</th>
                      <th>Client</th>
                      <th>Date</th>
                      <th>Terms</th>
                      <th>Prepare By</th>
                      <th>Status</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                {#each contracts as contract, index}
                    <tr>
                        <td><a href="/contracts/{contract.id}">{contract.number}</a></td>
                        <td><a href="/clients/{contract.expand.clientId.id}/edit">{contract.expand.clientId.name}</a></td>
                        <td>{new Date(contract.date).toLocaleDateString()}</td>
                        <td>{contract.agreement_term} Months</td>
                        <td>{contract.expand.prepared_by?.name}</td>
                        <td>
                          <span class="badge badge-rounded {contract.complete ? 'badge-success' : 'badge-warning'}">
                              {contract.complete ? 'Completed' : 'Pending'}
                          </span>
                        </td>
                        <td>
                            <div class="d-flex">
                                <a href="/contracts/{contract.id}/edit" class="btn btn-primary shadow btn-xs sharp mr-1" on:click={() => editUnit(service)} aria-label="Edit"><i class="fa fa-pencil"></i></a>
                                <!-- <a href="/contracts/{contract.id}/pdf" class="btn btn-echo shadow btn-xs sharp mr-1" on:click={() => editUnit(service)} aria-label="PDF"><i class="fa fa-file-pdf-o"></i></a> -->
                                <form method="post" action="?/unarchive">
                                    <input type="hidden" name="id" value={contract.id} />
                                    <button type="submit" class="btn btn-echo shadow btn-xs sharp" aria-label="Unarchive">
                                        <i class="fa fa-undo"></i>
                                    </button>
                                </form>
                                <!-- <a href="javascript:void(0);" class="btn btn-danger shadow btn-xs sharp" on:click={() => openDeleteModal(service)} aria-label="Delete"><i class="fa fa-trash"></i></a> -->
                            </div>                                                
                        </td>                                                
                    </tr>
                {/each}
                  
              </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div
    class="modal fade"
    id="deleteServiceModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="deleteServiceModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteServiceModalLabel">Delete Category</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {#if deletingCategory}
            <p>
              Are you sure you want to delete the unit
              <strong>{deletingCategory.name}</strong>?
            </p>
          {/if}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cancel
          </button>
          <!-- Delete form using SvelteKit form enhancement -->
          <form method="post" action="?/delete" use:enhance>
            {#if deletingCategory}
              <input type="hidden" name="id" value={deletingCategory.id} />
            {/if}
            <button type="submit" class="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>


  <!-- After the delete modal, add the Archive Confirmation Modal -->
<div
class="modal fade"
id="archiveContractModal"
tabindex="-1"
role="dialog"
aria-labelledby="archiveContractModalLabel"
aria-hidden="true"
>
<div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="archiveContractModalLabel">Unarchive Contract</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {#if archivingContract}
        <p>
          Are you sure you want to unarchive contract
          <strong>{archivingContract.number}</strong>?
        </p>
      {/if}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">
        Cancel
      </button>
      <form method="post" action="?/unarchive">
        {#if archivingContract}
          <input type="hidden" name="id" value={archivingContract.id} />
        {/if}
        <button type="submit" class="btn btn-warning">
          Unarchive
        </button>
      </form>
    </div>
  </div>
</div>
</div>
</div>
