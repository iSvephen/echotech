<script>
	  export let data;
  
  const { clients, contracts, services, categories, units } = data;
  // colsole.log(churches)
</script>

<div class="container-fluid">
		<!-- Add Order -->
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
								<!-- svelte-ignore a11y_label_has_associated_control -->
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
								<button type="button" class="btn btn-primary"> CREATE </button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-4 col-lg-6 col-sm-6">
				<div class="widget-stat card" style="background-color: #224335">
					<div class="card-body p-4">
						<div class="media">
							<span class="mr-3">
								<i class="fa fa-users text-white"></i>
							</span>
							<div class="media-body text-white text-right">
								<p class="mb-1">Clients</p>
								<h3 class="text-white">{clients.length}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-sm-6">
				<div class="widget-stat card" style="background-color: #224335">
					<div class="card-body p-4">
						<div class="media">
							<span class="mr-3">
								<i class="flaticon-381-notepad text-white"></i>
							</span>
							<div class="media-body text-white text-right">
								<p class="mb-1">Contracts</p>
								<h3 class="text-white">{contracts.length}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-sm-6">
				<div class="widget-stat card" style="background-color: #224335">
					<div class="card-body p-4">
						<div class="media">
							<span class="mr-3">
								<i class="flaticon-381-networking text-white"></i>
							</span>
							<div class="media-body text-white text-right">
								<p class="mb-1">Services</p>
								<h3 class="text-white">{services.length}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
				<div class="card">
					<div class="card-header">
						<h4 class="card-title">Recent Contracts</h4>
					</div>
					<div class="card-body">
						<div class="table-responsive recentOrderTable">
							<table class="table verticle-middle table-responsive-md">
								<thead>
									<tr>
										<th scope="col">No.</th>
										<th scope="col">Client</th>
										<th scope="col">Prepared by</th>
										<th scope="col">Date</th>
										<th scope="col">Status</th>
									</tr>
								</thead>
								<tbody>
									{#each contracts.slice(0, 5) as contract, index}
										<tr>
											<td>{index + 1}</td>
											<td>{clients.find(client => client.id === contract.clientId)?.name}</td>
											<td>{contract.prepared_by}</td>
											<td>{new Date(contract.date).toLocaleDateString()}</td>
											<td>
												<!-- <span class="badge badge-rounded badge-{contract.status.toLowerCase()}">{contract.status}</span> -->
											</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			{#each categories as category}
				<div class="col-lg-12">
					<div class="card">
						<div class="card-header">
							<h4 class="card-title">{category.name}</h4>
						</div>
						<div class="card-body">
							<div class="table-responsive">
								<table class="table table-bordered table-responsive-sm">
									<thead style="background-color: #224335">
										<tr style="color: white">
											<th>Service</th>
											<th>Unit</th>
											<th>T1</th>
											<th>T2</th>
											<th>T3</th>
											<th>T4</th>
										</tr>
									</thead>
									<tbody>
										{#each services.filter(service => service.categoryId === category.id) as service}
											<tr>
												<td>{service.name}</td>
												<td>{units.find(unit => unit.id === service.unitId)?.name}</td>
												<td>{service.t1}</td>
												<td>{service.t2}</td>
												<td>{service.t3}</td>
												<td>{service.t4}</td>
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>