<script>
    import { notification } from '$lib/stores/notification';
    import { fade, fly } from 'svelte/transition';
</script>

{#if $notification.show}
    <div 
        class="notification-wrapper"
        transition:fly={{ y: -100, duration: 300 }}
    >
        <div class="alert alert-{$notification.type} d-flex align-items-center">
            <i class="fa fa-{$notification.type === 'success' ? 'check-circle' : 
                           $notification.type === 'error' ? 'exclamation-circle' : 
                           $notification.type === 'warning' ? 'exclamation-triangle' : 
                           'info-circle'} mr-2"></i>
            {$notification.message}
        </div>
    </div>
{/if}

<style>
    .notification-wrapper {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
    }

    .alert {
        min-width: 300px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 1rem 1.5rem;
    }
</style> 