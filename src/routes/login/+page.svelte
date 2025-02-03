<script>
    import pb from '$lib/pocketbase';
  
    let email = '';
    let password = '';
    let error = '';
  
    async function handleLogin() {
      try {
        await pb.collection('users').authWithPassword(email, password);
        window.location.href = '/'; // Redirect to home page
      } catch (err) {
        error = err.message;
      }
    }
  </script>
  
  <h1>Login</h1>
  {#if error}
    <p style="color: red;">{error}sfasf</p>
  {/if}
  <form on:submit|preventDefault={handleLogin}>
    <input type="email" bind:value={email} placeholder="Email" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Login</button>
  </form>