import { pb } from '$lib/pocketbase';
import { redirect, fail } from '@sveltejs/kit'; 
import { goto } from '$app/navigation';
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
    const agreement_term = formData.get('agreement_term');
    const services = formData.get('services');
    const remark = formData.get('remark');

    // Ensure the user is authenticated
    if (!pb.authStore.isValid) {
      return fail(401, { message: 'User not authenticated' });
    }

    const prepared_by = pb.authStore.model.id;

    try {
        const record = await pb.collection('contracts').create({ 
          clientId, date, number, prepared_by, agreement_term, services, remark
        });
  
        console.log('Contract created:', record);
  
        // Redirect to contract detail page instead of list        
        throw redirect(303, `/contracts/${record.id}`);

      } catch (err) {
        // Re-throw redirect responses so they aren't treated as errors
        if (err && err.status && err.location) {
          throw err;
        }
        console.error('Error updating contract:', err);
        return fail(500, {
          error: err.message || 'Error updating contract',
          values: Object.fromEntries(formData)
        });
      }
    }
  };