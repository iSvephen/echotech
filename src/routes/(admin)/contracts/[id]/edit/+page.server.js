import { pb } from '$lib/pocketbase';
import { redirect, fail } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        const contract = await pb.collection('contracts').getOne(params.id);
        const clients = await pb.collection('clients').getFullList({ sort: '-created' });
        const services = await pb.collection('services').getFullList({ sort: '-created' });
        const categories = await pb.collection('service_category').getFullList({ sort: '-created' });
        const units = await pb.collection('units').getFullList({ sort: '-created' });
        
        return { 
            contract, 
            clients, 
            services, 
            categories, 
            units 
        };
    } catch (error) {
        console.error('Error loading contract data:', error);
        throw redirect(303, '/contracts');
    }
}

export const actions = {
    update: async ({ request, params }) => {
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

        try {
            const record = await pb.collection('contracts').update(params.id, { 
                clientId, 
                date, 
                number, 
                agreement_term, 
                services, 
                remark
            });
            
            // console.log('Updated contract:', record);
            throw redirect(303, `/contracts/${params.id}`);
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
        },

    delete: async ({ params }) => {
        try {
            await pb.collection('contracts').delete(params.id);
            return {
            status: 303,
            headers: {
                location: '/contracts'
            },
            success: true,
            message: 'Contract deleted successfully'
            };
        } catch (err) {
            if (err instanceof redirect) throw err;
            console.error('Error deleting Contract:', err);
            return fail(500, {
            error: err.message || 'Error deleting Contract'
            });
        }
    }
};