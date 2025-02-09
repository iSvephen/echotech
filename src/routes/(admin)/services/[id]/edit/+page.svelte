<script>
    export let data;
    import { enhance } from '$app/forms';
    let error = null;
    let post = data.post;
  </script>
  
  {#if post}
    <h1>Edit Blog Post</h1>
    <form method="post" use:enhance>
      <div>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" value={post.title} required />
      </div>
      <div>
        <label for="content">Content</label>
        <textarea name="content" id="content" rows="10" required>{post.content}</textarea>
      </div>
      <button type="submit">Update</button>
      {#if error}
        <p style="color:red">{error}</p>
      {/if}
    </form>
  
    <!-- Form for deleting the blog post -->
    <form method="post" action="/blog/{post.id}/delete">
      <button type="submit" style="margin-top: 1rem; color: red;">Delete Post</button>
    </form>
  {:else}
    <p>Post not found.</p>
  {/if}
  