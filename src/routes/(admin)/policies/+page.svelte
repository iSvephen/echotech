<script>
    import { onMount } from 'svelte';
    import { enhance } from '$app/forms';
    export let data;

  // Data coming from the server (array of units)
  let policies = data.policies;

  // For delete confirmation
  let deletingClient = null;

  // Set the unit to be deleted and show the modal
  function openDeleteModal(policy) {
    deletingClient = policy;
    globalThis.$('#deleteServiceModal').modal('show');
  }

    onMount(() => {
        // Initialize DataTable
        globalThis.$('#example3').DataTable();
    });
</script>


<div class="container-fluid">
    <div class="row">
        
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Policies</h4>
                    <!-- <a href="policies/add" class="btn btn-echo">+ New Policy</a> -->
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
                                {#each policies as policy}
                                <tr>
                                    <td>{ policy.name }</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="/policies/{ policy.id }/edit" class="btn btn-primary shadow btn-xs sharp mr-1" aria-label="Edit"><i class="fa fa-pencil"></i></a>
                                            <!-- <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a> -->

                                            <!-- <button
                                              class="btn btn-danger shadow btn-xs sharp"
                                              on:click={() => openDeleteModal(policy)}
                                              aria-label="Delete Category"
                                            >
                                              <i class="fa fa-trash"></i>
                                            </button> -->
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
        {#if deletingClient}
          <p>
            Are you sure you want to delete the policy
            <strong>{deletingClient.name}</strong>?
          </p>
        {/if}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Cancel
        </button>
        <!-- Delete form using SvelteKit form enhancement -->
        <form method="post" action="?/delete">
          {#if deletingClient}
            <input type="hidden" name="id" value={deletingClient.id} />
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