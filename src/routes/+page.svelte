<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import ReCaptcha from '$lib/components/ReCaptcha.svelte';
    import FormInput from '$lib/components/FormInput.svelte';
    import Toast from '$lib/components/Toast.svelte';
    import { validateEmail, validatePassword } from '$lib/utils/validation';
    import { auth, isAuthenticated } from '$lib/stores/auth';
    import { toast } from '$lib/utils/toast';
  
    let email = '', password = '', recaptchaResponse = '';
    let formValid = false;
    let emailError = null;
    let passwordError = null;
    
    const RECAPTCHA_SITE_KEY = '6LefKeMqAAAAABuqgV2olNJiHpYQtyB8Vkh32QVp';

    $: formValid = !emailError && !passwordError && email && password && recaptchaResponse;

    onMount(() => {
        if ($isAuthenticated) {
            goto('/dashboard');
        }
    });
  
    async function handleLogin() {
        if (!formValid) return;

        const success = await auth.login(email, password, recaptchaResponse);
        if (success) {
            toast.success('Successfully logged in!', 'Welcome back');
            goto('/dashboard');
        } else {
            toast.error($auth.error || 'Failed to login', 'Login Error');
        }
    }

    function handleRecaptchaVerify(event) {
        recaptchaResponse = event.detail.response;
        toast.info('reCAPTCHA verified', 'Verification');
    }

    function handleRecaptchaExpire() {
        recaptchaResponse = '';
        toast.warning('reCAPTCHA expired, please verify again', 'Verification Expired');
    }

    function handleEmailInput(event) {
        email = event.detail.value;
        emailError = event.detail.error;
    }

    function handlePasswordInput(event) {
        password = event.detail.value;
        passwordError = event.detail.error;
    }
</script>

<svelte:head>
    <title>Echo Tech - Login</title>
    <link href="/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <script src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad" async defer></script>
</svelte:head>

<Toast />

<div class="login-wrapper">
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-6">
                <div class="authincation-content">
                    <div class="row no-gutters">
                        <div class="col-xl-12">
                            <div class="auth-form">
                                <div class="text-center mb-3">
                                    <h1>Login</h1>
                                </div>
                                <form on:submit|preventDefault={handleLogin}>
                                    {#if $auth.error}
                                        <div class="alert alert-danger" role="alert">
                                            {$auth.error}
                                        </div>
                                    {/if}

                                    <FormInput
                                        type="email"
                                        name="email"
                                        label="Email"
                                        bind:value={email}
                                        validate={validateEmail}
                                        required
                                        on:input={handleEmailInput}
                                    />

                                    <FormInput
                                        type="password"
                                        name="password"
                                        label="Password"
                                        bind:value={password}
                                        validate={validatePassword}
                                        required
                                        on:input={handlePasswordInput}
                                    />

                                    <div class="form-group mb-4">
                                        <ReCaptcha 
                                            siteKey={RECAPTCHA_SITE_KEY}
                                            on:verify={handleRecaptchaVerify}
                                            on:expire={handleRecaptchaExpire}
                                        />
                                    </div>

                                    <button 
                                        type="submit" 
                                        class="btn btn-echo btn-block" 
                                        disabled={!formValid || $auth.loading}
                                    >
                                        {#if $auth.loading}
                                            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Logging in...
                                        {:else}
                                            Login
                                        {/if}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .login-wrapper {
        min-height: 100vh;
        background: linear-gradient(135deg, #224335 0%, #829BA9 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    .authincation-content {
        background: white;
        padding: 2.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .auth-form {
        margin-top: 1.5rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        color: #224335;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    .input-group-text {
        background-color: #f8f9fa;
        border-right: none;
    }

    .input-group .form-control {
        border-left: none;
    }

    .input-group-text i {
        color: #224335;
    }

    .btn-echo {
        padding: 0.75rem 1.5rem;
        font-weight: 500;
        transition: all 0.3s ease;
    }

    .btn-echo:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(34, 67, 53, 0.2);
    }

    .alert {
        border-radius: 8px;
        font-size: 0.9rem;
    }
</style>