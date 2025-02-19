<script>
	import { onMount } from 'svelte';
    let error = null;
    export let data;
    import { enhance } from '$app/forms';
    let company_info = data.company_info;
</script>


<div class="container-fluid">
    <div class="row">
        
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Company Info</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                      <form class="form-valide" method="post" action="?/update">
                        <input type="hidden" name="id" value={company_info.id} />
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" name="name"  value={company_info.name}/>
                          </div>
          
                          <div class="form-group col-md-6">
                            <label for="nzbn">NZBN</label>
                            <input type="number" class="form-control" id="nzbn" name="nzbn"  value={company_info.nzbn}/>
                          </div>
          
                          <div class="form-group col-md-12">
                            <label for="address_auckland">Auckland</label>
                            <input type="text" class="form-control" id="address_auckland" name="address_auckland"  value={company_info.address_auckland}/>
                          </div>
          
                          <div class="form-group col-md-12">
                            <label for="address_wellington">Wellington</label>
                            <input type="text" class="form-control" id="address_wellington" name="address_wellington"  value={company_info.address_wellington}/>
                          </div>
          
                          <div class="form-group col-md-12">
                            <label for="address_christchurch">Christchurch</label>
                            <input type="text" class="form-control" id="address_christchurch" name="address_christchurch"  value={company_info.address_christchurch}/>
                          </div>
          
                          <div class="form-group col-md-6">
                            <label for="email">Email</label>
                            <input type="text" class="form-control" id="email" name="email"  value={company_info.email}/>
                          </div>
          
                          <div class="form-group col-md-6">
                            <label for="phone">Phone</label>
                            <input type="text" class="form-control" id="phone" name="phone"  value={company_info.phone}/>
                          </div>
                        </div>
          
                        <div class="form-group row">
                          <div class="ml-auto">
                            <button type="submit" class="add-menu-sidebar">Update</button>
                          </div>
                        </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>