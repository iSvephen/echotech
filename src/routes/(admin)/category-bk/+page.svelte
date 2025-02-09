<script>
    import { onMount } from 'svelte';

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
            <h4 class="card-title">Category</h4>
            <a
              href="javascript:void(0)"
              data-toggle="modal"
              data-target="#addServiceModal"
              class="add-menu-sidebar"
              >+ New Category</a
            >
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
                      <tr>
                        <td>E-waste Collection</td>
                        <td>
                          <div class="d-flex">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#editServiceModal" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>ITAD - IT Asset Purchasing & Resale</td>
                        <td>
                          <div class="d-flex">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#editServiceModal" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>ITAD - IT Asset Disposition</td>
                        <td>
                          <div class="d-flex">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#editServiceModal" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Data Destruction - Data Security & Sanitisation</td>
                        <td>
                          <div class="d-flex">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#editServiceModal" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Hazardous Waste</td>
                        <td>
                          <div class="d-flex">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#editServiceModal" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>E-Waste Recycling Services</td>
                        <td>
                          <div class="d-flex">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#editServiceModal" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
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

    <!--**********************************
              Add Order Modal
          ***********************************-->
    <div class="modal fade" id="addOrderModalside">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create Contract</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label class="text-black font-w500">Contract Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label class="text-black font-w500">Deadline</label>
                <input type="date" class="form-control" />
              </div>
              <div class="form-group">
                <label class="text-black font-w500">Client Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-primary">
                  CREATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--**********************************
              Add Order Modal End
          ***********************************-->

    <!--**********************************
              Add Service Modal
          ***********************************-->
    <div class="modal fade" id="addServiceModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Category</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label class="text-black font-w500">Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-primary">
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!--**********************************
              Add Service Modal End
          ***********************************-->

    <!--**********************************
              Edit Service Modal Start
          ***********************************-->
    <div class="modal fade" id="editServiceModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Category</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label class="text-black font-w500">Name</label>
                <input
                  type="text"
                  class="form-control"
                  value="Annually"
                />
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-primary">
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!--**********************************
              Edit Service Modal End
          ***********************************-->

    <!-- Button trigger modal -->
    <!-- Modal -->
    <div class="modal fade" id="deleteServiceModal">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Services</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3>Are you sure to delete "CleanCycle Waste"?</h3>
          </div>
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-info light" data-dismiss="modal">Close</button> -->
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>