<!-- Add Order -->
<div class="modal fade" id="addOrderModalside">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Create Contract</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
						<h3 class="text-white">411</h3>
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
						<h3 class="text-white">610</h3>
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
						<h3 class="text-white">132</h3>
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
								<th scope="col">Bills</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>12</td>
								<td>HSB Home Appliances</td>
								<td>Robert Herbert</td>
								<td>01 August 2024</td>
								<td>
									<span class="badge badge-rounded badge-primary">Checkin</span>
								</td>
								<td>$120</td>
								<td>
									<div class="dropdown custom-dropdown mb-0">
										<div
											class="btn sharp btn-primary tp-btn"
											data-toggle="dropdown"
											aria-label="More options"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												width="18px"
												height="18px"
												viewBox="0 0 24 24"
												version="1.1"
											>
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="12" cy="5" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="19" r="2" />
												</g>
											</svg>
										</div>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item" href="/">Details</a>
											<a class="dropdown-item text-danger" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>10</td>
								<td>Echo Tech</td>
								<td>Robert Herbert</td>
								<td>31 July 2024</td>
								<td>
									<span class="badge badge-rounded badge-warning">Panding</span>
								</td>
								<td>$540</td>
								<td>
									<div class="dropdown custom-dropdown mb-0">
										<div
											class="btn sharp btn-primary tp-btn"
											data-toggle="dropdown"
											aria-label="More options"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												width="18px"
												height="18px"
												viewBox="0 0 24 24"
												version="1.1"
											>
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="12" cy="5" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="19" r="2" />
												</g>
											</svg>
										</div>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item" href="/">Details</a>
											<a class="dropdown-item text-danger" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>03</td>
								<td>ABC Company</td>
								<td>Robert Herbert</td>
								<td>30 July 2024</td>
								<td>
									<span class="badge badge-rounded badge-danger">Canceled</span>
								</td>
								<td>$301</td>
								<td>
									<div class="dropdown custom-dropdown mb-0">
										<div
											class="btn sharp btn-primary tp-btn"
											data-toggle="dropdown"
											aria-label="More options"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												width="18px"
												height="18px"
												viewBox="0 0 24 24"
												version="1.1"
											>
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="12" cy="5" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="19" r="2" />
												</g>
											</svg>
										</div>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item" href="/">Details</a>
											<a class="dropdown-item text-danger" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>05</td>
								<td>One NZ</td>
								<td>Robert Herbert</td>
								<td>29 July 2024</td>
								<td>
									<span class="badge badge-rounded badge-success">Checkin</span>
								</td>
								<td>$099</td>
								<td>
									<div class="dropdown custom-dropdown mb-0">
										<div
											class="btn sharp btn-primary tp-btn"
											data-toggle="dropdown"
											aria-label="More options"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												width="18px"
												height="18px"
												viewBox="0 0 24 24"
												version="1.1"
											>
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="12" cy="5" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="19" r="2" />
												</g>
											</svg>
										</div>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item" href="/">Details</a>
											<a class="dropdown-item text-danger" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>06</td>
								<td>Samsung</td>
								<td>Robert Herbert</td>
								<td>28 July 2024</td>
								<td>
									<span class="badge badge-rounded badge-success">Checkin</span>
								</td>
								<td>$520</td>
								<td>
									<div class="dropdown custom-dropdown mb-0">
										<div class="btn sharp btn-primary tp-btn" data-toggle="dropdown">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												width="18px"
												height="18px"
												viewBox="0 0 24 24"
												version="1.1"
											>
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="12" cy="5" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="19" r="2" />
												</g>
											</svg>
										</div>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item" href="/">Details</a>
											<a class="dropdown-item text-danger" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<div class="col-lg-12">
		<div class="card">
			<div class="card-header">
				<h4 class="card-title">Services</h4>
			</div>
			<div class="card-body">
				<div class="table-responsive">
					<table class="table table-bordered table-responsive-sm">
						<thead style="background-color: #224335">
							<tr style="color: white">
								<th>E-Waste Collection</th>
								<th>Unit</th>
								<th>T1</th>
								<th>T2</th>
								<th>T3</th>
								<th>T4</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>General E-Waste Recycling</td>
								<td>KG</td>
								<td>0.948</td>
								<td>1.106</td>
								<td>1.264</td>
								<td>1.58</td>
								<td>
									<div class="dropdown">
										<button
											type="button"
											class="btn btn-success light sharp"
											data-toggle="dropdown"
											aria-label="Dropdown menu"
										>
											<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="5" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="19" cy="12" r="2" />
												</g>
											</svg>
										</button>

										<div class="dropdown-menu">
											<a class="dropdown-item" href="/">Edit</a>
											<a class="dropdown-item" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>Smartphone Recycling</td>
								<td>KG</td>
								<td>0.541</td>
								<td>0.623</td>
								<td>0.712</td>
								<td>0.803</td>
								<td>
									<div class="dropdown">
										<button
											type="button"
											class="btn btn-success light sharp"
											data-toggle="dropdown"
											aria-label="Dropdown menu"
										>
											<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="5" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="19" cy="12" r="2" />
												</g>
											</svg>
										</button>

										<div class="dropdown-menu">
											<a class="dropdown-item" href="/">Edit</a>
											<a class="dropdown-item" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>Laptop Recycling</td>
								<td>KG</td>
								<td>0.832</td>
								<td>1.045</td>
								<td>1.246</td>
								<td>1.523</td>
								<td>
									<div class="dropdown">
										<button
											type="button"
											class="btn btn-success light sharp"
											data-toggle="dropdown"
											aria-label="Dropdown menu"
										>
											<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="5" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="19" cy="12" r="2" />
												</g>
											</svg>
										</button>

										<div class="dropdown-menu">
											<a class="dropdown-item" href="/">Edit</a>
											<a class="dropdown-item" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>Desktop Computers Recycling</td>
								<td>KG</td>
								<td>1.125</td>
								<td>1.263</td>
								<td>1.499</td>
								<td>1.786</td>
								<td>
									<div class="dropdown">
										<button
											type="button"
											class="btn btn-success light sharp"
											data-toggle="dropdown"
											aria-label="Dropdown menu"
										>
											<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="5" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="19" cy="12" r="2" />
												</g>
											</svg>
										</button>

										<div class="dropdown-menu">
											<a class="dropdown-item" href="/">Edit</a>
											<a class="dropdown-item" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>CRT Monitors Recycling</td>
								<td>KG</td>
								<td>2.003</td>
								<td>2.352</td>
								<td>2.598</td>
								<td>3.009</td>
								<td>
									<div class="dropdown">
										<button
											type="button"
											class="btn btn-success light sharp"
											data-toggle="dropdown"
											aria-label="Dropdown menu"
										>
											<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="5" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="19" cy="12" r="2" />
												</g>
											</svg>
										</button>

										<div class="dropdown-menu">
											<a class="dropdown-item" href="/">Edit</a>
											<a class="dropdown-item" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>LED/LCD TVs Recycling</td>
								<td>KG</td>
								<td>1.002</td>
								<td>1.134</td>
								<td>1.381</td>
								<td>1.579</td>
								<td>
									<div class="dropdown">
										<button
											type="button"
											class="btn btn-success light sharp"
											data-toggle="dropdown"
											aria-label="Dropdown menu"
										>
											<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="5" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="19" cy="12" r="2" />
												</g>
											</svg>
										</button>

										<div class="dropdown-menu">
											<a class="dropdown-item" href="/">Edit</a>
											<a class="dropdown-item" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="card-body">
				<div class="table-responsive">
					<table class="table table-bordered table-responsive-sm">
						<thead style="background-color: #224335">
							<tr style="color: white">
								<th>ITAD - IT Asset Purchasing & Resale</th>
								<th>Unit</th>
								<th>T1</th>
								<th>T2</th>
								<th>T3</th>
								<th>T4</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>General E-Waste Recycling</td>
								<td>Each</td>
								<td>0.948</td>
								<td>1.106</td>
								<td>1.264</td>
								<td>1.58</td>
								<td>
									<div class="dropdown">
										<button
											type="button"
											class="btn btn-success light sharp"
											data-toggle="dropdown"
											aria-label="Dropdown menu"
										>
											<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="5" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="19" cy="12" r="2" />
												</g>
											</svg>
										</button>

										<div class="dropdown-menu">
											<a class="dropdown-item" href="/">Edit</a>
											<a class="dropdown-item" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>Smartphone Recycling</td>
								<td>Each</td>
								<td>0.541</td>
								<td>0.623</td>
								<td>0.712</td>
								<td>0.803</td>
								<td>
									<div class="dropdown">
										<button
											type="button"
											class="btn btn-success light sharp"
											data-toggle="dropdown"
											aria-label="Dropdown menu"
										>
											<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="5" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="19" cy="12" r="2" />
												</g>
											</svg>
										</button>

										<div class="dropdown-menu">
											<a class="dropdown-item" href="/">Edit</a>
											<a class="dropdown-item" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>Laptop Recycling</td>
								<td>Each</td>
								<td>0.832</td>
								<td>1.045</td>
								<td>1.246</td>
								<td>1.523</td>
								<td>
									<div class="dropdown">
										<button
											type="button"
											class="btn btn-success light sharp"
											data-toggle="dropdown"
											aria-label="Dropdown menu"
										>
											<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="5" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="19" cy="12" r="2" />
												</g>
											</svg>
										</button>

										<div class="dropdown-menu">
											<a class="dropdown-item" href="/">Edit</a>
											<a class="dropdown-item" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>Desktop Computers Recycling</td>
								<td>Each</td>
								<td>1.125</td>
								<td>1.263</td>
								<td>1.499</td>
								<td>1.786</td>
								<td>
									<div class="dropdown">
										<button
											type="button"
											class="btn btn-success light sharp"
											data-toggle="dropdown"
											aria-label="Dropdown menu"
										>
											<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="5" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="19" cy="12" r="2" />
												</g>
											</svg>
										</button>

										<div class="dropdown-menu">
											<a class="dropdown-item" href="/">Edit</a>
											<a class="dropdown-item" href="/">Delete</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>12 mm non-witnessed</div>
									<div>Unit price up to 50 drivers</div>
								</td>
								<td>Each</td>
								<td>2.003</td>
								<td>2.352</td>
								<td>2.598</td>
								<td>3.009</td>
								<td>
									<div class="dropdown">
										<button
											type="button"
											class="btn btn-success light sharp"
											data-toggle="dropdown"
											aria-label="Dropdown menu"
										>
											<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<circle fill="#000000" cx="5" cy="12" r="2" />
													<circle fill="#000000" cx="12" cy="12" r="2" />
													<circle fill="#000000" cx="19" cy="12" r="2" />
												</g>
											</svg>
										</button>

										<div class="dropdown-menu">
											<a class="dropdown-item" href="/">Edit</a>
											<a class="dropdown-item" href="/">Delete</a>
										</div>
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
