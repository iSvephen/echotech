<script>
	export let data;
  
	const { clients, contracts, services, categories, units } = data;

	// Calculate completed and pending contracts
	$: completedContracts = contracts.filter(contract => contract.complete).length;
    $: pendingContracts = contracts.filter(contract => !contract.complete).length;

</script>

<div class="container-fluid">
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
								<h1 class="text-white">{clients.length}</h1>
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
								<p class="mb-1">Completed Contracts</p>
								<h1 class="text-white">{completedContracts}</h1>
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
								<i class="fa fa-list-alt text-white"></i>
							</span>
							<div class="media-body text-white text-right">
								<p class="mb-1">Pending Contracts</p>
								<h1 class="text-white">{pendingContracts}</h1>
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
										<th scope="col">Status</th>
										<th scope="col">Date</th>
									</tr>
								</thead>
								<tbody>
									{#each contracts.slice(0, 5) as contract, index}
										<tr>
											<td>{contract.number}</td>
											<td>{clients.find(client => client.id === contract.clientId)?.name}</td>
											<td>{contract.expand.prepared_by?.name || ''}</td>
											<td>
												<span class="badge badge-rounded {contract.complete ? 'badge-completed' : 'badge-warning'}">
													{contract.complete ? 'Completed' : 'Pending'}
												</span>
											</td>
											<td>{new Date(contract.date).toLocaleDateString()}</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
				<div class="card">
					<div class="card-header">
						<h4 class="card-title">Recent Clients</h4>
					</div>
					<div class="card-body">
						<div class="table-responsive recentOrderTable">
							<table class="table verticle-middle table-responsive-md">
								<thead>
									<tr>
										<th scope="col">Name</th>
										<th scope="col">Email</th>
										<th scope="col">Phone</th>
										<th scope="col">City</th>
										<th scope="col">Postcode</th>
									</tr>
								</thead>
								<tbody>
									{#each clients.slice(0, 5) as client, index}
										<tr>
											<td>{client.name}</td>
											<td>{client.contact_email}</td>
											<td>{client.contact_phone}</td>
											<td>{client.address_city}</td>
											<td>{client.address_postcode}</td>
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
												<td>${service.t1.toFixed(2)}</td>
												<td>${service.t2.toFixed(2)}</td>
												<td>${service.t3.toFixed(2)}</td>
												<td>${service.t4.toFixed(2)}</td>
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