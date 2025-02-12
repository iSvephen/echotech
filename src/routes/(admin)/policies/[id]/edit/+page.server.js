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
    const address = formData.get('address');
    const contact_name = formData.get('contact_name');
    const contact_email = formData.get('contact_email');
    const contact_title = formData.get('contact_title');
    const contact_phone = formData.get('contact_phone');
    const contact_address = formData.get('contact_address');
    const remark = formData.get('remark');

    try {
      await pb.collection('clients').update(params.id, {
        name,
        nzbn,
        address,
        contact_name,
        contact_email,
        contact_title,
        contact_phone,
        contact_address,
        remark
      });
      // Redirect to the updated client's detail page
      throw redirect(303, `/clients`);
    } catch (err) {
      console.error('Error updating client:', err);
      return fail(500, { message: 'Error updating client' });
    }
  }
};
