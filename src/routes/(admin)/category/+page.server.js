import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
    try {
        const categories = await pb.collection('service_category').getFullList({ sort: '-created' });
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
            await pb.collection('service_category').create({ name});
            throw redirect(303, '/category');
        } catch (error) {
            console.error('Error creating category:', error);
            return fail(500, { message: 'Failed to create category' });
        }
    },

    update: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');
        const name = formData.get('name');

        if (!id || !name) return fail(400, { message: 'All fields are required' });

        try {
            await pb.collection('service_category').update(id, { name });
            throw redirect(303, '/category');
        } catch (error) {
            console.error('Error updating category:', error);
            return fail(500, { message: 'Failed to update category' });
        }
    },

    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) return fail(400, { message: 'Invalid category ID' });

        try {
            await pb.collection('service_category').delete(id);
            throw redirect(303, '/category');
        } catch (error) {
            console.error('Error deleting category:', error);
            return fail(500, { message: 'Failed to delete category' });
        }
    }
};
