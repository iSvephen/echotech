<script>
    import { pb } from '$lib/pocketbase';
    import { goto } from '$app/navigation';
  
    // Clear the auth store (client-side) and redirect to login
    pb.authStore.clear();
    goto('/login');
  </script>
  