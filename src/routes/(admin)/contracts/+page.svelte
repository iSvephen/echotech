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
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>ABC Company</td>
                      <td><a href="javascript:void(0);"><strong>01 August 2024</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>12 Months</strong></a></td>
                      <td>Rorbet Herbert</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>                                                
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>GreenTech Solutions</td>
                      <td><a href="javascript:void(0);"><strong>15 September 2024</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>24 Months</strong></a></td>
                      <td>James Walker</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>Skyline Ventures</td>
                      <td><a href="javascript:void(0);"><strong>01 October 2024</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>36 Months</strong></a></td>
                      <td>Ava Thomas</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>4</td>
                      <td>Tech Innovators</td>
                      <td><a href="javascript:void(0);"><strong>20 October 2024</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>12 Months</strong></a></td>
                      <td>Liam Robinson</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>BlueWave Enterprises</td>
                      <td><a href="javascript:void(0);"><strong>05 November 2024</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>24 Months</strong></a></td>
                      <td>Olivia Clark</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>6</td>
                      <td>Future Builders</td>
                      <td><a href="javascript:void(0);"><strong>10 December 2024</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>36 Months</strong></a></td>
                      <td>Sophia Lewis</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>7</td>
                      <td>Quantum Solutions</td>
                      <td><a href="javascript:void(0);"><strong>15 December 2024</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>12 Months</strong></a></td>
                      <td>Lucas Taylor</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>8</td>
                      <td>StarTech Innovations</td>
                      <td><a href="javascript:void(0);"><strong>25 January 2025</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>24 Months</strong></a></td>
                      <td>Benjamin Harris</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>9</td>
                      <td>NextGen Systems</td>
                      <td><a href="javascript:void(0);"><strong>10 February 2025</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>36 Months</strong></a></td>
                      <td>Mason Walker</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>10</td>
                      <td>SolarTech Group</td>
                      <td><a href="javascript:void(0);"><strong>20 March 2025</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>12 Months</strong></a></td>
                      <td>Charlotte Moore</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>11</td>
                      <td>UrbanTech Solutions</td>
                      <td><a href="javascript:void(0);"><strong>15 April 2025</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>24 Months</strong></a></td>
                      <td>Elijah Brown</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>12</td>
                      <td>Energy Solutions Ltd.</td>
                      <td><a href="javascript:void(0);"><strong>25 April 2025</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>36 Months</strong></a></td>
                      <td>Amelia Garcia</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>13</td>
                      <td>Bright Future Technologies</td>
                      <td><a href="javascript:void(0);"><strong>10 May 2025</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>12 Months</strong></a></td>
                      <td>Noah Lee</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>14</td>
                      <td>Global Enterprises</td>
                      <td><a href="javascript:void(0);"><strong>01 June 2025</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>24 Months</strong></a></td>
                      <td>Grace Wilson</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>15</td>
                      <td>NextWave Solutions</td>
                      <td><a href="javascript:void(0);"><strong>15 June 2025</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>36 Months</strong></a></td>
                      <td>Isaac Carter</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>16</td>
                      <td>Fusion Tech</td>
                      <td><a href="javascript:void(0);"><strong>20 July 2025</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>12 Months</strong></a></td>
                      <td>Ella Turner</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>17</td>
                      <td>Vista Technologies</td>
                      <td><a href="javascript:void(0);"><strong>01 August 2025</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>24 Months</strong></a></td>
                      <td>Henry Moore</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>18</td>
                      <td>EcoSolutions</td>
                      <td><a href="javascript:void(0);"><strong>10 September 2025</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>36 Months</strong></a></td>
                      <td>Jack Rodriguez</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>19</td>
                      <td>PowerGrid Technologies</td>
                      <td><a href="javascript:void(0);"><strong>15 October 2025</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>12 Months</strong></a></td>
                      <td>Lucas Moore</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  <tr>
                      <td>20</td>
                      <td>StarLabs</td>
                      <td><a href="javascript:void(0);"><strong>20 November 2025</strong></a></td>
                      <td><a href="javascript:void(0);"><strong>24 Months</strong></a></td>
                      <td>Charlotte Adams</td>
                      <td>
                          <div class="d-flex">
                              <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>                                                
                      </td>
                  </tr>
                  
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
