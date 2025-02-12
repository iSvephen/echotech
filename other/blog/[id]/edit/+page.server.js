// src/routes/blog/[id]/edit/+page.server.js
import { pb } from '$lib/pocketbase';
import { redirect, fail } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const post = await pb.collection('blogposts').getOne(params.id);
    return { post };
  } catch (error) {
    console.error('Error loading blog post for editing:', error);
    return { post: null };
  }
}

export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();
    const title = formData.get('title');
    const content = formData.get('content');

    try {
      await pb.collection('blogposts').update(params.id, { title, content });
      // Redirect to the updated post’s detail page
      throw redirect(303, `/blog/${params.id}`);
    } catch (err) {
      console.error('Error updating blog post:', err);
      return fail(500, { message: 'Error updating blog post' });
    }
  }
};
