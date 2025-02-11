<script>
  import { enhance } from '$app/forms';
  import { onMount } from 'svelte';
  export let data;


	const { services, categories, units } = data;

    let name = '';
    let category = '';
    let unit = '';
    let t1 = '';
    let t2 = '';
    let t3 = '';
    let t4 = '';
  // Data coming from the server (array of services)
  // let services = data.services;

  // For create/update actions
  let editingService = null;

  // For delete confirmation
  let deletingService = null;

  // Fill the form for editing an existing unit
  function editService(service) {
    editingService = { ...service };
    name = service.name;
    category = service.categoryId;
    unit = service.unitId;
    t1 = service.t1;
    t2 = service.t2;
    t3 = service.t3;
    t4 = service.t4;
    // console.log(categoryId);
    globalThis.$('#addServiceModal').modal('show');
  }

  // Set the unit to be deleted and show the modal
  function openDeleteModal(unit) {
    deletingService = unit;
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
          <a href="javascript:void(0)" data-toggle="modal" data-target="#addServiceModal"  class="add-menu-sidebar">+ New Service</a>
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
                          on:click={() => editService(service)}
                          aria-label="Edit Category"
                        >
                          <i class="fa fa-pencil"></i>
                        </button>
                        <button
                          class="btn btn-danger shadow btn-xs sharp"
                          on:click={() => openDeleteModal(service)}
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


  <!--**********************************
    Add Service Modal
  ***********************************-->
  <div class="modal fade" id="addServiceModal">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      <h5 class="modal-title">Add Service</h5>
      <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
      </div>
      <div class="modal-body">
      <form method="post" action={editingService ? "?/update" : "?/create"}>
        {#if editingService}
          <input type="hidden" name="id" value={editingService.id} />
        {/if}
        <div class="form-group">
        <label class="text-black font-w500" for="name">Name</label>
        <input type="text" class="form-control" name="name" bind:value={name}>
        </div>
        <div class="form-group">
        <label class="text-black font-w500" for="category">Category</label>
        <select class="mr-sm-2 default-select form-control" name="categoryId" bind:value={category}>
          <option value="" selected>Choose...</option>
          {#each data.categories as category}
            <option value={category.id} selected={editingService && editingService.categoryId === category.id}>{category.name}</option>
          {/each}
        </select>
        </div>
        <div class="form-group">
        <label class="text-black font-w500" for="unit">Unit</label>
        <select class="mr-sm-2 default-select form-control" name="unitId" bind:value={unit}>
          <option value="" selected>Choose...</option>
          {#each data.units as unit}
            <option value={unit.id} selected={editingService && editingService.unitId === unit.id}>{unit.name}</option>
          {/each}
        </select>
        </div>
        <div class="form-group">
        <label class="text-black font-w500" for="t1">T1</label>
        <input name="t1" type="text" class="form-control" bind:value={t1}>
        </div>
        <div class="form-group">
        <label class="text-black font-w500" for="t2">T2</label>
        <input name="t2" type="text" class="form-control" bind:value={t2}>
        </div>
        <div class="form-group">
        <label class="text-black font-w500" for="t3">T3</label>
        <input name="t3" type="text" class="form-control" bind:value={t3}>
        </div>
        <div class="form-group">
        <label class="text-black font-w500" for="t4">T4</label>
        <input name="t4" type="text" class="form-control" bind:value={t4}>
        </div>
        <div class="form-group">
        <button type="submit" class="btn btn-primary">{editingService ? 'Update' : 'Create'}</button>
        </div>
      </form>
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
          {#if deletingService}
            <p>
              Are you sure you want to delete the unit
              <strong>{deletingService.name}</strong>?
            </p>
          {/if}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cancel
          </button>
          <!-- Delete form using SvelteKit form enhancement -->
          <form method="post" action="?/delete">
            {#if deletingService}
              <input type="hidden" name="id" value={deletingService.id} />
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

