<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  const token = localStorage.getItem('auth_token'); // Or wherever you store the user's auth token

  export let data;
  let { post } = data;
  let title = post.title;
  let content = post.content;

  async function updatePost() {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${post.id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // Pass the auth token for the user
    },
        body: JSON.stringify({ title, content })
    });

    // Check if the response is OK
    if (res.ok) {
        goto('/posts'); // Redirect to post list after update
    } else {
        const errorResponse = await res.json(); // Get the error details
        console.error('Error response:', errorResponse);
        alert('Failed to update post');
    }
}

</script>

<h1>Edit Post</h1>

<form on:submit|preventDefault={updatePost}>
  <label>Title:</label>
  <input type="text" bind:value={title} required />

  <label>Content:</label>
  <textarea bind:value={content} required></textarea>

  <button type="submit">Save Changes</button>
</form>
