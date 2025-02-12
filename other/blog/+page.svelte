<script>
  import { enhance } from '$app/forms';
  export let data;
  let posts = data.posts;
  let editingPost = null;

  // Separate variables for form binding
  let title = '';
  let content = '';

  function editPost(post) {
    editingPost = { ...post };
    title = post.title;
    content = post.content;
  }
</script>

<h1>Blog Posts</h1>

{#if posts.length === 0}
  <p>No blog posts available.</p>
{/if}

<ul>
  {#each posts as post}
    <li>
      <strong>{post.title}</strong> - {new Date(post.created).toLocaleDateString()}
      <p>{post.content}</p>
      
      <button on:click={() => editPost(post)}>Edit</button>

      <form method="post" action="?/delete" use:enhance>
        <input type="hidden" name="id" value={post.id} />
        <button type="submit" style="color: red;">Delete</button>
      </form>
    </li>
  {/each}
</ul>

<h2>{editingPost ? 'Edit' : 'Create'} Blog Post</h2>

<form method="post" action={editingPost ? "?/update" : "?/create"} use:enhance>
  {#if editingPost}
    <input type="hidden" name="id" value={editingPost.id} />
  {/if}

  <label>Title:</label>
  <input type="text" name="title" bind:value={title} required />

  <label>Content:</label>
  <textarea name="content" bind:value={content} required></textarea>

  <button type="submit">{editingPost ? 'Update' : 'Create'}</button>
</form>
