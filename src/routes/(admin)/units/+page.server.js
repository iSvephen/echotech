import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
    try {
        const units = await pb.collection('units').getFullList({ sort: '-created' });
        console.log('units:', units);
        return { units };
    } catch (error) {
        console.error('Error loading units:', error);
        return { units: [] };
    }
}

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');

        if (!name) return fail(400, { message: 'Name is required' });

        try {
            await pb.collection('units').create({ name});
            throw redirect(303, '/units');
        } catch (error) {
            console.error('Error creating post:', error);
            return fail(500, { message: 'Failed to create post' });
        }
    },

    update: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');
        const name = formData.get('name');

        if (!id || !name) return fail(400, { message: 'All fields are required' });

        try {
            await pb.collection('units').update(id, { name });
            throw redirect(303, '/units');
        } catch (error) {
            console.error('Error updating post:', error);
            return fail(500, { message: 'Failed to update post' });
        }
    },

    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) return fail(400, { message: 'Invalid post ID' });

        try {
            await pb.collection('units').delete(id);
            throw redirect(303, '/units');
        } catch (error) {
            console.error('Error deleting post:', error);
            return fail(500, { message: 'Failed to delete post' });
        }
    }
};
