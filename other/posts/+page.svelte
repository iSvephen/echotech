<script>
    // export let posts = []; // Default to an empty array

        export let data;
    const { posts} = data;

    import pb from '$lib/pocketbase';
    
    
    async function deletePost(id) {
      if (confirm('Are you sure you want to delete this post?')) {
        await pb.collection('posts').delete(id);
        window.location.reload();
      }
    }
  </script>
  
  <h1>Posts</h1>
  
{#if posts.length > 0}
  <ul>
    {#each posts as post}
      <li>
        <strong>{post.title}</strong> - {post.content}
        <button on:click={() => deletePost(post.id)}>Delete</button>
        <a href={`/posts/${post.id}/edit`}> Edit</a>  <!-- Edit link -->
      </li>
    {/each}
  </ul>
{:else}
  <p>No posts found.</p>
{/if}

  