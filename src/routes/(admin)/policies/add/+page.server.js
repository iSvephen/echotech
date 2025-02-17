import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    // Required fields validation
    const requiredFields = ['name', 'content'];
    const data = {};

    for (const field of requiredFields) {
      const value = formData.get(field)?.trim();
      if (!value) {
        return fail(400, {
          error: `${field.replace('_', ' ')} is required`,
          values: Object.fromEntries(formData)
        });
      }
      data[field] = value;
    }

    // Optional fields
    const optionalFields = ['name', 'content'];
    for (const field of optionalFields) {
      data[field] = formData.get(field)?.trim() || '';
    }

    try {
      const record = await pb.collection('policies').create(data);
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