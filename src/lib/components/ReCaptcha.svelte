<!-- ReCaptcha.svelte -->
<script>
    import { onMount, createEventDispatcher } from 'svelte';
    
    export let siteKey;
    const dispatch = createEventDispatcher();
    let container;
    
    onMount(() => {
        if (typeof grecaptcha !== 'undefined') {
            renderCaptcha();
        } else {
            window.onRecaptchaLoad = renderCaptcha;
        }
    });

    function renderCaptcha() {
        grecaptcha.render(container, {
            sitekey: siteKey,
            callback: (response) => {
                dispatch('verify', { response });
            },
            'expired-callback': () => {
                dispatch('expire');
            }
        });
    }
</script>

<div bind:this={container}></div>
