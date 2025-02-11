import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
    try {
        const categories = await pb.collection('service_category').getFullList({ sort: '-created' });
        const subcategories = await pb.collection('service_subcategory').getFullList({ 
            expand: ['categoryId'],
            sort: '-created',
         });
        // console.log('subcategories:', subcategories);
        return { categories, subcategories };
    } catch (error) {
        console.error('Error loading categories:', error);
        return { categories: [] };
    }
}

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const categoryId = formData.get('categoryId');

        if (!name || !categoryId) return fail(400, { message: 'All fields is required' });

        try {
            await pb.collection('service_subcategory').create({ name, categoryId });
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
        const categoryId = formData.get('categoryId');

        if (!id || !name || !categoryId) return fail(400, { message: 'All fields are required' });

        try {
            await pb.collection('service_subcategory').update(id, { name, categoryId });
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
