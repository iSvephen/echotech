<script>
    import { enhance } from '$app/forms';
    let error = null;
  </script>
  
  <h1>Create New Blog Post</h1>
  
  <form method="post" use:enhance>
    <div>
      <label for="title">Title</label>
      <input type="text" name="title" id="title" required />
    </div>
    <div>
      <label for="content">Content</label>
      <textarea name="content" id="content" rows="10" required></textarea>
    </div>
    <button type="submit">Create</button>
    {#if error}
      <p style="color:red">{error}</p>
    {/if}
  </form>
  