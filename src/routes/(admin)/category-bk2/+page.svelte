<script>
  import { onMount, onDestroy } from 'svelte';
  import { enhance } from '$app/forms';
  import { invalidate } from '$app/navigation';

  export let data;
  
  let categories = data.categories;
  let editingCategory = null;
  let id = '';
  let name = '';

  // Open modal functions
  function openCreateModal() {
    editingCategory = null;
    id = '';
    name = '';
    globalThis.$('#serviceCategoryModal').modal('show');
  }

  function openEditModal(category) {
    editingCategory = category;
    id = category.id;
    name = category.name;
    globalThis.$('#serviceCategoryModal').modal('show');
  }

  function openDeleteModal(category) {
    id = category.id;
    name = category.name;
    globalThis.$('#deleteServiceModal').modal('show');
  }

  // DataTable initialization
  let dataTable;
  onMount(() => {
    dataTable = globalThis.$('#example3').DataTable();
  });
  onDestroy(() => {
    if (dataTable) {
      dataTable.destroy();
    }
  });

  // Called after a successful form submission
  function handleSuccess({ result, update }) {
    // Hide the modal
    globalThis.$('#serviceCategoryModal').modal('hide');

    // Option 1: Invalidate the current load to update data without full reload
    invalidate();

    // Option 2: Alternatively, you can force a full page reload:
    // window.location.reload();
  }
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h4 class="card-title mb-0">Service Categories</h4>
          <button class="btn btn-success" on:click={openCreateModal}>+ New Category</button>
        </div>
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
                {#each categories as category}
                  <tr>
                    <td>{category.name}</td>
                    <td>
                      <div class="d-flex">
                        <button class="btn btn-primary shadow btn-xs sharp mr-1" on:click={() => openEditModal(category)}>
                          <i class="fa fa-pencil"></i>
                        </button>
                        <button class="btn btn-danger shadow btn-xs sharp" on:click={() => openDeleteModal(category)}>
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

  <!-- Create & Edit Modal -->
  <div class="modal fade" id="serviceCategoryModal" tabindex="-1" role="dialog" aria-labelledby="serviceCategoryModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="serviceCategoryModalLabel">
            {editingCategory ? 'Edit Category' : 'Create Category'}
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Note the use:enhance directive with the correct property name `result` -->
          <form
            method="post"
            action={editingCategory ? "?/update" : "?/create"}
            use:enhance={{ result: handleSuccess }}
          >
            {#if editingCategory}
              <input type="hidden" name="id" value={id} />
            {/if}
            <div class="form-group">
              <label for="name" class="text-black font-w500">Name</label>
              <input type="text" id="name" name="name" class="form-control" bind:value={name} required />
            </div>
            <div class="form-group mt-3">
              <button type="submit" class="btn btn-primary">
                {editingCategory ? 'Update' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div class="modal fade" id="deleteServiceModal" tabindex="-1" role="dialog" aria-labelledby="deleteServiceModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteServiceModalLabel">Delete Category</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to delete "{name}"?</p>
        </div>
        <div class="modal-footer">
          <form method="post" action="?/delete" use:enhance>
            <input type="hidden" name="id" value={id} />
            <button type="submit" class="btn btn-danger">Delete</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
