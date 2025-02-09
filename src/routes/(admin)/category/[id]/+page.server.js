// src/routes/blog/[id]/+page.server.js
import { pb } from '$lib/pocketbase';

export async function load({ params }) {
  try {
    const post = await pb.collection('blogposts').getOne(params.id);
    return { post };
  } catch (error) {
    console.error('Error loading blog post:', error);
    return { post: null };
  }
}
