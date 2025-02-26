import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
    try {
        const clients = await pb.collection('clients').getFullList({ sort: '-created' });
        const services = await pb.collection('services').getFullList({ sort: '-created' });
        const categories = await pb.collection('service_category').getFullList({ sort: '-created' });
        const units = await pb.collection('units').getFullList({ sort: '-created' });
        
        console.log('Load data:', { clients, services, categories, units });
        
        return { 
            clients, 
            services, 
            categories, 
            units 
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw redirect(303, '/contracts');
    }
}

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        console.log('Form data received:', Object.fromEntries(formData));

        const data = {
            clientId: formData.get('clientId'),
            date: formData.get('date'),
            number: formData.get('number'),
            agreement_term: formData.get('agreement_term'),
            services: formData.get('services'),
            remark: formData.get('remark') || ''
        };

        console.log('Processed data:', data);

        // Validate required fields
        if (!data.clientId || !data.date || !data.number || !data.agreement_term) {
            console.error('Validation failed:', data);
            return fail(400, {
                error: 'All required fields must be filled',
                values: Object.fromEntries(formData)
            });
        }

        // Ensure the user is authenticated
        if (!pb.authStore.isValid) {
            console.error('User not authenticated');
            return fail(401, { error: 'User not authenticated' });
        }

        try {
            // Convert number fields
            data.number = Number(data.number);
            data.agreement_term = Number(data.agreement_term);
            data.prepared_by = pb.authStore.model.id;
            data.archived = false;
            data.complete = false;

            console.log('Final data to create:', data);
            
            const record = await pb.collection('contracts').create(data);
            console.log('Created contract:', record);
            
            throw redirect(303, `/contracts/${record.id}?success=created`);
        } catch (err) {
            if (err.status === 303) throw err;
            console.error('Error creating contract:', err);
            return fail(500, {
                error: err.message || 'Failed to create contract',
                values: Object.fromEntries(formData)
            });
        }
    }
};