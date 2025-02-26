<script>
    import { onMount } from 'svelte';
    import { notifications } from '$lib/stores/notifications';
    import { fly } from 'svelte/transition';

    const icons = {
        success: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        error: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        info: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        warning: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`
    };

    function handleKeydown(event, notificationId) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            notifications.remove(notificationId);
        }
    }
</script>

{#if $notifications.length > 0}
    <div class="toast-container" role="status" aria-live="polite">
        {#each $notifications as notification (notification.id)}
            <button
                type="button"
                class="toast"
                class:success={notification.type === 'success'}
                class:error={notification.type === 'error'}
                class:info={notification.type === 'info'}
                class:warning={notification.type === 'warning'}
                transition:fly={{ y: 100, duration: 300 }}
                on:click={() => notifications.remove(notification.id)}
                on:keydown={(e) => handleKeydown(e, notification.id)}
                aria-label={`${notification.title ? notification.title + ': ' : ''}${notification.message} (Click or press Enter to dismiss)`}
            >
                <div class="toast-icon" aria-hidden="true">
                    {@html icons[notification.type]}
                </div>
                <div class="toast-content">
                    {#if notification.title}
                        <span class="toast-title">{notification.title}</span>
                    {/if}
                    <p>{notification.message}</p>
                </div>
                {#if notification.showProgress}
                    <div 
                        class="progress-bar"
                        style="animation-duration: {notification.duration}ms"
                        aria-hidden="true"
                    ></div>
                {/if}
            </button>
        {/each}
    </div>
{/if}

<style>
    .toast-container {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-width: 400px;
    }

    .toast {
        display: flex;
        align-items: flex-start;
        padding: 1rem;
        border-radius: 0.5rem;
        background: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 100%;
        text-align: left;
        border: none;
        font-family: inherit;
    }

    .toast:focus {
        outline: 2px solid #3B82F6;
        outline-offset: 2px;
    }

    .toast.success {
        border-left: 4px solid #10B981;
    }

    .toast.error {
        border-left: 4px solid #EF4444;
    }

    .toast.info {
        border-left: 4px solid #3B82F6;
    }

    .toast.warning {
        border-left: 4px solid #F59E0B;
    }

    .toast-icon {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.75rem;
        flex-shrink: 0;
    }

    .success .toast-icon :global(svg) {
        color: #10B981;
    }

    .error .toast-icon :global(svg) {
        color: #EF4444;
    }

    .info .toast-icon :global(svg) {
        color: #3B82F6;
    }

    .warning .toast-icon :global(svg) {
        color: #F59E0B;
    }

    .toast-content {
        flex: 1;
    }

    .toast-title {
        display: block;
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        color: #1F2937;
    }

    .toast-content p {
        margin: 0.25rem 0 0;
        font-size: 0.875rem;
        color: #4B5563;
    }

    .progress-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 100%;
        background: rgba(0, 0, 0, 0.1);
        animation: progress linear forwards;
    }

    @keyframes progress {
        from {
            width: 100%;
        }
        to {
            width: 0%;
        }
    }
</style>
