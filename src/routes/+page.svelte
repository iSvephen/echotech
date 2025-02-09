<script>
    import { pb } from '$lib/pocketbase';
    import { goto } from '$app/navigation';
  
    let email = '', password = '', error = '';
  
    async function login() {
      try {
        await pb.collection('users').authWithPassword(email, password);
        goto('/units');
      } catch (err) {
        console.error('Login error:', err);
        error = 'Invalid email or password';
      }
    }
  </script>
  
  <!-- <form on:submit|preventDefault={login}>
    <input type="email" bind:value={email} placeholder="Email" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Login</button>
    {#if error}
      <p style="color:red">{error}</p>
    {/if}
  </form> -->
  

  
  <div class="authincation h-100">
    <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
            <div class="col-md-6">
                <div class="authincation-content">
                    <div class="row no-gutters">
                        <div class="col-xl-12">
                            <div class="auth-form">
              <div class="text-center mb-3">
                <a href="/"><img src="/images/Echo_Sybol.png" alt=""></a>
              </div>
                                <h4 class="text-center mb-4 text-white">Sign in your account</h4>
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
                                        <button type="submit" class="btn bg-white text-primary btn-block">Sign Me In</button>
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