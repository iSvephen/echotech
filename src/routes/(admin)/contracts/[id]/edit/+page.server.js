// src/routes/contracts/[id]/edit/+page.server.js
import { pb } from '$lib/pocketbase';
import { redirect, fail } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const contract = await pb.collection('contracts').getOne(params.id);
    const clients = await pb.collection('clients').getFullList({ sort: '-created' });
    const services = await pb.collection('services').getFullList({ sort: '-created' });
    const categories = await pb.collection('service_category').getFullList({ sort: '-created' });
    const units = await pb.collection('units').getFullList({ sort: '-created' });
    return { contract, clients, services, categories, units };
  } catch (error) {
    console.error('Error loading contract:', error);
    return { contract: null, clients: [], services: [], categories: [], units: [] };
  }
}

export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();
    const clientId = formData.get('clientId');
    const date = formData.get('date');
    const number = formData.get('number');
    const agreement_term = formData.get('agreement_term');
    const services = formData.get('services');
    const prepared_by = formData.get('prepared_by');
    const remark = formData.get('remark');

    try {
      const record = await pb.collection('contracts').update(params.id, { 
        clientId, date, number, prepared_by, agreement_term, services, remark
      });
      throw redirect(303, `/contracts/${params.id}`);
    } catch (err) {
      console.error('Error updating contract:', err);
      return fail(500, { message: 'Error updating contract' });
    }
  }
};
