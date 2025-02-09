// src/routes/blog/new/+page.server.js
import { pb } from '$lib/pocketbase';
import { redirect, fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get('title');
    const content = formData.get('content');

    try {
      // Optionally include the current user as the author if authenticated:
      const author = pb.authStore.model?.id || null;

      const record = await pb.collection('blogposts').create({ title, content, author });
      // Redirect to the newly created post’s detail page
      throw redirect(303, `/blog/${record.id}`);
    } catch (err) {
      console.error('Error creating blog post:', err);
      return fail(500, { message: 'Error creating blog post' });
    }
  }
};
