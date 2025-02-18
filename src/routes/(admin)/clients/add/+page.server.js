import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    // Required fields validation
    const requiredFields = ['name', 'nzbn', 'address', 'address_suburb', 'address_city', 'address_postcode', 'contact_phone', 'contact_name', 'contact_email'];
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
    const optionalFields = ['contact_title', 'contact_address', 'remark'];
    for (const field of optionalFields) {
      data[field] = formData.get(field)?.trim() || '';
    }

    try {
      const record = await pb.collection('clients').create(data);
      if (record) {
        // Throw redirect to navigate after success
        throw redirect(303, `/contracts/new`);
      }
    } catch (err) {
      // Re-throw redirect responses so they aren't treated as errors
      if (err && err.status && err.location) {
        throw err;
      }
      console.error('Error creating client:', err);
      return fail(500, {
        error: err.message || 'Error creating client',
        values: Object.fromEntries(formData)
      });
    }
  }
};