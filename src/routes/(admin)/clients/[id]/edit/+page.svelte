<script>
	import { onMount } from 'svelte';
    let error = null;
    export let data;
    import { enhance } from '$app/forms';
    let client = data.client;

    let showDeleteConfirm = false;

    function toggleDeleteConfirm() {
        showDeleteConfirm = !showDeleteConfirm;
    }

	function handleSubmit() {
        event.preventDefault();
        return async ({ result }) => {
            if (result.data?.headers?.location) {
                window.location.href = result.data.headers.location;
            }
        };
    }
</script>

<div class="container-fluid">
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Edit Client Form</h4>
				</div>
				<div class="card-body">
					<div class="form-validation">
						<form id="editForm" class="form-valide" method="post" action="?/update" use:enhance={handleSubmit}>
							<div class="form-row">
								<div class="form-group col-md-6">
									<label for="name">Name of Business</label>
									<input type="text" class="form-control" id="name" name="name"  value={client.name}/>
								</div>

								<div class="form-group col-md-6">
									<label for="nzbn">NZBN</label>
									<input type="number" class="form-control" id="nzbn" name="nzbn"  value={client.nzbn}/>
								</div>

								<div class="form-group col-md-12">
                                    <label for="address">Address</label>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" id="StreetAddress" name="address_street" value="{client.address_street}" placeholder="Street Address"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" id="Suburb" name="address_suburb" value="{client.address_suburb}" placeholder="Suburb"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" id="City" name="address_city" value="{client.address_city}" placeholder="City"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="number" class="form-control" id="Postcode" name="address_postcode" value="{client.address_postcode}" placeholder="Postcode"/>
                                        </div>
                                    </div>
                                </div>

								<div class="form-group col-md-6">
									<label for="contact_name">Main Contact Name</label>
									<input type="text" class="form-control" id="contact_name" name="contact_name"  value={client.contact_name}/>
								</div>

								<div class="form-group col-md-6">
									<label for="contact_title">Main Contact Title</label>
									<input type="text" class="form-control" id="contact_title" name="contact_title"  value={client.contact_title}/>
								</div>

								<div class="form-group col-md-6">
									<label for="contact_email">Main Contact Email</label>
									<input type="email" class="form-control" id="contact_email" name="contact_email"  value={client.contact_email}/>
								</div>

								<div class="form-group col-md-6">
									<label for="contact_phone">Main Contact Phone</label>
									<input type="tel" class="form-control" id="contact_phone" name="contact_phone"  value={client.contact_phone}/>
								</div>

								<div class="form-group col-md-12">
									<label for="contact_address">Main Contact Address</label>
									<input type="text" class="form-control" id="contact_address" name="contact_address"  value={client.contact_address}/>
								</div>

								<div class="form-group col-md-12">
									<label for="remark">Remark</label>
									<textarea type="text" class="form-control" id="remark" name="remark" style="height: 200px">{client.remark}</textarea>
								</div>
							</div>
						</form>

						<div class="form-group row">
							<div class="mr-auto">
								{#if !showDeleteConfirm}
									<button type="button" class="btn btn-danger" on:click={toggleDeleteConfirm}>
										<i class="fa fa-trash mr-1"></i> Delete
									</button>
								{:else}
									<div class="d-flex align-items-center">
										<span class="text-danger mr-2">Are you sure?</span>
										<form 
											method="post" 
											action="?/delete" 
											use:enhance={() => {
												return async () => {
													window.location.href = '/clients';
												};
											}}
										>
											<button type="submit" class="btn btn-danger">
												<i class="fa fa-check mr-1"></i> Yes, Delete
											</button>
										</form>
										<button type="button" class="btn btn-secondary ms-2" on:click={toggleDeleteConfirm}>
											<i class="fa fa-times mr-1"></i> Cancel
										</button>
									</div>
								{/if}
							</div>
							<div class="ml-auto">
								<button type="submit" form="editForm" class="btn btn-echo">Save</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>