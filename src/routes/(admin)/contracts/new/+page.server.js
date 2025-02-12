import { pb } from '$lib/pocketbase';
import { redirect, fail } from '@sveltejs/kit';


export async function load() {
  try {
      const clients = await pb.collection('clients').getFullList({ sort: '-created' });
      const services = await pb.collection('services').getFullList({ sort: '-created' });
      const categories = await pb.collection('service_category').getFullList({ sort: '-created' });
      const units = await pb.collection('units').getFullList({ sort: '-created' });
      return { clients, services, categories, units };
  } catch (error) {
      console.error('Error loading units:', error);
      return { units: [] };
  }
}


export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const clientId = formData.get('clientId');
    const date = formData.get('date');
    const number = formData.get('number');
    const prepared_by = formData.get('prepared_by');
    const agreement_term = formData.get('agreement_term');
    const services = formData.get('services');
    const remark = formData.get('remark');

    // Additional fields
    const categoryId = formData.get('categoryId');
    const collectionId = formData.get('collectionId');
    const collectionName = formData.get('collectionName');
    const name = formData.get('name');
    const subcategoryId = formData.get('subcategoryId');
    const t1 = formData.get('t1');
    const t2 = formData.get('t2');
    const t3 = formData.get('t3');
    const t4 = formData.get('t4');
    const unitId = formData.get('unitId');

    try {
      const record = await pb.collection('blogposts').create({ 
        clientId, date, number, prepared_by, agreement_term, services, remark,
        categoryId, collectionId, collectionName, name, subcategoryId, t1, t2, t3, t4, unitId
      });
      // Redirect to the newly created post’s detail page
      throw redirect(303, `/contracts`);
    } catch (err) {
      console.error('Error creating contract:', err);
      return fail(500, { message: 'Error creating contract' });
    }
  }
};
