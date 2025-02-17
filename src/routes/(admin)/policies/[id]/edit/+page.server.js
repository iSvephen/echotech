import { pb } from '$lib/pocketbase';
import { redirect, fail } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const policy = await pb.collection('policies').getOne(params.id);
    return { policy };
  } catch (error) {
    console.error('Error loading policy for editing:', error);
    return { policy: null };
  }
}

export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const content = formData.get('content');

    try {
      const record = await pb.collection('policies').update(params.id, {
        name,
        content
      });
      // Redirect to the updated policy's detail page
      if (record) {
        // Throw redirect to navigate after success
        throw redirect(303, `/policies`);
      }
    } catch (err) {
      // Re-throw redirect responses so they aren't treated as errors
      if (err && err.status && err.location) {
        throw err;
      }
      console.error('Error creating policy:', err);
      return fail(500, {
        error: err.message || 'Error creating policy',
        values: Object.fromEntries(formData)
      });
    }
  }
};


