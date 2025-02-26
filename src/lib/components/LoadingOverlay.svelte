<script>
    export let message = 'Loading...';
    export let show = false;
</script>

{#if show}
<div class="loading-overlay">
    <div class="loading-content">
        <div class="spinner-border text-light" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <h4 class="mt-3 text-light">{message}</h4>
        <div class="progress mt-3">
            <div class="progress-bar progress-bar-striped progress-bar-animated" 
                 role="progressbar" 
                 style="width: 100%"></div>
        </div>
    </div>
</div>
{/if}

<style>
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .loading-content {
        text-align: center;
        padding: 2rem;
        border-radius: 8px;
        max-width: 400px;
    }

    .progress {
        width: 200px;
        height: 4px;
        background-color: rgba(255, 255, 255, 0.2);
    }

    .progress-bar {
        background-color: #fff;
    }

    :global(.spinner-border) {
        width: 3rem;
        height: 3rem;
    }
</style>
