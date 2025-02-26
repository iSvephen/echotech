<script>
    import { createEventDispatcher } from 'svelte';
    import { debounce } from '$lib/utils/validation';

    export let type = 'text';
    export let value = '';
    export let label = '';
    export let name = '';
    export let placeholder = '';
    export let required = false;
    export let validate = () => null;
    export let validateOnChange = true;

    let error = null;
    let touched = false;
    const dispatch = createEventDispatcher();

    const handleInput = debounce((e) => {
        value = e.target.value;
        if (validateOnChange && touched) {
            error = validate(value);
        }
        dispatch('input', { value, error });
    }, 300);

    const handleBlur = () => {
        touched = true;
        error = validate(value);
        dispatch('blur', { value, error });
    };
</script>

<div class="form-group">
    {#if label}
        <label for={name}>{label}</label>
    {/if}
    <input
        {type}
        {name}
        {placeholder}
        {required}
        class="form-control"
        class:is-invalid={error}
        value={value}
        on:input={handleInput}
        on:blur={handleBlur}
    />
    {#if error}
        <div class="invalid-feedback">
            {error}
        </div>
    {/if}
</div>

<style>
    .form-group {
        margin-bottom: 1rem;
    }
    .is-invalid {
        border-color: #dc3545;
    }
    .invalid-feedback {
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }
</style>
