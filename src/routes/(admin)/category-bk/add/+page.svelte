<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// Ensure DOM is fully loaded before initializing DataTable
		document.addEventListener('DOMContentLoaded', () => {
			globalThis.$('#example3').DataTable();
		});
	});
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
						<form class="form-valide" action="#" method="post">
							<div class="form-row">
								<div class="form-group col-md-6">
									<label for="inputEmail4">Name</label>
									<input type="text" class="form-control" id="inputEmail4" />
								</div>

								<div class="form-group col-md-6">
									<label for="contractDate">NZBN</label>
									<input type="number" class="form-control" id="contractDate" />
								</div>

								<div class="form-group col-md-12">
									<label for="contractDate">Address</label>
									<input type="text" class="form-control" id="contractDate" />
								</div>

								<div class="form-group col-md-6">
									<label for="contractDate">Main Contact Name</label>
									<input type="text" class="form-control" id="contractDate" />
								</div>

								<div class="form-group col-md-6">
									<label for="contractDate">Main Contact Title</label>
									<input type="text" class="form-control" id="contractDate" />
								</div>

								<div class="form-group col-md-6">
									<label for="contractDate">Main Contact Email</label>
									<input type="email" class="form-control" id="contractDate" />
								</div>

								<div class="form-group col-md-6">
									<label for="contractDate">Main Contact Phone</label>
									<input type="tel" class="form-control" id="contractDate" />
								</div>

								<div class="form-group col-md-12">
									<label for="contractDate">Main Contact Address</label>
									<input type="text" class="form-control" id="contractDate" />
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
