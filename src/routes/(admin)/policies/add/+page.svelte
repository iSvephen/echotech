<script>
	import { onMount } from 'svelte';
    let error = null;    
	let content = '';

	onMount(() => {
        // Initialize Summernote
        globalThis.$('.summernote').summernote({
            height: 350,
            minHeight: null,
            maxHeight: null,
            focus: true,
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'italic', 'underline', 'clear']],
                ['fontname', ['fontname']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
                ['table', ['table']],
                ['insert', ['link', 'picture']],
                ['view', ['fullscreen', 'codeview']]
            ],
            callbacks: {
                onChange: function(contents) {
                    content = contents;
                }
            }
        });
    });

</script>

<div class="container-fluid">
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">New Policy</h4>
				</div>
				<div class="card-body">
					<div class="form-validation">
						<form class="form-valide" method="post">
							<div class="form-row">
								<div class="form-group col-md-12">
									<label for="name">Name</label>
									<input type="text" class="form-control" id="name" name="name" />
								</div>

								<div class="form-group col-md-12">
									<label for="nzbn">Content</label>
								</div>

								<textarea class="summernote" name="content" bind:value={content}></textarea>

								
								<div class="summernote"></div>
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