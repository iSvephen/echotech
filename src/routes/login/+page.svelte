<script>
    import { pb } from '$lib/pocketbase';
    import { goto } from '$app/navigation';
  
    let email = '', password = '', error = '';
  
    async function login() {
      try {
        await pb.collection('users').authWithPassword(email, password);
        goto('/');
      } catch (err) {
        console.error('Login error:', err);
        error = 'Invalid email or password';
      }
    }
  </script>
  
  <form on:submit|preventDefault={login}>
    <input type="email" bind:value={email} placeholder="Email" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Login</button>
    {#if error}
      <p style="color:red">{error}</p>
    {/if}
  </form>
  