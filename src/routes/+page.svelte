<script>
    import { pb } from '$lib/pocketbase';
    import { goto } from '$app/navigation';
  
    let email = '', password = '', error = '', loading = false;
  
    async function login() {
        loading = true;
        error = '';
        try {
            await pb.collection('users').authWithPassword(email, password);
            goto('/dashboard');
        } catch (err) {
            if (err.status === 400) {
                error = 'Invalid email or password';
            } else if (err.status === 0) {
                error = 'Network connection error';
            } else {
                error = 'An unexpected error occurred';
            }
            loading = false;
        }
    }
</script>

<svelte:head>
    <title>Echo Tech - Login</title>
    <link href="/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
</svelte:head>
  
<div class="login-wrapper">
    <div class="auth-container">
        <div class="auth-card">
            <div class="brand-logo">
                <img src="/images/Echo_Symbol.png" alt="Echo Tech Logo">
            </div>
            
            <form on:submit|preventDefault={login} class="login-form">
                {#if error}
                    <div class="alert alert-danger fade show">
                        <i class="fa fa-exclamation-circle mr-2"></i>
                        {error}
                    </div>
                {/if}
                
                <div class="form-group">
                    <label for="email">Email</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-envelope"></i>
                            </span>
                        </div>
                        <input 
                            type="email" 
                            class="form-control" 
                            id="email" 
                            placeholder="Enter your email"
                            bind:value={email}
                            required
                        >
                    </div>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-lock"></i>
                            </span>
                        </div>
                        <input 
                            type="password" 
                            class="form-control" 
                            id="password" 
                            placeholder="Enter your password"
                            bind:value={password}
                            required
                        >
                    </div>
                </div>

                <button 
                    type="submit" 
                    class="btn btn-echo btn-block" 
                    disabled={loading}
                >
                    {#if loading}
                        <i class="fa fa-spinner fa-spin mr-2"></i>
                        Signing in...
                    {:else}
                        Sign In
                    {/if}
                </button>
            </form>
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

    .auth-container {
        width: 100%;
        max-width: 420px;
        margin: auto;
    }

    .auth-card {
        background: white;
        padding: 2.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .brand-logo {
        text-align: center;
        margin-bottom: 2rem;
    }

    .brand-logo img {
        width: 80%;
        max-width: 200px;
        height: auto;
    }

    .login-form {
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