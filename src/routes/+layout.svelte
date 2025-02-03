<script>
    import pb from '$lib/pocketbase';
  
    function handleLogout() {
      pb.authStore.clear();
      window.location.href = '/login';
    }
  </script>
  
  <nav>
    {#if pb.authStore.isValid}
      <button on:click={handleLogout}>Logout</button>
    {:else}
      <a href="/login">Login</a>
      <a href="/signup">Sign Up</a>
    {/if}
  </nav>
  <slot />