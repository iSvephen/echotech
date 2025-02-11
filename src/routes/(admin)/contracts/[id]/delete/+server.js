// src/routes/blog/[id]/delete/+server.js
import { pb } from '$lib/pocketbase';
import { redirect, fail } from '@sveltejs/kit';

export async function POST({ params }) {
  try {
    await pb.collection('blogposts').delete(params.id);
    // Redirect back to the blog list after deletion
    throw redirect(303, '/blog');
  } catch (err) {
    console.error('Error deleting blog post:', err);
    return fail(500, { message: 'Error deleting blog post' });
  }
}
