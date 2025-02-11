<script>
    export let data;
    let post = data.post;
  </script>
  
  {#if post}
    <h1>{post.title}</h1>
    <div>
      {@html post.content}
    </div>
    <a href="/blog/{post.id}/edit">Edit Post</a>
  {:else}
    <p>Blog post not found.</p>
  {/if}
  