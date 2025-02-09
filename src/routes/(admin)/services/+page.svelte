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
                    <h4 class="card-title">Services</h4>
                    <a href="javascript:void(0)" data-toggle="modal" data-target="#addServiceModal"  class="add-menu-sidebar">+ New Service</a>
                </div>
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
                            <tbody><tr>
                                <td>GreenCycle Recycling</td>
                                <td>Plastic Recycling</td>
                                <td>KG</td>
                                <td>0.892</td>
                                <td>1.104</td>
                                <td>1.254</td>
                                <td>1.56</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="javascript:void(0)" data-toggle="modal" data-target="#editServiceModal"  class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>EcoWaste Solutions</td>
                                <td>Metal Recycling</td>
                                <td>KG</td>
                                <td>1.236</td>
                                <td>1.456</td>
                                <td>1.682</td>
                                <td>1.98</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>Regen Waste Management</td>
                                <td>Cardboard Recycling</td>
                                <td>KG</td>
                                <td>0.548</td>
                                <td>0.642</td>
                                <td>0.752</td>
                                <td>0.92</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>EcoCycle Services</td>
                                <td>Glass Recycling</td>
                                <td>KG</td>
                                <td>0.742</td>
                                <td>0.832</td>
                                <td>0.964</td>
                                <td>1.12</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>ZeroWaste Recycling</td>
                                <td>Organic Waste Recycling</td>
                                <td>KG</td>
                                <td>1.015</td>
                                <td>1.252</td>
                                <td>1.411</td>
                                <td>1.62</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>GreenTech Recycling</td>
                                <td>E-Waste Recycling</td>
                                <td>KG</td>
                                <td>0.962</td>
                                <td>1.126</td>
                                <td>1.256</td>
                                <td>1.48</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>CleanCycle Waste</td>
                                <td>Battery Recycling</td>
                                <td>KG</td>
                                <td>0.210</td>
                                <td>0.295</td>
                                <td>0.382</td>
                                <td>0.49</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="javascript:void(0)" data-toggle="modal" data-target="#editServiceModal"  class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="javascript:void(0)" data-toggle="modal" data-target="#deleteServiceModal"  class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>EcoPure Recycling</td>
                                <td>Textile Recycling</td>
                                <td>KG</td>
                                <td>1.134</td>
                                <td>1.328</td>
                                <td>1.454</td>
                                <td>1.62</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>WasteNot Recycling</td>
                                <td>Food Waste Recycling</td>
                                <td>KG</td>
                                <td>0.614</td>
                                <td>0.724</td>
                                <td>0.856</td>
                                <td>1.01</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>CleanWaste Systems</td>
                                <td>Paper Recycling</td>
                                <td>KG</td>
                                <td>1.082</td>
                                <td>1.238</td>
                                <td>1.442</td>
                                <td>1.68</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>EcoRenew Recycling</td>
                                <td>Rubber Recycling</td>
                                <td>Each</td>
                                <td>0.546</td>
                                <td>0.612</td>
                                <td>0.742</td>
                                <td>0.88</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>WasteX Recycling</td>
                                <td>Furniture Recycling</td>
                                <td>Each</td>
                                <td>1.312</td>
                                <td>1.512</td>
                                <td>1.762</td>
                                <td>2.12</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>GreenBox Recycling</td>
                                <td>Wood Recycling</td>
                                <td>Each</td>
                                <td>0.634</td>
                                <td>0.746</td>
                                <td>0.894</td>
                                <td>1.04</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>EarthSafe Recycling</td>
                                <td>Styrofoam Recycling</td>
                                <td>Each</td>
                                <td>0.412</td>
                                <td>0.528</td>
                                <td>0.612</td>
                                <td>0.72</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>EcoLink Recycling</td>
                                <td>Textile Recycling</td>
                                <td>KG</td>
                                <td>0.942</td>
                                <td>1.054</td>
                                <td>1.164</td>
                                <td>1.36</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>CleanEarth Recycling</td>
                                <td>Organic Waste Recycling</td>
                                <td>KG</td>
                                <td>1.124</td>
                                <td>1.284</td>
                                <td>1.442</td>
                                <td>1.66</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>GreenPath Recycling</td>
                                <td>Aluminum Recycling</td>
                                <td>KG</td>
                                <td>1.034</td>
                                <td>1.232</td>
                                <td>1.424</td>
                                <td>1.56</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>WasteZero Solutions</td>
                                <td>Plastic Bottle Recycling</td>
                                <td>KG</td>
                                <td>0.682</td>
                                <td>0.794</td>
                                <td>0.914</td>
                                <td>1.08</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                    </div>                                                
                                </td>                                                
                            </tr>
                            
                            <tr>
                                <td>RecycleWorks</td>
                                <td>Paper Recycling</td>
                                <td>KG</td>
                                <td>1.156</td>
                                <td>1.324</td>
                                <td>1.502</td>
                                <td>1.74</td>
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
    
    <!--**********************************
        Add Order Modal
    ***********************************-->
    <div class="modal fade" id="addOrderModalside">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create Contract</h5>
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label class="text-black font-w500">Contract Name</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">Deadline</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">Client Name</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-primary">CREATE</button>
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
                    <h5 class="modal-title">Add Service</h5>
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label class="text-black font-w500">Name</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">Category</label>
                            <!-- <input type="text" class="form-control"> -->
                            <select class="mr-sm-2 default-select form-control" id="categorySelect">
                                <option selected>Choose...</option>
                                <option value="1">Category One</option>
                                <option value="2">Category Two</option>
                                <option value="3">Category Three</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">Unit</label>
                            <!-- <input type="text" class="form-control"> -->
                            <select class="mr-sm-2 default-select form-control" id="unitSelect">
                                <option selected>Choose...</option>
                                <option value="1">KG</option>
                                <option value="2">Each</option>
                                <option value="3">Qtr</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">T1</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">T2</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">T3</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">T4</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-primary">SAVE</button>
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
                    <h5 class="modal-title">Edit Service</h5>
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label class="text-black font-w500">Name</label>
                            <input type="text" class="form-control" value="GreenCycle Recycling">
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">Category</label>
                            <!-- <input type="text" class="form-control"> -->
                            <select class="mr-sm-2 form-control" id="categorySelect">
                                <option>Choose...</option>
                                <option value="1">Category One</option>
                                <option value="2">Category Two</option>
                                <option value="3">Category Three</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">Unit</label>
                            <!-- <input type="text" class="form-control"> -->
                            <select class="mr-sm-2 default-select form-control" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option value="1" selected>KG</option>
                                <option value="2">Each</option>
                                <option value="3">Qtr</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">T1</label>
                            <input type="text" class="form-control" value="0.892">
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">T2</label>
                            <input type="text" class="form-control" value="1.104">
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">T3</label>
                            <input type="text" class="form-control" value="1.254">
                        </div>
                        <div class="form-group">
                            <label class="text-black font-w500">T4</label>
                            <input type="text" class="form-control" value="1.56">
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-primary">SAVE</button>
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
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
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