<script>
    import { pb } from '$lib/pocketbase';
    import { goto } from '$app/navigation';
  
    let email = '', password = '', error = '';
  
    async function login() {
      try {
        await pb.collection('users').authWithPassword(email, password);
        goto('/dashboard');
      } catch (err) {
        console.error('Login error:', err);
        error = 'Invalid email or password';
      }
    }
  </script>


<svelte:head>
    <title>Echo Tech - Login</title>
		<link href="/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet">
		<link href="/css/style.css" rel="stylesheet">
</svelte:head>
  
  <div class="authincation h-100">
    <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
            <div class="col-md-6">
                <div class="authincation-content">
                    <div class="row no-gutters">
                        <div class="col-xl-12">
                            <div class="auth-form">
              <div class="text-center mb-3">
                <a href="/"><img src="/images/Echo_Symbol.png" width="100%" alt=""></a>
              </div>
                                <!-- <h4 class="text-center mb-4 text-white">Sign in your account</h4> -->
                                <form on:submit|preventDefault={login}>
                                    <div class="form-group">
                                        <label class="mb-1 text-white"><strong>Email</strong></label>
                                        <input type="email" class="form-control" bind:value={email}>
                                    </div>
                                    <div class="form-group">
                                        <label class="mb-1 text-white"><strong>Password</strong></label>
                                        <input type="password" class="form-control" bind:value={password}>
                                    </div>
                                    {#if error}
                                    <p style="color:red">{error}</p>
                                  {/if}
                                    <div class="text-center">
                                        <button type="submit" class="btn bg-white text-black btn-block">Sign Me In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>