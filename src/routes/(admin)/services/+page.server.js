import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
    try {
        const services = await pb.collection('services').getFullList({ 
            expand: ['categoryId,unitId'],
            sort: '-created' 
        });
        console.log('services:', services);
        return { services };
    } catch (error) {
        console.error('Error loading services:', error);
        return { services: [] };
    }
}

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');

        if (!name) return fail(400, { message: 'Name is required' });

        try {
            await pb.collection('services').create({ name});
            throw redirect(303, '/services');
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
            await pb.collection('services').update(id, { name });
            throw redirect(303, '/services');
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
            await pb.collection('services').delete(id);
            throw redirect(303, '/services');
        } catch (error) {
            console.error('Error deleting service:', error);
            return fail(500, { message: 'Failed to delete service' });
        }
    }
};
