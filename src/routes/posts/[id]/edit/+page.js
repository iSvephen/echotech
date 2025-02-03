export async function load({ fetch, params }) {
    const postId = params.id;

    const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${postId}`);
    if (!res.ok) throw new Error('Post not found');

    const post = await res.json();
    return { post };
}
