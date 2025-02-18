import { pb } from '$lib/pocketbase';
import { redirect, fail } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const client = await pb.collection('clients').getOne(params.id);
    return { client };
  } catch (error) {
    console.error('Error loading client for editing:', error);
    return { client: null };
  }
}

export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const nzbn = formData.get('nzbn');
    const address_street = formData.get('address_street');
    const address_suburb = formData.get('address_suburb');
    const address_city = formData.get('address_city');
    const address_postcode = formData.get('address_postcode');
    const contact_name = formData.get('contact_name');
    const contact_email = formData.get('contact_email');
    const contact_title = formData.get('contact_title');
    const contact_phone = formData.get('contact_phone');
    const contact_address = formData.get('contact_address');
    const remark = formData.get('remark');
    const address = `${address_street}, ${address_suburb}, ${address_city} ${address_postcode}`;

    try {
      const record = await  pb.collection('clients').update(params.id, {
        name,
        nzbn,
        address,
        address_street,
        address_suburb,
        address_city,
        address_postcode,
        contact_name,
        contact_email,
        contact_title,
        contact_phone,
        contact_address,
        remark
      });
      // Redirect to the updated policy's detail page
      if (record) {
        // Throw redirect to navigate after success
        throw redirect(303, `/clients`);
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