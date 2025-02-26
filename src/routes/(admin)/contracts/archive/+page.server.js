import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
    try {
        const contracts = await pb.collection('contracts').getFullList({ 
            filter: 'archived = true',
            expand: 'clientId,prepared_by',
            sort: '-created' 
        });

        // Clean up contracts with deleted clients
        const cleanContracts = contracts.map(contract => ({
            ...contract,
            expand: {
                ...contract.expand,
                clientId: contract.expand?.clientId || { name: 'Deleted Client' }
            }
        }));

        return { contracts: cleanContracts };
    } catch (error) {
        console.error('Error loading contracts:', error);
        return { contracts: [] };
    }
}

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');

        if (!name) return fail(400, { message: 'Name is required' });

        try {
            await pb.collection('contracts').create({ name});
            throw redirect(303, '/contracts');
        } catch (error) {
            console.error('Error creating service:', error);
            return fail(500, { message: 'Failed to create service' });
        }
    },

    update: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');
        const name = formData.get('name');

        if (!id || !name) return fail(400, { message: 'All fields are required' });

        try {
            await pb.collection('contracts').update(id, { name });
            throw redirect(303, '/contracts');
        } catch (error) {
            console.error('Error updating service:', error);
            return fail(500, { message: 'Failed to update service' });
        }
    },

    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) return fail(400, { message: 'Invalid service ID' });

        try {
            await pb.collection('contracts').delete(id);
            throw redirect(303, '/contracts');
        } catch (error) {
            console.error('Error deleting service:', error);
            return fail(500, { message: 'Failed to delete service' });
        }
    },

    unarchive: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) return fail(400, { message: 'Invalid contract ID' });

        try {
            await pb.collection('contracts').update(id, { archived: false });
            throw redirect(303, '/contracts');
        } catch (error) {
            console.error('Error unarchiving contract:', error);
            return fail(500, { message: 'Failed to unarchive contract' });
        }
    },

    archive: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        try {
            await pb.collection('contracts').update(id, {
                archived: true
            });
            throw redirect(303, '/contracts?success=archived');
        } catch (err) {
            if (err.status === 303) throw err;
            throw redirect(303, '/contracts?error=archive-failed');
        }
    },
};
