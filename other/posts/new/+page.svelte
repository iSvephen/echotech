<script>
    import pb from '$lib/pocketbase';
  
    let title = '';
    let content = '';
    let error = '';
  
    async function createPost() {
      try {
        await pb.collection('posts').create({
          title,
          content,
          user: pb.authStore.model.id // Associate post with logged-in user
        });
        window.location.href = '/posts'; // Redirect after success
      } catch (err) {
        error = err.message;
      }
    }
  </script>
  
  <h1>New Post</h1>
  
  <form on:submit|preventDefault={createPost}>
    <input type="text" bind:value={title} placeholder="Title" required />
    <textarea bind:value={content} placeholder="Content" required></textarea>
    <button type="submit">Create</button>
  </form>
  {#if error}<p style="color: red;">{error}</p>{/if}
  