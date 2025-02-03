<script>
  import pb from '$lib/pocketbase'; // Import the PocketBase client
  
    let email = '';
    let password = '';
    let username = '';
    let error = '';
  
    async function handleSignup() {
      try {
        const data = {
          email,
          password,
          passwordConfirm: password,
          username,
        };
        await pb.collection('users').create(data);
        window.location.href = '/login'; // Redirect to login page
      } catch (err) {
        error = err.message;
      }
    }
  </script>
  
  <h1>Sign Up</h1>
  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
  <form on:submit|preventDefault={handleSignup}>
    <input type="email" bind:value={email} placeholder="Email" required />
    <input type="text" bind:value={username} placeholder="Username" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Sign Up</button>
  </form>
  <p>Already have an account? <a href="/login">Login</a></p>