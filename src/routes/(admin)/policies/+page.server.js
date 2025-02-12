import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
    try {
        const policies = await pb.collection('policies').getFullList({ sort: '-created' });
        // console.log('policies:', policies);
        return { policies };
    } catch (error) {
        console.error('Error loading policies:', error);
        return { policies: [] };
    }
}

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');

        if (!name) return fail(400, { message: 'Name is required' });

        try {
            await pb.collection('policies').create({ name});
            throw redirect(303, '/policies');
        } catch (error) {
            console.error('Error creating unit:', error);
            return fail(500, { message: 'Failed to create unit' });
        }
    },

    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) return fail(400, { message: 'Invalid unit ID' });

        try {
            await pb.collection('policies').delete(id);
            throw redirect(303, '/policies');
        } catch (error) {
            console.error('Error deleting unit:', error);
            return fail(500, { message: 'Failed to delete unit' });
        }
    }
};
