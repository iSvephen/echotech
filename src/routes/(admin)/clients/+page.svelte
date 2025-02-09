<script>
    import { onMount } from 'svelte';

    onMount(() => {
        // Initialize DataTable
        globalThis.$('#example3').DataTable();
    });
</script>


<div class="container-fluid">
    <!-- Add Order -->
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
                            <label for="contract-name" class="text-black font-w500">Contract Name</label>
                            <input type="text" id="contract-name" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="deadline" class="text-black font-w500">Deadline</label>
                            <input type="date" class="form-control" id="deadline">
                        </div>
                        <div class="form-group">
                            <label for="client-name" class="text-black font-w500">Client Name</label>
                            <input type="text" class="form-control" id="client-name">
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-primary">CREATE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Clients</h4>
                    <a href="clients/add" class="add-menu-sidebar">+ New Client</a>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="example3" class="display min-w850">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic1.jpg" alt=""></td>
                                    <td>Tech Solutions Ltd.</td>
                                    <td><a href="javascript:void(0);"><strong>info@techsolutions.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>987 654 3210</a></td>
                                    <td>Unit 2, 101 Gracefield Road, Lower Hutt 5010</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic2.jpg" alt=""></td>
                                    <td>Green Innovations Inc.</td>
                                    <td><a href="javascript:void(0);"><strong>contact@greeninnovations.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>923 748 6598</a></td>
                                    <td>1204 Seaview Avenue, Christchurch 8013</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic3.jpg" alt=""></td>
                                    <td>Skyline Enterprises</td>
                                    <td><a href="javascript:void(0);"><strong>info@skylineenterprises.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>812 645 3720</a></td>
                                    <td>24 Winthrop Crescent, Auckland 1010</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic4.jpg" alt=""></td>
                                    <td>Innovative Systems Co.</td>
                                    <td><a href="javascript:void(0);"><strong>contact@innovativesystems.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>923 549 8901</a></td>
                                    <td>48 Sunrise Drive, Wellington 6011</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic5.jpg" alt=""></td>
                                    <td>Quantum Technologies Ltd.</td>
                                    <td><a href="javascript:void(0);"><strong>support@quantumtech.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>745 892 1356</a></td>
                                    <td>56 Lakeview Road, Hamilton 3200</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic6.jpg" alt=""></td>
                                    <td>Digital Horizons</td>
                                    <td><a href="javascript:void(0);"><strong>contact@digitalhorizons.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>874 601 2459</a></td>
                                    <td>23 Birchwood Drive, Tauranga 3110</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic7.jpg" alt=""></td>
                                    <td>Global Ventures</td>
                                    <td><a href="javascript:void(0);"><strong>info@globalventures.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>681 459 2321</a></td>
                                    <td>93 Carlton Place, Dunedin 9016</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic8.jpg" alt=""></td>
                                    <td>EcoTech Solutions</td>
                                    <td><a href="javascript:void(0);"><strong>contact@ecotechsolutions.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>532 741 8920</a></td>
                                    <td>14 King Street, Queenstown 9300</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic9.jpg" alt=""></td>
                                    <td>Alpha Industries</td>
                                    <td><a href="javascript:void(0);"><strong>contact@alphindustries.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>651 473 2098</a></td>
                                    <td>19 Elmwood Road, Napier 4110</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic10.jpg" alt=""></td>
                                    <td>TechFusion Group</td>
                                    <td><a href="javascript:void(0);"><strong>support@techfusiongroup.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>732 485 1923</a></td>
                                    <td>67 Pinehill Road, Rotorua 3010</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic10.jpg" alt=""></td>
                                    <td>Pioneers Inc.</td>
                                    <td><a href="javascript:void(0);"><strong>contact@pioneersinc.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>984 653 2710</a></td>
                                    <td>31 Highland Crescent, Palmerston North 4410</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic10.jpg" alt=""></td>
                                    <td>Dynamic Creations</td>
                                    <td><a href="javascript:void(0);"><strong>info@dynamiccreations.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>672 849 5301</a></td>
                                    <td>89 Crescent Street, Gisborne 4010</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic10.jpg" alt=""></td>
                                    <td>Fusion Technologies</td>
                                    <td><a href="javascript:void(0);"><strong>contact@fusiontech.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>754 123 9876</a></td>
                                    <td>34 Maple Drive, Invercargill 9810</td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td><img class="rounded-circle" width="35" src="./images/profile/small/pic10.jpg" alt=""></td>
                                    <td>Digital Works</td>
                                    <td><a href="javascript:void(0);"><strong>contact@digitalworks.com</a></td>
                                    <td><a href="javascript:void(0);"><strong>812 356 9741</a></td>
                                    <td>10 Oak Street, Timaru 7910</td>
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
</div>