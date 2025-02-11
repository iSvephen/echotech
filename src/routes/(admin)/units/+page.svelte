<script>
  import { enhance } from '$app/forms';
  import { onMount } from 'svelte';
  export let data;

  // Data coming from the server (array of units)
  let units = data.units;

  // For create/update actions
  let editingUnit = null;
  let name = '';

  // For delete confirmation
  let deletingCategory = null;

  // Fill the form for editing an existing unit
  function editUnit(unit) {
    editingUnit = { ...unit };
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
          <h4 class="card-title mb-2 mb-md-0">Units</h4>
          <div class="d-flex align-items-center">
            <!-- Create / Update Form -->
            <form
              class="form-inline mr-3"
              method="post"
              action={editingUnit ? "?/update" : "?/create"}
            >
              {#if editingUnit}
                <input type="hidden" name="id" value={editingUnit.id} />
              {/if}
              <div class="form-group mb-0 mr-2">
                <label for="name" class="sr-only">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  bind:value={name}
                  class="form-control"
                  placeholder="Unit name"
                  required
                />
              </div>
              <button type="submit" class="btn btn-echo">
                {editingUnit ? 'Update' : 'Create'}
              </button>
            </form>
          </div>
        </div>

        <!-- Card body with the units table -->
        <div class="card-body">
          <div class="table-responsive">
            <table id="example3" class="display min-w850">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {#each units as unit}
                  <tr>
                    <td>{unit.name}</td>
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
          <form method="post" action="?/delete">
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
