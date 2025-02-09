import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
    try {
        const categories = await pb.collection('service_subcategory').getFullList({ sort: '-created' });
        // console.log('categories:', categories);
        return { categories };
    } catch (error) {
        console.error('Error loading categories:', error);
        return { categories: [] };
    }
}

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');

        if (!name) return fail(400, { message: 'Name is required' });

        try {
            await pb.collection('service_subcategory').create({ name});
            throw redirect(303, '/subcategory');
        } catch (error) {
            console.error('Error creating subcategory:', error);
            return fail(500, { message: 'Failed to create subcategory' });
        }
    },

    update: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');
        const name = formData.get('name');

        if (!id || !name) return fail(400, { message: 'All fields are required' });

        try {
            await pb.collection('service_subcategory').update(id, { name });
            throw redirect(303, '/subcategory');
        } catch (error) {
            console.error('Error updating subcategory:', error);
            return fail(500, { message: 'Failed to update subcategory' });
        }
    },

    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) return fail(400, { message: 'Invalid subcategory ID' });

        try {
            await pb.collection('service_subcategory').delete(id);
            throw redirect(303, '/subcategory');
        } catch (error) {
            console.error('Error deleting subcategory:', error);
            return fail(500, { message: 'Failed to delete subcategory' });
        }
    }
};
