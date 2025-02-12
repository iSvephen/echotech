<script>
    import { pb } from '$lib/pocketbase';
    import { goto } from '$app/navigation';
  
    let email = '', password = '', error = '';
  
    async function login() {
      try {
        const authData = await pb.collection('users').authWithPassword(email, password);
        console.log('Login successful:', authData);
        // Redirect to the dashboard or another page
        goto('/dashboard');
    } catch (error) {
        console.error('Login error:', error);
        if (error.status === 400) {
            alert('Invalid email or password. Please try again.');
        } else if (error.status === 0) {
            alert('The request was cancelled. Please check your network connection.');
        } else {
            alert('An unexpected error occurred. Please try again later.');
        }
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
                                        <label for="email" class="mb-1 text-white"><strong>Email</strong></label>
                                        <input id="email" type="email" class="form-control" bind:value={email}>
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="mb-1 text-white"><strong>Password</strong></label>
                                        <input id="password" type="password" class="form-control" bind:value={password}>
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