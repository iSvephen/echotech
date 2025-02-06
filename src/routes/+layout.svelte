<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Echo Tech</title>
    <link href="./css/style.css" rel="stylesheet" />
    <!-- Datatable -->
    <link href="./vendor/datatables/css/jquery.dataTables.min.css" rel="stylesheet">



</svelte:head>

<!--**********************************
    Content body start
***********************************-->
<Nav />
<div class="content-body">
	<!-- row -->
	<div class="container-fluid">
		<slot />
	</div>
</div>
<!--**********************************
    Content body end
***********************************-->
<Footer />
