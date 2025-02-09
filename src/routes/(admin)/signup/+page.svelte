<script>
    import { pb } from '$lib/pocketbase';
    import { goto } from '$app/navigation';
  
    let email = '', password = '', username = '', error = '';
  
    async function signup() {
      try {
        // Create a new user in the "users" collection
        await pb.collection('users').create({ email, password, username });
        // Log in the new user automatically
        await pb.collection('users').authWithPassword(email, password);
        goto('/');
      } catch (err) {
        console.error('Signup error:', err);
        error = 'Signup failed. Please check your details.';
      }
    }
  </script>
  
  <form on:submit|preventDefault={signup}>
    <input type="text" bind:value={username} placeholder="Username" required />
    <input type="email" bind:value={email} placeholder="Email" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Signup</button>
    {#if error}
      <p style="color:red">{error}</p>
    {/if}
  </form>
  