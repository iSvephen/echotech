<script>
	import { onMount } from 'svelte';
    let error = null;
</script>

<div class="container-fluid">
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">New Client Form</h4>
				</div>
				<div class="card-body">
					<div class="form-validation">
						<form class="form-valide" method="post">
							<div class="form-row">
								<div class="form-group col-md-6">
									<label for="name">Name</label>
									<input type="text" class="form-control" id="name" name="name" />
								</div>

								<div class="form-group col-md-6">
									<label for="nzbn">NZBN</label>
									<input type="number" class="form-control" id="nzbn" name="nzbn" />
								</div>

								<div class="form-group col-md-12">
                                    <label for="address">Address</label>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" id="StreetAddress" name="address_street" placeholder="Street Address"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" id="Suburb" name="address_suburb" placeholder="Suburb"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" id="City" name="address_city" placeholder="City"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="number" class="form-control" id="Postcode" name="address_postcode" placeholder="Postcode"/>
                                        </div>
                                    </div>
                                </div>

								

								<div class="form-group col-md-6">
									<label for="contact_name">Main Contact Name</label>
									<input type="text" class="form-control" id="contact_name" name="contact_name" />
								</div>

								<div class="form-group col-md-6">
									<label for="contact_title">Main Contact Title</label>
									<input type="text" class="form-control" id="contact_title" name="contact_title" />
								</div>

								<div class="form-group col-md-6">
									<label for="contact_email">Main Contact Email</label>
									<input type="email" class="form-control" id="contact_email" name="contact_email" />
								</div>

								<div class="form-group col-md-6">
									<label for="contact_phone">Main Contact Phone</label>
									<input type="tel" class="form-control" id="contact_phone" name="contact_phone" />
								</div>

								<div class="form-group col-md-12">
									<label for="contact_address">Main Contact Address</label>
									<input type="text" class="form-control" id="contact_address" name="contact_address" />
								</div>

								<div class="form-group col-md-12">
									<label for="remark">Remark</label>
									<textarea type="text" class="form-control" id="remark" name="remark" style="height: 200px"></textarea>

								</div>
							</div>

							<div class="form-group row">
								<div class="ml-auto">
									<button type="submit" class="add-menu-sidebar">Save</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
