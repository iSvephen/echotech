<script>
  import { enhance } from '$app/forms';
  import { onMount } from 'svelte';
  export let data;

  // Data coming from the server (array of services)
  let services = data.services;

  // For create/update actions
  let editingService = null;
  let name = '';

  // For delete confirmation
  let deletingCategory = null;

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
          <h4 class="card-title mb-2 mb-md-0">Services</h4>
          <div class="d-flex align-items-center">
            <!-- Create / Update Form -->
            <form
              class="form-inline mr-3"
              method="post"
              action={editingService ? "?/update" : "?/create"}
              use:enhance
            >
              {#if editingService}
                <input type="hidden" name="id" value={editingService.id} />
              {/if}
              <div class="form-group mb-0 mr-2">
                <label for="name" class="sr-only">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  bind:value={name}
                  class="form-control"
                  placeholder="Service name"
                  required
                />
              </div>
              <button type="submit" class="btn btn-echo">
                {editingService ? 'Update' : 'Create'}
              </button>
            </form>
          </div>
        </div>

        <!-- Card body with the services table -->
        <div class="card-body">
          <div class="table-responsive">
            <table id="example3" class="display min-w850">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Unit</th>
                  <th>T1</th>
                  <th>T2</th>
                  <th>T3</th>
                  <th>T4</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {#each services as service}
                  <tr>
                    <td>{service.name}</td>
                    <td>{service.expand.categoryId.name}</td>
                    <td>{service.expand.unitId.name}</td>
                    <td>{service.t1}</td>
                    <td>{service.t2}</td>
                    <td>{service.t3}</td>
                    <td>{service.t4}</td>
                    <td>
                      <div class="d-flex">
                        <button
                          class="btn btn-primary shadow btn-xs sharp mr-1"
                          on:click={() => editUnit(unit)}
                          aria-label="Edit Category"
                        >
                          <i class="fa fa-pencil"></i>
                        </button>
                        <button
                          class="btn btn-danger shadow btn-xs sharp"
                          on:click={() => openDeleteModal(unit)}
                          aria-label="Delete Category"
                        >
                          <i class="fa fa-trash"></i>
                        </button>
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
</div>
